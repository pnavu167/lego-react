import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';
import Header from '../layouts/HeaderComponent'
import Footer from '../layouts/FooterComponent'
import HeaderBanner from './HeaderBanner'
import SubMenu from './SubMenu'
import SubscribeBanner from './SubscribeBanner'
import CatPost from './CatPost'
import NumberPage from './NumberPage';


class Lists extends Component {

  	render() {
        return(
            <div id="news-main-container">
                <Header />
                <SubMenu />
                <HeaderBanner/>

                <div className="cover-size">
                    <CatPost postItem="post-item" postRow="post-row" number = "20"/>
                    <NumberPage/>
                </div>

                <SubscribeBanner />
                <Footer/>
            </div>
        );
    }
}

export default Lists;