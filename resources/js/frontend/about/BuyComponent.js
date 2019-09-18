import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class BuyComponent extends React.Component {
	render() {
		return(
			<div className="buy">
				<div className="works-container buying-container">
					<div className="container">
						<h1>BUYING ON STOCKX</h1>
						<div className="explanation-row">
							<div className="filled-icon bid" ></div>
							<div className="step">
								<h3 className="step-title">BID (BUY)</h3>
								<p className="step-description">
									Make an offer that any seller can accept; or purchase immediately at the lowest Ask.
								</p>
							</div>	
						</div>

						<div className="explanation-row">
							<div className="filled-icon authenticate" ></div>
							<div className="step">
								<h3 className="step-title">AUTHENTICATE</h3>
								<p className="step-description">
									Seller ships to us. We authenticate, then we release funds to the seller.
								</p>
							</div>
						</div>

						<div className="explanation-row">
							<div className="filled-icon prosper" ></div>
							<div className="step">
								<h3 className="step-title">PROSPER</h3>
								<p className="step-description">
									We ship to you. You sip a daiquiri, knowing you will never get a fake.
								</p>
							</div>
						</div>

						<div className="learn-more">
							<a className="btn btn-flat btn-success" target="_blank"  href="#">Learn More About Buying on StockX</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BuyComponent;