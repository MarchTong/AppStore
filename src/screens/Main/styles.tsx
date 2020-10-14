import { StyleSheet } from "react-native"
import { DARK_MODE_BACKGROUND_COLOR, TAR_BAR_ICON_FONT_SIZE, TAB_BAR_TITLE_FONT_SIZE, TAB_BAR_TEXT_COLOR_ACTIVE } from "@styleConstants"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBar: {
        backgroundColor: DARK_MODE_BACKGROUND_COLOR,
        justifyContent: "center",
        borderTopColor: TAB_BAR_TEXT_COLOR_ACTIVE,
        borderTopWidth: 1
    },
    tabIcon: {
        backgroundColor: DARK_MODE_BACKGROUND_COLOR,
        justifyContent: "center",
        flex: 1
    },
    tabBarIcon: {
        fontSize: TAR_BAR_ICON_FONT_SIZE,
        fontWeight: "bold",
        justifyContent: "center"
    },
    tabBarTitle: {
        color: TAB_BAR_TEXT_COLOR_ACTIVE,
        fontSize: TAB_BAR_TITLE_FONT_SIZE,
        fontWeight: "bold",
        justifyContent: "center"
    },
    tabBarIndicator: {
        backgroundColor: "transparent"
    }
})

export default styles