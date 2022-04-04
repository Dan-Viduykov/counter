/* eslint-disable @typescript-eslint/default-param-last */
import { CountState, CounterActionTypes, CounterActions } from './../../types/counter';

const defaultState: CountState = {
    count: 5
}

export const counterReducer = (state = defaultState, action: CounterActions): CountState => {
    switch (action.type) {
        case CounterActionTypes.CHANGE_COUNT:
            return {
                count: state.count + action.payload
            }

        default:
            return state
    }
}