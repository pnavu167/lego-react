import React, { Component } from 'react'

class AlertLabel extends Component {
	render () {
		if(this.props.msg != '') {
			return (
				<div className="alert alert-success" id="message" role="alert">
	                {this.props.msg}
	                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
	                    <span aria-hidden="true">&times;</span>
	                </button>
	            </div>
			)
		} else {
			return null
		}
		
	}
}

export default AlertLabel