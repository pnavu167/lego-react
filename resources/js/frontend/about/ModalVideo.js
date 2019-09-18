import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'


class ModalVideo extends React.Component {
	render() {
		return(
			<div className="modal fade video-modal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  	<div className="modal-lg modal-primary modal-dialog" role="document">
				    <div className="modal-content" role="document">

				      	<div className="modal-body">
				        	<div className="video-wrapper">
				        		<iframe title="youtube-video" width="100%" height="315" src="https://www.youtube.com/embed/w5vE1MeMcbA?modestbranding=1&amp;rel=0"></iframe>
				        	</div>
				      	</div>
				   
				    </div>
			  	</div>
			</div>
		);
	}
}

export default ModalVideo;