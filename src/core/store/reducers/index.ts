import { counterReducer } from './counterReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootState = ReturnType<typeof rootReducer>