import './App.css';
import CardList from './components/card-list/CardList.component';
import SearchBar from './components/search-bar/SearchBar';
import { useState, useEffect } from 'react';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilterMonster] = useState(monsters);

	// use effect for fetching data

	useEffect((e) => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	// useEffect for filtering

	useEffect(
		(e) => {
			const newfilteredMonsters = monsters.filter((monster) => {
				return monster.name.toLocaleLowerCase().includes(searchField);
			});

			setFilterMonster(newfilteredMonsters);
		},
		[monsters, searchField]
	);

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'> Monster App </h1>
			<SearchBar
				placeholder='search monster'
				className='monsters-search-box'
				onChangeHandler={onSearchChange}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
