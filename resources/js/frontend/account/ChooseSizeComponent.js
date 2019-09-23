import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class ChooseSizeComponent extends React.Component {

	constructor (props) {
	    super(props)
	    this.state = {
            'size': ''
        }

	    this.setSizeSneaker = this.setSizeSneaker.bind(this);
	}

	setSizeSneaker(e) {
		let size = e.currentTarget.dataset.txt;
	   	this.setState(state => ({
			size: size
		}));
	}

	render() {

		return(
			<div className = "vice-size-sneaker">
				<div className="explainer select-size-exaplainer">Select U.S. Men's Size:</div>
				<div className="form-control btn-group bootstrap-select show-menu-arrow addr-exclude signup-size-select">
					<button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Size 3.5" aria-expanded="false">
						<span className="filter-option pull-left">{this.state.size?this.state.size:'Please select size'}</span>
						&nbsp;
						<span className="caret"></span>
					</button>
					<div className="dropdown-menu open">
						<ul>
							<li onClick={this.setSizeSneaker.bind(this)} data-txt="Size 3.5">
								<a tabIndex="0" role="button" id="option-3.5" data-value="3.5">
									<span className="text">Size 3.5</span>
								</a>
							</li>

							<li onClick={this.setSizeSneaker.bind(this)} data-txt="Size 4">
								<a tabIndex="0" role="button" id="option-4" data-value="4">
									<span className="text">Size 4</span>
								</a>
							</li>

							<li onClick={this.setSizeSneaker.bind(this)} data-txt="Size 4.5">
								<a tabIndex="0" role="button" id="option-4" data-value="4">
									<span className="text">Size 4.5</span>
								</a>
							</li>

							<li onClick={this.setSizeSneaker.bind(this)} data-txt="Size 5">
								<a tabIndex="0" role="button" id="option-4" data-value="4">
									<span className="text">Size 5</span>
								</a>
							</li>

							<li onClick={this.setSizeSneaker.bind(this)} data-txt="Size 5.5">
								<a tabIndex="0" role="button" id="option-4" data-value="4">
									<span className="text">Size 5.5</span>
								</a>
							</li>

							<li onClick={this.setSizeSneaker.bind(this)} data-txt="Size 6">
								<a tabIndex="0" role="button" id="option-4" data-value="4">
									<span className="text">Size 6</span>
								</a>
							</li>

							<li onClick={this.setSizeSneaker.bind(this)} data-txt="Size 6.5">
								<a tabIndex="0" role="button" id="option-4" data-value="4">
									<span className="text">Size 6.5</span>
								</a>
							</li>

							<li onClick={this.setSizeSneaker.bind(this)} data-txt="Size 7">
								<a tabIndex="0" role="button" id="option-4" data-value="4">
									<span className="text">Size 7</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ChooseSizeComponent;