import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class HeaderContainer extends Component {

    constructor(props) {
        super(props)
    }

    renderTitle() {
        var title =  "Converse Chuck Taylor All-Star 70s Hi Comme des Garcons Play Multi-Heart Green"

        if(this.props.type == "mobile") {
            return (<h3>{title}</h3>)
        } else {
            return (<h1>{title}</h1>)
        }
    }
  	render() {
        return(
            <div className={`header-container ${this.props.type}`}>
                {this.renderTitle()}
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
        );
    }
}

export default HeaderContainer;