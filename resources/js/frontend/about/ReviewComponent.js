import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import Footer from '../layouts/FooterComponent'
import Header from '@/layouts/HeaderComponent'

class ReviewComponent extends React.Component {
	render() {
		return(
			<div className="review-container">
				<Header/>
				<div className ='mg-top-header'>
					<div className = 'row  title-review'>
						<div className = 'container title'>
							<div className = 'row title-big'>
								<h1>WHAT PEOPLE ARE SAYING ABOUT US</h1>
							</div>
							<div className = 'row title-small'>
								<p>These StockX reviews are a perfect peek at how our live marketplace has 
								changed the game for both buyers and sellers. Make sure to share your own love for 
								StockX on Twitter and Instagram for a chance to be a featured review here.</p>
							</div>
						</div>
					</div>
					
				</div>
				<div className = 'featured-review'>
					<div className = 'container '>
						<div className ='featured-inner'>
							<div className = 'featured-image'>
								<img src="/storage/images/review/em.png" />
							</div>
							<div className = 'featured-details'>
								<p>"I really like the fact that sneakers are a big part of what StockX is doing. 
								When I found out that they happen to be doing it from downtown Detroit, 
								it made even more sense to get involved."</p>
								<h3>-EMINEM</h3>
							</div>
						</div>
					</div>
				</div>

				<ReviewGrid/>
				<Footer/>
			</div>
		);
	}
}

export default ReviewComponent;

function ReviewGrid() {
	return(
		<div className = 'review-grid'>
			<ReviewBlock/>
			<ReviewBlock/>
			<ReviewBlock/>
			<ReviewBlock/>
			<ReviewBlock/>
			<ReviewBlock/>
			<ReviewBlock/>
			<ReviewBlock/>
			<ReviewBlock/>
		</div>
	)
}

function ReviewBlock() {
	return(
		<div className = 'review-block'>
			<div className = 'review-image'>
				<div className ='divider'></div>
				<img src="/storage/images/review/sole.png" />
				<div className ='divider'></div>
			</div>
			<div className = 'review-content'>
				StockX App Offers Easiest and Fastest Way to Buy/Sell Sneakers
			</div>
			<div className = 'review-byline'>
				-Sole Collector
			</div>
		</div>
	)
}