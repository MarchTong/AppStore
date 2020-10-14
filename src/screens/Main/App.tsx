import React from "react"
import { Provider } from "react-redux"
import { Router, Scene } from "react-native-router-flux"
import { store, persistor } from "@store"
import { PersistGate } from "redux-persist/integration/react"
import { Root } from "./index"

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Scene key="root">
                        <Scene key="root" component={Root} hideNavBar initial />
                    </Scene>
                </Router>
            </PersistGate>
        </Provider>
    )
}

export default App