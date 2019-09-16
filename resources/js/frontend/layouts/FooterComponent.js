import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

class Footer extends Component {

	render() {
		return(
			<div className="footer">
				<div className="brand  ">

					<div className="col-brand  ">
						<h2 className="title-option">
							<a href="#">Recent Updates</a>
						</h2>
						<div className="list-option">
							<ul>
								<li><a href="#">Jordan 1 UNC High Leather</a></li>
								<li><a href="#">Jordan 1 UNC High Leather Analysis</a></li>
								<li><a href="#">Yeezy 700 V2 Inertia</a></li>
								<li><a href="#">Jordan 6 Travis Scott</a></li>
								<li><a href="#">Yeezy 350 Lundmark</a></li>
								<li><a href="#">Jordan 1 Satin Black Toe</a></li>
							</ul>
						</div>
					</div>
					
					<div className="col-brand ">
						<h2 className="title-option">
							<a href="#">Popular Releases</a>
						</h2>
						<div className="list-option">
							<ul>
								<li><a href="#">Nike Supreme Dunk Low Silver</a></li>
								<li><a href="#">Yeezy 350 Lundmark</a></li>
								<li><a href="#">Yeezy 500 Bone White</a></li>
								<li><a href="#">Jordan 1 Satin Black Toe</a></li>
								<li><a href="#">Jordan 1 UNC High Leather</a></li>
								<li><a href="#">Yeezy 700 V2 Inertia</a></li>
							</ul>
						</div>
					</div>
					
					<div className="col-brand ">
						<h2 className="title-option">
							<a href="#">Air Jordan</a>
						</h2>
						<div className="list-option">
							<ul>
								<li><a href="#">Jordan 1 Shattered Backboard Low</a></li>
								<li><a href="#">Jordan 1 Travis Scott Low</a></li>
								<li><a href="#">Jordan 6 Travis Scott</a></li>
								<li><a href="#">Jordan 1 Satin Black Toe</a></li>
								<li><a href="#">Jordan 1 UNC High Leather</a></li>
								<li><a href="#">Jordan 1 Mid Shattered Backboard</a></li>
							</ul>
						</div>
					</div>
					
					<div className="col-brand ">
						<h2 className="title-option">
							<a href="#">adidas</a>
						</h2>
						<div className="list-option">
							<ul>
								<li><a href="#">adidas Yeezy Boost 350</a></li>
								<li><a href="#">adidas Yeezy 500</a></li>
								<li><a href="#">adidas Yeezy Boost 700</a></li>
								<li><a href="#">adidas Yeezy Powerphase</a></li>
								<li><a href="#">adidas Ultra Boost</a></li>
								<li><a href="#">adidas NMD</a></li>
							</ul>
						</div>
					</div>
					
					<div className="col-brand ">
						<h2 className="title-option">
							<a href="#">Nike</a>
						</h2>
						<div className="list-option">
							<ul>
								<li><a href="#">Nike Sacai Waffle Grey</a></li>
								<li><a href="#">Nike Sacai Waffle Black</a></li>
								<li><a href="#">Nike Sacai Waffle Green Purple</a></li>
								<li><a href="#">Nike SB Dunk Low Supreme Silver</a></li>
								<li><a href="#">Nike SB Dunk Low Supreme Red</a></li>
								<li><a href="#">Nike SB Dunk Low Supreme Gold</a></li>
							</ul>
						</div>
					</div>
					
					<div className="col-brand">
						<h2 className="title-option">
							<a href="#">Streetwear</a>
						</h2>
						<div className="list-option">
							<ul>
								<li><a href="#">Supreme</a></li>
								<li><a href="#">Kith</a></li>
								<li><a href="#">Off-White</a></li>
								<li><a href="#">Bape</a></li>
								<li><a href="#">Palace</a></li>
								<li><a href="#">Kaws</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="contract ">
					<div className="container-contract">
						<div className="language ">
							<div className="btn-change">
								<span>English (en)</span>
								<span></span>
								<span>$ USD</span>
							</div>
						</div>
						<div className="social-container">
							<div className="social ">
								<a href="#" target="_blank" className="social-link">
									<img src="//stockx-assets.imgix.net/svg/icons/twitter-footer.svg?auto=compress,format" 
									className="icon"/>
								</a>
								<a href="#" target="_blank" className="social-link">
									<img src="//stockx-assets.imgix.net/svg/icons/facebook-footer.svg?auto=compress,format" 
									className="icon"/>
								</a>

								<a href="#" target="_blank" className="social-link">
									<img src="//stockx-assets.imgix.net/svg/icons/instagram-footer.svg?auto=compress,format" 
									className="icon"/>
								</a>

								<a href="#" target="_blank" className="social-link">
									<img src="//stockx-assets.imgix.net/emails/the-outsole/youtube-black.png?auto=compress,format" 
									className="icon"/>
								</a>
							</div>

							<div className="app ">
								Get the app
								<a href="#" target="_blank" className="app-link">
									<img src="//stockx-assets.imgix.net/svg/icons/apple-logo-white.svg?auto=compress,format" 
									className="icon"/>
								</a>

								<a href="#" target="_blank" className="app-link">
									<img src="//stockx-assets.imgix.net/svg/icons/android-logo-white.svg?auto=compress,format" 
									className="icon"/>
								</a>
							</div>
						</div>
						

						<div className="proudly ">
							<i className="fa fa-cog"></i>
							<a href="#" target="_blank"> Proudly Built in Detroit</a>
						</div>
					</div>	
				</div>

				<div className="footerBottom">
					<div className="site-footer cover-size">
						<div className="information-link">
							<div className="link firt-link">
								<a href="#">FAQ</a>
							</div>

							<div className="link">
								<a href="#">How It Works</a>
							</div>

							<div className="link">
								<a href="#">Review</a>
							</div>

							<div className="link">
								<a href="#">Privacy</a>
							</div>

							<div className="link">
								<a href="#">Terms</a>
							</div>

							<div className="link">
								<a href="#">Jobs</a>
							</div>

							<div className="link">
								<a href="#">Contact</a>
							</div>

							<div className="link">
								<a href="#">Product Request</a>
							</div>

							<div className="link">
								<a href="#">Press</a>
							</div>
						</div>
						<div className="copyright">
							©2019 StockX. All Rights Reserved.	
						</div>
					</div>
				</div>
			</div>
		);
	}


}
export default Footer;

