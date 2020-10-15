import type { iTunesState } from "@types"

export const iTunesInitialState: iTunesState = {
    isInitFetching: false,
    isTopFreeFetching: false,
    isTopGrossingFetching: false,
    isTopFreeFetchFailure: false,
    isTopGrossingFetchFailure: false,
    search: {
        currentPage: 1,
        topFreeLimit: 0,
        topGrossingLimit: 0
    },
    topFreeApplications: {
        items: [],
        iTunesInfo: {
            appleIcon: "",
            appleRights: "",
            iTunesTitle: "",
            lastUpdated: ""
        }
    },
    topGrossingApplications: {
        items: [],
        iTunesInfo: {
            appleIcon: "",
            appleRights: "",
            iTunesTitle: "",
            lastUpdated: ""
        }
    },
    iTunesInfo: {
        appleIcon: "",
        appleRights: "",
        iTunesTitle: "",
        lastUpdated: ""
    },
}