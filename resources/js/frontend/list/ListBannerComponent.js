import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
class List extends Component {

	constructor(props) {
		super(props)
		this.state = {
			'backgroundImage' : '/storage/images/home/list-banner.jpg'
		}
	}

	getBackgroundImage() {
		return  {
			backgroundImage: "url(" + this.state.backgroundImage + ")"
		};
	}
  	render() {
        return(
            <section id="list-banner">
            	<div className="list-banner">
        			<div className="banner-content">
        				<h1 className="title">SNEAKERS</h1>
        				<h2 className="one-liner">
        					On StockX, every sneaker you want is always available. Buy and sell new sneakers from Air Jordan, Adidas, Nike and more!
        				</h2>
        			</div>
        			<div className="banner-image" style={this.getBackgroundImage()} >
        			</div>
            	</div>
            </section>
        );
    }
}

export default List;