import { Component } from 'react';
import './cardlist.styles.css';
import Card from '../card/Card';

class CardList extends Component {
	render() {
		const { monsters } = this.props;

		return (
			<div className='card-list'>
				{monsters.map((monster) => {
					const { name, id, email } = monster;
					return (
						<div className='card-container ' key={id}>
							<Card name={name} id={id} email={email} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
