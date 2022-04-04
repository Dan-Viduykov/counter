import { Dispatch } from 'redux';
import { CounterActionTypes, CounterActions } from './../../types/counter';

export const changeCount = (num: number = 0) => {
    return (dispatch: Dispatch<CounterActions>) => {
        dispatch({
            type: CounterActionTypes.CHANGE_COUNT,
            payload: num
        })
    }
}