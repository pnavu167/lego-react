import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class AboutComponent extends React.Component {
	render() {
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
									<img width="100%" src="//stockx-assets.imgix.net/banners/wale/video-image.jpg?auto=compress,format"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutComponent;