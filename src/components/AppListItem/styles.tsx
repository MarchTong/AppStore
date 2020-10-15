import {
    HORIZONTAL_ITEM_FONT_SIZE,
    HORIZONTAL_ITEM_FONT_COLOR,
    VERTICAL_ITEM_INDEX_FONT_COLOR,
    VERTICAL_ITEM_INDEX_FONT_SIZE,
    TAB_BAR_TEXT_COLOR_ACTIVE,
    VERTICAL_ITEM_FONT_SIZE,
    VERTICAL_ITEM_FONT_COLOR,
    RATING_STAR_FONT_SIZE,
    RATING_STAR_FONT_COLOR,
    RATING_COUNT_FONT_SIZE,
    RATING_COUNT_FONT_COLOR,
    ARROW_UP_BUTTON_FONT_SIZE,
    ARROW_UP_BUTTON_FONT_COLOR
} from "@styleConstants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    horizontalItemCol: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
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
        borderRadius: 10,
    },
    verticalItemRound: {
        borderRadius: 10
    },
    verticalItemCircle: {
        borderRadius: 50
    },
    verticalItemCol: {
        padding: 10
    },
    verticalItemIndex: {
        color: VERTICAL_ITEM_INDEX_FONT_COLOR,
        fontSize: VERTICAL_ITEM_INDEX_FONT_SIZE,
        textAlign: "center"
    },
    verticalItemRow: {
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomColor: TAB_BAR_TEXT_COLOR_ACTIVE,
        borderBottomWidth: 0.2,
    },
    verticalItemHighlight: {
        paddingRight: 10,
        paddingLeft: 10
    },
    verticalItemText: {
        fontSize: VERTICAL_ITEM_FONT_SIZE,
        color: VERTICAL_ITEM_FONT_COLOR,
    },
    verticalItemTextRow: {
        paddingTop: 2,
        paddingBottom: 2
    },
    verticalItemTextCol: {
        paddingRight: 20,
        paddingLeft: 20
    },
    ratingStar: {
        color: RATING_STAR_FONT_COLOR,
        fontSize: RATING_STAR_FONT_SIZE
    },
    ratingCount: {
        color: RATING_COUNT_FONT_COLOR,
        fontSize: RATING_COUNT_FONT_SIZE
    },
    arrowUpButton: {
        fontSize: ARROW_UP_BUTTON_FONT_SIZE,
        color: ARROW_UP_BUTTON_FONT_COLOR
    }
})

export default styles