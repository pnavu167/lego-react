import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
import BlogBlock from './BlogBlock';

class BlogRow extends Component {

	constructor(props) {
        super(props)
    }

    addPostItem() {
        
        if(this.props.postItem){
            return this.props.postItem;
        }

        return "";
    }

    addPostRow() {
        
        if(this.props.postRow){
            return "blog-post-row "+this.props.postRow;
        }

        return "blog-post-row";
    }

    createBlogBlock() {
        
        var indents = [];
        var number = 3;
        if(this.props.number){
        	number = this.props.number;
        }

		for (var i = 0; i < number; i++) {
		 	indents.push(<BlogBlock postItem = {this.addPostItem()} key = {i}/>);
		}

		return (<div className={this.addPostRow()}>{indents}</div>);
    }

  	render() {
        return(
        	<div>
            	{this.createBlogBlock()}
            </div>
        );
    }
}

export default BlogRow;