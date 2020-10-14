import { HORIZONTAL_ITEM_FONT_SIZE, HORIZONTAL_ITEM_FONT_COLOR } from "@styleConstants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    horizontalItemCol: {
        flex: 1,
        padding: 10
    },
    horizontalItemImageRow: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    horizontalItemTextRow: {
        paddingLeft: 10,
        paddingRight: 10
    },
    horizontalItemText: {
        fontSize: HORIZONTAL_ITEM_FONT_SIZE,
        color: HORIZONTAL_ITEM_FONT_COLOR
    },
    horizontalItemImage: {
        borderRadius: 10
    }
})

export default styles