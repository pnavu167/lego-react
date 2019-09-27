import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '@/faq/HeaderComponent'
import FormCS from '@/faq/FormContractSupport'
import ListTopic from '@/faq/ListTopic'

class ContractSupport extends React.Component {
	render() {
		return(
			<div className="help-container contract-support">
				<Header/>
				<div className = 'force-community-head-line title-topic'>
					<h1 className = 'title'>Still having trouble?</h1>
					<p className = 'description'>
						If you can't find what you're looking for, here are a couple ways to contact us.
					</p>
				</div>

				<div className = 'contract-support-container'>
					<div className = 'list-topic contract-support-form'>
						<FormCS />
					</div>

					<div className = 'list-option-container'>
						<ListTopic/>
					</div>
					
				</div>
			</div>
		);
	}
}

export default ContractSupport;