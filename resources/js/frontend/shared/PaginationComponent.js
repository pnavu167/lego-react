import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class Pagination extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
		<nav aria-label="Custom Pagination">
			<ul className="paginator justify-content-center">
				<li className="paginator-item paginator-arrow">
					<a className="paginator-link" href="#" aria-label="Previous">
						<i className="fa fa-chevron-left" aria-hidden="true"></i>
					</a>
				</li>
				<li className="paginator-item active">
					<a className="paginator-link" href="#">1</a>
				</li>
				<li className="paginator-item">
					<a className="paginator-link" href="#">2</a>
				</li>
				<li className="paginator-item">
					<a className="paginator-link" href="#">3</a>
				</li>
				<li className="paginator-item paginator-arrow">
					<a className="paginator-link" href="#" aria-label="Next">
						<i className="fa fa-chevron-right" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
		</nav>
		);
	}
}

export default Pagination;