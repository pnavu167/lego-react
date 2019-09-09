import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component
import HomeNews from './HomeNewsComponent'
import HomeRelease from './HomeReleaseComponent'

class HomeNewsRelease extends Component {

  	render() {
        return(
            <div id="home-news-release" className="home-news-release row">
                <div className="col-4">
                    <HomeNews />
                </div>
                <div className="col-8">
                    <HomeRelease />
                </div>
            </div>
        );
    }
}

export default HomeNewsRelease;