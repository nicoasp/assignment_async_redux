import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const SearchForm = ({onSubmit}) => {
	return (
		<form onSubmit={onSubmit}>
			<h3>Search by Title, Author or Both</h3>
			<InputGroup name="title" labelText="Search by Title">
				<Input name="title" />
			</InputGroup>
			<InputGroup name="author" labelText="Search by Author">
				<Input name="author" />
			</InputGroup>
			<Button type="submit" color="success">Search</Button>			
		</form>
	)
}

export default SearchForm;
