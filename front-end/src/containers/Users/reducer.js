import {
    USERS_REQUEST,
    USERS_RECEIVE,
    USERS_FAILURE,
} from './types';

let initialState = {
    query: "",
    found: null,
    isRequesting: false,
    isError: false,
    errorMessage: ''
}

export default function signUp(state = initialState, action) {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                query: action.payload,
                isRequesting: true,
                isError: false,
                errorMessage: ''
            };
        case USERS_RECEIVE:
            return {
                ...state,
                found: action.payload,
                isRequesting: false
            };
        case USERS_FAILURE:
            return {
                ...state,
                isRequesting: false,
                isError: true,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}