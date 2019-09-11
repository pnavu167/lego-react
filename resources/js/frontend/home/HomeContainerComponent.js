import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component
import HomeRow from './HomeRowComponent'
import HomeNewsRelease from './HomeNewReleaseComponent'

class HomeContainer extends Component {

  	render() {
        return(
            <div className="container home-container">
            	<HomeRow title="Category" rowType="category" />
            	<HomeRow title="Product" rowType="product" />
            	<HomeRow title="Product 2" rowType="product" />
            	<HomeRow title="Product 3" rowType="product" />
            	<div className="browse-all-button align-center font-18">
            		Browse Thousands of Sneakers on our Live Marketplace
            	</div>
            	<HomeNewsRelease />
            </div>
        );
    }
}

export default HomeContainer;