import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';
import UserRow from './UserRow';
import AlertLabel from './AlertLabel';

class ListComponent extends Component {

	constructor (props) {
	    super(props)
	    this.state = {
	    	'users': '',
            'msg': ''
	    }
        console.log("constructor")
	}

  	deleteRow(key) {
  		var users = [...this.state.users]
  		users.splice(key, 1)
	    this.setState({users})
  	}

    showMessage(msg) {
        this.setState({msg: msg})
    }

    componentDidMount () {
        console.log("componentDidMount")
        axios.get(host.baseUrl + '/api/users').then(response => {
            this.setState({ users: response.data })
        }).catch(function (error) {
            console.log(error)
        })
    }

    fetchRows () {
        if (this.state.users instanceof Array) {
            return this.state.users.map( (user, i) => {
                return <UserRow 
                    user={user} 
                    key={i} 
                    index={i} 
                    deleteRow={this.deleteRow.bind(this)} 
                    message={this.showMessage.bind(this)}
                />
            })
        }
    }

  	render() {
        return(
            <div>
                <AlertLabel msg={this.state.msg} />
            	<table className="table table-dark">
            		<thead>
            			<tr>
            				<th>Id</th>
            				<th>Name</th>
                            <th>Email</th>
            				<th>
            					<button id="add-data" className="btn btn-primary">
            						<i className="fa fa-plus"></i>
            					</button>
            				</th>
            			</tr>
            		</thead>
            		<tbody>
            			{this.fetchRows()}
            		</tbody>
            	</table>
            </div>
        );
    }
}

export default ListComponent;