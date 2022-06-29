import React, { Component } from 'react';

export class SearchBar extends Component {
	render() {
		return (
			<input
				type='search'
				className={this.props.className}
				placeholder={this.props.placeholder}
				onChange={this.props.onChangeHandler}
			/>
		);
	}
}

export default SearchBar;
