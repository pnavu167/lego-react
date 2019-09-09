import ReactDOM from 'react-dom';
import React, { Component } from 'react';


class FormComponent extends React.Component {
	render() {
		return(
			<div className="modal fade" id="modal-form" tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Modal Title
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="row">
								<div className="col-4">Name</div>
								<input className="col-8 form-group" name="name" defaultValue="A" />
							</div>
							<div className="row">
								<div className="col-4">Age</div>
								<input className="col-8 form-group" name="age" defaultValue="21" />
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FormComponent;