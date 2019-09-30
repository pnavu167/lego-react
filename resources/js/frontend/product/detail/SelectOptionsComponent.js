import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class SelectOptions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'type': 'select'
        }
        this.wrapperRef = React.createRef();
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnMount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e) {
        if (this.wrapperRef.current.contains(e.target)) {
            console.log('inside')
        } else {
            console.log('outside')
        }
        
    }

    changeType(e) {
        console.log(e)
        let type = e.target.type
        this.setState({
            'type': type
        })
    }

    fetchContainer() {
        if(this.state.type == 'chart') {
            return (
                <div>
                    <div className="header">
                        <a className="size-chart" type="select" onClick={this.changeType.bind(this)}>{'< back'}</a>
                        <span className="title">Size chart</span>
                        
                    </div>
                    <ul className="size-grid">
                        <li className="size-box all active">
                            <a className="size-box-container">
                                <span className="title">US All</span>
                                <span className="subtitle">$245</span>
                            </a>
                        </li>
                        {this.fetchSelectGrid()}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="header">
                        <span className="title">Select A U.S. Men's Size</span>
                        <a className="size-chart" type="chart" onClick={this.changeType.bind(this)}>Size chart</a>
                    </div>
                    <ul className="size-grid">
                        <li className="size-box all active">
                            <a className="size-box-container">
                                <span className="title">US All</span>
                                <span className="subtitle">$245</span>
                            </a>
                        </li>
                        {this.fetchSelectGrid()}
                    </ul>
                </div>
            )
        }
    }

    fetchSelectGrid() {
        var list = [];
        for(let i=1;i<=30;i++) {
            let size = 'US ' + i;
            let value = '$'+Math.floor(Math.random() * (300 - 0))   ;
            list.push(<SizeBox key={i} size={size} value={value} />)
        }
        return list;
    }

    fetchChartRow() {
        var list = [];
        for(let i=1;i<=30;i++) {
            let size = 'US ' + i;
            let value = '$'+Math.floor(Math.random() * (300 - 0))   ;
            list.push(<SizeBox key={i} size={size} value={value} />)
        }
        return list;
    }

  	render() {
        return(
            <div className="options"  >
                <label>Size</label>
                <div className="select-options position-relative" id="dd">
                    <button type="button" className="btn btn-default size-sm dropdown-toggle" title="All" data-toggle="dropdown" data-target="#selectSizeContainer" data-flip="false" data-boundary="dd">All
                        &nbsp;
                        <i className="fa fa-chevron-down"></i>
                    </button>
                    <div className="dropdown-menu select-size-container" aria-labelledby="selectSizeContainer" ref={this.wrapperRef} >
                        {this.fetchContainer()}
                    </div>
                </div>
            </div>
        );
    }
}

function SizeBox(props) {
    return (
        <li className="size-box">
            <a className="size-box-container">
                <span className="title">{props.size}</span>
                <span className="subtitle">{props.value}</span>
            </a>
        </li>
    )
}

export default SelectOptions;