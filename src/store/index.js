import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"

import product from "./reducers/product"

const reducers = combineReducers({
    product,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;

