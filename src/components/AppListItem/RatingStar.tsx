import React from "react"
import { View, Text } from "react-native"
import IconSelector from "@components/Icon/IconSelector"
import { Row, Column as Col } from "react-native-responsive-grid"
import styles from "./styles"

const RatingStar = (props: any) => {
    const { ratingScore, ratingCount } = props


    function renderStarts(score: number) {
        let starLayout = []
        const starInt = Math.floor(score)
        const starHalf = score % 0.5

        // how many stars
        for (let i = 0; i < starInt; i++) {
            starLayout.push(
                <Col key={`star${i}`}>
                    <IconSelector
                        style={styles.ratingStar}
                        set="Ionicons"
                        name="ios-star"
                    />
                </Col>
            )
        }

        // how many half star
        if (starHalf > 0.25) {
            starLayout.push(
                <Col key={`star${starInt + starHalf}`}>
                    <IconSelector
                        style={styles.ratingStar}
                        set="Ionicons"
                        name="ios-star-half"
                    />
                </Col>
            )
        }
        return starLayout
    }

    function renderCountText(count: number) {
        return (
            <Col key={`${ratingScore}${count}`}>
                <Text style={styles.ratingCount}>{` (${count})`}</Text>
            </Col>
        )
    }

    return (
        <View>
            <Row vAlign="center">
                {renderStarts(ratingScore)}
                {renderCountText(ratingCount)}
            </Row>
        </View>
    )
}

export default RatingStar