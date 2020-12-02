import { combineReducers } from "redux";
import { counterReducer } from "./Counter/counter.reducer";
import { counterKey } from "./Counter/counter.reducer";
let rootReducer = combineReducers({ [counterKey]: counterReducer });
export { rootReducer };
