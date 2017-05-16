import React from "react";
import PropTypes from 'prop-types';

let booksList = (books) => {
	return books.map((book) => {
		return (<p>{book.title}</p>)
	})
}
const BooksList = ({books, isFetching}) => {
	if (isFetching) {
		return (<p>Loading</p>)
	}
	return (
        <div>
            {booksList(books)}
        </div>
	);
};
BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    isFetching: PropTypes.bool
};
export default BooksList;