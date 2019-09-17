import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';

class NewsSlider extends Component {


  	render() {
        return(
            <div className="news">
                <div className="news-slider">
                    <div id="newsCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#newsCarousel" data-slide-to="0" className="active"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="image-slider">
                                    <div className="slider-overlay"></div>
                                </div>
                                
                                <div className="slider-detail">
                                    <div className="blog-post">
                                        <span>Editorial</span>
                                    </div>
                                    <h2 className="headline-slider">Fall Essentials by StockX</h2>
                                    <div className="slider-excerpt">
                                        With another fall season inevitably creeping up on us, StockX is here to help ease your seasonal closet transition in the best way possible, with our selection of "Fall Essentials".
                                    </div>

                                    <button type="button" className="button btn-read-more">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-list">
                    <ul className="list">
                        <li>
                            <div className="recent-item">
                                <div className="blog-post"> 
                                    <a href="#">Editorial</a>
                                </div> 
                                <a href="#" className="block-title">Off The Top | DeAndre Hopkins</a>
                                <div className="block-meta">
                                    By 
                                    <a href="#"> Kevin Kosanovich </a>
                                    , 10 hours ago
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="recent-item">
                                <div className="blog-post"> 
                                    <a href="#">Editorial</a>
                                </div> 
                                <a href="#" className="block-title">Off The Top | DeAndre Hopkins</a>
                                <div className="block-meta">
                                    By 
                                    <a href="#"> Kevin Kosanovich </a>
                                    , 10 hours ago
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="recent-item">
                                <div className="blog-post"> 
                                    <a href="#">Editorial</a>
                                </div> 
                                <a href="#" className="block-title">The MCA Virgil Abloh: "Figures of Speech" Interview</a>
                                <div className="block-meta">
                                    By 
                                    <a href="#"> Kevin Kosanovich </a>
                                    , 10 hours ago
                                </div>
                            </div>
                        </li>

                        <li className="no-border">
                            <div className="recent-item">
                                <div className="blog-post"> 
                                    <a href="#">Editorial</a>
                                </div> 
                                <a href="#" className="block-title">Off The Top | DeAndre Hopkins</a>
                                <div className="block-meta">
                                    By 
                                    <a href="#"> Kevin Kosanovich </a>
                                    , 10 hours ago
                                </div>
                            </div>
                        </li>

                       
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default NewsSlider;