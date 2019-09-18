import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import LastSaleBlock from "./LastSaleBlockComponent"
import SelectOptions from "./SelectOptionsComponent"
import ButtonBig from "./ButtonBigComponent"
import Content from "./ContentComponent"

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
                            <h1>
                                Converse Chuck Taylor All-Star 70s Hi Comme des Garcons Play Multi-Heart Green
                            </h1>
                            <small>
                                <div className="header-stat">
                                    <span className="header-stat-title">
                                        Condition:
                                    </span>
                                    <span className="header-stat-green">
                                        New
                                    </span>
                                </div>
                                <span className="divider-pipe">|</span>
                                <div className="header-stat">
                                    <span className="header-stat-title">
                                        Ticker:
                                    </span>
                                    <span className="header-stat-black">
                                        AIRMAG-2016
                                    </span>
                                </div>
                                <span className="divider-pipe">|</span>
                                 <div className="header-stat">
                                    <span className="header-stat-green">
                                        100% Authentic
                                    </span>
                                </div>
                            </small>
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