import {connect} from "react-redux";
import {getBooks, getSelectedBook, clearSelectedBook} from "../actions";
import BooksList from "../components/BooksList";
import ShowBook from "../components/ShowBook";
import React from "react";


class ContentContainer extends React.Component {
	componentDidMount() {
		this.props.getBooks();
	}

	render() {
	  const {books, clearSelectedBook, isBooksListFetching, isSelectedBookFetching, selectedBook } = this.props;
	  if (!selectedBook) {
			return (
				<BooksList books={books} isFetching={isBooksListFetching} getSelectedBook={this.props.getSelectedBook} />
			);
		} else {
			return (
				<ShowBook clearSelectedBook={clearSelectedBook} book={selectedBook} isFetching={isSelectedBookFetching} />
			);			
		}
	}
}


const mapStateToProps = (state) => {
	return {
		books: state.books.books,
		isBooksListFetching: state.books.isFetching,
		isSelectedBookFetching: state.selectedBook.isFetching,
		selectedBook: state.selectedBook.book
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		getBooks: () => {
			dispatch(getBooks("Ender"));
		},
		getSelectedBook: (id) => {
			dispatch(getSelectedBook(id));
		},
		clearSelectedBook: () => {
			console.log("clearSelectedBook called")
			dispatch(clearSelectedBook());
		}
	};
};

export default connect(mapStateToProps, mapDispatchtoProps)(ContentContainer);