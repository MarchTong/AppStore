import React, { useEffect, useState } from "react"
import { SafeAreaView, Text, View, ActivityIndicator, ScrollView, FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { ReducerType } from "@types"
import { TAB_BAR_TEXT_COLOR_ACTIVE } from "@styleConstants"
import { HorizontalAppList, VerticalAppList } from "@components/AppList/index"
import { SearchBar } from "react-native-elements"
import { Row, Column as Col } from "react-native-responsive-grid"
import styles from "./styles"

const SEARCH_PLACE_HOLDER = "Search"

const AppListTop = () => {
    const { iTunesReducer } = useSelector<ReducerType, ReducerType>(state => state)
    const { isTopFreeFetching } = iTunesReducer
    const topGrossingItems = iTunesReducer.topGrossingApplications.items
    const topFreeItems = iTunesReducer.topFreeApplications.items
    const [searchValue, setSearchValue] = useState("")

    function onChangeSearchValue(value: string) {
        setSearchValue(value)
    }

    return (
        <SafeAreaView style={styles.container}>
            {isTopFreeFetching ?
                <View style={styles.activityIndicator}>
                    <ActivityIndicator
                        size={"large"}
                        color={TAB_BAR_TEXT_COLOR_ACTIVE}
                    />
                </View>
                :
                <ScrollView>
                    <Row>
                        <Col size={100}>
                            <SearchBar
                                placeholder={SEARCH_PLACE_HOLDER}
                                onChangeText={onChangeSearchValue}
                                value={searchValue}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <HorizontalAppList topGrossingItems={topGrossingItems} />
                    </Row>
                    <Row style={styles.appListingRow}>
                        <VerticalAppList topFreeItems={topFreeItems} />
                    </Row>
                </ScrollView>
            }
        </SafeAreaView>
    )
}

export default AppListTop