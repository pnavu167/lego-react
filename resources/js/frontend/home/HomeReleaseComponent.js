import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component
import ProductReleaseCard from '../shared/ProductReleaseCardComponent'
class HomeRelease extends Component {

    fetchContent() {
        var list = [];
        for(var i=0;i<=5;i++) {
            list.push(
                <div className="col-4" key={i}>
                    <ProductReleaseCard key={i}/>
                </div>
            )
        }
        return list
    }

  	render() {
        return(
            <div className="home-release">
                <div className="home-section-header">
                    <div className="title-small d-flex align-items-center">
                        <img className="icon-16" src="/storage/images/home/release-calendar.svg" />
                        &nbsp;
                        Release Calendar
                    </div>
                    <a href="#" className="link-see-all">
                        See All
                    </a>
                </div>
                <div className="home-release-container">
                    <div className="row no-gutters">
                        {this.fetchContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeRelease;