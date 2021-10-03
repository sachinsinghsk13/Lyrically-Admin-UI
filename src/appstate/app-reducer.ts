import { combineReducers } from "redux";
import authReducer from "./reducers/auth-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

const appReducer = combineReducers({
    authentication: authReducer,
    sidebar: sidebarReducer
});

export default appReducer;