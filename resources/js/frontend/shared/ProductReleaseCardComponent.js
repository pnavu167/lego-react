import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component

class ProductReleaseCard extends Component {

	constructor (props) {
	    super(props)
	}

  	render() {
        return(
            <div className="product-release-card">
            	<div href="#" className="product-release-card-container">
	            	<div className="product-release-card-top">
	            		<div className="d-flex justify-content-between">
	            			<div>
	            				SEP | 7
	            			</div>
	            			<a href="#" className="btn-add-follow green">
	            				<i className="fa fa-plus-circle" aria-hidden="true"></i>
	            			</a>
	            		</div>
	            		<img src="/storage/images/home/category-1.png" />
	            	</div>
	                <div className="product-release-card-bottom">
	                	<div className="product-release-name">
	                		Converse Chuck Taylor All-Star 70s Hi Comme des Garcons Play Multi-Heart Green
	                	</div>
	                	<div className="product-release-type">
	                		Lowest Ask
	                	</div>
	                	<div className="product-release-pride">
	                		$100
	                	</div>
	                	<a href="#" className="btn-bid">
	                		BID
	                	</a>
	                </div>
                </div>
            </div>
        );
    }
}

export default ProductReleaseCard;