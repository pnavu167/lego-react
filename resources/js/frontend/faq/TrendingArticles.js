import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class TrendingArticles extends React.Component {
	render() {
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
}

export default TrendingArticles;