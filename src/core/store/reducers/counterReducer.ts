import { ICounterState } from './../../types/index';

const defaultState: ICounterState = {
    count: 5
}

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INCREMENTED_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            };
        case "DECREMENTED_COUNT":
            return {
                ...state,
                count: state.count - action.payload
            };

        default: 
            return state
    }
}

export default counterReducer