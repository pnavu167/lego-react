import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import Header from '@/faq/HeaderComponent'

class ListAsk extends React.Component {
	render() {
		return(
			<div className="list-ask-component help-container">
				<Header type = 'header-pc' search='true'/>
				<div className = "title-topic">
					<h1 className = "title-topic-header">
						Luxury Products
					</h1>
				</div>

				<div className = "list-container">
					<div className = "list-content">
						<RelatedTopic classContainer = 'related-topic list-topic hide-pc'/>
						<div className = "list-content-detail">
							<div className = "list-ask-container">
								<h2>Articles</h2>
								<div className = "list-ask">
									<ul>
										<ListItem
											head = 'What will my watch come with?'
											view = '583'
											date = 'Aug 1, 2019'
											type = 'Knowledge'
										/>
										<ListItem
											head = 'How to remove the activation lock on your Apple Watch'
											view = '583'
											date = 'Aug 1, 2019'
											type = 'Knowledge'
										/>
										<ListItem
											head = 'How to remove the activation lock on your Apple Watch'
											view = '583'
											date = 'Aug 1, 2019'
											type = 'Knowledge'
										/>
										<ListItem
											head = 'How to remove the activation lock on your Apple Watch'
											view = '583'
											date = 'Aug 1, 2019'
											type = 'Knowledge'
										/>
										<ListItem
											head = 'How to remove the activation lock on your Apple Watch'
											view = '583'
											date = 'Aug 1, 2019'
											type = 'Knowledge'
										/>
										<ListItem
											head = 'How to remove the activation lock on your Apple Watch'
											view = '583'
											date = 'Aug 1, 2019'
											type = 'Knowledge'
										/>
									</ul>
								</div>
								<div className = "contact-support">
									<button className = "contact-support-btn">Contact Support</button>
								</div>
							</div>
						</div>
						<div className = 'list-option-container'>
							<br/>
							<br/>
							<br/>
							<ListTopic/>
							<RelatedTopic classContainer = 'related-topic list-topic hide-sp'/>
						</div>
						
					</div>

				</div>
				

			</div>
		);
	}
}

export default ListAsk;

function ListItem(props) {
	return (
		<li className = "list-item">
			<div className = "summary">
				<a href = "#" className = "article-link">
					<h3 className = "article-head">{props.head}</h3>
				</a>
			</div>
			<div className="footer">
				<span className="view-count" >{props.view} Views</span>
				<span className="dot">•</span>
				<span className="date">{props.date}</span>
				<span className="dot">•</span>
				<span className="article-type">{props.type}</span>
			</div>
		</li>
	);
}

function ListTopic(props) {
	return(
		<div className="list-topic-container ">

			<div className = "topic list-topic">
				<div className = "topic-catalog">
					<ul>
						<Topic url = '#' title = 'Account Features'/>
						<Topic url = '#' title = 'Luxury Products'/>
						<Topic url = '#' title = 'Money'/>
						<Topic url = '#' title = 'Product Guidelines'/>
						<Topic url = '#' title = 'Shipping'/>
						<Topic url = '#' title = 'Welcome To StockX'/>
					</ul>
				</div>
			</div>

		</div>
	);
}

function Topic(props) {
	return (
		<li>
			<div className ="topic-hierarchy-entry">
				<a href = {props.url} className = "topic-hierarchy-link">
					{props.title}
				</a>
			</div>
		</li>
	);
}

function RelatedTopic(props) {
	return(
		<div className = {props.classContainer}>
			<div className = 'force-topic-header'>
				<h2>Related Topics</h2>
				<div className = 'icon-fluctuations'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trending">
						<path d="M23.1 14.1a.5.5 0 0 1-.9.4L19.7 12 14 16.9a1.6 1.6 0 0 1-2.3 0L8.3 13l-6.2 5.4a.5.5 0 0 1-.7 0l-.3-.3a.5.5 0 0 1 0-.8l6-8.2a1.6 1.6 0 0 1 2.3 0l3.5 3.4 3.5-4-2.3-2.1a.6.6 0 0 1 .4-.9H22a1.1 1.1 0 0 1 1.1 1.1z">
						</path>
					</svg>
				</div>
			</div>
			<div className = 'force-topic-list'>
				<ul>
					<li className = 'topic-item'>
						<a href = '#' className = 'topic-item-link'>
							<span className = 'topic-item-link-name'>WATCHES</span>
							<span className = 'topic-item-link-number'>0</span>
						</a>
					</li>
					<li className = 'topic-item'>
						<a href = '#' className = 'topic-item-link'>
							<span className = 'topic-item-link-name'>HANDBAGS</span>
							<span className = 'topic-item-link-number'>0</span>
						</a>
					</li>
					<li className = 'topic-item'>
						<a href = '#' className = 'topic-item-link'>
							<span className = 'topic-item-link-name'>Product Guidelines</span>
							<span className = 'topic-item-link-number'>0</span>
						</a>
					</li>
					<li className = 'topic-item'>
						<a href = '#' className = 'topic-item-link'>
							<span className = 'topic-item-link-name'>CONDITION GUIDELINES</span>
							<span className = 'topic-item-link-number'>0</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}