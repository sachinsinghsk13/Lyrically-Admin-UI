import { combineReducers } from "redux";
import authReducer from "./reducers/auth-reducer";

const appReducer = combineReducers({
    authentication: authReducer
});

export default appReducer;