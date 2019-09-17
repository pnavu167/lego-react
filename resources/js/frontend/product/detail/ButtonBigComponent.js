import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import SizeContainer from './SizeContainerComponent'

class ButtonBig extends Component {

    constructor(props) {
        super(props)
    }

    buttonType() {
        var className = ""
        if(this.props.type == "bid") {
            return <ButtonBid />
        } else {
            return <ButtonAsk />
        }
    }
  	render() {
        return(
            <div className="button-big">
                {this.buttonType()}
                <SizeContainer />
            </div>
        );
    }
}

function ButtonBid(props) {
    return (
        <a className="button-big-contaner bid">
            <div className="button-big-contaner-left">
                <div className="big">$35,000</div>
                <div className="small">Lowest Ask</div>
            </div>
            <div className="button-big-divider">
            </div>
            <div className="button-big-contaner-right">
                <div className="big">Buy</div>
                <div className="small">or Bid</div>
            </div>
        </a>
    )
}
function ButtonAsk(props) {
    return (
        <a className="button-big-contaner ask">
            <div className="button-big-contaner-left">
                <div className="big">$20,000</div>
                <div className="small">Highest Bid</div>
            </div>
            <div className="button-big-divider">
            </div>
            <div className="button-big-contaner-right">
                <div className="big">Buy</div>
                <div className="small">or Ask</div>
            </div>
        </a>
    )
}
export default ButtonBig;