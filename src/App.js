import React, {Component} from 'react';
import logo from './logo.svg';
import Question from './question';
import './App.css';

const DefaultView = ({logo}) => (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo"/>
		<p>
			Country Guessing Game
		</p>
		<a
			className="App-link"
			href="http://obai.dev"
			target="_blank"
			rel="noopener noreferrer"
		>
			Loading...
		</a>
	</header>
);

class App extends Component {
	static countries = [];
	
	constructor(props) {
		super(props);
		this.state = {
			choices: [],
			flag: '',
			choice: '',
			answer: '',
			status: false,
			result: ''
		};
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.newGame = this.newGame.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}
	
	componentDidMount() {
		const baseUrl = 'https://restcountries.eu/rest/v2/all';
		fetch(baseUrl)
			.then((data) => data.json()).then(d => {
			App.countries = d;
			this.newGame();
		});
	}
	
	newGame() {
		var choices = Array.from(this.generateCountries());
		console.log(choices);
		var ans = choices[ Math.floor(Math.random() * choices.length) ];
		this.setState({
			flag: ans.flag,
			choices: choices,
			answer: ans.name,
			choice: '',
			status: false,
			result: ''
		});
	}
	
	handleOnSubmit(e) {
		e.preventDefault();
		if (this.state.status) return this.newGame();
		var result = ( this.state.choice === this.state.answer ? 'Correct! : ' : 'Incorrect! the correct answer is: ' ) + this.state.answer;
		this.setState({status: true, result: result});
	}
	
	handleOnChange(e) {
		var state = this.state;
		// alert(e.target.value);
		this.setState({...state, choice: e.target.value});
	}
	
	generateCountries() {
		var countries = new Set();
		while (countries.size < 4) {
			countries.add(App.countries[ Math.floor(Math.random() * App.countries.length) ]);
		}
		return countries;
	}
	
	render() {
		var view = <DefaultView logo={logo}/>;
		if (App.countries.length > 0) {
			view = <Question result={this.state.result} status={this.state.status} flag={this.state.flag}
							 onSubmit={this.handleOnSubmit} choices={this.state.choices}
							 onChange={this.handleOnChange}/>;
		}
		return (
			<div className="App">
				{view}
			</div>
		);
	}
}

export default App;
