import React from "react"
import { TouchableHighlight, Image, Text } from "react-native"
import styles from "./styles"

const VerticalAppItem = (props) => {
    const { topFreeItem } = props
    console.log(topFreeItem)

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