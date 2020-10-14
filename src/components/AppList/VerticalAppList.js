import React from "react"
import { SafeAreaView, FlatList } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import { VerticalAppItem } from "@components/AppListItem/index"
import styles from "./styles"

const VerticalAppList = (props) => {
    const { topFreeItems } = props

    return (
        <SafeAreaView>
            <Row>
                <Col size={100}>
                    <FlatList
                        renderItem={app => {
                            const { item } = app
                        }}
                    />
                </Col>
            </Row>
        </SafeAreaView>
    )
}

export default VerticalAppList