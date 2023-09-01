import {combineReducers, configureStore, createReducer} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import orderReducer from "./orderSlice"
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    cart : cartReducer,
    orders : orderReducer
})

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)

export { store, persistor };
