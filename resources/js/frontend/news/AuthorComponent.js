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
        );
    }
}

export default AuthorComponent;