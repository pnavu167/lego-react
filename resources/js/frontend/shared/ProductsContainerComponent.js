import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import ProductCard from '../shared/ProductCardComponent'

class ListContainer extends Component {

	constructor(props) {
		super(props)
	}

    showProducs(type) {
        if(this.props.type == 'grid') {
            return <GridType />
        } else {
            return <TableType />
        }
    }

  	render() {
        return(
            <div className="products-container">
                {this.showProducs(this.props.type)}
            </div>
        );
    }
}

function GridType() {
    return (
        <div className="row no-gutters">
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
            <div className="col-xl-2-5 col-lg-3 col-md-4 col-6 p-1">
                <ProductCard />
            </div>
        </div>
    );
}

function TableType() {
    return (
        <table className="table products-table table-responsive">
            <thead>
                <tr>
                    <th width="40%">Name</th>
                    <th width="15%" className="active sort-able">
                        <span>Feature</span>
                        <i className="fa fa-sort" aria-hidden="true"></i>
                    </th>
                    <th width="15%" className="sort-able">
                        <span>Last Sale</span>
                        <i className="fa fa-sort" aria-hidden="true"></i>
                    </th>
                    <th width="15%" className="sort-able">
                        <span>lowest ask</span>
                        <i className="fa fa-sort" aria-hidden="true"></i>
                    </th>
                    <th width="15%" className="sort-able">
                        <span>highest bid</span>
                        <i className="fa fa-sort" aria-hidden="true"></i>
                    </th>
                </tr>
            </thead>
            <tbody>
                <TableRow type="increase" />
                <TableRow type="decrease" />
                <TableRow type="increase" />
                <TableRow type="increase" />
                <TableRow type="decrease" />
                <TableRow type="increase" />
                <TableRow type="increase" />
                <TableRow type="decrease" />
                <TableRow type="decrease" />
                <TableRow type="decrease" />
            </tbody>
        </table>
    )
}

function TableRow(props) {
    return  (
        <tr>
            <td className="product-title">
                <div className="product-image">
                    <a href="#" className="">
                        <img src="/storage/images/home/category-1.png" />
                    </a>
                </div>

                <a href="#" className="product-name">
                    Converse Chuck Taylor All-Star 70s Hi Comme des Garcons Play Multi-Heart Green
                </a>

            </td>
            <td className="product-pride">2491</td>
            <td className="product-pride">
                <span>$300</span>
                &nbsp;
                <span className={props.type=="increase"?"value-increase":"value-decrease"}>
                    {props.type=="increase"?"+":"-"}
                    $30
                </span>
            </td>
            <td className="product-pride">$150</td>
            <td className="product-pride">$400</td>
        </tr>
    )
}

export default ListContainer;