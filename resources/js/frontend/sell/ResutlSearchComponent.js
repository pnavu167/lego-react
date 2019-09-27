import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'




class ResutlSearchComponent extends React.Component {
	

	render() {
		return(
			<div className="result">
				<div className="result-image">
					<img src="https://stockx.imgix.net/Nike-SB-Dunk-Low-Supreme-Jewel-Swoosh-Silver-Product.jpg?fit=fill&amp;bg=FFFFFF&amp;w=140&amp;h=100&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1568299952" alt="result thumbnail"/>
				</div>
				<div className="result-details">
					<div className="result-title">Nike SB Dunk Low Supreme Jewel Swoosh Silver</div>
					<div className="result-sub">Metallic Silver / Metallic Silver-Black</div>
				</div>
			</div>
		);
	}
}

export default ResutlSearchComponent;