import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import component
// import Header from './HeaderComponent'
import Home from '../Home/HomeComponent'
import List from '../List/ListComponent'
import News from '../News/NewsComponent'
import News_List from '../News/ListsComponent'
import PostOne from '../News/PostOneComponent'
import PostTwo from '../News/PostTwoComponent'
import PostThree from '../News/PostThreeComponent'
import Home from '@/home/HomeComponent'
import ProductList from '@/product/list/ListComponent'
import ProductDetail from '@/product/detail/DetailComponent'


render (
	<BrowserRouter>
		<div className="wrapper">
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/list' component={List} />
				<Route exact path='/news' component={News} />
				<Route exact path='/news/post_one' component={PostOne} />
				<Route exact path='/news/post_two' component={PostTwo} />

				<Route exact path='/products' component={ProductList} />
				<Route exact path='/product-detail' component={ProductDetail} />

			</Switch>
		</div>
	</BrowserRouter>, document.getElementById('root')
)