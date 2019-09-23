import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import LastSaleBlock from "./LastSaleBlockComponent"
import SelectOptions from "./SelectOptionsComponent"
import ButtonBig from "./ButtonBigComponent"
import Content from "./ContentComponent"
import HeaderContainer from "./HeaderContainerComponent"

class Container extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'value': 0
        }
        this.handleSlider = this.handleSlider.bind(this)
    }

    handleSlider(e) {
        this.setState({value: e.target.value})
    }

  	render() {
        return(
            <div className="product-detail-container">
                <div className="product-detail-header">
                    <div className="row">
                        <div className="col-md-12">
                            <HeaderContainer />
                        </div>
                    </div>
                    <div className="market-summary">
                        <SelectOptions />
                        <LastSaleBlock />
                        <ButtonBig type="bid" />
                        <ButtonBig type="ask" />
                    </div>
                </div>
                <Content />
            </div>
        );
    }
}

export default Container;