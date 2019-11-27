import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '@/faq/HeaderComponent'


class HelpComponent extends React.Component {
	render() {
		return(
			<div className="help-container">
				<Header type = 'header-pc pg-right-header'/>
				<div className = "title-container">
					<div className = "title-content">
						<div className = "title-detail">
							<h2>What can we help you with?</h2>
						</div>
						<div className = "search-container">	
							<div className = "search-box">
								<input className = "search-input" 
								type ="text" placeholder="Ask a question..."/>
							</div>

							<div className = "search-btn">
								<button className = "search-input-btn" type = "button">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search">
										<title></title>
										<path d="M22.9 20.9l-6.2-6.1c1.3-1.8 1.9-4 1.6-6.4-.6-3.9-3.8-7.1-7.8-7.4C5 .4.4 5 1 10.5c.3 4 3.5 7.3 7.4 7.8 2.4.3 4.6-.3 6.4-1.5l6.1 6.1c.3.3.7.3 1 0l.9-1c.3-.3.3-.7.1-1zM3.7 9.6c0-3.2 2.7-5.9 5.9-5.9 3.3 0 6 2.7 6 5.9 0 3.3-2.7 6-6 6-3.2 0-5.9-2.6-5.9-6z">
										</path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<HelpContent/>
			</div>
		);
	}
}

export default HelpComponent;

function HelpContent(props) {
	return(
		<div className="help-content-container">
			<div className ="topic-grid">
				<h2 className = "featured-topic-header">Featured Topics</h2>
				<ul className = "topic-list">
					<TopicLink 
						url = '#' 
						title = 'Welcome To StockX'
						background = 'topic-img welcome'
					/>
					<TopicLink 
						url = '#' 
						title = 'Account Features'
						background = 'topic-img account-features'
					/>
					<TopicLink 
						url = '#' 
						title = 'Luxury Products'
						background = 'topic-img luxury-products'
					/>
					<TopicLink 
						url = '#' 
						title = 'Money'
						background = 'topic-img money'
					/>
					<TopicLink 
						url = '#' 
						title = 'Product Guidelines'
						background = 'topic-img product-guidelines'
					/>
					<TopicLink 
						url = '#' 
						title = 'Shipping'
						background = 'topic-img shipping'
					/>
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
									<Language active = 'true' title = 'English (US)'/>
									<Language active = '' title = 'German'/>
									<Language active = '' title = 'French'/>
									<Language active = '' title = 'Italian'/>
								</ul>
							</div>
						</div>
					</div>

					<div className = "trending-articles">
						<h2 className="trending-articles-title">Trending Articles</h2>

						<ul className = "trending-list">
							<TrendingLink url = '#' title = 'What is an Ask and how do I sell on StockX?'/>
							<TrendingLink url = '#' title = 'What is a Bid and how do I buy on StockX?'/>
							<TrendingLink url = '#' title = 'What are StockX selling fees?'/>
							<TrendingLink url = '#' title = 'Shipping Instructions'/>
							<TrendingLink url = '#' title = 'Delete account'/>
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

function TopicLink(props) {
	return	(
		<li>
			<div className = "topic-item">
				<a className = "topic-link" href = {props.url}>
					<div className = {props.background}></div>
					<div className = 'topic-content'>
						<div className = "topic-label">{props.title}</div>
					</div>
				</a>
			</div>
		</li>
	);
}

function Language(props) {

	let className = 'language-name ';

	if(props.active) {
		className += ' active';
	}

	return (
		<li className = {className}>
			<i className="fas fa-check hide"></i>
			<a href="#"><span className="text">{props.title}</span></a>
		</li>
	);
}

function TrendingLink(props) {
	return (
		<li className="trending-item">
			<a href={props.url} className = "trending-link">{props.title}</a>
		</li>
	);
}