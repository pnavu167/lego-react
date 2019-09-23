import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class PressPost extends React.Component {
	render() {
		return(
			<div className="article row">
				<div className="image hidden-xs col-sm-3">
					<img src="https://media.gqitalia.it/photos/5d7b5fe962c4eb0008a48134/16:9/w_3840%2cc_limit/sneakerness_milano_2019_12.png" alt=""/>
				</div>
				<div className="content col-xs-12 col-md-9">
					<h1 className="title">
						<a href="#">Sneakerness, all set for the second edition of Milan</a>
					</h1>
					<div className="pub-date">
						<span className="pub">GQ Italia | </span>
						<span className="date">09/13/2019</span>
					</div>
					<p>There is talk of fakes, to the point that, and it is a novelty of the next edition of Sneakerness (weekend of 5 and 6 October 2019 at the Fabbrica Orobia) StockX , sponsor of the event, has seen fit to send its authenticators to the city, the experts who certify the sneakers....
						<a href="#" className="continue">Continue Reading</a>
					</p>
				</div>
			</div>
		);
	}
}

export default PressPost;