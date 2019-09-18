import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class SellComponent extends React.Component {
	render() {
		return(
			<div className="buy">
				<div className="works-container selling-container">
					<div className="container">
						<h1>SELLING ON STOCKX</h1>
						<div className="explanation-row">
							<div className="filled-icon sell" ></div>
							<div className="step">
								<h3 className="step-title">ASK (SELL)</h3>
								<p className="step-description">
									List an item for sale; or sell immediately at the highest Bid.
								</p>
							</div>	
						</div>

						<div className="explanation-row">
							<div className="filled-icon authenticate" ></div>
							<div className="step">
								<h3 className="step-title">AUTHENTICATE</h3>
								<p className="step-description">
									Ship your item within 2 business days. We authenticate, then we ship to the buyer.
								</p>
							</div>
						</div>

						<div className="explanation-row">
							<div className="filled-icon prosper" ></div>
							<div className="step">
								<h3 className="step-title">PROSPER</h3>
								<p className="step-description">
									We release funds to you. You sip a daiquiri, knowing you will never get a chargeback.
								</p>
							</div>
						</div>

						<div className="learn-more">
							<a className="btn btn-flat btn-success" target="_blank"  href="#">
								Learn More About Selling on StockX
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SellComponent;