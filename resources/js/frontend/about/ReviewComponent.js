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
			<div className = 'title-container mg-top-header'>
				<div className ='container title'>
					<div className = 'big-title-container'>
						<h1>WHAT PEOPLE ARE SAYING ABOUT US</h1>
					</div>
					<div className = 'small-title-container'>
						<p>These StockX reviews are a perfect peek at how our live marketplace has changed the game for both buyers and sellers. 
						Make sure to share your own love for StockX on Twitter and Instagram for a chance to be a featured review here.</p>
					</div>
				</div>
			</div>
			<Footer/>
			</div>
		);
	}
}

export default ReviewComponent;