import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class RelatedTopic extends React.Component {
	constructor (props) {
	    super(props)
	}
	render() {
		return(
			<div className = {this.props.classContainer}>
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
}

export default RelatedTopic;