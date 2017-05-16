import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const SearchForm = ({onSubmit}) => {
	return (
		<form onSubmit={onSubmit}>
			<InputGroup name="searchWord" labelText="Search by Title or Author">
				<Input name="searchWord" />
			</InputGroup>
			<Button type="submit">Search</Button>
		</form>
	)
}

export default SearchForm;