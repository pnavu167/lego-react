import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
import ProductComponent from './ProductComponent';

class ProductWrapper extends Component {

    constructor(props) {
        super(props)
    }

    createProduct() {
        
        var indents = [];
        var number = 4;
        if(this.props.number){
            number = this.props.number;
        }

        for (var i = 0; i < number; i++) {
            indents.push(<ProductComponent key = {i}/>);
        }

        return (<div className="stockx-product-wrapper">{indents}</div>);
    }

  	render() {
        return(
            <div>
                {this.createProduct()}
            </div>
            
        );
    }
}

export default ProductWrapper;