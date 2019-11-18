import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import Header from '@/layouts/HeaderComponent'
import Footer from '@/layouts/FooterComponent'
import TitleContainer from '@/shared/TitleContainerComponent'
import PortfoliosTable from '@/portfolios/PortfoliosTableComponent'
import 'semantic-ui/dist/semantic.min.css'
import 'semantic-ui/dist/semantic.min.js'

class BrowsePortfolios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTitle: 'Browse Portfolios'
        };
    }

    render() {
        return(
            <div className="portfolios">
                <Header/>
                <div className="portfolios-page">
                    <TitleContainer headerTitle={this.state.headerTitle}/>
                    <PortfoliosTable/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BrowsePortfolios;