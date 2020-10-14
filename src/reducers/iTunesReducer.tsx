import type { ActionType, iTunesState, TopGrossingApplicationsType, TopFreeApplicationsType } from "@types"
import { iTunesInitialState } from "./InitialStates"
import actionTypes from "@constants"

const TAG = "iTunesReducer"
const initialState = iTunesInitialState

export default function iTunesReducer(state: iTunesState = initialState, action: ActionType): iTunesState {
    let nextState = { ...state }
    const { type, payload } = action

    switch (type) {
        /* Fetch top free applications */
        case actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS:
            if (payload) {
                const { limit } = payload
                nextState = { ...nextState, isTopFreeFetching: true, search: { ...nextState.search, topFreeLimit: limit } }
            }
            return nextState
        case actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS_SUCCESS:
            if (payload) {
                const { entry, appleIcon, appleRights, iTunesTitle, lastUpdated } = payload
                nextState = {
                    ...nextState,
                    isTopFreeFetching: false,
                    topFreeApplications: {
                        items: entry,
                        iTunesInfo: { appleIcon, appleRights, iTunesTitle, lastUpdated }
                    }
                }
            }
            return nextState
        case actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS_FAILURE:
            nextState = { ...nextState, isTopFreeFetching: false }
            return nextState
        /* Fetch top free applications */

        /* Fetch top grossing applications */
        case actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS:
            if (payload) {
                const { limit } = payload
                nextState = { ...nextState, isTopGrossingFetching: true, search: { ...nextState.search, topGrossingLimit: limit } }
            }
            return nextState
        case actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS_SUCCESS:
            if (payload) {
                const { entry, appleIcon, appleRights, iTunesTitle, lastUpdated } = payload
                nextState = {
                    ...nextState,
                    isTopGrossingFetching: false,
                    topGrossingApplications: {
                        items: entry,
                        iTunesInfo: { appleIcon, appleRights, iTunesTitle, lastUpdated }
                    }
                }
            }
            return nextState
        case actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS_FAILURE:
            nextState = { ...nextState, isTopGrossingFetching: false }
            return nextState
        /* Fetch top grossing applications */

        /* Fetch top applications */
        case actionTypes.ITUNES_FETCH_TOP_APPLICATIONS:
            if (payload) {
                const { topFreeLimit, topGrossingLimit } = payload
                nextState = { ...nextState, isTopFreeFetching: true, isTopGrossingFetching: true, search: { ...nextState.search, topFreeLimit, topGrossingLimit } }
            }
            return nextState
        /* Fetch top applications */
        default:
            return nextState
    }
}