import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';
import Header from '../layouts/HeaderComponent'
import Footer from '../layouts/FooterComponent'
import SubscribeBanner from './SubscribeBanner'
import PostHeader from './PostHeader'
import CatPost from './CatPost'
import ProductWrapper from './ProductWrapper'
import AuthorComponent from './AuthorComponent'
import SubMenu from './SubMenu'

class PostTwo extends Component {

  	render() {
        return(
            <div id="new-main-container">
                <Header />
                <SubMenu />

                <div className="cover-size-post">
                    <PostHeader/>
                    
                    <div className="post-body">
                        <div className="blog-article">
                            <div className="blog-article-main">
                                <div className="editor-content">
                                    <p>
                                        <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
                                            <img className="alignnone size-full wp-image-73123 aligncenter" src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/50off-SellerFee-ig-story.jpg" alt="" width="1080" height="1920" />
                                        </a>
                                    </p>
                                    <p>
                                        Clean out your closet and get some extra cash for your fall looks with 50% off all seller fees starting&nbsp;
                                        Tuesday, September 10, 2019 at 7:00AM PT and lasting only until 11:59PM PT.
                                    </p>
                                    <p>
                                        That style transition between summer and fall is always a bit difficult but with half off seller fees you can get rid of the things that were so last season and look forward to what’s coming up.&nbsp;
                                    </p>
                                    <h3>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <img className="alignnone size-full wp-image-73997" src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/CTA_SellNow.jpg" alt="Sell Now" width="1200" height="80" />
                                        </a>
                                    </h3>

                                    <h3>
                                        <b>How It Works</b>
                                    </h3>
                                    <ul className="post-content">
                                        <li>

                                            <p>
                                                Create a StockX account online or via our mobile app, which is available in the 
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                 Apple App Store 
                                                </a> 
                                                or 
                                                <a href="#" target="_blank" rel="noopener noreferrer"> Google Play Store</a>.
                                            </p>
                                        </li>
                                        <li>
                                            <p>Sell any item on StockX at a minimum price of $150 for streetwear or $200 for sneakers, handbags, and watches to receive a 50% discount on your seller fee.</p>
                                        </li>
                                        <li>
                                            <p>This promotion runs from Tuesday, September 10, 2019 at 7:00AM PT to 11:59PM PT.</p>
                                        </li>
                                        <li>
                                            <p><b>Please note: Your Ask must be accepted within the above timeframe to receive the discount.</b></p>
                                        </li>
                                        <li>
                                            <p>
                                                
                                                All StockX customers are eligible. 
                                                <a href="https://stockx.com/">
                                                    <span> Start selling ASAP!</span>
                                                </a>

                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <AuthorComponent/>
                            </div>

                            <div className="blog-article-sidebar">
                                <div className="blog-article-sidebar-block">
                                    <h2>StockX Sneakers on Twitter</h2>
                                    <div className="news-slider">
                                        <div id="newsCarousel" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="item active">               
                                                    <div className="tweet-slide-container">
                                                        Nike extends their power-lacing offering with the debut of the Adapt Huarache.Cop the kicks in both colorways on… 
                                                        <a href="#" target="_blank">twitter.com/i/web/status/1…</a>
                                                        <div className="tweet-slide-date">5:01 PM - 12 Sep 2019</div>

                                                        <div className="tweet-slide-nav">
                                                            <a className="tweet-slide-handle" href="#" target="_blank">@stockxsneakers</a>
                                                            <a target="_blank" className="tweet-slide-nav-link tweet-slide-nav-link-reply icon-fa" href="#"></a>
                                                            <a target="_blank" className="tweet-slide-nav-link tweet-slide-nav-link-retweet icon-fa" href="#"></a>
                                                            <a target="_blank" className="tweet-slide-nav-link tweet-slide-nav-link-like icon-fa" href="#"></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item">               
                                                    <div className="tweet-slide-container">
                                                        Nike extends their power-lacing offering with the debut of the Adapt Huarache.Cop the kicks in both colorways on… 
                                                        <a href="#" target="_blank">twitter.com/i/web/status/1…</a>
                                                        <div className="tweet-slide-date">5:01 PM - 12 Sep 2019</div>

                                                        <div className="tweet-slide-nav">
                                                            <a className="tweet-slide-handle" href="#" target="_blank">@stockxsneakers</a>
                                                            <a target="_blank" className="tweet-slide-nav-link tweet-slide-nav-link-reply icon-fa" href="#"></a>
                                                            <a target="_blank" className="tweet-slide-nav-link tweet-slide-nav-link-retweet icon-fa" href="#"></a>
                                                            <a target="_blank" className="tweet-slide-nav-link tweet-slide-nav-link-like icon-fa" href="#"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <ol className="carousel-indicators dot-number-slider">
                                                <li data-target="#newsCarousel" data-slide-to="0" className="active"></li>
                                                <li data-starget="#newsCarousel" data-slide-to="1" className=""></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-article-sidebar-block">
                                    <h2>StockX Sneakers on Instagram</h2>
                                    <div className="instagram-feed"> 
                                        <a className="instagram-feed-item" href="#" target="_blank"> 
                                            <img src="//scontent-iad3-1.cdninstagram.com/vp/57ba8560bf966d4a855be62109c8592d/5DEA6BAF/t51.2885-15/e35/c0.169.1349.1349a/s320x320/66071159_514501736020236_4425368955267773495_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com" alt=" "/> 
                                        </a> 
                                        <a className="instagram-feed-item" href="#" target="_blank"> 
                                            <img src="//scontent-iad3-1.cdninstagram.com/vp/48403797ed84349440f572c7d83b748f/5DDD2BC3/t51.2885-15/e35/c0.169.1349.1349a/s320x320/67123372_400452907264984_131440326612497540_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com" alt=" "/> 
                                        </a> 
                                        <a className="instagram-feed-item" href="#" target="_blank"> 
                                            <img src="//scontent-iad3-1.cdninstagram.com/vp/7e915ae3bc81f9f98f29a3771b2a3de7/5DEC9C99/t51.2885-15/e35/s320x320/66268620_139076673970569_5108318227121826569_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com" alt=" "/> 
                                        </a> 
                                        <a className="instagram-feed-item" href="#" target="_blank"> 
                                            <img src="//scontent-iad3-1.cdninstagram.com/vp/cd7209ef6678fcd82a209336af23fcdf/5DD93297/t51.2885-15/e35/c0.169.1349.1349a/s320x320/66467618_123476835588598_2593335469457481758_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com" alt=" "/> 
                                        </a> 
                                        <a className="instagram-feed-item" href="#" target="_blank"> 
                                            <img src="//scontent-iad3-1.cdninstagram.com/vp/88c3495dd6f04383b0494353c0e82fe6/5DD63AB7/t51.2885-15/e35/c0.168.1350.1350a/s320x320/66673589_2881539651917545_6214695070770999469_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com" alt=" "/> 
                                        </a>
                                         <a className="instagram-feed-item" href="#" target="_blank"> 
                                            <img src="//scontent-iad3-1.cdninstagram.com/vp/695c5ade7b86a807c95845bc25ce03c8/5DE79311/t51.2885-15/e35/c0.149.1193.1193a/s320x320/66796162_372993903402050_6239576296337498026_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com" alt=" "/> 
                                        </a> 
                                        <a className="instagram-feed-item" href="#" target="_blank"> 
                                            <img src="//scontent-iad3-1.cdninstagram.com/vp/baa01e9c38222977129519bde146ccb1/5DEEDBF0/t51.2885-15/e35/c0.169.1349.1349a/s320x320/66646208_488688091887305_1612170726216153255_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com" alt=" "/> 
                                        </a> 
                                        <a className="instagram-feed-item" href="#" target="_blank"> 
                                            <img src="//scontent-iad3-1.cdninstagram.com/vp/e945568eca212a66d8f5498b93fac5cd/5DCD69FC/t51.2885-15/e35/s320x320/67073550_348844006015601_5126578344981644267_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com" alt=" "/> 
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        


                    </div>


                    <CatPost title = "RELATED ARTICLES"/>
                    
                </div>

                <SubscribeBanner />
                <Footer/>
            </div>
        );
    }
}

export default PostTwo;