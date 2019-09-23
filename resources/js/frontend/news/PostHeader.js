import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';


class PostHeader extends Component {

  	render() {
        return(
            <div className="header-post full-width">
                <div className="news-list">
                    <div className="header-post-top">
                        <div className="blog-post"> 
                            <a href="#">Editorial</a>
                        </div> 
                        <h1 className="post-title">StockX Needle Movers: August Streetwear New Arrivals</h1>
                    </div>
                    
                    <div className="header-post-bottom">
                        <div className="intro-content">
                            <div className="block-meta">
                                By 
                                <a href="#"> Kevin Kosanovich </a>
                                , 10 hours ago
                            </div>

                            <div className="blog-excerpt">Needle Movers is a monthly segment highlighting the latest streetwear collaborations and brands recently added to StockX. Check out the collections below - just click the photos to shop.</div>
                        </div>
                        
                        <div className="social-share">
                            <a className="social-share-link facebook icon-fa"  href="#">
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a className="social-share-link twitter icon-fa"  href="#">
                                <i className="fa fa-twitter"></i>
                            </a>

                            <a className="social-share-link pinterest icon-fa" href="#">
                                <i className="fa fa-pinterest-p"></i>
                            </a>

                            <a className="social-share-link subscribe-link icon-fa" href="#">

                            </a>
                            <div className = "number-messenger">
                                <div className="blog-count icon-fa">
                                    <span>0</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default PostHeader;