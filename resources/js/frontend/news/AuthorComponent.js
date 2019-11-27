import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';

class AuthorComponent extends Component {

  	render() {
        return(
            <div className="author-details">
                <div className="author-img"></div>
                <div className="author-info">
                    <AuthorLink url ='#' name = 'Nick Matthies'/>
                    <AuthorDescription content = 'Only thing dripping is my coffee maker...IG: @nickmatthies'/>
                    <AuthorSocial url = 'https://www.instagram.com/tamarrdavis/'/>
                </div>
            </div>
        );
    }
}

export default AuthorComponent;

function AuthorLink(props) {
    return (
        <div className="author-headline">
            <a href = {props.url}>{props.name}</a>
        </div>
    );
}

function AuthorDescription(props) {
    return(
        <p className="author-description">{props.content}</p>
    );
}

function AuthorSocial(props) {
    return(
        <div className="social-media-links"> 
            <a href={props.url} target="_blank" 
            className="social-media-links-item social-media-links-item-instagram icon-fa"></a>
        </div>
    );
}