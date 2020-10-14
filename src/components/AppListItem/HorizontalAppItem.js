import React from "react"
import { TouchableHighlight, Image, Text } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import styles from "./styles"

const MAX_NAME_LENGTH = 10

const HorizontalAppItem = (props) => {
    const { item } = props
    const name = item["im:name"]["label"]
    const category = item["category"]["attributes"]["label"]
    const image = item["im:image"][2]["label"]
    const imageSize = parseInt(item["im:image"][2]["attributes"]["height"])

    function renderMaxApplicationName(name) {
        return name.length > MAX_NAME_LENGTH ? `${name.substr(0, MAX_NAME_LENGTH - 1)}...` : name
    }

    return (
        <TouchableHighlight>
            <Row>
                <Col style={styles.horizontalItemCol}>
                    <Row style={styles.horizontalItemImageRow}>
                        <Image style={[styles.horizontalItemImage, { height: imageSize, width: imageSize }]} source={{ uri: image }} />
                    </Row>
                    <Row style={styles.horizontalItemTextRow}>
                        <Text style={styles.horizontalItemText}>{renderMaxApplicationName(name)}</Text>
                    </Row>
                    <Row style={styles.horizontalItemTextRow}>
                        <Text style={styles.horizontalItemText}>{category}</Text>
                    </Row>
                </Col>
            </Row>
        </TouchableHighlight>
    )
}

export default HorizontalAppItem