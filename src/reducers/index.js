import { combineReducers } from "redux";
import codeforcesReducer from "./codeforcesReducer.js";
import commonReducer from "./commonReducer.js";

const rootReducer = combineReducers({
    codeforces: codeforcesReducer,
    fields: commonReducer,
});

export default rootReducer;
