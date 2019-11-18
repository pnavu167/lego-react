import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class TitleContainer extends React.Component {
	constructor(props){
		super(props);    
	}
	render() {
		return(
			<div className="row title-container">
				<div className="container title">
					<div className="row">
						<div className="col-md-12 col-xs-12">
							<h1>{this.props.headerTitle}</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TitleContainer;