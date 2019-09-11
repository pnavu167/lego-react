import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

class Switcher extends Component {

    constructor(props) {
        super(props)
    }

    addClassName() {
        var className = "switcher"
        if(this.props.type == "mobile-tablet") {
            className = "switcher d-md-none switcher-mobile"
        }
        return className
    }

  	render() {
        return(
            <div className={this.addClassName()}>
                <div className="switcher-item active">SNEAKERS</div>
                <div className="switcher-item">STREETWEAR</div>
                <div className="switcher-item">HANDBAGS</div>
                <div className="switcher-item">WATCHES</div>
            </div>
        );
    }
}

export default Switcher;