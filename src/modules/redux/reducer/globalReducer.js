import ActionType from "./globalActionType"

const user = JSON.parse(localStorage.getItem('user_data'));
const token = JSON.parse(localStorage.getItem('access_token'));
const globalState = user ? { isLogin: true, user } : { isLogin: false }

// reducer
const rootReducer = (state = globalState, action) => {
    if (action.type === ActionType.LOGIN) {
        return {
            ...state,
            isLogin: true,
            access_token: token

        }
    }
    if (action.type === ActionType.LOGOUT) {
        return {
            ...state,
            isLogin: false,
            access_token: ''
        }
    }
    return state
}

export default rootReducer;