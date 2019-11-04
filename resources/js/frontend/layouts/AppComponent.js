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
import Press from '@/about/PressComponent'
import Review from '@/about/ReviewComponent'

import Login from '@/account/LoginComponent'

import Application from '@/app/ApplicationComponent'

import Sell from '@/sell/SellComponent'
import SearchSell from '@/sell/SearchComponent'

import Help from '@/faq/HelpComponent'
import ListAsk from '@/faq/ListAsk'
import Answer from '@/faq/AnswerComponent'
import ContractSupport from '@/faq/ContractSupport'



render (
	<BrowserRouter>
		<div className="wrapper">
			<Switch>
				<Route exact path='/' component={Home} />
				{/*News*/}
				<Route exact path='/news' component={News} />
				<Route exact path='/news/list' component={News_List} />
				<Route exact path='/news/post_one' component={PostOne} />
				<Route exact path='/news/post_two' component={PostTwo} />
				<Route exact path='/news/post_three' component={PostThree} />
				{/*End News*/}
				<Route exact path='/products' component={ProductList} />
				<Route exact path='/product-detail' component={ProductDetail} />

				{/*About*/}
				<Route exact path='/how-it-works' component={Guide} />
				<Route exact path='/press' component={Press} />
				<Route exact path='/review' component={Review} />
				{/*End About*/}

				{/*Login*/}
				<Route exact path='/log-in' component={Login} />
				{/*End Login*/}

				{/*Application*/}
				<Route exact path='/app' component={Application} />
				{/*End Application*/}

				{/*Sell*/}
				<Route exact path='/sell' component={Sell} />
				<Route exact path='/search-sell' component={SearchSell} />
				{/*End Sell*/}

				{/*FAQ*/}
				<Route exact path='/help' component={Help} />
				<Route exact path='/help/list' component={ListAsk} />
				<Route exact path='/help/answer' component={Answer} />
				<Route exact path='/contract-support' component={ContractSupport} />
				{/*End FAQ*/}
			</Switch>
		</div>
	</BrowserRouter>, document.getElementById('root')
)