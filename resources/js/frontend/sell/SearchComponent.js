import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '@/layouts/HeaderComponent'
import QuickGuid from '@/sell/QuickGuidSell'
import ResutlSearch from '@/sell/ResutlSearchComponent'



class SearchComponent extends React.Component {

	render() {
		
		return(
			<div className="search-sell-container ">
				<Header/>
				<div className = "mg-top-header">
					<QuickGuid />
					
						<div className = "component-page">
							<div className = "component-container">
								<div className = "product-search-page">
									<div className = "product-search">
										<div className="search-heder">
											<h1 className="proxima-heading">Choose a product</h1>
											<div className="sub-title">Find the product you're looking for to continue</div>
											<hr/>
										</div>

										<div className="searchBox">
											<i className="fa fa-search"></i>
											<input id="site-search" type="search" placeholder="Search for brand, color, etc." className="searchbox input-text form-control"/>
										</div>

										<div className = "product-search-results scrollable">
											<ResutlSearch/>
											<ResutlSearch/>
											<ResutlSearch/>
											<ResutlSearch/>
											<ResutlSearch/>
										</div>
									</div>
								</div>
							</div>
						</div>
					
				</div>
			</div>
		);
	}
}

export default SearchComponent;