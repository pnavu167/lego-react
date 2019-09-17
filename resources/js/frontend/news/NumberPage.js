import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';


class NumberPage extends Component {



  	render() {
        return(
            <div className="load-more">
                <ul className="paging">
                    <li>
                        <a className="pre page-numbers" href="#"></a>
                    </li>
                    <li>
                        <a className="page-numbers" href="#">1</a>
                    </li>
                    <li>
                        <a className="page-numbers current" href="#">2</a>
                    </li>
                    <li>
                        <a className="page-numbers" href="#">3</a>
                        
                    </li>
                    <li>
                        <span className="page-numbers dots">…</span>                        
                    </li>
                    <li>
                        <a className="page-numbers" href="#">35</a>
                    </li>
                    <li><a className="page-numbers" href="#">36</a></li>
                    <li>
                        <a className="next page-numbers" href="#"> </a>
                    </li>
                </ul>                
            </div>
            
        );
    }
}

export default NumberPage;