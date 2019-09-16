import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import Header from '../layouts/HeaderComponent'
import ListBanner from './ListBannerComponent'
import ListContainer from './ListContainerComponent'
import SortContent from './SortContentComponent'

class List extends Component {

  	render() {
        return(
            <div id="list-container">
            	<Header />
            	<ListBanner />
            	<SortContent type="mobile-tablet" />
            	<ListContainer />
            </div>
        );
    }
}

export default List;