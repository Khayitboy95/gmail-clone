const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, user: action.payload}
        case LOGOUT:
            return {...state, user: null}
        default:
            return state;
    }
}

export const logout = () => ({
    type: LOGOUT
})

export const login = (payload) => ({
    type: LOGIN,
    payload
})

export default userReducer;