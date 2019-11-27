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
                        <BlogPost url = '#' title = 'Editorial'/>
                        <PostTitle contents = 'StockX Needle Movers: August Streetwear New Arrivals'/>
                    </div>
                    
                    <div className="header-post-bottom">
                        <div className="intro-content">
                            <BlockMeta url = '#' author = ' Kevin Kosanovich ' hours = '10'/>
                            <BlogExcerpt content = 'Needle Movers is a monthly segment highlighting the latest streetwear collaborations and brands recently added to StockX. Check out the collections below - just click the photos to shop.'/>
                        </div>
                        
                        <div className="social-share">
                            <SocialShare 
                                className="social-share-link facebook icon-fa"  
                                url = '#' 
                                icon = 'fa fa-facebook'
                            />
                            <SocialShare 
                                className="social-share-link twitter icon-fa"  
                                url = '#' 
                                icon = 'fa fa-twitter'
                            />
                            <SocialShare 
                                className="social-share-link pinterest icon-fa"  
                                url = '#' 
                                icon = 'fa fa-pinterest-p'
                            />

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

function BlogPost(props) {
    return (
        <div className="blog-post"> 
            <a href={props.url}>{props.title}</a>
        </div> 
    );
}

function PostTitle(props) {
    return (
        <h1 className="post-title">{props.contents}</h1>
    );
}

function BlockMeta(props) {
    return(
        <div className="block-meta">
            By 
            <a href={props.url}> {props.author} </a>
            , {props.hours} hours ago
        </div>
    );   
}

function BlogExcerpt(props) {
    return (
        <div className="blog-excerpt">{props.content}</div>
    );
}

function SocialShare(props) {
    return(
        <a className = {props.className}  href = {props.url}>
            <i className = {props.icon}></i>
        </a>
    );
}