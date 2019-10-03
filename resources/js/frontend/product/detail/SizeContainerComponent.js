import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class SizeContainer extends Component {

    constructor(props) {
        super(props)
    }

    getModal(type) {
        if(type=='all-asks') {
            return <ModalInfo type="all-asks"/>
        } else if(type=='all-bids') {
            return <ModalInfo type="all-bids"/>
        } else if(type=='sales-histories') {
            return <ModalSalesHistory type='' />
        } else if(type='sales-histories-mobile') {
            return <ModalSalesHistory type='mobile' />
        }
    }

  	render() {
        var target = ''
        var content = ''
        if(this.props.type == 'all-asks') {
            target = '#allAsksModal'
            content = 'View All Asks'
        } else if(this.props.type == 'all-bids') {
            target = '#allBidsModal'
            content = 'View All Bids'
        } else if(this.props.type == 'sales-histories') {
            target = '#salesHistoriesModal'
            content = 'View All Sales'
        } else if(this.props.type == 'sales-histories-mobile') {
            target = '#salesHistoriesMobileModal'
            content = 'View All Sales'
        }

        return(
            <div className="size-container">
                <div className="size-info">
                    Size: 11
                </div>
                <div className="size-divider"></div>
                <div className="view-all-option" data-backdrop="false" data-target={target} data-toggle="modal">
                    {content}
                </div>

                {this.getModal(this.props.type)}
            </div>
        );
    }
}

export default SizeContainer;

function ModalInfo(props) {
    var rows = []
    var title = ''
    var modalClass = ''
    var modalId = ''
    if(props.type == 'all-asks') {
        title = 'All Asks'
        modalClass = 'all-asks-modal'
        modalId = 'allAsksModal'
    } else if(props.type ==  'all-bids') {
        title = 'All Bids'
        modalClass = 'all-bids-modal'
        modalId = 'allBidsModal'
    }
    for(var i = 0; i<=10;i++)  {
        rows.push(
            <tr key={i}>
                <td>{Math.floor(Math.random() * 15) + 5}</td>
                <td>{Math.floor(Math.random() * 500) + 100}</td>
                <td>{Math.floor(Math.random() * 10) + 1}</td>
            </tr>
        )
    }
    return (
    <div className={`modal ${modalClass} custom-modal`} id={modalId}>
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th width="20%">SIZE</th>
                                <th width="40%">ASK PRICE</th>
                                <th width="40%">#AVAILABLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>
    </div>
    )
}

function ModalSalesHistory(props) {
    let modalId = 'salesHistoriesModal'
    if(props.type == 'mobile') {
        modalId = 'salesHistoriesMobileModal'
    }
    return (
    <div className="modal sales-histories-modal custom-modal" id={modalId}>
        <div className="modal-dialog modal-lg">
            <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Sales Histories</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <div className="sales-histories-highchart chart">
                    </div>
                    <table className="table table-striped table-condensed ">
                        <thead>
                            <tr>
                                <th className="" width="15%">Size</th>
                                <th className="" width="25%">Sale Price</th>
                                <th className="" width="35%">Date</th>
                                <th className="" width="25%">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6</td>
                                <td>$293</td>
                                <td>Tuesday, September 24, 2019</td>
                                <td>11:57 PM EST</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>$293</td>
                                <td>Tuesday, September 24, 2019</td>
                                <td>11:14 PM EST</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>$284</td>
                                <td>Tuesday, September 24, 2019</td>
                                <td>10:52 PM EST</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>$293</td>
                                <td>Tuesday, September 24, 2019</td>
                                <td>10:41 PM EST</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>$293</td>
                                <td>Tuesday, September 24, 2019</td>
                                <td>10:14 PM EST</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>$293</td>
                                <td>Tuesday, September 24, 2019</td>
                                <td>10:14 PM EST</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}