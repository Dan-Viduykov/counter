export interface CountState {
    count: number
}

export enum CounterActionTypes {
    CHANGE_COUNT = 'CHANGE_COUNT'
}

interface ChangeCountAction {
    type: CounterActionTypes.CHANGE_COUNT;
    payload: number;
}

export type CounterActions = ChangeCountAction
