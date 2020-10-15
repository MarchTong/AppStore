import type { iTunesFetchTopFreeApplicationsSuccessPayload, iTunesFetchTopGrossingApplicationsSuccessPayload } from "@types"
import {
    iTunesFetchTopFreeApplicationsSuccess,
    iTunesFetchTopFreeApplicationsFailure,
    iTunesFetchTopGrossingApplicationsSuccess,
    iTunesFetchTopGrossingApplicationsFailure
} from "@actions/iTunesAction"
import { TOP_FREE_APPLICATIONS, TOP_GROSSING_APPLICATIONS, LOOK_UP_APPLICATION } from "@apiConstants"
import { put, select, all } from "redux-saga/effects"

const TAG = "iTunesSaga"

const iTunesFetchTopFreeApplicationsFlow = function* iTunesFetchTopFreeApplicationsFlow() {
    try {
        const { iTunesReducer: { search: { topFreeLimit } } } = yield select();
        const fetchResult = yield fetch(`${TOP_FREE_APPLICATIONS}${topFreeLimit}/json`).catch(err => { throw (err) })
        const { status } = fetchResult
        if (status === 200) {
            const result = yield fetchResult.json()
            const { feed: { entry, icon, rights, title, updated } } = result

            // look up app detail
            yield all(entry.map(async (item: any, index: number) => {
                const appId = item.id.attributes["im:id"]
                const result = await fetch(`${LOOK_UP_APPLICATION}${appId}`)
                const { status } = result
                if (status === 200) {
                    const json = await result.json()
                    const appDetail = json.results[0]
                    entry[index] = { ...item, detail: appDetail }
                } else {
                    throw (status)
                }
            }))

            // store data to reducer
            const payload: iTunesFetchTopFreeApplicationsSuccessPayload = {
                entry,
                appleIcon: icon.label,
                appleRights: rights.label,
                iTunesTitle: title.label,
                lastUpdated: updated.label
            }
            yield put(iTunesFetchTopFreeApplicationsSuccess(payload))
        } else {
            throw (status)
        }
    } catch (e) {
        console.log(e)
        yield put(iTunesFetchTopFreeApplicationsFailure())
    }
}

const iTunesFetchTopGrossingApplicationsFlow = function* iTunesFetchTopGrossingApplicationsFlow() {
    try {
        const { iTunesReducer: { search: { topGrossingLimit } } } = yield select();
        const fetchResult = yield fetch(`${TOP_GROSSING_APPLICATIONS}${topGrossingLimit}/json`)
        const { status } = fetchResult
        if (status) {
            // store data to reducer
            const result = yield fetchResult.json()
            const { feed: { entry, icon, rights, title, updated } } = result
            const payload: iTunesFetchTopGrossingApplicationsSuccessPayload = {
                entry,
                appleIcon: icon.label,
                appleRights: rights.label,
                iTunesTitle: title.label,
                lastUpdated: updated.label
            }
            yield put(iTunesFetchTopGrossingApplicationsSuccess(payload))
        } else {
            throw (status)
        }
    } catch (e) {
        console.log(e)
        yield put(iTunesFetchTopGrossingApplicationsFailure())
    }
}

export { iTunesFetchTopFreeApplicationsFlow, iTunesFetchTopGrossingApplicationsFlow }