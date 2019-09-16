import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import component
// import Header from './HeaderComponent'
import Home from '@/home/HomeComponent'
import ProductList from '@/product/list/ListComponent'
import ProductDetail from '@/product/detail/DetailComponent'

render (
	<BrowserRouter>
		<div className="wrapper">
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/products' component={ProductList} />
				<Route exact path='/product-detail' component={ProductDetail} />
			</Switch>
		</div>
	</BrowserRouter>, document.getElementById('root'))