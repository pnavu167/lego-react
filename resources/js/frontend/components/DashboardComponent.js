import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ListComponent from './ListComponent';
import FormComponent from './FormComponent';

export default class Dashboard extends Component {
    render() {

        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            <ListComponent />
                        </div>
                    </div>
                </div>
                <FormComponent />
            </div>

        );
    }
}

if (document.getElementById('dashboard')) {
    ReactDOM.render(
        <Dashboard />, document.getElementById('dashboard')
    );
}
