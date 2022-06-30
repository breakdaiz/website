import React, { Component } from 'react';
import './searchbox.styles.css';

export class SearchBar extends Component {
	render() {
		const { className, placeholder, onChangeHandler } = this.props;
		return (
			<input
				type='search'
				className={`search-box ${className}`}
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		);
	}
}

export default SearchBar;
