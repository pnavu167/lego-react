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
import PostHeader from './PostHeader'
import CatPost from './CatPost'
import ProductWrapper from './ProductWrapper'
import AuthorComponent from './AuthorComponent'

class PostOne extends Component {

  	render() {
        return(
            <div id="new-main-container">
                <Header/>
                <SubMenu />

                    <div className="cover-size-post">
                        <PostHeader/>
                        
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
                                <ProductWrapper/>

                                <div className="editor-content">             
                                    <h2><strong>FOG Essentials Photo Gear</strong></h2>
                                    
                                    <a href="#" target="_blank" className="post-img-link">
                                        <img  className="wp-image-73267 size-full" src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/FOG_Essentials_New_Items_Internal_Banners_ffffffPush-Android.jpg" alt="Nike Kyrie x Spongebob apparel" />
                                    </a>
                                    <p id="caption" className="post-img-caption">Fear Of God Essentials’ newly released photo drop</p>

                                    <p>Supermalls rejoice, Starcourt doesn’t have to close because Pacsun is determined to carry everyone else on their back. Fear Of God’s Essentials line dropped more quick-to-sell-out pieces last month through the super mall mainstay that near instantly did numbers on StockX. Like the above, highlights have been featured below and the whole drop can be shopped <a href="#" target="_blank" >here</a>.</p>
                                </div>

                                <ProductWrapper/>

                                <div className="editor-content">             
                                    <h2><strong>FOG Essentials Photo Gear</strong></h2>
                                </div>

                                <ProductWrapper number="1"/>

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

export default PostOne;