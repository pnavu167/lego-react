import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
import HeaderContainer from "./HeaderContainerComponent"
import LastSaleBlock from "./LastSaleBlockComponent"

class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'image': '/storage/images/product-detail/img01.jpg',
            'value': 1,
            'clicked': false,
            'clickedPosition': 0
        }
        // this.handleSlider = this.handleSlider.bind(this)
    }

    handleSlider(e) {
        this.changeImage(e.target.value)
    }

    changeImage(value) {
        var imageNumber = "0" + value;
        console.log(value)
        var imageName = imageNumber.substring(imageNumber.length, imageNumber.length - 2)
        this.setState({value: value})
        this.setState({image: '/storage/images/product-detail/img'+imageName+'.jpg'})
    }

    handleMouseDown(e) {
        this.setState({
            clicked: true,
            clickedPosition: e.screenX
        })
        console.log(this.state.clicked)
    }

    handleMouseUp(e) {
        this.setState({clicked: false})
        console.log(this.state.clicked)
    }

    handleMouseMove(e) {
        var currentSliderValue = this.state.value
        if(currentSliderValue > 36) {
            currentSliderValue = 1;
        } else if(currentSliderValue < 1) {
            currentSliderValue = 36
        }
        if(this.state.clicked) {
            if(e.screenX < this.state.clickedPosition - 10) {
                currentSliderValue = currentSliderValue - 1
                this.setState({
                    value: currentSliderValue,
                    clickedPosition: e.screenX
                })
                
            } else if(e.screenX > this.state.clickedPosition + 10) {
                currentSliderValue = currentSliderValue + 1
                this.setState({
                    value: currentSliderValue,
                    clickedPosition: e.screenX
                })
            }
            this.changeImage(currentSliderValue)
        }
    }

  	render() {
        return(
            <div className="product-detail-content">
                <div className="product-media">
                    <div className="image-media"
                        onMouseDown={this.handleMouseDown.bind(this)}
                        onMouseUp={this.handleMouseUp.bind(this)} 
                        onMouseMove={this.handleMouseMove.bind(this)}>
                        <img src={this.state.image} />
                    </div>
                    <div className="range-slider-container">
                        <input type="range" min="1" max="36" value={this.state.value} onChange={this.handleSlider.bind(this)} className="range-slider" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <HeaderContainer type="mobile" />
                        <LastSaleBlock type="mobile" />
                    </div>
                </div>
                <div className="product-info-container">
                    <div className="product-info">
                        <div className="info">
                            <span className="title">Style</span>
                            <span className="content"> CK3480-001 </span>
                            
                        </div>
                        <div className="info">
                            <span className="title">Colorway</span>
                            <span className="content"> Metallic Silver/Metallic Silver-Black </span>
                        </div>
                        <div className="info">
                            <span className="title">Retail Price</span>
                            <span className="content"> $110 </span>
                        </div>
                        <div className="info">
                            <span className="title">Release Date</span>
                            <span className="content"> 09/14/2019 </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;