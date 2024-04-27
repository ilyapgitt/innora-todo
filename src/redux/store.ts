import { createStore } from "redux";
import todoReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoState } from "../types";

const store = createStore<TodoState, any, any, any>(todoReducer, composeWithDevTools())

export default store;