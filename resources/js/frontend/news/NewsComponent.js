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
import NewsSlider from './NewsSlider'
import SubscribeBanner from './SubscribeBanner'

class News extends Component {

  	render() {
        return(
            <div id="news-main-container">
                <Header/>
                    <SubMenu />
                    <div className="cover-size">
                        <NewsSlider/>
                        <CatPost title = "sneakers" postRow = '' postItem = ''/>
                        <CatPost title = "streetwear" postRow = '' postItem = ''/>
                        <CatPost title = "handbags" postRow = '' postItem = ''/>
                        <CatPost title = "watches" postRow = '' postItem = ''/>
                        <CatPost title = "editorial" postRow = '' postItem = ''/>
                    </div>

                    <SubscribeBanner />
                <Footer/>
            </div>
        );
    }
}

export default News;

function SubMenu() {
    return (
        <div className="blog">
            <div className="pg-blog">
                <div className="blog-category">
                    <ul>
                        <LinkSubMenu name='News' firstClass = 'first-category'/>
                        <LinkSubMenu name='Sneakers'/>
                        <LinkSubMenu name='Streetwear'/>
                        <LinkSubMenu name='Handbags'/>
                        <LinkSubMenu name='Watches'/>
                        <LinkSubMenu name='Editorial'/>
                    </ul>
                </div>

                <BtnSubscribe name='Subscribe'/>
            </div>
        </div>  
    );
}

function LinkSubMenu(props) {
    return (
        <li className={props.firstClass}>
            <a href="#" className="color-gray bold type-news">{props.name}</a>
        </li>
    );
}

function BtnSubscribe(props) {
    return(
        <div className="subscribe">
            <a href="#" className="subscribe-link icon-fa fnt-size-14 color-gray bold">
                {props.name}
            </a>
        </div>
    );
}



