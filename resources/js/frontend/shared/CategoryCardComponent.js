import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component

class CategoryCard extends Component {

  	render() {
        return(
            <div className="category-card">
                <img className="category-card-image" src="/storage/images/home/category-1.png" />
                <img className="category-card-brand" src="/storage/images/home/category-brand.png" />
            </div>
        );
    }
}

export default CategoryCard;