import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import BreadCrumb from '../shared/BreadCrumbComponent'

class SortBar extends Component {

	constructor(props) {
		super(props)
	}

  	render() {
        return(
            <div className="sortbar">
                <BreadCrumb />
                <div className="sortbar-group d-none d-lg-flex">
                    <div className="sort-dropdown">
                        <div className="sort-dropdown-button" data-toggle="collapse" data-target=".sort-dropdown-content">
                            <div className="title">
                                <span className="font-weight-bold">Sort By:</span>
                                <span className="sort-dropdown-type">Feature</span>
                            </div>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <ul className="sort-dropdown-content collapse">
                            <li className="sort-dropdown-item">
                                <p className="title">
                                    Featured
                                </p>
                                <p className="content">
                                    The 'Featured' picks are chosen specifically for you by the StockX team.
                                </p>
                            </li>
                            <li className="sort-dropdown-item">
                                <p className="title">
                                    Featured
                                </p>
                                <p className="content">
                                    The 'Featured' picks are chosen specifically for you by the StockX team.
                                </p>
                            </li>
                            <li className="sort-dropdown-item">
                                <p className="title">
                                    Featured
                                </p>
                                <p className="content">
                                    The 'Featured' picks are chosen specifically for you by the StockX team.
                                </p>
                            </li>
                            <li className="sort-dropdown-item">
                                <p className="title">
                                    Featured
                                </p>
                                <p className="content">
                                    The 'Featured' picks are chosen specifically for you by the StockX team.
                                </p>
                            </li>
                            <li className="sort-dropdown-item">
                                <p className="title">
                                    Featured
                                </p>
                                <p className="content">
                                    The 'Featured' picks are chosen specifically for you by the StockX team.
                                </p>
                            </li>
                            <li className="sort-dropdown-item">
                                <p className="title">
                                    Featured
                                </p>
                                <p className="content">
                                    The 'Featured' picks are chosen specifically for you by the StockX team.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="show-type active">
                        <i className="fa fa-th" aria-hidden="true"></i>
                    </div>
                    <div className="show-type">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SortBar;