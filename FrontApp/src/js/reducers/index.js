import {combineReducers} from "redux"
import {profileReducer} from "./profileReducer"
import {postsReducer} from "./postsReducer"

export const reducers = combineReducers({
    postsReducer,
    profileReducer
})