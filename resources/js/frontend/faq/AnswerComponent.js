import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import Header from '@/faq/HeaderComponent'

class AnswerComponent extends React.Component {
	render() {
		return(
			<div className="answer-container help-container list-ask-component">
				<Header type = 'header-pc' search='true'/>
				<div className = 'list-content'>
					<AnswerContent/>
					<div className = 'list-topic-container'>
						<div className = 'list-topic'>
							<TrendingArticles/>
							<TrendingArticles/>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default AnswerComponent;

function TrendingArticles(props) {
	return(
		<div className = 'ask-related-articles'>
			<h2>Related Topics</h2>
			<div className = 'ask-list'>
				<ul>
					<li className = 'ask-item'>
						<a href = '#' className = 'ask-item-link'>
							What comes with my Apple Watch bought on StockX?
						</a>
					</li>
					<li className = 'ask-item'>
						<a href = '#' className = 'ask-item-link'>
							How do I sell my Apple Watch?
						</a>
					</li>
					<li className = 'ask-item'>
						<a href = '#' className = 'ask-item-link'>
							What are the condition guidelines for Watches?
						</a>
					</li>
					<li className = 'ask-item'>
						<a href = '#' className = 'ask-item-link'>
							How do I factory reset my Apple Watch?
						</a>
					</li>
					<li className = 'ask-item'>
						<a href = '#' className = 'ask-item-link'>
							How do I take care of my watch?
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

function AnswerContent(props) {
	return(
		<div className="list-content-detail ">
			<div className = 'list-topic'>
				<a className = 'topic-name' href ='#'>Luxury Products</a>

				<div className = 'answer-content'>
					<div className = 'answer-content-title'>
						<h1>What will my watch come with?</h1>
						<div className = 'answer-content-date'>
							<i className="far fa-clock"></i>
							<span className = 'date'>Aug 1, 2019</span>
						</div>
					</div>

					<div className = 'answer-content-main'>
						<p>Watches purchased at StockX will come with a StockX Certificate of Authenticity, 
						which verifies condition and authenticity of your watch. 
						It also lists your watch's make, model, reference and serial numbers.</p>
						<br/>
						<p>If sellers provide box and papers, they will be passed along to the buyer. </p>
						<br/>
						<p>Watches with box & papers will include the original, manufacturer’s watch box, 
						along with manufacture documentation verifying authenticity showing the reference 
						and unique serial number attributed to it, and/or warranty information. 
						Any additional booklets and instruction manuals are not required but will be shipped to 
						the buyer if the seller has included them. 
						Please note, manufacturer warranties are generally non-transferable.</p>
						<br/>
						<p>Watches sold with box and papers must include all of the above documentation 
						to pass StockX verification.</p>
						<br/>
					</div>
				</div>
				<div className = 'list-hash-tag'>
					<HashTag name = 'Luxury Products'/>
					<HashTag name = 'WATCHES'/>
				</div>
			</div>

		</div>
	);
}

function HashTag(props) {
	return(
		<div className = 'hash-tag'>
			<a href = '#' className = 'hash-tag-link'>{props.name}</a>
		</div>
	);
}