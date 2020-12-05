import { createStore } from "redux";
//debugging the applicaiton - composeWithDevTools from -
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./rootReducer";
let store = createStore(rootReducer, composeWithDevTools());
export { store };

//named export
