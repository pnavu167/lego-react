import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class HeaderComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			'toggleSearch': false,
			'toggleBurgerMenu': false
		}

		this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
	}

	toggleSearch(e) {
		if(this.state.toggleSearch) {
			this.setState({'toggleSearch': false})
		} else {
			this.setState({'toggleSearch': true})
		}
	}

	toggleBurgerMenu() {
		this.setState(state => ({
			toggleBurgerMenu: !this.state.toggleBurgerMenu
		}));
	}

	fetchTopbarMobile(toggleSearch) {
		if(toggleSearch) {
			return (
				<div className="topbar-mobile navbar-light">
					<form className="topbar-mobile-search">
						<i className="fa fa-search"></i>
						<input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
					</form>
					<div className="search-toggle" id="mobile-search-toggle" onClick={this.toggleSearch.bind(this)}>
						Cancel
					</div>
					
				</div>
			)
		} else {
			return (
				<div className="topbar-mobile navbar-light">
					<button className={this.state.toggleBurgerMenu?"navbar-toggler btn-close open":"navbar-toggler btn-menu"} type="button" 
					data-toggle="collapse" data-target="#topbar-mobile-menu" 
					aria-controls="topbar-mobile-menu" aria-expanded="false" 
					aria-label="Toggle navigation" onClick={this.toggleBurgerMenu}>

						<div className="themeNavTrigger">
							<span className="themeBurgerLine" ></span>
							<span className="themeBurgerLine" ></span>
							<span className="themeBurgerLine" ></span>
							<span className="themeBurgerLine" ></span>
							<span className="themeBurgerLine" ></span>
							<span className="themeBurgerLine" ></span>
						</div>

					</button>
					<div className="search-toggle" id="mobile-search-toggle" onClick={this.toggleSearch.bind(this)}>
						<i className="fa fa-search"></i>
					</div>
						
				</div>
			)
		}
	}

	
	render() {
		return(
			<div className="themeHeaderInner">
				<div className = {this.props.type}>
					<div className = "themeLogo">
						<a href = "#" className = "forceCommunityThemeLogo">
							<div className = "logoImage"></div>
						</a>
					</div>
					<div className = "themeNav">
						<div className = "websterHomeHeader">
							<ul className = "visible-links">
								<li className="mainNavItem menu-item active" >
									<a className="menu-item-link" href="#">Home</a>
								</li>
								<li className="mainNavItem menu-item" >
									<a className="menu-item-link" href="#">StockX Home</a>
								</li>
								{this.props.search &&
									<li className="mainNavItem menu-item" >
										<div className="search-toggle" id="mobile-search-toggle" onClick={this.toggleSearch.bind(this)}>
											<i className="fa fa-search"></i>
										</div>
									</li>
								}
							</ul>	
						</div>
					</div>
				</div>
				<div className = 'header-sp'>
					{this.fetchTopbarMobile(this.state.toggleSearch)}
					<TopbarMenu className="topbar-mobile-menu collapse navbar-collapse list_menu" id="topbar-mobile-menu" />
				</div>
			</div>
		);
	}
}

export default HeaderComponent;

function TopbarMenu(props) {
	return (
		<ul className={props.className} id={props.id}>
			<li className="topbar-item active has-sup-menu">
				<a className="topbar-link" href="#">Home</a>
			</li>
			<li className="topbar-item">
				<a className="topbar-link" href="#">StockX Home</a>
			</li>
		</ul>
	)
}