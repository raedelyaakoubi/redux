import {  todoReducer } from "./Reducers/Reducers";

import { createStore } from "redux";

export const store=createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())