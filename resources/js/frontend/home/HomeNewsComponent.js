import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component

class HomeNewsRelease extends Component {

    fetchColumn() {
        var news = [];

        for(var i=0;i<=4;i++) {
            news.push(
                <div className="new-article" key={i}>
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
                <div className="home-news-header">
                    <div className="home-news-title">
                        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                        &nbsp;
                        Latest News
                    </div>
                    <a href="#" className="btn-see-all">
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