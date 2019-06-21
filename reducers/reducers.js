import loginReducer from "../components/Home/reducer.js";
import { combineReducers } from "redux";

const appReducer = combineReducers ({
    loginReducer
})

export default RootReducer = (state, action) => {
    let appState = state
    return appReducer(appState, action) 
}