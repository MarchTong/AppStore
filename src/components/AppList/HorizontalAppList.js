import React from "react"
import { Text, FlatList, SafeAreaView } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import { HorizontalAppItem } from "@components/AppListItem/index"
import styles from "./styles"

const RECOMMENDATION_TITLE = "Recommendation"

const HorizontalAppList = (props) => {
    const { topGrossingItems } = props

    function extractTopItems(itemArr, limit) {
        const arr = [...itemArr]
        if (arr) {
            return arr.slice(0, limit)
        }
        return arr
    }

    return (
        <SafeAreaView>
            <Row style={styles.textTitleRow}>
                <Text style={styles.textTitle}>{RECOMMENDATION_TITLE}</Text>
            </Row>
            <Row>
                <Col size={100}>
                    <FlatList
                        horizontal={true}
                        keyExtractor={item => item.id.attributes["im:id"]}
                        data={extractTopItems(topGrossingItems, 10)}
                        renderItem={app => {
                            const { item } = app
                            return (
                                <HorizontalAppItem item={item} />
                            )
                        }}
                    />
                </Col>
            </Row>
        </SafeAreaView>
    )
}

export default HorizontalAppList