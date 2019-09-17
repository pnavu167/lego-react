import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
import BlogRow from './BlogRow';

class CatPost extends Component {

    constructor(props) {
        super(props)
    }

    setTitleName() {
        return this.props.title;
    }

    addPostItem() {
        
        if(this.props.postItem){
            return this.props.postItem;
        }

        return "";
    }

    addPostRow() {
        
        if(this.props.postRow){
            return "blog-post-row " + this.props.postRow;
        }

        return "blog-post-row";
    }

  	render() {
        return(
            <div className="cat-post">
                {this.setTitleName() &&
                    <div className="type-post">
                        <h2 >{this.setTitleName()}</h2> 
                        <a href="#" className="cat-post-section">View All</a>
                    </div>
                }
                
                <BlogRow postItem={this.addPostItem()} postRow={this.addPostRow()} number = {this.props.number}/>
            </div>
            
        );
    }
}

export default CatPost;