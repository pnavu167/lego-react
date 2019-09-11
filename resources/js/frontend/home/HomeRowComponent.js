import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component
import CategoryCard from '../shared/CategoryCardComponent'
import ProductCard from '../shared/ProductCardComponent'

class HomeRow extends Component {

	constructor (props) {
	    super(props)
	    this.state = {
	    	'title': '',
            'rowType': ''
	    }
	}

	fetchRows () {
		var rows = []
        if (this.props.rowType == 'category') {
            for(var i=0;i<=3;i++) {
            	rows.push(
	            	<div className="home-row-category-col" key={i}>
	    				<CategoryCard />
	    			</div>
    			)
            }
        } else {
        	for(var i=0;i<=4;i++) {
            	rows.push(
	            	<div className="home-row-col" key={i}>
	    				<ProductCard />
	    			</div>
    			)
            }
        }
        return rows
    }

  	render() {
        return(
            <div className="home-row">
            	<div className="home-section-header">
            		<div className="title">
            			{this.props.title}
            		</div>
            		<a href="#" className="link-see-all">
            			See All
            		</a>
            	</div>
            	<div className="home-row-container">
            		{this.fetchRows()}
            	</div>
            </div>
        );
    }
}

export default HomeRow;