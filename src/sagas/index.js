import { takeLatest, takeEvery, all } from "redux-saga/effects"
import { iTunesFetchTopFreeApplicationsFlow, iTunesFetchTopGrossingApplicationsFlow } from "./iTunesSaga"
import actionTypes from "@constants"

const rootSaga = function* rootSaga() {
    yield takeLatest(actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS, iTunesFetchTopFreeApplicationsFlow)
    yield takeLatest(actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS, iTunesFetchTopGrossingApplicationsFlow)
    yield all([
        takeLatest(actionTypes.ITUNES_FETCH_TOP_APPLICATIONS, iTunesFetchTopFreeApplicationsFlow),
        takeLatest(actionTypes.ITUNES_FETCH_TOP_APPLICATIONS, iTunesFetchTopGrossingApplicationsFlow)
    ])
}

export default rootSaga