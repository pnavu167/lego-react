import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class ProductDetail extends Component {

  	render() {
        return(
            <section className="statistical">
                <div className="container mobile-container">
                    <div className="statistical-container">
                        <div className="related-banner">
                            <div className="related-banner-content">
                                lastest sale
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="product-histories">
                                    <div className="lastest-sale-container chart">
                                    </div>
                                    <div className="view-all-sales">
                                        View All Sales
                                    </div>
                                    <div className="lastest-sale-container">
                                        <table className="latest-sales table table-striped table-condensed ">
                                            <thead>
                                                <tr>
                                                    <th className="" width="15%">Size</th>
                                                    <th className="" width="25%">Sale Price</th>
                                                    <th className="" width="35%">Date</th>
                                                    <th className="" width="25%">Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>6</td>
                                                    <td>$293</td>
                                                    <td>Tuesday, September 24, 2019</td>
                                                    <td>11:57 PM EST</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>$293</td>
                                                    <td>Tuesday, September 24, 2019</td>
                                                    <td>11:14 PM EST</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>$284</td>
                                                    <td>Tuesday, September 24, 2019</td>
                                                    <td>10:52 PM EST</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>$293</td>
                                                    <td>Tuesday, September 24, 2019</td>
                                                    <td>10:41 PM EST</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>$293</td>
                                                    <td>Tuesday, September 24, 2019</td>
                                                    <td>10:14 PM EST</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>$293</td>
                                                    <td>Tuesday, September 24, 2019</td>
                                                    <td>10:14 PM EST</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="gauges-wrapper">
                                    <div className="gauges-title">
                                        <img src="/storage/images/home/gauge.svg" />
                                        <span>12 month historical</span>
                                    </div>
                                    <div className="gauges">
                                        <div className="gauge-container">
                                            <div className="gauge"></div>
                                            <div className="gauge-title"># of Sales</div>
                                            <div className="gauge-value">141</div>
                                        </div>
                                        <div className="gauge-container">
                                            <div className="gauge"></div>
                                            <div className="gauge-title">
                                                Price Premium
                                                <div className="historical-detail">
                                                    (Over Original Retail Price)
                                                </div>
                                            </div>
                                            <div className="gauge-value">
                                                33.2%
                                            </div>
                                        </div>
                                        <div className="gauge-container">
                                            <div className="gauge"></div>
                                            <div className="gauge-title">
                                                Average Sale Price
                                            </div>
                                            <div className="gauge-value">
                                                $296
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductDetail;