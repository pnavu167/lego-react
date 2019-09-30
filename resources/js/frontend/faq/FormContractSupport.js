import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class FormContractSupport extends React.Component {
	render() {
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
}

export default FormContractSupport;