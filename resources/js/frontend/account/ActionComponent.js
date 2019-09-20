import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class ActionComponent extends React.Component {
	constructor (props) {
	    super(props)
	}
	render() {
		const isSign = this.props.signin;
		let text;
		if (this.props.signin) {
			text = "Login";
		}else {
			text = "Sign Up";
		}

		return(
			<div className="button-bar button-bar-middle  ">
				<div className="button-bar-inner">
					<button className="button left-button button-grey">Back</button>
					<button className="button right-button button-green">{text}</button>
				</div>
			</div>
		);
	}
}

export default ActionComponent;