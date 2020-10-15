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
    isInitFetching: boolean,
    isTopFreeFetching: boolean,
    isTopGrossingFetching: boolean,
    search: iTunesStateSearchType,
    topFreeApplications: TopFreeApplicationsType,
    topGrossingApplications: TopGrossingApplicationsType,
    iTunesInfo: typeiTunesInfoType,
    isTopGrossingFetchFailure: boolean,
    isTopFreeFetchFailure: boolean
}

export type iTunesFetchTopFreeApplicationsPayload = {
    limit: number,
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

export type TopFreeApplicationsType = {
    items: Array<any>;
    iTunesInfo: typeiTunesInfoType
}

export type TopGrossingApplicationsType = {
    items: Array<any>;
    iTunesInfo: typeiTunesInfoType
}

export type iTunesStateSearchType = {
    currentPage: number,
    topFreeLimit: number,
    topGrossingLimit: number,
}

export type typeiTunesInfoType = {
    appleIcon: string;
    appleRights: string;
    iTunesTitle: string;
    lastUpdated: string;
}