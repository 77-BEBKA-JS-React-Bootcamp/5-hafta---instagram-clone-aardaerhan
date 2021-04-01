import { combineReducers } from "redux";
import {commentsReducer} from "./commentsReducer";
import {photoReducer} from "./photoReducer"


const rootReducer = combineReducers({
    photoReducer,
    commentsReducer
})

export default rootReducer;