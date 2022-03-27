import { createStore, combineReducers } from "redux"
import counterReducer from "./reducers/counterReducer"
import asyncCounterReducer from "./reducers/asyncCounterReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
    counter: counterReducer,
    asyncCounter: asyncCounterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())