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
        type: GET_BOOKS_SUCCESS,
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
        fetch(`api/search?q=${searchText}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok")
                }
                return response.json();
            })
            .then((json) => {                
                let books = json.GoodreadsResponse.search[0].results[0].work;
                console.log(books);
                dispatch(getBooksSuccess(books));
            })
            .catch((error) => {
                dispatch(getBooksFailure(error));
            });
    };
}

export const REQUEST_SELECTED_BOOK = "REQUEST_SELECTED_BOOK";
export const SELECTED_BOOK_SUCCESS = "SELECTED_BOOK_SUCCESS";
export const SELECTED_BOOK_FAILURE = "SELECTED_BOOK_FAILURE";
export const CLEAR_SELECTED_BOOK = "CLEAR_SELECTED_BOOK";

export function selectedBookSuccess(data) {
    return {
        type: SELECTED_BOOK_SUCCESS,
        data
    };
}

export function requestSelectedBook() {
    return {
        type: REQUEST_SELECTED_BOOK
    };
}
export function selectedBookFailure(error) {
    return {
        type: SELECTED_BOOK_FAILURE,
        error
    };
}
export function clearSelectedBook() {
    return {
        type: CLEAR_SELECTED_BOOK
    };
}

export function getSelectedBook(id) {
    return (dispatch) => {
        //dispatch request to state
        dispatch(requestSelectedBook());
        //call the goodreads api for searching on text
        fetch(`api/books/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json();
            })
            .then((json) => {                
                //let reviews = json;
                console.log(JSON.stringify(json, null, 2));
                //clean up json response
                
                dispatch(selectedBookSuccess(json));
            })
            .catch((error) => {
                dispatch(selectedBookFailure(error));
            });
    };
}
