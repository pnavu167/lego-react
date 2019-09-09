import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import component
import Header from './HeaderComponent'
import Home from '../Home/HomeComponent'
import Category from '../Categories/CategoryComponent'

render (
	<BrowserRouter>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/categories' component={Category} />
			</Switch>
		</div>
	</BrowserRouter>, document.getElementById('root'))