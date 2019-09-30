import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import RelatedTopic from '@/faq/RelatedTopic'


class ListTopic extends React.Component {
	render() {
		return(
			<div className="list-topic-container ">

				<div className = "topic list-topic">
					<div className = "topic-catalog">
						<ul>
							<li>
								<div className ="topic-hierarchy-entry">
									<a href = "#" className = "topic-hierarchy-link">
										Account Features
									</a>
								</div>
							</li>
							<li>
								<div className ="topic-hierarchy-entry">
									<a href = "#" className = "topic-hierarchy-link">
										Luxury Products
									</a>
								</div>
							</li>
							<li>
								<div className ="topic-hierarchy-entry">
									<a href = "#" className = "topic-hierarchy-link">
										Money
									</a>
								</div>
							</li>
							<li>
								<div className ="topic-hierarchy-entry">
									<a href = "#" className = "topic-hierarchy-link">
										Product Guidelines
									</a>
								</div>
							</li>
							<li>
								<div className ="topic-hierarchy-entry">
									<a href = "#" className = "topic-hierarchy-link">
										Shipping
									</a>
								</div>
							</li>
							<li>
								<div className ="topic-hierarchy-entry">
									<a href = "#" className = "topic-hierarchy-link">
										Welcome To StockX
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>

				
			</div>
		);
	}
}

export default ListTopic;