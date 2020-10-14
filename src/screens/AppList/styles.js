import { StyleSheet } from "react-native"
import { DARK_MODE_BACKGROUND_COLOR } from "@styleConstants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DARK_MODE_BACKGROUND_COLOR
    },
    activityIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles