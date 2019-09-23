import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import ChooseSize from './ChooseSizeComponent'

class SignUpBottom extends React.Component {
	constructor (props) {
		super(props);
	    this.state = {
	    	isCheckbox: false,
	    	isSneaker: false,
	    	isStreetwear: false,
	    	isBags: false,
	    	isWatches: false
	    };

	    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);

	    this.handleSneakerClick = this.handleSneakerClick.bind(this);
	    this.handleStreetwearClick = this.handleStreetwearClick.bind(this);
	    this.handleBagsClick = this.handleBagsClick.bind(this);
	    this.handleWatchesClick = this.handleWatchesClick.bind(this);
	}

	handleCheckBoxClick() {
		this.setState(state => ({
			isCheckbox: !this.state.isCheckbox
		}));
	}

	handleSneakerClick() {
		this.setState(state => ({
			isSneaker: !this.state.isSneaker
		}));
	}

	handleStreetwearClick() {
		this.setState(state => ({
			isStreetwear: !this.state.isStreetwear
		}));
	}

	handleBagsClick() {
		this.setState(state => ({
			isBags: !this.state.isBags
		}));
	}

	handleWatchesClick() {
		this.setState(state => ({
			isWatches: !this.state.isWatches
		}));
	}

	render() {
		const isCheckbox 	= this.state.isCheckbox;

		const isSneaker  	= this.state.isSneaker;
		const isStreetwear	= this.state.isStreetwear;
		const isBags 		= this.state.isBags;
		const isWatches 	= this.state.isWatches;
		let disableBtnVice = "vice button button-white";
		let enableBtnVice = "vice button button-white button-light-green";

		return(
			<div className = "signup-bottom">
				<div className = "row vice-row" id="vices">
					<div className ="explainer">Choose your vice(s):</div>
					<div className ="vice-btns " id="target-row">
						<div onClick={this.handleSneakerClick} className = {isSneaker?enableBtnVice:disableBtnVice}>Sneakers</div>
						<div onClick={this.handleStreetwearClick} className = {isStreetwear?enableBtnVice:disableBtnVice}>Streetwear</div>
						<div onClick={this.handleBagsClick} className = {isBags?enableBtnVice:disableBtnVice}>Bags &amp; Accessories</div>
						<div onClick={this.handleWatchesClick} className = {isWatches?enableBtnVice:disableBtnVice}>Watches</div>
					</div>
					{isSneaker &&
						<ChooseSize/> 
					}
					
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