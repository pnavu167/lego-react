import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class BasicComponent extends React.Component {
	render() {
		return(
			<div className="basic">
				<div className="works-container explanation-container">
					<div className="container">
						<h1>THE BASICS</h1>

						<div className="row">
							<div className="col-md-4">
								<div className="anonymity">
									<div className="explain-icon"></div>
									<h2 className="explain-title">Anonymity</h2>
									<p className="explain-description">Never worry about legit buyers or sellers – we’re in the middle.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="transparency">
									<div className="explain-icon" ></div>
									<h2 className="explain-title transparency">Transparency</h2>
									<p className="explain-description">Real-time market data for intelligent buying and selling.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="authenticity">
									<div className="explain-icon" ></div>
									<h2 className="explain-title authenticity">Authenticity</h2>
									<p className="explain-description">Our experts authenticate every product sold on StockX.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BasicComponent;