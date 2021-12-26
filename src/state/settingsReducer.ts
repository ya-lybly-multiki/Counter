
const initialState = {
    error: false,
    settingsMode: true,
}
export type SettingsStateType = typeof initialState

type ActionsType = ReturnType<typeof setError> | ReturnType<typeof setSettingsMode>



export const settingsReducer = (state: SettingsStateType = initialState, action: ActionsType): SettingsStateType => {
    switch (action.type) {
        case "SET-ERROR":
        case "SET-SETTINGS-MODE":
            return {...state, ...action.payload}

        default:
            return state
    }
}

export const setError = (error: boolean) => {
    return {
        type: 'SET-ERROR',
        payload: {error}
    } as const
}
export const setSettingsMode = (settingsMode: boolean) => {
    return {
        type: 'SET-SETTINGS-MODE',
        payload: {settingsMode}
    } as const
}
