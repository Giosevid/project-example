import {LOGIN} from "./actions"

const initialState = {
    email: "",
    password: ""
}

export default loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, ...action.dataLogin} ;
        default: return state;
    }
}