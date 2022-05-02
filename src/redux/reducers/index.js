import { combineReducers } from "redux";
import userStatus from "./auth";
import appIntro from "./appIntro";


const rootReducer = combineReducers(
    {
        userStatus,
        appIntro,
        
    }
)
export default rootReducer