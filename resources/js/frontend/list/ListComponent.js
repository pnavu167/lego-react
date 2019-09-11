import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import Header from '../layouts/HeaderComponent'
import ListBanner from './ListBannerComponent'

class List extends Component {

  	render() {
        return(
            <div id="list-container">
            	<Header />
            	<ListBanner />
            	{/*<ListContaner />*/}
            </div>
        );
    }
}

export default List;