import actionTypes from "@constants"
import type {
    iTunesFetchTopFreeApplicationsPayload,
    iTunesFetchTopFreeApplicationsSuccessPayload,
    iTunesFetchTopGrossingApplicationsPayload,
    iTunesFetchTopGrossingApplicationsSuccessPayload,
    iTunesFetchTopApplicationsPayload
} from "@types"

export function iTunesFetchTopFreeApplications(payload: iTunesFetchTopFreeApplicationsPayload) {
    return {
        type: actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS,
        payload
    }
}

export function iTunesFetchTopFreeApplicationsSuccess(payload: iTunesFetchTopFreeApplicationsSuccessPayload) {
    return {
        type: actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS_SUCCESS,
        payload
    }
}

export function iTunesFetchTopFreeApplicationsFailure() {
    return {
        type: actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS_FAILURE
    }
}

export function iTunesFetchTopGrossingApplications(payload: iTunesFetchTopGrossingApplicationsPayload) {
    return {
        type: actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS,
        payload
    }
}

export function iTunesFetchTopGrossingApplicationsSuccess(payload: iTunesFetchTopGrossingApplicationsSuccessPayload) {
    return {
        type: actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS_SUCCESS,
        payload
    }
}

export function iTunesFetchTopGrossingApplicationsFailure() {
    return {
        type: actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS_FAILURE
    }
}

export function iTunesFetchTopApplications(payload: iTunesFetchTopApplicationsPayload) {
    return {
        type: actionTypes.ITUNES_FETCH_TOP_APPLICATIONS,
        payload
    }
}