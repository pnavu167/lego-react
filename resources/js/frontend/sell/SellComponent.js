import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '@/layouts/HeaderComponent'
import QuickInfo from '@/sell/QuickInfoComponent'
import SelectSize from '@/sell/SelectSize'


class SellComponent extends React.Component {
	render() {
		return(
			<div className="sell-container ">
				<Header/>
				<div className = "ask-page mg-top-header">
					<div className = "split-pane-page">
						<QuickInfo/>
						<SelectSize/>
					</div>
				</div>
			</div>
		);
	}
}

export default SellComponent;