import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import BlogRow from './BlogRow';

class CatPost extends Component {

    constructor(props) {
        super(props)
    }
    
  	render() {
        let  postItem = this.props.postItem;
        let  postRow = "blog-post-row " + this.props.postRow;
        let  title = this.props.title;
        return(
            <div className="cat-post">
                
                {title &&
                    <div className="type-post">
                        <h2 >{title}</h2>
                        {title != "RELATED ARTICLES" &&
                            <a href="#" className="cat-post-section">View All</a>
                        } 
                        
                    </div>
                }
                
                <BlogRow 
                    postItem = {postItem} 
                    postRow = {postRow} 
                    number = {this.props.number}
                />
                
            </div>
            
        );
    }
}

export default CatPost;

function BlogRow(props) {
    const indents = [];
    const className = "blog-post-row "+ props.postRow;
    var number = (props.number)?props.number:3;

    for (let i = 0; i < number; i++) {
        indents.push(<BlogBlock postItem = {props.postItem} key = {i}/>);
    }

    return(
        <div className={className}>{indents}</div>
    );
}

function BlogBlock(props) {
    const className = 'blog-post-block' + props.postItem;
    return(
        <div className= {className}>

            <BlockLinkImg url = '#' img = '/storage/images/news/Fall-sneakers-blog.jpg'
            alt = 'Fall Essentials: Sneakers'/>

            <div className="news-list full-width">
                <div className="blog-post"> 
                    <ProductTypeLink url = '#' name = 'Sneakers'/>
                </div> 
                <BlockTitleLink url = '#' name = 'Fall Essentials: Sneakers'/>
                <BlockMeta url = '#' author = ' Kevin Kosanovich ' hours = '10'/>
            </div>
        </div>
    );
}

function BlockLinkImg(props) {
    return (
        <a href={props.url} className="blog-img">
            <img src={props.img} alt={props.alt}
            className="full-width"/>
        </a>
    );
}

function ProductTypeLink(props) {
    return <a href={props.url}>{props.name}</a>;
}

function BlockTitleLink(props) {
    return <a href={props.url} className="block-title">{props.name}</a>;
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