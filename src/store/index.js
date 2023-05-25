import storage from "redux-persist/lib/storage"

import spootifyReducer from "./features/spootifySlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";


const persistRootConfig = {
    key: "root",
    storage,
    blacklist: [],
}

const rootReducer = combineReducers({
    spootify: spootifyReducer
})

const persistedReducer = persistReducer(persistRootConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
})

let persistor = persistStore(store)

export {persistor, store}
