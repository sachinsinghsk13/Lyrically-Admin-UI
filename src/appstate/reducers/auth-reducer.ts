import { Action, AnyAction } from "redux";

const initialState =  {
    isAuthenticated: false,
    user: null
}

export default function authReducer(state: any = initialState, action: AnyAction) {
    switch(action.type) {
        case "authentication/loggedIn":
            return  {
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "authentication/loggedOut":
            return initialState;
        default:
            return state;
    }
}