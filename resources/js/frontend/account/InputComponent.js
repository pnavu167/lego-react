import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class InputComponent extends React.Component {

	constructor (props) {
	    super(props)
	}

	render() {
		const isSign = this.props.signin;
		let text_note = "";
		if (this.props.type == "password"){
			if (this.props.signin) {
				text_note = <p><a className="form-link">Forgot Your Password?</a></p>;
			}else {
				text_note = <p>You must use 8 or more characters with a mix of letters, numbers &amp; symbols.</p>;
			}
		}

		return(
			<div className="row fs-block">
				<input name={this.props.name} type={this.props.type} 
				required="" placeholder={this.props.placeholder}  
				autoComplete="true" className="field " />
				{text_note}

			</div>
		);
	}
}

export default InputComponent;