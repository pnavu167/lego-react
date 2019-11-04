import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '@/faq/HeaderComponent'
import HelpContent from '@/faq/HelpContent'


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