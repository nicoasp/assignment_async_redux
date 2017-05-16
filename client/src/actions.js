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
        fetch(`api/search?q=${searchText}`)
            .then((response) => {
                console.log("response from server received");
                console.log("response", response);
                if (!response.ok) {
                    throw new Error("Response not ok")
                }
                return response.json();
            })
            .then((json) => {
                dispatch(getBooksSuccess(json));
            })
            .catch((error) => {
                dispatch(getBooksFailure(error));
            });
    };
}