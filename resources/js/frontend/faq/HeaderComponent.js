import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class HeaderComponent extends React.Component {
	render() {
		return(
			<div className="themeHeaderInner">
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
						</ul>	
					</div>
				</div>
			</div>
		);
	}
}

export default HeaderComponent;