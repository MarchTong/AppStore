import React from "react"
import { Text, FlatList, SafeAreaView } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import { HorizontalAppItem } from "@components/AppListItem/index"
import styles from "./styles"

const RECOMMENDATION_TITLE = "Recommendation"

const HorizontalAppList = (props: any) => {
    const { topGrossingItems, lastUpdated } = props

    // extracting top X items from itemArr
    function extractTopItems(itemArr: Array<any>, limit: number) {
        const arr = [...itemArr]
        if (arr) {
            return arr.slice(0, limit)
        }
        return arr
    }

    // display last updated data date time
    function dateFormat(date: string) {
        var d = new Date(date),
            month = `${(d.getMonth() + 1)}`,
            day = `${d.getDate()}`,
            year = d.getFullYear(),
            hours = `${d.getHours()}`,
            mins = `${d.getMinutes()}`;

        if (month.length < 2)
            month = `0${month}`;
        if (day.length < 2)
            day = `0${day}`;
        if (hours.length < 2)
            hours = `0${hours}`
        if (mins.length < 2)
            mins = `0${mins}`
        return `${[year, month, day,].join('-')} ${hours}:${mins}`;
    }

    return (
        <SafeAreaView>
            <Row vAlign="center" style={styles.textTitleRow}>
                <Col size={50}>
                    <Text style={styles.textTitle}>{RECOMMENDATION_TITLE}</Text>
                </Col>
                <Col rtl size={50}>
                    <Text style={styles.lastUpdateText}>{dateFormat(lastUpdated)}</Text>
                </Col>
            </Row>
            <Row>
                <Col size={100}>
                    <FlatList
                        horizontal={true}
                        keyExtractor={item => item.id.attributes["im:id"]}
                        data={extractTopItems(topGrossingItems, 10)}
                        renderItem={({ item }) => {
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