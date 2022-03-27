const ASYNC_INCREMENTED_COUNT = "ASYNC_INCREMENTED_COUNT";
const ASYNC_DECREMENTED_COUNT = "ASYNC_DECREMENTED_COUNT";

export const addCount = (number: number) => ({
    type: ASYNC_INCREMENTED_COUNT,
    payload: number
})

export const subtractCount = (number: number) => ({
    type: ASYNC_DECREMENTED_COUNT,
    payload: number
}) 