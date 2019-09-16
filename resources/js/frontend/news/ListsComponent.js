import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';
import Header from '../layouts/HeaderComponent'
import Footer from '../layouts/FooterComponent'

class Lists extends Component {

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

                    <div className="banner-header">
                        <div className="cover-size">
                            <div className="banner-content">
                                <h1 className="banner-title">Sneakers</h1>
                                <p className="banner-description">From forecasting a sneaker’s market price, to their historical & cultural relevance, the StockX blog has you covered with all of the sneaker analysis you need.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cover-size">
                        <div className="cat-post">

                            <div className="blog-post-row post-row">
                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                                <div className="blog-post-block post-item">
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

                            <div className="load-more">
                                <ul className="paging">
                                    <li>
                                        <a className="pre page-numbers" href="#"></a>
                                    </li>
                                    <li>
                                        <a className="page-numbers" href="#">1</a>
                                    </li>
                                    <li>
                                        <a className="page-numbers current" href="#">2</a>
                                    </li>
                                    <li>
                                        <a className="page-numbers" href="#">3</a>
                                        
                                    </li>
                                    <li>
                                        <span className="page-numbers dots">…</span>                        
                                    </li>
                                    <li>
                                        <a className="page-numbers" href="#">35</a>
                                    </li>
                                    <li><a className="page-numbers" href="#">36</a></li>
                                    <li>
                                        <a className="next page-numbers" href="#"> </a>
                                    </li>
                                </ul>                
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

export default Lists;