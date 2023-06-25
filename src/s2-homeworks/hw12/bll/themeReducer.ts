
type ActionType = {
    type: 'SET_THEME_ID',
    id: number
}
export type themeStateType = {themeId: number}

const initState: themeStateType = {
    themeId: 1,
}
export const themeReducer = (state = initState, action: ActionType): themeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id } as const) // fix any
