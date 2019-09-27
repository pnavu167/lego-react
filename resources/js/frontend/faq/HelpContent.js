import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class HelpContent extends React.Component {
	render() {
		return(
			<div className="help-content-container">
				<div className ="topic-grid">
					<h2 className = "featured-topic-header">Featured Topics</h2>
					<ul className = "topic-list">
						<li>
							<div className = "topic-item">
								<a className = "topic-link" href = "#">
									<div className = "topic-img"></div>
									<div className = "topic-label">Welcome To StockX</div>
								</a>
							</div>
						</li>
						<li>
							<div className = "topic-item">
								<a className = "topic-link" href = "#">
									<div className = "topic-img"></div>
									<div className = "topic-label">Account Features</div>
								</a>
							</div>
						</li>
						<li>
							<div className = "topic-item">
								<a className = "topic-link" href = "#">
									<div className = "topic-img"></div>
									<div className = "topic-label">Luxury Products</div>
								</a>
							</div>
						</li>
						<li>
							<div className = "topic-item">
								<a className = "topic-link" href = "#">
									<div className = "topic-img"></div>
									<div className = "topic-label">Money</div>
								</a>
							</div>
						</li>
						<li>
							<div className = "topic-item">
								<a className = "topic-link" href = "#">
									<div className = "topic-img"></div>
									<div className = "topic-label">Product Guidelines</div>
								</a>
							</div>
						</li>
						<li>
							<div className = "topic-item">
								<a className = "topic-link" href = "#">
									<div className = "topic-img"></div>
									<div className = "topic-label">Shipping</div>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div className = "topic-trending">
					<div className = "topic-trending-container">
						<div className = "change-language">
							<label> Preferred Language </label>
							<div className="form-control btn-group bootstrap-select show-menu-arrow addr-exclude signup-size-select">
								<button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Size 3.5" aria-expanded="false">
									<span className="filter-option pull-left">English (US)</span>
									&nbsp;
									<span className="caret"></span>
								</button>
								<div className="dropdown-menu open">
									<ul className = "language-list">
										<li className ="language-name active">
											<i className="fas fa-check hide"></i>
											<a href="#"><span className="text">English (US)</span></a>
										</li>

										<li className ="language-name">
											<i className="fas fa-check hide"></i>
											<a href="#"><span className="text">German</span></a>
										</li>

										<li className ="language-name">
											<i className="fas fa-check hide"></i>
											<a href="#"><span className="text">French</span></a>
										</li>

										<li className ="language-name">
											<i className="fas fa-check hide"></i>
											<a href="#"><span className="text">Italian</span></a>
										</li>

									</ul>
								</div>
							</div>
						</div>

						<div className = "trending-articles">
							<h2 className="trending-articles-title">Trending Articles</h2>

							<ul className = "trending-list">
								<li className="trending-item">
									<a href="#" className = "trending-link">What is an Ask and how do I sell on StockX?</a>
								</li>
								<li className="trending-item">
									<a href="#" className = "trending-link">What is a Bid and how do I buy on StockX?</a>
								</li>
								<li className="trending-item">
									<a href="#" className = "trending-link">What are StockX selling fees?</a>
								</li>
								<li className="trending-item">
									<a href="#" className = "trending-link">Shipping Instructions</a>
								</li>
								<li className="trending-item">
									<a href="#" className = "trending-link">Delete account</a>
								</li>
							</ul>
						</div>

						<div className = "contact-support">
							<button className = "contact-support-btn">Contact Support</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HelpContent;