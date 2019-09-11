import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {

	constructor(props) {
		super(props)
		this.state = {
			'toggleSearch': false
		}
	}

	toggleSearch(e) {
		if(this.state.toggleSearch) {
			this.setState({'toggleSearch': false})
		} else {
			this.setState({'toggleSearch': true})
		}
	}

	fetchTopbarMobile(toggleSearch) {
		if(toggleSearch) {
			return (
				<div className="topbar-mobile navbar-light">
					<BtnMobileToggle />
					<form className="topbar-mobile-search">
						<input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
					</form>
					<div className="search-toggle" id="mobile-search-toggle" onClick={this.toggleSearch.bind(this)}>
						<i className="fa fa-times" aria-hidden="true"></i>
					</div>
				</div>
			)
		} else {
			return (
				<div className="topbar-mobile navbar-light">
					<BtnMobileToggle />
					<img className="topbar-logo" id="logo" />
					<div className="search-toggle" id="mobile-search-toggle" onClick={this.toggleSearch.bind(this)}>
						<i className="fa fa-search"></i>
					</div>	
				</div>
			)
		}
	}

	render() {
		return(
			<section id="top-bar">
				<div className={`topbar ${this.props.type?this.props.type:""}`}>
					<img className="topbar-logo" id="logo" />
					<form className="topbar-search">
						<input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
					</form>
					<TopbarMenu className="topbar-menu" />
				</div>
				{this.fetchTopbarMobile(this.state.toggleSearch)}
				<TopbarMenu className="topbar-mobile-menu collapse navbar-collapse" id="topbar-mobile-menu" />
			</section>
		);
	}
}

export default Header;

function BtnMobileToggle() {
	return (
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbar-mobile-menu" aria-controls="topbar-mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
	)
}

function TopbarMenu(props) {
	return (
		<ul className={props.className} id={props.id}>
			<li className="topbar-item active has-sup-menu">
				<a className="topbar-link" href="#">Browse 
					<span className="sr-only">(current)</span>
				</a>
				<SupMenu hasChild="3" />
			</li>
			<SupMenu hasChild="1" type="mobile" />
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
			<li className="topbar-item topbar-mobile-btn-group topbar-menu-hide">
				<a className="btn-login" href="#">Login</a>
				<a className="btn-signup" href="#">Sign Up</a>
			</li>
		    <li className="topbar-item topbar-mobile-menu-hide">
				<a className="topbar-link" href="#">Login</a>
			</li>
			<li className="topbar-item topbar-mobile-menu-hide">
				<a className="topbar-link" href="#">Sign Up</a>
			</li>
			<li className="topbar-item topbar-item-sell topbar-mobile-menu-hide">
				<a className="topbar-link" href="#">Sell</a>
			</li>
		</ul>
	)
}

function SupMenu(props) {
	
	if(props.type == "mobile") {
		return (
			<li className="topbar-item topbar-menu-hide topbar-mobile-sup-menu">
				<div className="sup-item">
					<a className="sup-link">Sneakers</a>
					<i className="fa fa-chevron-right"></i>
				</div>
				<div className="sup-item">
					<a className="sup-link">Streetwear</a>
					<i className="fa fa-chevron-right"></i>
				</div>
				<div className="sup-item">
					<a className="sup-link">Wathches</a>
					<i className="fa fa-chevron-right"></i>
				</div>
				<div className="sup-item">
					<a className="sup-link">Handbags</a>
					<i className="fa fa-chevron-right"></i>
				</div>
			</li>
		)
	} else {
		var hasChild = props.hasChild - 1
		if(hasChild >= 0) {
			return (
				<ul className="sup-menu topbar-mobile-menu-hide">
					<li className="sup-item has-sup-menu">
						<a className="sup-link">Sneakers</a>
						<SupMenu hasChild={hasChild} />
					</li>
					<li className="sup-item">
						<a className="sup-link">Streetwear</a>
					</li>
					<li className="sup-item">
						<a className="sup-link">Wathches</a>
					</li>
					<li className="sup-item">
						<a className="sup-link">Handbags</a>
					</li>
				</ul>
			)
		} else {
			return null
		}
	}
}
