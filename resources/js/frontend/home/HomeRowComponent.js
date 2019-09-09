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
		console.log(this.props.rowType)
		var rows = []
        if (this.props.rowType == 'category') {
            for(var i=0;i<=3;i++) {
            	rows.push(
	            	<div className="col-3" key={i}>
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
            	<div className="home-row-header">
            		<div className="home-row-title">
            			{this.props.title}
            		</div>
            		<a href="#" className="btn-see-all">
            			See All
            		</a>
            	</div>
            	<div className="home-row-container row">
            		{this.fetchRows()}
            	</div>
            </div>
        );
    }
}

export default HomeRow;