import React, { useEffect } from "react"
import { SafeAreaView, Text, View, ActivityIndicator, ScrollView, FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { ReducerType } from "@types"
import { TAB_BAR_TEXT_COLOR_ACTIVE } from "@styleConstants"
import styles from "./styles"

const AppListTop = () => {
    const { iTunesReducer } = useSelector<ReducerType, ReducerType>(state => state)
    const { isTopFreeFetching, topFreeApplications, iTunesInfo } = iTunesReducer
    // console.log(topFreeApplications)

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
                </ScrollView>
            }
        </SafeAreaView>
    )
}

export default AppListTop