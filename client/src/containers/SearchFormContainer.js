import {connect} from "react-redux";
import {getBooks, clearSelectedBook} from "../actions";
import SearchForm from "../components/SearchForm";
import React from "react";
import serialize from "form-serialize";


const mapDispatchtoProps = (dispatch) => {
	return {
		onSubmit: (e) => {
			e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
			dispatch(getBooks(data.searchWord));
			dispatch(clearSelectedBook());
		}
	};
};

export default connect(null, mapDispatchtoProps)(SearchForm);