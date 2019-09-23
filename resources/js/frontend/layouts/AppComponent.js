import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import component
// import Header from './HeaderComponent'
// import Home from '../Home/HomeComponent'
import News from '@/News/NewsComponent'
import News_List from '@/News/ListsComponent'
import PostOne from '@/News/PostOneComponent'
import PostTwo from '@/News/PostTwoComponent'
import PostThree from '@/News/PostThreeComponent'
import Home from '@/home/HomeComponent'
import ProductList from '@/product/list/ListComponent'
import ProductDetail from '@/product/detail/DetailComponent'
import Guide from '@/about/GuideComponent'


render (
	<BrowserRouter>
		<div className="wrapper">
			<Switch>
				<Route exact path='/' component={Home} />
				//News
				<Route exact path='/news' component={News} />
				<Route exact path='/news/list' component={News_List} />
				<Route exact path='/news/post_one' component={PostOne} />
				<Route exact path='/news/post_two' component={PostTwo} />
				<Route exact path='/news/post_two' component={PostTwo} />
				{/*End News*/}
				<Route exact path='/products' component={ProductList} />
				<Route exact path='/product-detail' component={ProductDetail} />
				{/*About*/}
				<Route exact path='/how-it-works' component={Guide} />
				{/*End About*/}
			</Switch>
		</div>
	</BrowserRouter>, document.getElementById('root')
)