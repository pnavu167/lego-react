import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class SideArticle extends React.Component {
	render() {
		return(
			<div className="side-article">
				<a href="#">Sneaker Marketplace StockX Seeks New Customers With Bleacher Report Deal</a>
				<br/>
				<label className="pub">The Wall Street Journal</label>
				<br/>
				<label className="date">09/11/2019</label>
			</div>
		);
	}
}

export default SideArticle;