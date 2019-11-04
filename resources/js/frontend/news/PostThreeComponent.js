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

class PostThree extends Component {

  	render() {
        return(
            <div id="new-main-container">
                <Header />
                <SubMenu/>

                <div className="blog-article-editorial-header">
                    <div className="blog-article-editorial-overlay"></div>
                    <div className="blog-article-editorial-details">
                        <div className="blog-post-vertical"> 
                            <a href="#">Sneakers</a>
                        </div> 
                        <h1 className="headline-blog-editorial">The Drop List 9.11.19</h1>
                        <div className="blog-article-editorial-excerpt">The StockX Drop List is a weekly collection of all the hottest releases in sneakers.</div>
                    </div>
                </div>

                <div className="cover-size-post-secial">
                    <div className="header-post full-width post-secial">

                        <div className="news-list">
                            <div className="header-post-bottom">
                                <div className="intro-content">
                                    <div className="block-meta">
                                        By 
                                        <a href="#"> Kevin Kosanovich </a>
                                        , 10 hours ago
                                    </div>
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
                    
                    <div className="post-body">

                        <div className="post-content">
                            <p>
                                The past few days have been very interesting: <a href="#">Nicki Minaj</a> announced she’s retiring from music, <a href="#">AB </a>signed to the New England Patriots, and <a href="#">Kanye West </a>divided a sea of fans with his tiny hands. I guess we only get odd news when dope sneakers release because this week’s Drop List is crazy.&nbsp;
                            </p>
                            <p>&nbsp;</p>

                            <div className="editor-content">             
                                <h2><strong>Sacai x Nike LDV Waffle</strong></h2>
                                <iframe src="https://www.instagram.com/p/B2A3_VkHB1I/embed/?cr=1&v=12&wp=540&rd=https%3A%2F%2Fstockx.com&rp=%2Fnews%2Fthe-drop-list-9-11-19%2F#%7B%22ci%22%3A0%2C%22os%22%3A2327.1800000220537%7Dembed/captioned" width="500" height="750"  scrolling="no" allowtransparency="true"></iframe>
                                <br/>
                                <p>Nike is looking to prepare the dopest brunch of all time by releasing some new sacai x Nike LDV Waffle sneakers. This sacai bundle comes in three different colorways “
                                    <a href="#">Black Anthracite,</a>
                                    ” “
                                    <a href="#">White Grey</a>
                                    ,” and “
                                    <a href="#">Green Purple</a>
                                    .” I think the “Green Purple” colorway is the coldest of the three releasing on Thursday because it’s a sneaker that catches the eye but doesn’t scream, “Look at me.” If we’re being honest, none of the OG colorways can compare. Nike could’ve kept those basic kicks to themselves. Those OG waffles barely crack my top five sneakers of the year. My top five sneakers are: 
                                    <a href="#">AJ1 Travis High</a>
                                    , 
                                    <a href="#">CPFM</a>
                                    , 
                                    <a href="#">MCA AF-1</a>
                                    , and 
                                    <a href="#">AJ1 Satin Black Toe High.</a>
                                     In other news, follow in my footsteps and grab these sacai sneakers early on StockX. 
                                </p>
                            </div>
                            
                            <div className="editor-content">             
                                <h2><strong>Sacai x Nike LDV Waffle</strong></h2>
                                <iframe src="https://www.instagram.com/p/B2A3_VkHB1I/embed/?cr=1&v=12&wp=540&rd=https%3A%2F%2Fstockx.com&rp=%2Fnews%2Fthe-drop-list-9-11-19%2F#%7B%22ci%22%3A0%2C%22os%22%3A2327.1800000220537%7Dembed/captioned" width="500" height="750" scrolling="no" allowtransparency="true"></iframe>
                                <br/>
                                <p>Nike is looking to prepare the dopest brunch of all time by releasing some new sacai x Nike LDV Waffle sneakers. This sacai bundle comes in three different colorways “
                                    <a href="#">Black Anthracite,</a>
                                    ” “
                                    <a href="#">White Grey</a>
                                    ,” and “
                                    <a href="#">Green Purple</a>
                                    .” I think the “Green Purple” colorway is the coldest of the three releasing on Thursday because it’s a sneaker that catches the eye but doesn’t scream, “Look at me.” If we’re being honest, none of the OG colorways can compare. Nike could’ve kept those basic kicks to themselves. Those OG waffles barely crack my top five sneakers of the year. My top five sneakers are: 
                                    <a href="#">AJ1 Travis High</a>
                                    , 
                                    <a href="#">CPFM</a>
                                    , 
                                    <a href="#">MCA AF-1</a>
                                    , and  
                                    <a href="#"> AJ1 Satin Black Toe High.</a>
                                     In other news, follow in my footsteps and grab these sacai sneakers early on StockX. 
                                </p>
                            </div>
                            

                            <div className="editor-content">             
                                <h2><strong>Yeezy Desert Boot</strong></h2>
                                
                                <iframe src="https://www.instagram.com/p/B2PS71oIK6t/embed/?cr=1&v=12&wp=540&rd=https%3A%2F%2Fstockx.com&rp=%2Fnews%2Fthe-drop-list-9-11-19%2F#%7B%22ci%22%3A2%2C%22os%22%3A1303.0649999855086%7Dembed/captioned" width="500" height="750" scrolling="no" allowtransparency="true"></iframe>
                                <br/>
                                <p>Adidas is set to release the new Yeezy Desert Boot, which can potentially be hotter than a Kanye West Sunday Service. These boots are dropping in a “Salt,” “Rock,” and “Oil” colorway. I like these boots and could see them becoming the hottest release of the fall. If Yeezy is going to continue releasing boots then he should drop new colorways of the Yeezy 950, as well. Let’s have a boot season for once. I’m going to try and buy a pair of the Yeezy Desert Boots Saturday and if I’m not successful then you can catch me on StockX where they never run out of sizes. </p>

                                <p>Stay tuned for more sneaker releases every Wednesday from the Drop List, and remember to check out StockX if you miss any of these sneaker drops.</p>
                            </div>

                            <div className="stockx-product-wrapper">
                                <a className="stockx-product-item" href="#">
                                    <div className="stockx-product-img">
                                        <img src="https://stockx.imgix.net/Air-Jordan-3-Retro-Knicks.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568137283"/>
                                    </div>      
                                    <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                    <div className="stockx-product-ask">
                                        <span className="stockx-product-ask-amount">$68</span> • Lowest Ask
                                    </div>
                                </a>

                                <a className="stockx-product-item" href="#">
                                    <div className="stockx-product-img">
                                        <img src="https://stockx.imgix.net/Air-Jordan-3-Retro-Knicks.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568137283"/>
                                    </div>      
                                    <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                    <div className="stockx-product-ask">
                                        <span className="stockx-product-ask-amount">$68</span> • Lowest Ask
                                    </div>
                                </a>

                                <a className="stockx-product-item" href="#">
                                    <div className="stockx-product-img">
                                        <img src="https://stockx.imgix.net/Air-Jordan-3-Retro-Knicks.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568137283"/>
                                    </div>      
                                    <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                    <div className="stockx-product-ask">
                                        <span className="stockx-product-ask-amount">$68</span> • Lowest Ask
                                    </div>
                                </a>

                                <a className="stockx-product-item" href="#">
                                    <div className="stockx-product-img">
                                        <img src="https://stockx.imgix.net/Air-Jordan-3-Retro-Knicks.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568137283"/>
                                    </div>      
                                    <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                    <div className="stockx-product-ask">
                                        <span className="stockx-product-ask-amount">$78</span> • Lowest Ask
                                    </div>
                                </a>
                            </div>

                            
                            <AuthorComponent/>
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

export default PostThree;