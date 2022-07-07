import React, { Component } from 'react';

export default class card extends Component {
	render() {
		const { name, id, email } = this.props;

		return (
			<>
				<img
					alt={`monster ${name}`}
					src={`https://robohash.org/${id}?set=set2&size=180x180`}
				/>
				<h2> {name}</h2>
				<p>{email}</p>
			</>
		);
	}
}
