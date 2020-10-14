import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native"
import { useDispatch } from "react-redux"
import { iTunesFetchTopApplications } from "@actions/iTunesAction"
import { iTunesFetchTopApplicationsPayload, Route } from "@types"
import { TabView, TabBar, SceneMap, NavigationState, SceneRendererProps } from "react-native-tab-view"
import { TabIcon } from "@components/Tab/index"
import { AppListTop, AppListRecom } from "@screens/AppList/index"
import { TAB_BAR_TEXT_COLOR_ACTIVE, TAB_BAR_TEXT_COLOR_INACTIVE } from "@styleConstants"
import styles from "./styles"

type State = NavigationState<Route>

const Root = () => {
    const dispatch = useDispatch()
    const [tabIndex, setTabIndex] = useState(0)
    const [tabRoutes] = useState([
        { key: "appListTop", title: "Top 100", icon: "thumbs-up" },
        { key: "appListRecom", title: "Recommendation", icon: "trending-up" }
    ])
    const [tabState, setTabState] = useState<State>({ index: tabIndex, routes: tabRoutes })

    const handleIndexChange = (index: number) => {
        setTabIndex(index)
        setTabState({ ...tabState, index })
    }

    const renderLabel = ({ route, color }: { route: Route; color: string }) => {
        const { title, icon } = route
        return <TabIcon
            text={title}
            iconSet="Ionicons"
            iconName={icon}
            style={styles.tabIcon}
            textStyle={[styles.tabBarTitle, { color }]}
            iconStyle={[styles.tabBarIcon, { color }]}
        />
    }

    const renderTabBar = (props: SceneRendererProps & { navigationState: State }) => {
        return (
            <TabBar
                {...props}
                indicatorStyle={styles.tabBarIndicator}
                renderLabel={renderLabel}
                style={styles.tabBar}
                activeColor={TAB_BAR_TEXT_COLOR_ACTIVE}
                inactiveColor={TAB_BAR_TEXT_COLOR_INACTIVE}
            />
        )
    }

    const renderScene = SceneMap({
        appListTop: AppListTop,
        appListRecom: AppListRecom
    })

    useEffect(() => {
        const payload: iTunesFetchTopApplicationsPayload = {
            topFreeLimit: 100,
            topGrossingLimit: 10
        }
        dispatch(iTunesFetchTopApplications(payload))
    }, [dispatch])

    return (
        <SafeAreaView style={styles.container}>
            <TabView
                navigationState={tabState}
                renderScene={renderScene}
                onIndexChange={handleIndexChange}
                renderTabBar={renderTabBar}
                tabBarPosition="bottom"
            />
        </SafeAreaView>
    )

}

export default Root