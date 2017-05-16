import {connect} from "react-redux";
import {getBooks} from "../actions";
import BooksList from "../components/BooksList";
import React from "react";


class BooksListContainer extends React.Component {
	componentDidMount() {
		this.props.getBooks();
	}

	render() {
		return (
			<BooksList books={books} isFetching={isFetching} />
		)
	}
}


const mapStateToProps = (state) => {
	return {
		books: state.books.books,
		isFetching: state.books.isFetching
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		getBooks: () => {
			dispach(getBooks("Ender"));
		}
	}
}

export connect(mapStateToProps, mapDispatchtoProps)(BooksListContainer);