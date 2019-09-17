import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';
import Header from '../layouts/HeaderComponent'
import Footer from '../layouts/FooterComponent'
import CatPost from './CatPost'
import SubMenu from './SubMenu'
import NewsSlider from './NewsSlider'
import SubscribeBanner from './SubscribeBanner'

class News extends Component {

  	render() {
        return(
            <div id="news-main-container">
                <Header type="on-top home-topbar" />
                    <SubMenu />
                    <div className="cover-size">
                        <NewsSlider/>
                        <CatPost title = "sneakers"/>
                        <CatPost title = "streetwear"/>
                        <CatPost title = "handbags"/>
                        <CatPost title = "watches"/>
                        <CatPost title = "editorial"/>
                    </div>

                    <SubscribeBanner />
                <Footer/>
            </div>
        );
    }
}

export default News;