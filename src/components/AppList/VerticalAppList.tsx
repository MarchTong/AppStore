import React from "react"
import { SafeAreaView, FlatList, View } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import { VerticalAppItem } from "@components/AppListItem/index"
import styles from "./styles"

const VerticalAppList = (props: any) => {
    const { topFreeItems } = props

    return (
        <SafeAreaView>
            <Row>
                <Col size={100}>
                    {/* <FlatList
                        renderItem={app => {
                            const { item } = app
                            return (
                                <View/>
                            )
                        }}
                    /> */}
                </Col>
            </Row>
        </SafeAreaView>
    )
}

export default VerticalAppList