import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '@/layouts/HeaderComponent'
import QuickInfo from '@/sell/QuickInfoComponent'
import SelectSize from '@/sell/SelectSize'
import BottomBar from '@/sell/BottomBarComponent'


class SellComponent extends React.Component {
	render() {
		return(
			<div className="sell-container ">
				<Header/>
				<div className = "ask-page mg-top-header">
					<div className = "split-pane-page">
						<QuickInfo/>
						<SelectSize/>
						<BottomBar nameClass = "button-bar button-bar-right"/>
					</div>
				</div>
			</div>
		);
	}
}

export default SellComponent;