import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

class HashTag extends React.Component {
	constructor (props) {
	    super(props)
	}
	render() {
		return(
			<div className = 'hash-tag'>
				<a href = '#' className = 'hash-tag-link'>{this.props.name}</a>
			</div>
		);
	}
}

export default HashTag;