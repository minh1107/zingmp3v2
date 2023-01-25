import { applyMiddleware, createStore } from "redux"
import persistStore from "redux-persist/es/persistStore"
import thunk from "redux-thunk"
import rootReducer from "./store/reducer/rootReducer"


const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    const persistor = persistStore(store)
    return {store, persistor}
}

export default reduxConfig