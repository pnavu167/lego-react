import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';
import Header from '../layouts/HeaderComponent'
import Footer from '../layouts/FooterComponent'

class News extends Component {

  	render() {
        return(
            <div id="news-main-container">
                <Header type="on-top home-topbar" />
                    <div className="blog">
                        <div className="pg-blog">
                            <div className="blog-category">
                                <ul>
                                    <li className="first-category">
                                        <a href="#" className="color-gray bold type-news">News</a>
                                    </li>
                                    <li><a href="#" className="color-gray bold type-news">Sneakers</a></li>
                                    <li><a href="#" className="color-gray bold type-news">Streetwear</a></li>
                                    <li><a href="#" className="color-gray bold type-news">Handbags</a></li>
                                    <li><a href="#" className="color-gray bold type-news">Watches</a></li>
                                    <li><a href="#" className="color-gray bold type-news">Editorial</a></li>
                                </ul>
                            </div>
                            <div className="subscribe">
                                <a href="#" className="subscribe-link icon-fa fnt-size-14 color-gray bold">Subscribe</a>
                            </div>

                        </div>
                    </div>
                    <div className="cover-size">
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
                        <div className="cat-post">
                            <div className="type-post">
                                <h2 >Sneakers</h2> 
                                <a href="#" className="cat-post-section">View All</a>
                            </div>

                            <div className="blog-post-row">
                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                            and
                                            <a href="#">Streetwear</a>
                                        </div> 
                                        <a href="#" className="block-title">
                                            Obsidian UNC Jordans & Satins Shatter Records | StockX MKT Watch
                                        </a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cat-post">
                            <div className="type-post">
                                <h2 >Streetwear</h2> 
                                <a href="#" className="cat-post-section">View All</a>
                            </div>

                            <div className="blog-post-row">
                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                            and
                                            <a href="#">Streetwear</a>
                                        </div> 
                                        <a href="#" className="block-title">
                                            Obsidian UNC Jordans & Satins Shatter Records | StockX MKT Watch
                                        </a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cat-post">
                            <div className="type-post">
                                <h2 >Handbags</h2> 
                                <a href="#" className="cat-post-section">View All</a>
                            </div>

                            <div className="blog-post-row">
                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                            and
                                            <a href="#">Streetwear</a>
                                        </div> 
                                        <a href="#" className="block-title">
                                            Obsidian UNC Jordans & Satins Shatter Records | StockX MKT Watch
                                        </a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cat-post">
                            <div className="type-post">
                                <h2 >Watches</h2> 
                                <a href="#" className="cat-post-section">View All</a>
                            </div>

                            <div className="blog-post-row">
                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                            and
                                            <a href="#">Streetwear</a>
                                        </div> 
                                        <a href="#" className="block-title">
                                            Obsidian UNC Jordans & Satins Shatter Records | StockX MKT Watch
                                        </a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cat-post">
                            <div className="type-post">
                                <h2 >Editorial</h2> 
                                <a href="#" className="cat-post-section">View All</a>
                            </div>

                            <div className="blog-post-row">
                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                            and
                                            <a href="#">Streetwear</a>
                                        </div> 
                                        <a href="#" className="block-title">
                                            Obsidian UNC Jordans & Satins Shatter Records | StockX MKT Watch
                                        </a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-post-block">
                                    <a href="#" className="blog-img">
                                        <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                                        className="full-width"/>
                                    </a>

                                    <div className="news-list full-width">
                                        <div className="blog-post"> 
                                            <a href="#">Sneakers</a>
                                        </div> 
                                        <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                                        <div className="block-meta">
                                            By 
                                            <a href="#"> Kevin Kosanovich </a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-subscribe">
                        <div className="cover-size">
                            <div className="content-subscribe">
                                <h2 className="headline-subscribe">Stockx News. Sign Up. Stay Updated.</h2>
                                <div className="form subscribe-form">
                                    <form method="post"> 
                                        <div className="form-element-subscribe"> 
                                            <input type="email" placeholder="Enter email for StockX news" name="email" className="color-gray bold"/> 
                                        </div> 
                                        <input type="submit" value="Subscribe" className="button btn-subscribe"/> 
                                    </form>
                                </div>
                            </div>
                            
                        </div>      
                    </div>  
                <Footer/>
            </div>
        );
    }
}

export default News;