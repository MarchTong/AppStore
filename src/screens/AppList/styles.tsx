import { StyleSheet } from "react-native"
import { DARK_MODE_BACKGROUND_COLOR, TAB_BAR_TEXT_COLOR_ACTIVE } from "@styleConstants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DARK_MODE_BACKGROUND_COLOR
    },
    activityIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    appListingRow: {
        marginTop: 10,
        borderTopColor: TAB_BAR_TEXT_COLOR_ACTIVE,
        borderTopWidth: 0.5
    }
})

export default styles