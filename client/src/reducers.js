import { combineReducers } from 'redux';
import {
    GET_BOOKS_REQUEST,
    GET_BOOKS_FAILURE,
    GET_BOOKS_SUCCESS
} from '../actions';

const initialState = {
    isFetching: false,
    books: [],
    error: null
};

function books(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKS_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                books: action.data
            };
        case GET_BOOKS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default combineReducers({ books });


