export type ActionType = {
    type: string,
    payload: any
}

export type ReducerType = {
    iTunesReducer: iTunesState
}

export type Route = {
    key: string,
    title: string,
    icon: string,
}

export type iTunesState = {
    isTopFreeFetching: boolean,
    isTopGrossingFetching: boolean,
    search: object,
    topFreeApplications: Array<object>,
    iTunesInfo: object
}

export type iTunesFetchTopFreeApplicationsPayload = {
    limit: number
}

export type iTunesFetchTopFreeApplicationsSuccessPayload = {
    entry: Array<Object>,
    appleIcon: string,
    appleRights: string,
    iTunesTitle: string,
    lastUpdated: string,
}

export type iTunesFetchTopGrossingApplicationsPayload = {
    limit: number
}

export type iTunesFetchTopGrossingApplicationsSuccessPayload = {
    entry: Array<Object>,
    appleIcon: string,
    appleRights: string,
    iTunesTitle: string,
    lastUpdated: string,
}

export type iTunesFetchTopApplicationsPayload = {
    topFreeLimit: number,
    topGrossingLimit: number
}