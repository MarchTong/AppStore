import React from "react"
import { SafeAreaView, FlatList, View, ActivityIndicator } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import { VerticalAppItem } from "@components/AppListItem/index"
import { TAB_BAR_TEXT_COLOR_ACTIVE } from "@styleConstants"
import styles from "./styles"

const VerticalAppList = (props: any) => {
    const { topFreeItems, isFetching } = props

    // loading icon on footer
    function renderFooterComponent() {
        return isFetching && (
            <View>
                <ActivityIndicator
                    style={styles.activityIndicator}
                    color={TAB_BAR_TEXT_COLOR_ACTIVE}
                    size={"large"} />
            </View>
        )
    }

    return (
        <SafeAreaView>
            <Row>
                <Col size={100}>
                    <FlatList
                        keyExtractor={item => item.id.attributes["im:id"]}
                        data={topFreeItems}
                        renderItem={({ item, index }) => {
                            return (
                                <VerticalAppItem item={item} index={index} />
                            )
                        }}
                        ListFooterComponent={renderFooterComponent}
                    />
                </Col>
            </Row>
        </SafeAreaView>
    )
}

export default VerticalAppList