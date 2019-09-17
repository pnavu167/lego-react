import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';

class SubMenu extends Component {


  	render() {
        return(
            <div className="blog">
                <div className="pg-blog">
                    <div className="blog-category">
                        <ul>
                            <li className="first-category">
                                <a href="#" className="color-gray bold type-news">News</a>
                            </li>

                            <li>
                                <a href="#" className="color-gray bold type-news">Sneakers</a>
                            </li>

                            <li>
                                <a href="#" className="color-gray bold type-news">Streetwear</a>
                            </li>

                            <li>
                                <a href="#" className="color-gray bold type-news">Handbags</a>
                            </li>

                            <li>
                                <a href="#" className="color-gray bold type-news">Watches</a>
                            </li>

                            <li>
                                <a href="#" className="color-gray bold type-news">Editorial</a>
                            </li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <a href="#" className="subscribe-link icon-fa fnt-size-14 color-gray bold">
                            Subscribe
                        </a>
                    </div>

                </div>
            </div>   
        );
    }
}

export default SubMenu;