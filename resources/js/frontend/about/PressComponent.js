import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../layouts/FooterComponent'
import Header from '@/layouts/HeaderComponent'
import PressTitle from './PressTitle'
import PressContent from './PressContent'


class PressComponent extends React.Component {
	render() {
		return(
			<div className="press">
				<Header/>
				<div className="press-page">
					<PressTitle/>
					<PressContent/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default PressComponent;