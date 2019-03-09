import React, {Component} from 'react';
import propTypes from 'prop-types';
import './choices.css';


const Choice = ({name, onChange}) => (
	<label><input type="radio" onChange={onChange} value={name} name='choices'/> {name}</label> );

class Choices extends Component {
	static propTypes = {
		choices: propTypes.arrayOf(propTypes.string).isRequired
	};
	
	constructor(props) {
		super(props);
	}
	
	render() {
		var choices;
		if (this.props.status) {
			choices = <p>{this.props.result}</p>;
		} else {
			choices = this.props.choices.map((country, i) => <Choice name={country.name}
																	 onChange={this.props.onChange}/>);
		}
		
		return (
			<div>
				<form className='form' onSubmit={this.props.onSubmit}>
					<div>{choices}</div>
					<button type='submit'>{this.props.status ? 'Next' : 'Answer'}</button>
				</form>
			</div>
		
		);
	}
}

export default Choices;
