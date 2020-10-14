import { StyleSheet } from "react-native"
import { HORIZONTAL_APP_LIST_TITLE_FONT_SIZE, HORIZONTAL_ITEM_FONT_COLOR } from "@styleConstants"

const styles = StyleSheet.create({
    textTitleRow: {
        paddingLeft: 10,
        marginTop: 10
    },
    textTitle: {
        fontSize: HORIZONTAL_APP_LIST_TITLE_FONT_SIZE,
        color: HORIZONTAL_ITEM_FONT_COLOR
    }
})

export default styles