import { AnyAction } from "redux";

const initialState =  {
    isOpen: false,
    sidebarWidth: '78px'
}

export default function sidebarReducer(state: any = initialState, action: AnyAction) {
    switch(action.type) {
        case "sidebar/toggle":
            return {
                isOpen: !state.isOpen,
                sidebarWidth: !state.isOpen ? '260px' : '78px'
            }
        default:
            return state;
    }
}