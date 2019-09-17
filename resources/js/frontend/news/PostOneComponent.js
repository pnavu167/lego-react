import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';
import Header from '../layouts/HeaderComponent'
import Footer from '../layouts/FooterComponent'
import SubMenu from './SubMenu'
import SubscribeBanner from './SubscribeBanner'

class PostOne extends Component {

  	render() {
        return(
            <div id="new-main-container">
                <Header type="on-top home-topbar" />
                <SubMenu />

                    <div className="cover-size-post">
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
                                            <a href="#">Kevin Kosanovich</a>
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
                                        <div className="blog-count icon-fa">
                                            <span>0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="post-body">
                            <div className="post-img">
                                <img className="post-featured-image" src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/spongebob.jpg" alt="StockX Needle Movers: August Streetwear New Arrivals"/>
                            </div>

                            <div className="post-content">
                                <p>For the streetwear world, August was a return to something a little more normal than the non-traditional pandemonium of releases we’ve been seeing since May. With Supreme and Palace returning to their regular drop schedules and people like Travis Scott and KAWS taking a little bit of a break, August felt fast-paced but in a way far more familiar than June or July. Although we didn’t see some of our Needle Movers big hitters return, Nike and Spongebob delivered a collection that went crazy and Fear Of God’s Essentials line was able to step up and deliver something special for us as well. Scroll down to check out everything we added this month at StockX and don’t forget to click the images to shop.</p>
                                <div className="editor-content">             
                                    <h2><strong>Spongebob Kyrie</strong></h2>
                                    <div className="post-container-img">
                                        <a href="#" target="_blank" className="post-img-link">
                                            <img  className="wp-image-73267 size-full" src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/5d4d9a697e337f36f302c89a.png" alt="Nike Kyrie x Spongebob apparel" />
                                        </a>
                                    </div>
                                    
                                    <p id="caption" className="post-img-caption">Photo: Nike</p>

                                    <p>An unlikely subject took both the sneaker and streetwear world by storm in August, SpongeBob SquarePants. Everyone’s favorite childhood cartoon character (opinion, but not really), was the subject of a collaboration with Nike Athlete and Brooklyn Net’s star, Kyrie Irving. The collection featured both sneakers and apparel centered around each of the major characters featured on the show (SpongeBob SquarePants, Patrick The Star, Squidward Tentacles, Mr. Krabs, and Sandy Cheeks). The collaboration did big numbers on both the streetwear and sneakers front, providing a perfect fix for anyone that couldn’t hold out for most of the month until Supreme. Highlights from the apparel release are featured below and the entire drop can be shopped <a href="#" target="_blank" >here</a>.</p>
                                </div>
                                <div className="stockx-product-wrapper">
                                        <a className="stockx-product-item" href="#">
                                            <div className="stockx-product-img">
                                                <img src="https://stockx.imgix.net/products/streetwear/Nike-Kyrie-x-Spongebob-Dri-Fit-Hoodie-Dynamic-Yellow-Product.jpg?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1568041911"/>
                                            </div>      
                                            <div className="stockx-product-title">Nike Kyrie x Spongebob Dri-Fit Hoodie Dynamic Yellow</div>
                                            <div className="stockx-product-ask">
                                                <span className="stockx-product-ask-amount">$78</span> • Lowest Ask
                                            </div>
                                        </a>

                                        <a className="stockx-product-item" href="#">
                                            <div className="stockx-product-img">
                                                <img src="https://stockx.imgix.net/products/streetwear/Nike-Kyrie-x-Spongebob-Dri-Fit-Hoodie-Dynamic-Yellow-Product.jpg?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1568041911"/>
                                            </div>      
                                            <div className="stockx-product-title">Nike Kyrie x Spongebob Dri-Fit Hoodie Dynamic Yellow</div>
                                            <div className="stockx-product-ask">
                                                <span className="stockx-product-ask-amount">$78</span> • Lowest Ask
                                            </div>
                                        </a>

                                        <a className="stockx-product-item" href="#">
                                            <div className="stockx-product-img">
                                                <img src="https://stockx.imgix.net/products/streetwear/Nike-Kyrie-x-Spongebob-Dri-Fit-Hoodie-Dynamic-Yellow-Product.jpg?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1568041911"/>
                                            </div>      
                                            <div className="stockx-product-title">Nike Kyrie x Spongebob Dri-Fit Hoodie Dynamic Yellow</div>
                                            <div className="stockx-product-ask">
                                                <span className="stockx-product-ask-amount">$78</span> • Lowest Ask
                                            </div>
                                        </a>

                                        <a className="stockx-product-item" href="#">
                                            <div className="stockx-product-img">
                                                <img src="https://stockx.imgix.net/products/streetwear/Nike-Kyrie-x-Spongebob-Dri-Fit-Hoodie-Dynamic-Yellow-Product.jpg?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1568041911"/>
                                            </div>      
                                            <div className="stockx-product-title">Nike Kyrie x Spongebob Dri-Fit Hoodie Dynamic Yellow</div>
                                            <div className="stockx-product-ask">
                                                <span className="stockx-product-ask-amount">$78</span> • Lowest Ask
                                            </div>
                                        </a>
                                </div>

                                <div className="editor-content">             
                                    <h2><strong>FOG Essentials Photo Gear</strong></h2>
                                    
                                    <a href="#" target="_blank" className="post-img-link">
                                        <img  className="wp-image-73267 size-full" src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/FOG_Essentials_New_Items_Internal_Banners_ffffffPush-Android.jpg" alt="Nike Kyrie x Spongebob apparel" />
                                    </a>
                                    <p id="caption" className="post-img-caption">Fear Of God Essentials’ newly released photo drop</p>

                                    <p>Supermalls rejoice, Starcourt doesn’t have to close because Pacsun is determined to carry everyone else on their back. Fear Of God’s Essentials line dropped more quick-to-sell-out pieces last month through the super mall mainstay that near instantly did numbers on StockX. Like the above, highlights have been featured below and the whole drop can be shopped <a href="#" target="_blank" >here</a>.</p>
                                </div>

                                <div className="stockx-product-wrapper">
                                    <a className="stockx-product-item" href="#">
                                        <div className="stockx-product-img">
                                            <img src="https://stockx.imgix.net/products/streetwear/FEAR-OF-GOD-ESSENTIALS-Photo-T-shirt-Black.png?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1565964406"/>
                                        </div>      
                                        <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                        <div className="stockx-product-ask">
                                            <span className="stockx-product-ask-amount">$68</span> • Lowest Ask
                                        </div>
                                    </a>

                                    <a className="stockx-product-item" href="#">
                                        <div className="stockx-product-img">
                                            <img src="https://stockx.imgix.net/products/streetwear/FEAR-OF-GOD-ESSENTIALS-Photo-T-shirt-Black.png?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1565964406"/>
                                        </div>      
                                        <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                        <div className="stockx-product-ask">
                                            <span className="stockx-product-ask-amount">$68</span> • Lowest Ask
                                        </div>
                                    </a>

                                    <a className="stockx-product-item" href="#">
                                        <div className="stockx-product-img">
                                            <img src="https://stockx.imgix.net/products/streetwear/FEAR-OF-GOD-ESSENTIALS-Photo-T-shirt-Black.png?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1565964406"/>
                                        </div>      
                                        <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                        <div className="stockx-product-ask">
                                            <span className="stockx-product-ask-amount">$68</span> • Lowest Ask
                                        </div>
                                    </a>

                                    <a className="stockx-product-item" href="#">
                                        <div className="stockx-product-img">
                                            <img src="https://stockx.imgix.net/products/streetwear/FEAR-OF-GOD-ESSENTIALS-Photo-T-shirt-Black.png?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1565964406"/>
                                        </div>      
                                        <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                        <div className="stockx-product-ask">
                                            <span className="stockx-product-ask-amount">$78</span> • Lowest Ask
                                        </div>
                                    </a>
                                </div>

                                <div className="editor-content">             
                                    <h2><strong>FOG Essentials Photo Gear</strong></h2>
                                </div>

                                <div className="stockx-product-wrapper">
                                    <a className="stockx-product-item" href="#">
                                        <div className="stockx-product-img">
                                            <img src="https://stockx.imgix.net/products/streetwear/FEAR-OF-GOD-ESSENTIALS-Photo-T-shirt-Black.png?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1565964406"/>
                                        </div>      
                                        <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                                        <div className="stockx-product-ask">
                                            <span className="stockx-product-ask-amount">$68</span> • Lowest Ask
                                        </div>
                                    </a>
                                </div>

                                <div className="editor-content">             
                                    <p>Supermalls rejoice, Starcourt doesn’t have to close because Pacsun is determined to carry everyone else on their back. Fear Of God’s Essentials line dropped more quick-to-sell-out pieces last month through the super mall mainstay that near instantly did numbers on StockX. Like the above, highlights have been featured below and the whole drop can be shopped <a href="#" target="_blank" >here</a>.</p>
                                </div>

                                <h2><strong>Collectibles</strong></h2>
                                <h3>
                                    <a href="#" target="_blank" rel="noopener">Daniel Arsham</a>
                                </h3>
                                <h3>
                                    <a href="#" target="_blank" rel="noopener">Father Steve</a>
                                </h3>
                                
                                <div className="author-details">
                                    <div className="author-img">
                                        
                                    </div>
                                    <div className="author-info">
                                        <div className="author-headline">
                                            <a href="#">Nick Matthies</a>
                                        </div>
                                        <p className="author-description">Only thing dripping is my coffee maker...IG: @nickmatthies</p>
                                        <div className="social-media-links"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cat-post">
                            <div className="type-post">
                                <h2 >Related Articles</h2> 
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
                                            <a href="#">Kevin Kosanovich</a>
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
                                            <a href="#">Kevin Kosanovich</a>
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
                                            <a href="#">Kevin Kosanovich</a>
                                            , 10 hours ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <SubscribeBanner />
                <Footer/>
            </div>
        );
    }
}

export default PostOne;