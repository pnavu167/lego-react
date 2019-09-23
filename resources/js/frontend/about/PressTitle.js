import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class PressTitle extends React.Component {
	render() {
		return(
			<div className="row title-container">
				<div className="container title">
					<div className="row">
						<div className="col-md-12 col-xs-12">
							<h1>Press</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PressTitle;