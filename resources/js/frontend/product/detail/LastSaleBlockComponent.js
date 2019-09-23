import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import SizeContainer from './SizeContainerComponent'

class LastSaleBlock extends Component {

  	render() {
        return(
            <div className={`last-sale-block ${this.props.type}`}>
                <div className="last-sale">
                    <h3>Last Sale</h3>
                    <div className="sale-value">
                        $24,000
                    </div>
                    <div className="sale-value-info value-increase">
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                        <span className="dollar">+$2,000</span>
                        <span className="percentage">(+5%)</span>
                    </div>
                </div>
                <SizeContainer />
            </div>
        );
    }
}

export default LastSaleBlock;