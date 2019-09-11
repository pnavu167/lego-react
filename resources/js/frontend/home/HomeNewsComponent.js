import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component

class HomeNewsRelease extends Component {

    fetchColumn() {
        var news = [];

        for(var i=0;i<=4;i++) {
            news.push(
                <div className="new-article border-bottom" key={i}>
                    <a className="new-article-title">
                        The MCA Virgil Abloh: "Figures of Speech" Interview
                    </a>
                    <div className="new-article-info">
                        KEVIN KOSANOVICH - 09/07/2019
                    </div>
                </div>
            )
        }

        return news
    }

  	render() {
        return(
            <div className="home-news">
                <div className="home-section-header">
                    <div className="title-small d-flex align-items-center">
                        <img className="icon-16" src="/storage/images/home/latest-news.svg" />
                        &nbsp;
                        Latest News
                    </div>
                    <a href="#" className="link-see-all">
                        See All
                    </a>
                </div>
                <div className="home-news-container">
                    {this.fetchColumn()}
                </div>
            </div>
        );
    }
}

export default HomeNewsRelease;