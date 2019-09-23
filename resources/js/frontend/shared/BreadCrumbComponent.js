import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class BreadCrumb extends Component {

	constructor(props) {
		super(props)
	}

  	render() {
        return(
            <div className="custom-breadcrumb d-none d-md-flex">
                <div className="breadcrumb-item">
                    <a href="#" className="breadcrumb-link">Home</a>
                </div>
                <div className="breadcrumb-item">
                    <a href="#" className="breadcrumb-link">Sneakers</a>
                </div>
            </div>
        );
    }
}

export default BreadCrumb;