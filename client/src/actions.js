export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";




export function getBooksFailure(error) {
    return {
        type: GET_BOOKS_FAILURE,
        error
    };
}

export function getBooksSuccess(data) {
    return {
        type: GET_BOOKS_REQUEST,
        data
    };
}

export function getBooksRequest() {
    return {
        type: GET_BOOKS_REQUEST
    };
}


export function getBooks(searchText) {
    return (dispatch) => {
        //dispatch request to state
        dispatch(getBooksRequest());
        //call the goodreads api for searching on text
        
        
    };
}