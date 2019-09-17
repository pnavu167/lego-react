import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import ProductCard from '@/shared/ProductCardComponent'

class RelatedProducts extends Component {

  	render() {
        return(
            <section className="related-products">
                <div className="container mobile-container">
                    <div className="related-banner">
                        <div className="related-banner-content">
                            Related Products
                        </div>
                    </div>
                    <div className="list row mobile-row">
                        <div className="col-2-5 mobile-min-width-200">
                            <ProductCard />
                        </div>
                        <div className="col-2-5 mobile-min-width-200">
                            <ProductCard />
                        </div>
                        <div className="col-2-5 mobile-min-width-200">
                            <ProductCard />
                        </div>
                        <div className="col-2-5 mobile-min-width-200">
                            <ProductCard />
                        </div>
                        <div className="col-2-5 mobile-min-width-200">
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RelatedProducts;