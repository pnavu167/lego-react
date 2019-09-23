import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';

class ProductComponent extends Component {


  	render() {
        return(
            <a className="stockx-product-item" href="#">
                <div className="stockx-product-img">
                    <img src="https://stockx.imgix.net/products/streetwear/FEAR-OF-GOD-ESSENTIALS-Photo-T-shirt-Black.png?fit=fill&amp;bg=FFFFFF&amp;w=300&amp;h=214&amp;auto=format,compress&amp;trim=color&amp;q=90&amp;dpr=2&amp;updated_at=1565964406"/>
                </div>      
                <div className="stockx-product-title">FEAR OF GOD ESSENTIALS Photo T-shirt Black</div>
                <div className="stockx-product-ask">
                    <span className="stockx-product-ask-amount">$68</span> • Lowest Ask
                </div>
            </a> 
        );
    }
}

export default ProductComponent;