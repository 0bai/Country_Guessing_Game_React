import React, {Component} from 'react';

class Flag extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<img src={this.props.flag} alt="Random Flag Picture"/>
		);
	}
}

export default Flag;