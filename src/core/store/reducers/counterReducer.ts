import { CountState, CounterActions, CounterActionTypes } from './../../types/counter';

const defaultState: CountState = {
    count: 5
}

const defaultAction: CounterActions = {
    type: CounterActionTypes.CHANGE_COUNT,
    payload: 0
}

export const counterReducer = (state = defaultState, action = defaultAction): CountState => {
    switch (action.type) {
        case CounterActionTypes.CHANGE_COUNT:
            return {
                count: state.count + action.payload
            }

        default:
            return state
    }
}