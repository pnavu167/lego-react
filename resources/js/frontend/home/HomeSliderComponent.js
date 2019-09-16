import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';
// import Switcher from './SwitcherComponent';

class HomeBanner extends Component {

  	render() {
        return(
            <section id="home-slider">
            	<div className="home-slider site-mobile-margin-top">
                    <div className="home-slider-item">
                        <img src="/storage/images/home/home-slider-1.jpg" />
                    </div>
                    <div className="home-slider-item">
                        <img src="/storage/images/home/home-slider-2.jpg" />
                    </div>
                    <div className="home-slider-item">
                        <img src="/storage/images/home/home-slider-3.jpg" />
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeBanner;