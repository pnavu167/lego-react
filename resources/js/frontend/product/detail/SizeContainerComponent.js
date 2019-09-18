import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class SizeContainer extends Component {

  	render() {
        return(
            <div className="size-container">
                <div className="size-info">
                    Size: 11
                </div>
                <div className="size-divider"></div>
                <div className="view-all-option">
                    View All Size
                </div>
            </div>
        );
    }
}

export default SizeContainer;