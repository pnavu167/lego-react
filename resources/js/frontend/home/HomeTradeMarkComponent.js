import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'


class HomeTradeMark extends Component {

    constructor(props) {
        super(props)
    }

    addClassName() {
        var className = "container home-trade-mark d-none d-md-flex"
        if(this.props.type == "mobile-tablet") {
            className = "home-trade-mark d-flex d-md-none"
        }
        return className
    }

  	render() {
        return(
            <div className="border-top">
                <div className={this.addClassName()}>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/espn.png" />
                    </div>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/forbes.png" />
                    </div>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/techcrunch.png" />
                    </div>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/yahoo.png" />
                    </div>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/wsj.png" />
                    </div>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/daily.png" />
                    </div>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/sole.png" />
                    </div>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/ny.png" />
                    </div>
                    <div className="home-trade-mark-icon">
                        <img src="/storage/images/home/ted.png" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeTradeMark;