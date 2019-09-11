import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import component
// import Header from './HeaderComponent'
import Home from '../Home/HomeComponent'
import List from '../List/ListComponent'

render (
	<BrowserRouter>
		<div className="wrapper">
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/list' component={List} />
			</Switch>
		</div>
	</BrowserRouter>, document.getElementById('root'))