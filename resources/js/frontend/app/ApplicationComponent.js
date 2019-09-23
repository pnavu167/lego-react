import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../layouts/FooterComponent'
import Header from '@/layouts/HeaderComponent'
import TextApp from '@/app/TextAppComponent'


class ApplicationComponent extends React.Component {
	render() {
		return(
			<div className="app-container">
				<Header/>
				<div className = "page-container mg-top-header">
					<div className = "text-app-background">
						<div className ="text-app-row">
							<div className="img-cell-hand img-fluid">
								<img src="//stockx-assets.imgix.net/png/phone-hand.png?auto=compress,format" alt="phone"/>
							</div>
							<TextApp/>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default ApplicationComponent;