import React from "react";
import PropTypes from 'prop-types';
import BookCard from "./BookCard";

let booksList = (books) => {
	return books.map((book) => {
		return (<BookCard book={book} />)
	})
}
const BooksList = ({books, isFetching}) => {
	if (isFetching) {
		return (<p>Loading</p>)
	}
	return (
        <div className="card-group">
            {booksList(books)}
        </div>
	);
};
BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    isFetching: PropTypes.bool
};
export default BooksList;