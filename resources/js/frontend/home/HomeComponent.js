import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component
import HomeBanner from './HomeBannerComponent'
import HomeSlider from './HomeSliderComponent'
import HomeContainer from './HomeContainerComponent'
import HomeTradeMark from './HomeTradeMarkComponent'
import Switcher from './SwitcherComponent';
import Header from '../layouts/HeaderComponent'

class Home extends Component {

  	render() {
        return(
            <div id="home-container">
                <Header type="on-top home-topbar" />
            	<HomeBanner />
            	<HomeSlider />
                <Switcher type="mobile-tablet" />
                <HomeTradeMark type="mobile-tablet" />
            	<HomeContainer />
            	<HomeTradeMark type="" />
            </div>
        );
    }
}

export default Home;