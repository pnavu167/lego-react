import React from 'react'
import { render } from 'react-dom'
import {
	Router,
	Route,
	Switch
} from 'react-router-dom'
import Home from '../Home/HomeComponent'

render (
	<Router>
		<Switch>
			<Route path='/' component={Home} />
		</Switch>
	</Router>, document.getElementById('root'))