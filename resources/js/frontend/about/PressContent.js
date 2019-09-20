import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'
import PressPost from './PressPost'
import SideContainer from './SideContainer'

class PressContent extends React.Component {
	render() {
		return(
			<div className="press-content container">
				<div className="row">
					<div className = "press-list col-lg-8">
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
						<PressPost/>
					</div>
					<div className = "side-content col-md-4">
						<SideContainer/>
					</div>
				</div>
			</div>
		);
	}
}

export default PressContent;