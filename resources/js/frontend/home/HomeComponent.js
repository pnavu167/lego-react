import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component
import HomeBanner from './HomeBannerComponent'
import HomeSlider from './HomeSliderComponent'
import HomeContainer from './HomeContainerComponent'

class Home extends Component {

  	render() {
        return(
            <div id="home-container">
            	<HomeBanner />
            	<HomeSlider />
            	<HomeContainer />
            </div>
        );
    }
}

export default Home;