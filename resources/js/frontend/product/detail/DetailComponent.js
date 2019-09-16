import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import Header from '@/layouts/HeaderComponent'

class ProductDetail extends Component {

  	render() {
        return(
            <div id="list-container">
            	<Header />
            </div>
        );
    }
}

export default ProductDetail;