import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';

class BlogBlock extends Component {

    constructor(props) {
        super(props)
    }

    addPostItem() {
        
        if(this.props.postItem){
            return "blog-post-block "+this.props.postItem;
        }

        return "blog-post-block";
    }

  	render() {
        return(
            <div className= {this.addPostItem()}>
                <a href="#" className="blog-img">
                    <img src="https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2019/09/Fall-sneakers-blog.jpg" alt="Fall Essentials: Sneakers" 
                    className="full-width"/>
                </a>

                <div className="news-list full-width">
                    <div className="blog-post"> 
                        <a href="#">Sneakers </a>
                    </div> 
                    <a href="#" className="block-title">Fall Essentials: Sneakers</a>
                    <div className="block-meta">
                        By 
                        <a href="#"> Kevin Kosanovich </a>
                        , 10 hours ago
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogBlock;