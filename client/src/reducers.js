import { combineReducers } from 'redux';
import {
    GET_BOOKS_REQUEST,
    GET_BOOKS_FAILURE,
    GET_BOOKS_SUCCESS
} from './actions';

const initialBooksState = {
    isFetching: false,
    books: [],
    error: null
};

function books(state = initialBooksState, action) {
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

import {
REQUEST_SELECTED_BOOK,
SELECTED_BOOK_SUCCESS,
SELECTED_BOOK_FAILURE,
CLEAR_SELECTED_BOOK
} from './actions';

const initialSelectedBookState = {
    isFetching: false,
    book: null,
    error: null
};

function selectedBook(state = initialSelectedBookState, action) {
    switch(action.type) {
        case REQUEST_SELECTED_BOOK:
            return {
                isFetching: true,
                error: null,
                book: null
            };
        case CLEAR_SELECTED_BOOK:
            return {
                ...state,
                book: null
            };
        case SELECTED_BOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                book: action.data
            };
        case SELECTED_BOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default combineReducers({ books, selectedBook });


