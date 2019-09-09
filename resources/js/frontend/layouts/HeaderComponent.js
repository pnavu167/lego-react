import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {

	render() {
		return(
			<section id="top-bar">
				<div className="topbar on-top">
					<img className="topbar-logo" id="logo" height="50"/>
					{/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobileBtn" aria-controls="mobileBtn" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>*/}
					<form className="topbar-search">
						<input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
					</form>
					<ul className="topbar-menu">
						<li className="topbar-item active">
							<a className="topbar-link" href="#">Browse <span className="sr-only">(current)</span></a>
						</li>
						<li className="topbar-item">
							<a className="topbar-link" href="#">News</a>
						</li>
						<li className="topbar-item">
							<a className="topbar-link" href="#">App</a>
						</li>
						<li className="topbar-item">
							<a className="topbar-link" href="#">Portfolio</a>
						</li>
						<li className="topbar-item">
							<a className="topbar-link" href="#">About</a>
						</li>
						<li className="topbar-item">
							<a className="topbar-link" href="#">FAQ</a>
						</li>
						<li className="topbar-item">
							<a className="topbar-link" href="#">Login</a>
						</li>
						<li className="topbar-item">
							<a className="topbar-link" href="#">Sign Up</a>
						</li>
						<li className="topbar-item topbar-item-sell">
							<a className="topbar-link" href="#">Sell</a>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default Header;