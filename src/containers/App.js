import React, { Component } from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		console.log(event.target.value);
	}

	render() {
		const filterRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		console.log(filterRobots);
		return (
			<div className='tc'>
				<h1 className='f2'>RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<Scroll>
					<CardList robots={ filterRobots }/>
				</Scroll>
			</div>
		);
	}
}

export default App;