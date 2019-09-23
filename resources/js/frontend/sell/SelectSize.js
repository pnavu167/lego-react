import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import Cell from '@/sell/CellComponent'


class SelectSize extends React.Component {
	constructor (props) {
		super(props);
	    this.state = {
	    	hideGrid: false,
	    };

	    this.hideGridClick = this.hideGridClick.bind(this);
	}

	hideGridClick() {
		this.setState(state => ({
			hideGrid: true
		}));

		console.log(123);
	}

	render() {
		const hideGrid 	= this.state.hideGrid;
		var indents = [];
		var size = 4;
		for (var i = 0; i < 24; i++) {
		 	indents.push(
		 		<Cell key={i} price = "$503" size ={size} onClick={this.hideGridClick}/>
		 	);
		 	size += 0.5;
		}

		return(
			<div className = "pane forty pane-grey">
				{hideGrid &&
					<div className = "size-select-grid">
						<div className="select-grid-title">Select Size</div>
						<div className="select-grid-subtitle-container">
							U.S. Men's Sizes  | Highest Bids
						</div>
						<div className = "grid-tiles">
							{indents}
						</div>
					</div>
				}
			</div>
		);
	}
}

export default SelectSize;