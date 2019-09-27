import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import Header from '@/faq/HeaderComponent'
import AnswerContent from '@/faq/AnswerContent'
import TrendingArticles from '@/faq/TrendingArticles'

class AnswerComponent extends React.Component {
	render() {
		return(
			<div className="answer-container help-container list-ask-component">
				<Header/>
				<div className = 'list-content'>
					<AnswerContent/>
					<div className = 'list-topic-container'>
						<div className = 'list-topic'>
							<TrendingArticles/>
							<TrendingArticles/>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default AnswerComponent;