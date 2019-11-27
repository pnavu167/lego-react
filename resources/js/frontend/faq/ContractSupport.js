import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '@/faq/HeaderComponent'

class ContractSupport extends React.Component {
	render() {
		return(
			<div className="help-container contract-support">
				<Header type = 'header-pc' search='true'/>
				<div className = 'force-community-head-line title-topic'>
					<h1 className = 'title'>Still having trouble?</h1>
					<p className = 'description'>
						If you can't find what you're looking for, here are a couple ways to contact us.
					</p>
				</div>

				<div className = 'contract-support-container'>
					<div className = 'list-topic contract-support-form'>
						<FormContractSupport />
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

function FormContractSupport(props) {
	return(
		<div className = 'contract-support-form-detail'>
			<h2>Create Case</h2>
			<form>
				<div className="form-group group-input">
				    <label><span className ='red'>*</span>Email</label>
				    <input type="email" className="form-control input-form" required aria-describedby="emailHelp" placeholder="you@example.com"/>
				</div>
				<div className="form-group group-input">
				    <label>
				    	Primary Order Number
				    	<i className="fa fa-info-circle"></i>
				    </label>
				    <input type="email" className="form-control input-form" required />
				</div>
				<div className="form-group group-input">
				    <label><span className ='red'>*</span>Type</label>
				    <select className="form-control" id="exampleFormControlSelect1">
						<option>-- none selected --</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
				    </select>
				</div>
				<div className="form-group group-input">
				    <label><span className ='red'>*</span>Description</label>
					<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>					
				</div>
				<div className = 'form-footer'>
					<button title = 'Next' className = 'btnNext' type = 'submit'>Next</button>
				</div>
			</form>
		</div>
	);
}

function ListTopic(props) {
	return(
		<div className="list-topic-container ">
			<div className = "topic list-topic">
				<div className = "topic-catalog">
					<ul>
						<LinkTopic url = '#' title = 'Account Features'/>
						<LinkTopic url = '#' title = 'Luxury Products'/>
						<LinkTopic url = '#' title = 'Money'/>
						<LinkTopic url = '#' title = 'Product Guidelines'/>
						<LinkTopic url = '#' title = 'Shipping'/>
						<LinkTopic url = '#' title = 'Welcome To StockX'/>
					</ul>
				</div>
			</div>
		</div>
	);
}

function LinkTopic(props) {
	return(
		<li>
			<div className ="topic-hierarchy-entry">
				<a href = {props.url} className = "topic-hierarchy-link">
					{props.title}
				</a>
			</div>
		</li>
	);
}