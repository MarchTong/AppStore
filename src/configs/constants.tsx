import mirrorCreator from "mirror-creator"

export default mirrorCreator(
    [
        "ITUNES_FETCH_TOP_FREE_APPLICATIONS",
        "ITUNES_FETCH_TOP_FREE_APPLICATIONS_SUCCESS",
        "ITUNES_FETCH_TOP_FREE_APPLICATIONS_FAILURE",
        "ITUNES_FETCH_TOP_GROSSING_APPLICATIONS",
        "ITUNES_FETCH_TOP_GROSSING_APPLICATIONS_SUCCESS",
        "ITUNES_FETCH_TOP_GROSSING_APPLICATIONS_FAILURE",
        "ITUNES_FETCH_TOP_APPLICATIONS"
    ],
    { prefix: "AppStore" }
)