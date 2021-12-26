const initialState = {
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
}
export type CounterStateType = typeof initialState

type ActionsType = ReturnType<typeof increaseValueAC>
    | ReturnType<typeof setCounterValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>


export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "INCREASE-VALUE":
            return {...state, counterValue: state.counterValue + 1}

        case "SET-COUNTER-VALUE":
        case "SET-START-VALUE":
        case "SET-MAX-VALUE":
            return {...state, ...action.payload}

        default:
            return state
    }
}

export const increaseValueAC = () => {
    return {
        type: 'INCREASE-VALUE'
    } as const
}
export const setCounterValueAC = (counterValue: number) => {
    return {
        type: 'SET-COUNTER-VALUE',
        payload: {counterValue},
    } as const
}
export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {startValue},
    } as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {maxValue},
    } as const
}

