import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import HashTag from '@/faq/HashTag'

class AnswerContent extends React.Component {
	render() {
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
}

export default AnswerContent;