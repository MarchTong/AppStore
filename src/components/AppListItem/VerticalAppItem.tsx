import React from "react"
import { TouchableHighlight, Image, Text } from "react-native"
import { Row, Column as Col } from "react-native-responsive-grid"
import styles from "./styles"

const VerticalAppItem = (props: any) => {
    const { topFreeItem } = props

    return (
        <TouchableHighlight>
            <Row>
                <Col>
                    <Text>asdasd</Text>
                </Col>
            </Row>
        </TouchableHighlight>
    )
}

export default VerticalAppItem