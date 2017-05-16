import React from "react";
import PropTypes from 'prop-types';
import BookCard from "./BookCard";

let booksList = (books, getSelectedBook) => {
	return books.map((book) => {
		return (<BookCard book={book} getSelectedBook={getSelectedBook}/>)
	})
}
const BooksList = ({books, isFetching, getSelectedBook}) => {
	if (isFetching) {
		return (<p>Loading</p>)
	}
	return (
        <div className="card-group">
            {booksList(books, getSelectedBook)}
        </div>
	);
};
BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    isFetching: PropTypes.bool
};
export default BooksList;