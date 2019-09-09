import React, { Component } from 'react'
import axios from 'axios'

class UserRow extends Component {
	constructor (props) {
		super(props)
		this.handleDelete = this.handleDelete.bind(this)
	}
	handleDelete (e) {
		e.preventDefault()
		if (!confirm('Are your sure you want to delete this item?')) {
			return false
		}
		let url = host.baseUrl + '/api/users/delete/' + this.props.user.id
		axios.post(url).then(response => {
			this.props.deleteRow(this.props.index)
			this.props.message(response.data.message)
		}).catch(function (error) {
			console.log(error)
		})
	}
	render () {
		return (
			<tr>
				<td>
					{this.props.user.id}
				</td>
				<td>
					{this.props.user.name}
				</td>
				<td>
					{this.props.user.email}
				</td>
				<td>
					<a className='btn btn-primary' to={'/users/edit/' + this.props.user.id}>Edit</a>
					&nbsp;
					<button className='btn btn-danger' onClick={this.handleDelete}>Delete</button>
				</td>
			</tr>
		)
	}
}

export default UserRow