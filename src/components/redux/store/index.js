import { createStore , applyMiddleware} from "redux";
import { rootReducer } from "../reducers";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
const persistConfig ={
    key: "main-root",
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const initialState ={}
const store = createStore(persistedReducer, applyMiddleware())
const persistor = persistStore(store)
export {persistor};


export default store;