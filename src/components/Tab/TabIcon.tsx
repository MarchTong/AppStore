import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import IconSelector from "@components/Icon/IconSelector"
import styles from "./styles"

const TabIcon = (props: any) => {
    const { style, text, textStyle, iconSet, iconName, iconStyle, onPress } = props
    let containerStyles = [styles.container]
    if (style !== null) {
        containerStyles.push(style)
    }

    let textStyles = [styles.text]
    if (textStyle !== null) {
        textStyles.push(textStyle)
    }

    let iconStyles = [styles.icon]
    if (iconStyle !== null) {
        iconStyles.push(iconStyle)
    }

    let icon = null
    if (iconSet !== null && iconName !== null) {
        icon = <IconSelector set={iconSet} name={iconName} style={iconStyles} />
    }

    return (
        <TouchableOpacity onPress={onPress} style={containerStyles}>
            <View style={styles.wrapper}>
                {icon}
                <Text style={textStyles}>{`  ${text}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TabIcon