import { combineReducers } from "redux";
import messageReducer from "./message/message.reducer";
import counterReducer from "./counter/counter.reducer";
import { counterKey } from "./counter/counter.reducer";
let rootReducer = combineReducers({
  messageReducer,
  [counterKey]: counterReducer,
});
export { rootReducer };
// named export
