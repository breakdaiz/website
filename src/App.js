import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/CardList.component';
import SearchBar from './components/search-bar/SearchBar';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) =>
				this.setState(() => {
					return { monsters: users };
				})
			);
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField: searchField };
		});
	};

	render() {
		const { monsters, searchField, onSearchChange } = this.state;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className='App'>
				<SearchBar
					placeholder='search monster'
					className='search-box'
					onChangeHandler={onSearchChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
