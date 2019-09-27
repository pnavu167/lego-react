import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'


class BillComponent extends React.Component {
	constructor(props) {
        super(props)
    }
	render() {
		return(
			<div >
				<div className = " form-error-container alert-container">
					<div className = "error-body animated fadeIn">
						<div className="message">You must enter an ask amount to proceed</div>
						<i className="fa fa-exclamation-triangle"></i>
					</div>
				</div>
				<div className="buy-sell-size hidden-xs">
					<div className="size-details">U.S. Men's Size 4</div>
					<img src="//stockx-assets.imgix.net/svg/icons/pencil.svg?auto=compress,format"/>
				</div>
				<div className ="white-container">
					<div className="pill-container">
						<div className="pill-switcher ask-pill">
							<div className="pill active">Place Ask</div>
							<div className="pill ">Sell Now</div>
						</div>
					</div>

					<div className="ask-input" data-tour="bid-education">
						<div className="amount-input vertical">
							<div className="decoration">$</div>
							<input placeholder="Enter Ask" className="amount" name="ask-amount" type="tel" maxLength="11" />
						</div>
					</div>

					<div className="bid-warning ">
						<span className="warning-text">You are about to sell at the highest Bid price</span>
					</div>

					<div className="multi-order-summary ">
						<div>
							<div className="item-row">
								<div>Transaction Fee (9.5%)</div>
								<div>-$47.78</div>
							</div>
							<div className="item-row">
								<div>Payment Proc. (3%)</div>
								<div>-$15.09</div>
							</div>
							<div className="item-row">
								<div>Estimated Shipping</div>
								<div>$0.00</div>
							</div>
							<div className="item-row">
								<div>Total Payout</div>
								<div><span className="total-bold-text">--</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BillComponent;