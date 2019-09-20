import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../layouts/FooterComponent'
import Header from '@/layouts/HeaderComponent'


class TextAppComponent extends React.Component {
	render() {
		return(
			<div className="text-center white text-app-copy">
				<h1>
					GET THE STOCKX APP FOR
					<br className="remove-at-smallest"/>IPHONE AND ANDROID
				</h1>
				<div className="hr">
					<div className="hr-width">
						<div className="hr-with-logo text-app-hr">
							<div className="bottom-border"></div>
							<div className="logo-container">
								<img src="//stockx-assets.imgix.net/logo/stockx-header-logo.svg?auto=compress,format"/>
							</div>
							<div className="bottom-border"></div>
						</div>
					</div>
				</div>
				<p>
					<strong>Buy and sell authentic sneakers, streetwear, watches, and handbags,
					<br className="remove-at-smallest"/>from your pocket.</strong>
					<br className="extra-br"/>
					<span className="phone-text">Enter your phone number and we'll text you the app:</span>
				</p>
				<div className="text-app-input">
					<input type="text" className="form-control fs-block"/>
					<button className="btn btn-success">SEND</button>
				</div>
				<div className="mobile-download">
					<button className="btn btn-success mobile-download-btn">DOWNLOAD THE APP</button>
				</div>
				<br/>
				<p className="text-app-messaging"></p>
				<br/>
				</div>
		);
	}
}

export default TextAppComponent;