import React, { useState } from "react"
import { SafeAreaView, View, ActivityIndicator, ScrollView, RefreshControl, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { ReducerType, iTunesFetchTopFreeApplicationsPayload, iTunesFetchTopApplicationsPayload } from "@types"
import { TAB_BAR_TEXT_COLOR_ACTIVE } from "@styleConstants"
import { iTunesFetchTopFreeApplications, iTunesFetchTopApplications } from "@actions/iTunesAction"
import { HorizontalAppList, VerticalAppList } from "@components/AppList/index"
import { BackToTopButton } from "@components/AppListItem/index"
import { SearchBar } from "react-native-elements"
import { Row, Column as Col } from "react-native-responsive-grid"
import styles from "./styles"
import { IconSelector } from "src/components/Icon"

const SEARCH_PLACE_HOLDER = "Search"
const POOR_NETWORK_CONNECTION = "Poor network connection"
const PAGE_PER_RECORDS = 10

const AppListTop = () => {
    const dispatch = useDispatch()
    //getting data from reducer
    const { iTunesReducer } = useSelector<ReducerType, ReducerType>(state => state)
    const { isInitFetching, isTopFreeFetching, isTopFreeFetchFailure, isTopGrossingFetchFailure, search, topGrossingApplications, topFreeApplications } = iTunesReducer
    const topGrossingItems = topGrossingApplications.items
    const topFreeItems = topFreeApplications.items
    const { iTunesInfo: { lastUpdated } } = topGrossingApplications

    // searchBar value
    const [searchValue, setSearchValue] = useState("")
    // display data
    const [showTopGrossingItems, setShowTopGrossingItems] = useState<Array<any>>([])
    const [showTempTopFreeItems, setShowTempTopFreeItems] = useState<Array<any>>([])
    // scroll view ref
    const [contentScrollView, setContentScrollView] = useState<any>()

    // scrollview checking scroll to bottom or not, infinite scroll
    function onScroll(event: any) {
        const { nativeEvent: { layoutMeasurement, contentOffset, contentSize } } = event
        if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 200 && !isTopFreeFetching) {

            // fetch more data from iTunes API
            const { currentPage } = search
            const payload: iTunesFetchTopFreeApplicationsPayload = {
                limit: (currentPage + 1) * PAGE_PER_RECORDS
            }
            dispatch(iTunesFetchTopFreeApplications(payload))
        }
    }

    // filtering data by searchbar value
    function onChangeSearchValue(value: string) {
        setSearchValue(value)
        let tempTopGrossingItems: any[] = []
        let tempTopFreeItems: any[] = []

        if (search) {
            // filtering by searchbar value
            topGrossingItems.map(item => {
                console.log(item.title.label, value)
                if (item.title.label.toLowerCase().includes(value.toLowerCase())) {
                    tempTopGrossingItems.push(item)
                }
            })
            topFreeItems.map(item => {
                if (item.title.label.toLowerCase().includes(value.toLowerCase())) {
                    tempTopFreeItems.push(item)
                }
            })
            // display filtered data
            setShowTopGrossingItems([...tempTopGrossingItems])
            setShowTempTopFreeItems([...tempTopFreeItems])
        } else {
            // display all data
            setShowTopGrossingItems([...topGrossingItems])
            setShowTempTopFreeItems([...topFreeItems])
        }
    }

    // scroll back to top button
    function onPressTopButton() {
        contentScrollView.scrollTo(0, 0, true)
    }

    // scrollview pull to refresh data
    function onScrollViewRefresh() {
        const payload: iTunesFetchTopApplicationsPayload = {
            topFreeLimit: 10,
            topGrossingLimit: 10
        }
        dispatch(iTunesFetchTopApplications(payload))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Row>
                <Col size={100}>
                    <SearchBar
                        placeholder={SEARCH_PLACE_HOLDER}
                        onChangeText={onChangeSearchValue}
                        value={searchValue}
                    />
                </Col>
            </Row>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainerStyle}
                onScroll={onScroll}
                ref={ref => setContentScrollView(ref)}
                refreshControl={<RefreshControl refreshing={false} onRefresh={onScrollViewRefresh} />}>
                {
                    isTopFreeFetchFailure || isTopGrossingFetchFailure ?
                        <View style={styles.fetchFailureContainer}>
                            <ActivityIndicator
                                size={"large"}
                                color={TAB_BAR_TEXT_COLOR_ACTIVE}
                            />
                            <Text style={styles.fetchFailureText}>{POOR_NETWORK_CONNECTION}</Text>
                        </View> :
                        isInitFetching ?
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator
                                    size={"large"}
                                    color={TAB_BAR_TEXT_COLOR_ACTIVE}
                                />
                            </View> :
                            <View>
                                <Row>
                                    <HorizontalAppList
                                        lastUpdated={lastUpdated}
                                        topGrossingItems={showTopGrossingItems.length === 0 ? topGrossingItems : showTopGrossingItems} />
                                </Row>
                                <Row style={styles.appListingRow}>
                                    <VerticalAppList
                                        isFetching={isTopFreeFetching}
                                        topFreeItems={showTempTopFreeItems.length === 0 ? topFreeItems : showTempTopFreeItems} />
                                </Row>
                            </View>
                }
            </ScrollView>
            <BackToTopButton containerStyle={styles.backToTopButtonContainer} callBackButtonFunc={onPressTopButton} />
        </SafeAreaView>
    )
}

export default AppListTop