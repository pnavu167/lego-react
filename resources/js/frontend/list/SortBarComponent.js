import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import BreadCrumb from '../shared/BreadCrumbComponent'
import SortContent from './SortContentComponent'

class SortBar extends Component {

	constructor(props) {
		super(props)
        this.productContainerGrid = this.productContainerGrid.bind(this)
        this.productContainerTable = this.productContainerTable.bind(this)
	}

    productContainerGrid(e) {
        this.props.productsContainerType('grid')
    }

    productContainerTable(e) {
        this.props.productsContainerType('table')
    }

    isGrid() {
        if(this.props.type == 'grid') {
            return 'active'
        }
        return ''
    }

    isTable() {
        if(this.props.type == 'table') {
            return 'active'
        }
        return ''
    }

  	render() {
        return(
            <div className="sortbar">
                <BreadCrumb />
                <div className="sortbar-group">
                    <div className="sort-dropdown dropdown d-none d-lg-flex">
                        <div className="sort-dropdown-button " id="dropdownMenuLink" data-toggle="dropdown">
                            <div className="sort-dropdown-button-title">
                                <span className="font-weight-bold">Sort By:</span>
                                <span className="sort-dropdown-type">Feature</span>
                            </div>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="sort-dropdown-container dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <SortContent type="" />
                        </div>
                    </div>
                    <div className={`show-type ${this.isGrid()}`} onClick={this.productContainerGrid}>
                        <i className="fa fa-th" aria-hidden="true"></i>
                    </div>
                    <div className={`show-type ${this.isTable()}`} onClick={this.productContainerTable}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SortBar;