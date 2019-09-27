import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import Header from '@/faq/HeaderComponent'
import ListTopic from '@/faq/ListTopic'
import RelatedTopic from '@/faq/RelatedTopic'

class ListAsk extends React.Component {
	render() {
		return(
			<div className="list-ask-component help-container">
				<Header/>
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
										<li className = "list-item">
											<div className = "summary">
												<a href = "#" className = "article-link">
													<h3 className = "article-head">What will my watch come with?</h3>
												</a>
											</div>
											<div className="footer">
												<span className="view-count" >583 Views</span>
												<span className="dot">•</span>
												<span className="date">Aug 1, 2019</span>
												<span className="dot">•</span>
												<span className="article-type">Knowledge</span>
											</div>
										</li>
										<li className = "list-item">
											<div className = "summary">
												<a href = "#" className = "article-link">
													<h3 className = "article-head">How to remove the activation lock on your Apple Watch</h3>
												</a>
											</div>
											<div className="footer">
												<span className="view-count" >583 Views</span>
												<span className="dot">•</span>
												<span className="date">Aug 1, 2019</span>
												<span className="dot">•</span>
												<span className="article-type">Knowledge</span>
											</div>
										</li>
										<li className = "list-item">
											<div className = "summary">
												<a href = "#" className = "article-link">
													<h3 className = "article-head">What will my watch come with?</h3>
												</a>
											</div>
											<div className="footer">
												<span className="view-count" >583 Views</span>
												<span className="dot">•</span>
												<span className="date">Aug 1, 2019</span>
												<span className="dot">•</span>
												<span className="article-type">Knowledge</span>
											</div>
										</li>
										<li className = "list-item">
											<div className = "summary">
												<a href = "#" className = "article-link">
													<h3 className = "article-head">What will my watch come with?</h3>
												</a>
											</div>
											<div className="footer">
												<span className="view-count" >583 Views</span>
												<span className="dot">•</span>
												<span className="date">Aug 1, 2019</span>
												<span className="dot">•</span>
												<span className="article-type">Knowledge</span>
											</div>
										</li>
										<li className = "list-item">
											<div className = "summary">
												<a href = "#" className = "article-link">
													<h3 className = "article-head">What will my watch come with?</h3>
												</a>
											</div>
											<div className="footer">
												<span className="view-count" >583 Views</span>
												<span className="dot">•</span>
												<span className="date">Aug 1, 2019</span>
												<span className="dot">•</span>
												<span className="article-type">Knowledge</span>
											</div>
										</li>
										<li className = "list-item">
											<div className = "summary">
												<a href = "#" className = "article-link">
													<h3 className = "article-head">What will my watch come with?</h3>
												</a>
											</div>
											<div className="footer">
												<span className="view-count" >583 Views</span>
												<span className="dot">•</span>
												<span className="date">Aug 1, 2019</span>
												<span className="dot">•</span>
												<span className="article-type">Knowledge</span>
											</div>
										</li>
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