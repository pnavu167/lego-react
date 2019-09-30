import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'


class QuickInfoComponent extends React.Component {
	render() {
		return(
			<div className="pane sixty">
				<div className = "buysell-header">
					<div className="pane-header">
						<h1 className="proxima-heading">Nike SB Dunk Low 
							<br className="hidden-xs"/>Supreme Jewel Swoosh Silver
						</h1>
						<div className="market-summary">
							<span className="grey">Highest Bid: </span>
							<span className="bold">$514</span>
							<span className="grey"> | Lowest Ask: </span>
							<span className="bold">$175 </span>
						</div>
						<div className="hidden-xs"></div>
						<div className="visible-xs-block">
							<div className="buy-sell-size">
								<div className="size-details">U.S. Men's Size 4</div>
								<img src="//stockx-assets.imgix.net/svg/icons/pencil.svg?auto=compress,format"/>
							</div>
						</div>
					</div>
					<div className="header-image image-container">
						<img src="https://stockx.imgix.net/Nike-SB-Dunk-Low-Supreme-Jewel-Swoosh-Silver-Product.jpg?fit=fill&amp;bg=FFFFFF&amp;w=700&amp;h=500&amp;auto=format,compress&amp;q=90&amp;dpr=2&amp;trim=color&amp;updated_at=1568299952"/>
					</div>
				</div>
			</div>
		);
	}
}

export default QuickInfoComponent;