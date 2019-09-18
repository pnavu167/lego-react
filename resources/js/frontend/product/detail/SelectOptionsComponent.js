import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class SelectOptions extends Component {

  	render() {
        return(
            <div className="options">
                <label>Size</label>
                <div className="select-options">
                    <button type="button" className="btn btn-default size-sm " data-toggle="dropdown" data-id="region" title="All">All <i className="fa fa-chevron-down"></i></button>
                </div>
            </div>
        );
    }
}

export default SelectOptions;