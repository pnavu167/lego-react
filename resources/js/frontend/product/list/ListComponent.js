import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import Header from '@/layouts/HeaderComponent'
import ListBanner from '@/product/list/ListBannerComponent'
import ListContainer from '@/product/list/ListContainerComponent'
import SortContent from '@/product/list/SortContentComponent'

class ProductList extends Component {

  	render() {
        return(
            <div id="list-container">
            	<Header />
            	<ListBanner />
            	<SortContent type="mobile-tablet" />
            	<ListContainer />
            </div>
        );
    }
}

export default ProductList;