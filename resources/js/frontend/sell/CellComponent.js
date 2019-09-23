import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'


class CellComponent extends React.Component {
	constructor(props) {
        super(props)
    }
	render() {
		return(
			<div className="grid-tile sell-tile" >
				<div className="tile-inner">
					<div className="tile-value">US {this.props.size}</div>
					<div className="tile-subvalue">
						<div className="tile-subvalue">{this.props.price}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CellComponent;