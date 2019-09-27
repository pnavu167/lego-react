import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'




class BottomBarComponent extends React.Component {
	constructor(props) {
        super(props)
    }

	render() {
		return(
			<div className={this.props.nameClass}>
				<div className = "button-bar-inner">
					<button className="button left-button button-white">Cancel</button>
					<button className="button right-button button button-red">Next</button>
				</div>
			</div>
		);
	}
}

export default BottomBarComponent;