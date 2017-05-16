import {connect} from "react-redux";
import {getBooks} from "../actions";
import BooksList from "../components/BooksList";
import React from "react";


class BooksListContainer extends React.Component {
	componentDidMount() {
		this.props.getBooks();
	}

	render() {
	    const {books, isFetching } = this.props;
		return (
			<BooksList books={books} isFetching={isFetching} />
		);
	}
}


const mapStateToProps = (state) => {
	return {
		books: state.books.books,
		isFetching: state.books.isFetching
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		getBooks: () => {
			dispatch(getBooks("Ender"));
		}
	};
};

export default connect(mapStateToProps, mapDispatchtoProps)(BooksListContainer);