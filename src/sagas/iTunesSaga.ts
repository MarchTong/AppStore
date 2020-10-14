import type { iTunesFetchTopFreeApplicationsSuccessPayload, iTunesFetchTopGrossingApplicationsSuccessPayload } from "@types"
import {
    iTunesFetchTopFreeApplicationsSuccess,
    iTunesFetchTopFreeApplicationsFailure,
    iTunesFetchTopGrossingApplicationsSuccess,
    iTunesFetchTopGrossingApplicationsFailure
} from "@actions/iTunesAction"
import { TOP_FREE_APPLICATIONS, TOP_GROSSING_APPLICATIONS } from "@apiConstants"
import { put, select } from "redux-saga/effects"

const TAG = "iTunesSaga"

const iTunesFetchTopFreeApplicationsFlow = function* iTunesFetchTopFreeApplicationsFlow() {
    try {
        const { iTunesReducer: { search: { topFreeLimit } } } = yield select();
        const fetchResult = yield fetch(`${TOP_FREE_APPLICATIONS}${topFreeLimit}/json`).catch(err => { throw (err) })
        const { status } = fetchResult
        if (status === 200) {
            const result = yield fetchResult.json()
            const { feed: { entry, icon, rights, title, updated } } = result
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