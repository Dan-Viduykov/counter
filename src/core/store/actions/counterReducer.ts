const INCREMENTED_COUNT = "INCREMENTED_COUNT";
const DECREMENTED_COUNT = "DECREMENTED_COUNT";

export const addCount = (number: number) => ({
    type: INCREMENTED_COUNT,
    payload: number
})

export const subtractCount = (number: number) => ({
    type: DECREMENTED_COUNT,
    payload: number
}) 