import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component
import HomeNews from './HomeNewsComponent'
import HomeRelease from './HomeReleaseComponent'

class HomeNewsRelease extends Component {

  	render() {
        return(
            <div id="home-news-release" className="home-news-release row mb-5 mb-sm-3">
                <div className="col-lg-8 col-sm-12 order-lg-2 mb-sm-3 d-none d-sm-block">
                    <HomeRelease />
                </div>
                <div className="col-lg-4 col-sm-12 border-bottom order-lg-1">
                    <HomeNews />
                </div>
                
            </div>
        );
    }
}

export default HomeNewsRelease;