import React from "react";


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

	)
}