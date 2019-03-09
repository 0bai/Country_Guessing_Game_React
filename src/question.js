import React, {Component} from 'react';
import Flag from './flag';
import Choices from './choices';
import './question.css';


class Question extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props.choices);
		return (
			<div className='question'>
				<Flag flag={this.props.flag}/>
				<Choices result={this.props.result} status={this.props.status} choices={this.props.choices}
						 onSubmit={this.props.onSubmit} onChange={this.props.onChange}/>
			</div>
		);
	}
	
}

export default Question;