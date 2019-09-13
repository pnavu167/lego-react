import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class SideBar extends Component {

	constructor(props) {
		super(props)
	}

  	render() {
        return(
            <div className="sidebar-container">
                <div className="sidebar-section">
                    <div className="category-option">
                        <div>sneakers</div>
                    </div>
                    <div className="category-option">
                        <div>streetwear</div>
                    </div>
                    <div className="category-option">
                        <div>handbags</div>
                    </div>
                    <div className="category-option">
                        <div>watches</div>
                    </div>
                </div>
                <div className="sidebar-section">
                    <div className="category-option">
                        <div>browse retail</div>
                    </div>
                </div>
                <div className="sidebar-section">
                    <div className="category-option">
                        <div>adidas</div>
                    </div>
                    <div className="category-option">
                        <div>air jordan</div>
                    </div>
                    <div className="category-option">
                        <div>nike</div>
                    </div>
                    <div className="category-option">
                        <div>other brands</div>
                    </div>
                </div>
                <div className="sidebar-section">
                    <div className="sidebar-filter-group">
                        <div className="title">
                            size types
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">Men</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">Women</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">Child</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">Preschool</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">Infant</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">Toddler</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-section">
                    <div className="sidebar-filter-group">
                        <div className="title">
                            sizes
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-4">
                                <label className="size-label">1</label>
                            </div>
                            <div className="col-md-3 col-sm-3 col-4">
                                <label className="size-label">2</label>
                            </div>
                            <div className="col-md-3 col-sm-3 col-4">
                                <label className="size-label">3</label>
                            </div>
                            <div className="col-md-3 col-sm-3 col-4">
                                <label className="size-label">4</label>
                            </div>
                            <div className="col-md-3 col-sm-3 col-4">
                                <label className="size-label">5</label>
                            </div>
                            <div className="col-md-3 col-sm-3 col-4">
                                <label className="size-label">6</label>
                            </div>
                            <div className="col-md-3 col-sm-3 col-4">
                                <label className="size-label">7</label>
                            </div>
                            <div className="col-md-3 col-sm-3 col-4">
                                <label className="size-label">8</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-section">
                    <div className="sidebar-filter-group">
                        <div className="title">
                            Prices
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">Under $100</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">$100-200</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">$200-300</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">$300-400</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">$400+</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-section">
                    <div className="sidebar-filter-group">
                        <div className="title">
                            release years
                        </div>
                        <div className="row">
                            <div className="col-x-6 col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">2015</label>
                                </div>
                            </div>
                            <div className="col-x-6 col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">2016</label>
                                </div>
                            </div>
                            <div className="col-x-6 col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">2017</label>
                                </div>
                            </div>
                            <div className="col-x-6 col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">2018</label>
                                </div>
                            </div>
                            <div className="col-x-6 col-12">
                                <div className="form-group sidebar-checkbox-form">
                                    <input type="checkbox" id="437" className="hoverTime" />
                                    <label htmlFor="437">2019</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;