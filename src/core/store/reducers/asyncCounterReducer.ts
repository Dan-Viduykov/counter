import { ICounterState } from './../../types/index';

const defaultState: ICounterState = {
    count: 5
}

const asyncCounterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ASYNC_INCREMENTED_COUNT":
            setTimeout(() => {
                return {
                    ...state,
                    count: state.count + action.payload
                };
            }, 700);
        case "ASYNC_DECREMENTED_COUNT":
            setTimeout(() => {
                return {
                    ...state,
                    count: state.count - action.payload
                };
            }, 700);

        default: 
            return state
    }
}

export default asyncCounterReducer