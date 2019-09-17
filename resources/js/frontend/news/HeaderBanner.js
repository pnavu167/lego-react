import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';

class HeaderBanner extends Component {

  	render() {
        return(
            <div className="banner-header">
                <div className="cover-size">
                    <div className="banner-content">
                        <h1 className="banner-title">Sneakers</h1>
                        <p className="banner-description">From forecasting a sneaker’s market price, to their historical & cultural relevance, the StockX blog has you covered with all of the sneaker analysis you need.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBanner;