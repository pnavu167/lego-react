import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import SideArticle from './SideArticle'

class SideContainer extends React.Component {
	render() {
		return(
			<div className="side-container">
				<h2 className="container-title">Featured Press</h2>
				<div className="featured-list">
					<SideArticle/>
					<SideArticle/>
					<SideArticle/>
					<SideArticle/>
					<SideArticle/>
					<SideArticle/>
					<SideArticle/>
				</div>
			</div>
		);
	}
}

export default SideContainer;