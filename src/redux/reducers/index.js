import { combineReducers } from "redux";
import userStatus from "./auth";
import appIntro from "./appIntro";
import type from "../type";


const appReducer = combineReducers(
    {
        userStatus,
        appIntro,
        
    });
    const rootReducer = (state, action) => {
        if (action.type == type.CLEAR_REDUX_STATE) {
            state = undefined;
        }
        return appReducer(state, action)
    }
export default rootReducer