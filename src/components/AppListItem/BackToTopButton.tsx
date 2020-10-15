import React from "react"
import { TouchableOpacity } from "react-native"
import IconSelector from "@components/Icon/IconSelector"
import styles from "./styles"

const BackToTopButton = (props: any) => {
    const { callBackButtonFunc, containerStyle } = props

    // call back function
    function onPressButton() {
        if (callBackButtonFunc) {
            callBackButtonFunc()
        }
    }

    return (
        <TouchableOpacity style={containerStyle} onPress={onPressButton}>
            <IconSelector
                style={styles.arrowUpButton}
                set="Ionicons"
                name="arrow-up-circle"
            />
        </TouchableOpacity>
    )
}

export default BackToTopButton