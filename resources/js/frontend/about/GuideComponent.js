import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import Footer from '../layouts/FooterComponent'
import Header from '@/layouts/HeaderComponent'

class GuideComponent extends React.Component {
	render() {
		return(
			<div className="guide-container">
			<Header/>
				<About/>
				<Basic/>
				<Buy/>
				<Sell/>
				<div className="now-u-know">
					<img src="//stockx-assets.imgix.net/now_you_know.png?auto=compress,format&amp;h=150" alt="now you know"/>
				</div>
				<ModalVideo/>
			<Footer/>
			</div>
		);
	}
}

export default GuideComponent;

function Basic(props) {
	return(
		<div className="basic">
			<div className="works-container explanation-container">
				<div className="container">
					<h1>THE BASICS</h1>

					<div className="row">
						<div className="col-md-4">
							<div className="anonymity">
								<div className="explain-icon"></div>
								<h2 className="explain-title">Anonymity</h2>
								<p className="explain-description">Never worry about legit buyers or sellers – we’re in the middle.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="transparency">
								<div className="explain-icon" ></div>
								<h2 className="explain-title transparency">Transparency</h2>
								<p className="explain-description">Real-time market data for intelligent buying and selling.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="authenticity">
								<div className="explain-icon" ></div>
								<h2 className="explain-title authenticity">Authenticity</h2>
								<p className="explain-description">Our experts authenticate every product sold on StockX.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function About(props) {
	return(
		<div className="about">
			<div className="container about-container ">
				<div className="content">
					<h1>THE STOCK MARKET <br className="hidden-sm"/>FOR THINGS</h1>
					<p>
						StockX is the world’s first stock market for things – a live ‘bid/ask’ marketplace. Buyers
						place bids, sellers place asks and when a bid and ask meet, the transaction happens
						automatically. Retro Jordans, Nikes, Yeezys and more – now 100% authentic guaranteed.
					</p>
				</div>

				<div className="video">
					<div>
						<div className="activity-modal">
							<a className="video-trigger" data-toggle="modal" data-target="#videoModal">
								<img width="100%" src="/storage/images/about/video-image.jpg"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Buy(props) {
	return(
		<div className="buy">
			<div className="works-container buying-container">
				<div className="container">
					<h1>BUYING ON STOCKX</h1>
					<div className="explanation-row">
						<div className="filled-icon bid" ></div>
						<div className="step">
							<h3 className="step-title">BID (BUY)</h3>
							<p className="step-description">
								Make an offer that any seller can accept; or purchase immediately at the lowest Ask.
							</p>
						</div>	
					</div>

					<div className="explanation-row">
						<div className="filled-icon authenticate" ></div>
						<div className="step">
							<h3 className="step-title">AUTHENTICATE</h3>
							<p className="step-description">
								Seller ships to us. We authenticate, then we release funds to the seller.
							</p>
						</div>
					</div>

					<div className="explanation-row">
						<div className="filled-icon prosper" ></div>
						<div className="step">
							<h3 className="step-title">PROSPER</h3>
							<p className="step-description">
								We ship to you. You sip a daiquiri, knowing you will never get a fake.
							</p>
						</div>
					</div>

					<div className="learn-more">
						<a className="btn btn-flat btn-success" target="_blank"  href="#">Learn More About Buying on StockX</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function Sell(props) {
	return(
		<div className="buy">
			<div className="works-container selling-container">
				<div className="container">
					<h1>SELLING ON STOCKX</h1>
					<div className="explanation-row">
						<div className="filled-icon sell" ></div>
						<div className="step">
							<h3 className="step-title">ASK (SELL)</h3>
							<p className="step-description">
								List an item for sale; or sell immediately at the highest Bid.
							</p>
						</div>	
					</div>

					<div className="explanation-row">
						<div className="filled-icon authenticate" ></div>
						<div className="step">
							<h3 className="step-title">AUTHENTICATE</h3>
							<p className="step-description">
								Ship your item within 2 business days. We authenticate, then we ship to the buyer.
							</p>
						</div>
					</div>

					<div className="explanation-row">
						<div className="filled-icon prosper" ></div>
						<div className="step">
							<h3 className="step-title">PROSPER</h3>
							<p className="step-description">
								We release funds to you. You sip a daiquiri, knowing you will never get a chargeback.
							</p>
						</div>
					</div>

					<div className="learn-more">
						<a className="btn btn-flat btn-success" target="_blank"  href="#">
							Learn More About Selling on StockX
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function ModalVideo(props) {
	return(
		<div className="modal fade video-modal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		  	<div className="modal-lg modal-primary modal-dialog" role="document">
			    <div className="modal-content" role="document">

			      	<div className="modal-body">
			        	<div className="video-wrapper">
			        		<iframe title="youtube-video" width="100%" height="315" src="https://www.youtube.com/embed/w5vE1MeMcbA?modestbranding=1&amp;rel=0"></iframe>
			        	</div>
			      	</div>
			   
			    </div>
		  	</div>
		</div>
	);
}