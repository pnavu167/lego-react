import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component

class ProductCard extends Component {

  	render() {
        return(
            <div className="product-card">
            	<a href="#" className="product-card-container">
	            	<div className="product-card-top">
	            		<img src="/storage/images/home/category-1.png" />
	            	</div>
	                <div className="product-card-bottom">
	                	<div className="product-name">
	                		Converse Chuck Taylor All-Star 70s Hi Comme des Garcons Play Multi-Heart Green
	                	</div>
	                	<div className="product-type">
	                		Lowest Ask
	                	</div>
	                	<div className="product-pride">
	                		$100
	                	</div>
	                	<div className="product-more-info">
	                		300 Sold
	                	</div>
	                </div>
                </a>
            </div>
        );
    }
}

export default ProductCard;