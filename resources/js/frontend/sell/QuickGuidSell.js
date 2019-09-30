import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import BottomBar from '@/sell/BottomBarComponent'

class QuickGuidSell extends React.Component {
	constructor (props) {
	    super(props)
	    this.state = {
            'hideGuid': false
        }

	    this.hideGuidClick = this.hideGuidClick.bind(this);
	}

	hideGuidClick() {

	   	this.setState(state => ({
			hideGuid: true
		}));
	}

	render() {
		return(
			
			<div className={this.state.hideGuid?"component-page page-grey hide":"component-page page-grey"}>
				<div className ="component-container">
					<div className = "works-buy-sell">
						<div className ="inner-flex center">
							<div className ="works-content">
								<div className="header-block">
									<h1>Here's How It Works</h1>
									<div className="sub-title">See more information in our 
										<a href="/terms">Terms and Conditions</a>
									</div>
								</div>

								<div className = "how-it-works-steps">
									<div className = "steps">
										<div className="step">
											<div className="num">1.</div>
											<div className="details">
												<div className="step-title"></div>
												<div className="description">List a product for sale; or sell immediately at the highest Bid.</div>
											</div>
										</div>
										
										<div className="step">
											<div className="num">2.</div>
											<div className="details">
												<div className="step-title"></div>
												<div className="description">Ship your item within 2 business days. We authenticate, then we ship it to the buyer.</div>
											</div>
										</div>

										<div className="step">
											<div className="num">3.</div>
											<div className="details">
												<div className="step-title"></div>
												<div className="description">We release funds to you. You sip a daiquiri, knowing you will never get a chargeback.</div>
											</div>
										</div>
									</div>
								</div>

								<div className="warning">
									<p>
										<span className="bold black">Ask/Sell Flake Penalty </span>
										There is a minimum 15% penalty if you fail to ship within 2 business days, 
										or if the item received is not authentic, is used, or is not the right size. 
										When a 'Bid' and 'Ask' match, the trade is confirmed and can no longer be canceled. 
										The integrity of the marketplace depends on it.
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className = "button-bar button-bar-middle">
					<div className = "button-bar-inner">
						<button className="button left-button button-white">Cancel</button>
						<button className="button right-button button button-red" onClick={this.hideGuidClick}>I Understand</button>
					</div>
				</div>
			</div>
		);
	}
}

export default QuickGuidSell;