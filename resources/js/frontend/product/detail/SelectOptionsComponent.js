import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class SelectOptions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'type': 'grid',
            'toggleSizeContainer': ''
        }
        this.sizeContainerRef = React.createRef()
        this.handleClickSizeBox = this.handleClickSizeBox.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickButtonShow = this.handleClickButtonShow.bind(this)
        this.handleChangeSize = this.handleChangeSize.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnMount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick(e) {
        let toggleSizeContainer = false;
        if($('.select-size-container').hasClass('show')) {
            if (this.sizeContainerRef.current.contains(e.target)) {
            } else {
                toggleSizeContainer = true
            }
        }
        if(e.target.classList.contains('select-size-button')) {
            this.handleClickButtonShow()
        } else if(toggleSizeContainer) {
            this.toggleSizeContainer()
        }
    }

    handleClickSizeBox(e) {
        this.handleChangeSize()
        this.toggleSizeContainer()
    }

    handleClickButtonShow(e) {
        this.toggleSizeContainer()
    }

    toggleSizeContainer() {
        if(!$('.select-size-container').hasClass('show')) {
            this.setState({
                'toggleSizeContainer': 'show'
            })
        } else {
            this.setState({
                'toggleSizeContainer': '',
                'type': 'grid'
            })
        }
    }

    handleChangeSize() {
        console.log('changed size')
    }

    changeType(e) {
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
                    <div className="size-chart-rows">
                        <div className="size-chart-row">
                            <strong>US</strong>
                            <strong>UK</strong>
                            <strong>EU</strong>
                            <strong>CM</strong>
                            <strong>W </strong>
                        </div>
                        <div className="size-chart-content">
                            {this.fetchChartRow()}
                        </div>
                    </div>
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
                        {this.fetchSelectGrid()}
                    </ul>
                </div>
            )
        }
    }

    fetchSelectGrid() {
        var list = [];
        for(let i=1;i<=30;i++) {
            let size = 'US ' + i
            let value = '$'+Math.floor(Math.random() * (300 - 0))
            let className = ''
            if(i==1) {
                size = 'US All'
                value = '$245'
                className = 'all active'
            }
            list.push(
                <li key={i} className={`size-box ${className}`}>
                    <a className="size-box-container" onClick={this.handleClickSizeBox} ref={this.sizeBoxRef}>
                        <span className="title">{size}</span>
                        <span className="subtitle">{value}</span>
                    </a>
                </li>
            )
        }
        return list;
    }

    fetchChartRow() {
        var list = [];
        for(let i=1;i<=30;i++) {
            let size = i
            let className = ''
            if(i==1) {
                className = 'active'
            }
            list.push(
                <div key={i} className={`size-chart-row ${className}`}>
                    <div className="size-chart-row-item">{i}</div>
                    <div className="size-chart-row-item">{i - 0.5}</div>
                    <div className="size-chart-row-item">{i * 8}</div>
                    <div className="size-chart-row-item">{i * 5}</div>
                    <div className="size-chart-row-item">{i + 1}</div>
                </div>
            )
        }
        return list;
    }

  	render() {
        return(
            <div className="options">
                <label>Size</label>
                <div className="select-options position-relative" id="dd">
                    <button type="button" className="btn btn-default size-sm select-size-button" title="All">All
                        <i className="fa fa-chevron-down"></i>
                    </button>
                    <div className={`select-size-container ${this.state.toggleSizeContainer}`} ref={this.sizeContainerRef} >
                        {this.fetchContainer()}
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectOptions;