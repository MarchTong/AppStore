import { createStore, compose, applyMiddleware } from "redux"
import AsyncStorage from "@react-native-community/async-storage"
import { persistStore, persistReducer } from "redux-persist"
import hardSet from "redux-persist/lib/stateReconciler/hardSet"
import createSagaMiddleware from "redux-saga"
import reducers from "@reducers"
import rootSaga from "@sagas"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const persistConfig = {
    key: "AppStore",
    storage: AsyncStorage,
    stateReconciler: hardSet,
    debug: true
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)))
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export { store, persistor }