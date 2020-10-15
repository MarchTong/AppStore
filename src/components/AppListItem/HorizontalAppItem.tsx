import React from "react"
import { TouchableOpacity, Image, Text } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import styles from "./styles"

const MAX_NAME_LENGTH = 7

const HorizontalAppItem = (props: any) => {
    const { item } = props
    const name = item["im:name"]["label"]
    const category = item["category"]["attributes"]["label"]
    const image = item["im:image"][1]["label"]
    const imageSize = parseInt(item["im:image"][1]["attributes"]["height"])

    // trim name
    function renderMaxApplicationName(name: string) {
        return name.length > MAX_NAME_LENGTH ? `${name.substr(0, MAX_NAME_LENGTH - 1)}...` : name
    }

    return (
        <TouchableOpacity>
            <Row>
                <Col vAlign="center" style={styles.horizontalItemCol}>
                    <Row vAlign="center" hAlign="center" style={styles.horizontalItemImageRow}>
                        <Image style={[styles.horizontalItemImage, { height: imageSize, width: imageSize }]} source={{ uri: image }} />
                    </Row>
                    <Row vAlign="center" style={styles.horizontalItemTextRow}>
                        <Text style={styles.horizontalItemText}>{renderMaxApplicationName(name)}</Text>
                    </Row>
                    <Row vAlign="center" style={styles.horizontalItemTextRow}>
                        <Text style={styles.horizontalItemText}>{category}</Text>
                    </Row>
                </Col>
            </Row>
        </TouchableOpacity>
    )
}

export default HorizontalAppItem