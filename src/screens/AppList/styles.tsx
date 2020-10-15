import { StyleSheet } from "react-native"
import {
    DARK_MODE_BACKGROUND_COLOR,
    TAB_BAR_TEXT_COLOR_ACTIVE,
    FETCH_FAILURE_FONT_SIZE,
    FETCH_FAILURE_FONT_COLOR
} from "@styleConstants"

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
        paddingTop: 5,
        borderTopColor: TAB_BAR_TEXT_COLOR_ACTIVE,
        borderTopWidth: 0.5
    },
    backToTopButtonContainer: {
        position: "absolute",
        bottom: 10,
        right: 15
    },
    fetchFailureContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10
    },
    fetchFailureText: {
        fontSize: FETCH_FAILURE_FONT_SIZE,
        color: FETCH_FAILURE_FONT_COLOR,
        paddingTop: 40,
        paddingBottom: 10
    },
    scrollViewContainerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between'
    }
})

export default styles