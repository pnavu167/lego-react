import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';
import Switcher from './SwitcherComponent';

class HomeBanner extends Component {

  	render() {
        return(
            <section id="home-banner">
            	<div className="banner-container">
            		{/*<LitleContent />
            		<BigContent />
            		<ContainerSearch />
            		<Switcher />*/}
            		<div className="litle">
            			The Stock Market of Things
            		</div>
            		<div className="big">
            			Buy and Sell Authentic Sneakers
            		</div>
        			<form className="form-search">
        				<input type="search" id="home-search" placeholder="Search for brand, color, etc." className="searchbox input-text form-control" aria-label="Search" />
        				<button className="home-btn-search">Search</button>
        			</form>
            		<Switcher />
	            </div>
            </section>
        );
    }
}

export default HomeBanner;