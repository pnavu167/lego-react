import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import Header from '@/layouts/HeaderComponent'
import BreadCrumb from '@/shared/BreadCrumbComponent'
import Container from './ContainerComponent'
import MarketSummay from './MarketSummayComponent'
import RelatedProducts from './RelatedProductsComponent'
import Statistical from './StatisticalComponent'

class ProductDetail extends Component {

  	render() {
        return(
            <div id="product-detail" className="site-margin-top">
            	<Header />
            	<div className="gray-gradient"></div>
            	<div className="container">
            		<BreadCrumb />
            		<Container />
            	</div>
                <MarketSummay />
                <RelatedProducts />
                <Statistical />
            </div>
        );
    }
}

export default ProductDetail;