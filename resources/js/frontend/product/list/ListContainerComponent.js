import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import SideBar from '@/product/list/SideBarComponent'
import ProductsContainer from '@/shared/ProductsContainerComponent'
import SortBar from '@/product/list/SortBarComponent'
import Pagination from '@/shared/PaginationComponent'

class ListContainer extends Component {

	constructor(props) {
		super(props)
        this.state = {
            'productsContainerType': 'grid'
        }
	}

    changeProductsContainerType(type) {
        this.setState({'productsContainerType': type})
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
                            <SortBar productsContainerType={this.changeProductsContainerType.bind(this)} type={this.state.productsContainerType} />
                            <ProductsContainer type={this.state.productsContainerType} />
                            <Pagination />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ListContainer;