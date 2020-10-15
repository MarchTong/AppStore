import React from "react"
import { TouchableOpacity, Image, Text } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import { RatingStar } from "./index"
import styles from "./styles"

const VerticalAppItem = (props: any) => {
    const { item, index } = props
    const name = item["im:name"]["label"]
    const category = item["category"]["attributes"]["label"]
    const image = item["im:image"][1]["label"]
    const imageSize = parseInt(item["im:image"][1]["attributes"]["height"])
    const imageStyle = index % 2 === 0 ? styles.verticalItemRound : styles.verticalItemCircle
    const { detail: { averageUserRating, userRatingCount } } = item

    return (
        <TouchableOpacity style={styles.verticalItemHighlight}>
            <Row style={styles.verticalItemRow}>
                <Col size={20} vAlign="center" style={styles.verticalItemCol}>
                    <Text style={styles.verticalItemIndex}>{index + 1}</Text>
                </Col>
                <Col size={20} vAlign="center" hAlign="center" style={styles.verticalItemCol}>
                    <Image style={[imageStyle, { height: imageSize, width: imageSize }]} source={{ uri: image }} />
                </Col>
                <Col size={55} vAlign="center" style={styles.verticalItemTextCol}>
                    <Row vAlign="center" style={styles.verticalItemTextRow}>
                        <Text style={styles.verticalItemText}>{name}</Text>
                    </Row>
                    <Row vAlign="center" style={styles.verticalItemTextRow}>
                        <Text style={styles.verticalItemText}>{category}</Text>
                    </Row>
                    <Row vAlign="center" style={styles.verticalItemTextRow}>
                        <RatingStar ratingScore={averageUserRating} ratingCount={userRatingCount} />
                    </Row>
                </Col>
            </Row>
        </TouchableOpacity>
    )
}

export default VerticalAppItem