import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class SortContent extends Component {

	constructor(props) {
		super(props)
	}

    addClassName() {
        var className=""
        if(this.props.type == "mobile-tablet") {
            className="collapse sort-dropdown-content-mobile"
        }
        return className
    }

  	render() {
        return(
            <ul className={`sort-dropdown-content ${this.addClassName()}`}>
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
        );
    }
}

export default SortContent;