import React, { Component } from 'react';

export class SearchBar extends Component {

	
	render() {
		const {className, placeholder, onChangeHandler} = this.props
		return (
			<input
				type='search'
				className={className}
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		);
	}
}

export default SearchBar;
