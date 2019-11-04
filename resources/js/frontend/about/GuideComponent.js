import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import Footer from '../layouts/FooterComponent'
import Header from '@/layouts/HeaderComponent'
import About from './AboutComponent'
import Basic from './BasicComponent'
import Buy from './BuyComponent'
import Sell from './SellComponent'
import ModalVideo from './ModalVideo'

class GuideComponent extends React.Component {
	render() {
		return(
			<div className="guide-container">
			<Header/>
			<About/>
			<Basic/>
			<Buy/>
			<Sell/>
			<div className="now-u-know">
				<img src="//stockx-assets.imgix.net/now_you_know.png?auto=compress,format&amp;h=150" alt="now you know"/>
			</div>
			<ModalVideo/>
			<Footer/>
			</div>
		);
	}
}

export default GuideComponent;