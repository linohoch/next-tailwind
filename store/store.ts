import {combineReducers} from "redux";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import productReducer  from './product'

const rootReducer = combineReducers({
    product:productReducer
})
export type RootState = ReturnType<typeof rootReducer>
let initialRootState: RootState;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const store = configureStore({
    reducer:rootReducer,
    devTools:true,
    middleware:[],
})
initialRootState = store.getState();
export default store