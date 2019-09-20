import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class SignUpBottom extends React.Component {
	constructor (props) {
		super(props);
	    this.state = {
	    	isCheckbox: false
	    };

	    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
	}

	handleCheckBoxClick() {
		this.setState(state => ({
			isCheckbox: !this.state.isCheckbox
		}));
	}

	render() {
		const isCheckbox = this.state.isCheckbox;
		return(
			<div className="signup-bottom">
				<div className="row vice-row" id="vices">
					<div className="explainer">Choose your vice(s):</div>
					<div className="vice-btns " id="target-row">
						<div className="vice button button-white button-light-green">Sneakers</div>
						<div className="vice button button-white">Streetwear</div>
						<div className="vice button button-white">Bags &amp; Accessories</div>
						<div className="vice button button-white">Watches</div>
					</div>
				</div>
				<div role="presentation" className="">
					<div className="form-link-wrapper">
						<div className="bid-checks checkbox">
							<label className="control control-checkbox">
								<label className="form-link terms">By signing up, you agree to the &nbsp;
									<a href="/terms"><strong>Terms of Service</strong></a> and &nbsp;
									<a href="/privacy"><strong>Privacy Policy</strong></a>.
								</label>
								{/*<input type="checkbox"/>*/}
								<div className={isCheckbox?"control_indicator control_indicator_checked":"control_indicator"} onClick={this.handleCheckBoxClick}>
								</div>
							</label>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpBottom;