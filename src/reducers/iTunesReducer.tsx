import type { ActionType, iTunesState } from "@types"
import { iTunesInitialState } from "./InitialStates"
import actionTypes from "@constants"

const TAG = "iTunesReducer"
const initialState = iTunesInitialState

export default function iTunesReducer(state: iTunesState = initialState, action: ActionType): iTunesState {
    let nextState = { ...state }
    const { type, payload } = action

    switch (type) {
        /* Fetch top free applications */
        // fetch top free application by limit or fetch more top free applications
        case actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS:
            if (payload) {
                const { limit } = payload
                const { search: { currentPage } } = nextState
                nextState = { ...nextState, isTopFreeFetching: true, search: { ...nextState.search, topFreeLimit: limit, currentPage: currentPage + 1 } }
            }
            return nextState
        // storing data from iTunes 
        case actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS_SUCCESS:
            if (payload) {
                const { entry, appleIcon, appleRights, iTunesTitle, lastUpdated } = payload
                nextState = {
                    ...nextState,
                    isInitFetching: false,
                    isTopFreeFetching: false,
                    isTopFreeFetchFailure: false,
                    topFreeApplications: {
                        items: entry,
                        iTunesInfo: { appleIcon, appleRights, iTunesTitle, lastUpdated }
                    }
                }
            }
            return nextState
        // disable loading spinner on screen
        case actionTypes.ITUNES_FETCH_TOP_FREE_APPLICATIONS_FAILURE:
            nextState = { ...nextState, isTopFreeFetching: false, isTopFreeFetchFailure: true }
            return nextState
        /* Fetch top free applications */

        /* Fetch top grossing applications */
        // fetch top grossing applications by limit
        case actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS:
            if (payload) {
                const { limit } = payload
                nextState = { ...nextState, isTopGrossingFetching: true, search: { ...nextState.search, topGrossingLimit: limit } }
            }
            return nextState
        // storing data from iTunes
        case actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS_SUCCESS:
            if (payload) {
                const { entry, appleIcon, appleRights, iTunesTitle, lastUpdated } = payload
                nextState = {
                    ...nextState,
                    isInitFetching: false,
                    isTopGrossingFetching: false,
                    isTopGrossingFetchFailure: false,
                    topGrossingApplications: {
                        items: entry,
                        iTunesInfo: { appleIcon, appleRights, iTunesTitle, lastUpdated }
                    }
                }
            }
            return nextState
        // disable loading spinner on screen
        case actionTypes.ITUNES_FETCH_TOP_GROSSING_APPLICATIONS_FAILURE:
            nextState = { ...nextState, isTopGrossingFetching: false, isTopGrossingFetchFailure: true }
            return nextState
        /* Fetch top grossing applications */

        /* Fetch top applications */
        // init fetch at Root page
        case actionTypes.ITUNES_FETCH_TOP_APPLICATIONS:
            if (payload) {
                const { topFreeLimit, topGrossingLimit } = payload
                nextState = { ...nextState, isInitFetching: true, search: { ...nextState.search, topFreeLimit, topGrossingLimit, currentPage: 1 } }
            }
            return nextState
        /* Fetch top applications */
        default:
            return nextState
    }
}