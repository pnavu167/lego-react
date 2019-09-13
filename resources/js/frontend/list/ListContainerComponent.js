import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import SideBar from './SideBarComponent'
import ProductCard from '../shared/ProductCardComponent'
import SortBar from './SortBarComponent'
import Pagination from '../shared/PaginationComponent'

class ListContainer extends Component {

	constructor(props) {
		super(props)
	}

  	render() {
        return(
            <div className="container mobile-container">
                <section className="list-content">
                    <div className="row">
                        <div className="collapse d-lg-flex col-lg-2 col-4" id="sidebar">
                            <SideBar />
                        </div>
                        <div className="col-lg-10">
                            <SortBar />
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
                            <Pagination />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ListContainer;