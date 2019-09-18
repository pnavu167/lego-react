import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class MarketSummay extends Component {

  	render() {
        return(
            <div className="product-market-summary-wrap">
                <div className="container">
                    <div className="product-market-summary">
                        <div className="product-market-summary-col">
                            <img src="/storage/images/home/gauge.svg" />
                            <div className="content">
                                52 WEEK HIGH 
                                <span className="value">$695 | LOW $150</span>
                            </div>
                        </div>
                        <div className="product-market-summary-col">
                            <img src="/storage/images/home/chart.svg" />
                            <div className="content">
                                TRADE RANGE (12 MOS.)
                                <span className="value-increase value">$393 - $607</span>
                            </div>
                        </div>
                        <div className="product-market-summary-col">
                            <img src="/storage/images/home/volatility.svg" />
                            <div className="content">
                                volatility
                                <span className="value-decrease value">21.4%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MarketSummay;