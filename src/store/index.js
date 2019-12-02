import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import product from "./reducers/product"
import home from "./reducers/home";

const reducers = combineReducers({
    product, home
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)))



export default store;

