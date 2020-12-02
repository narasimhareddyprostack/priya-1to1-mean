import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
let store = createStore(counterReducer, composeWithDevTools);
