import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component
// import LitleContent from './LitleContentComponent';
// import BigContent from './BigContentComponent';
// import ContainerSearch from './ContainerSearchComponent';

class SubscribeBanner extends Component {

  	render() {
        return(
            <div className="container-subscribe">
                <div className="cover-size">
                    <div className="content-subscribe">
                        <h2 className="headline-subscribe">Stockx News. Sign Up. Stay Updated.</h2>
                        <div className="form subscribe-form">
                            <form method="post"> 
                                <div className="form-element-subscribe"> 
                                    <input type="email" placeholder="Enter email for StockX news" name="email" className="color-gray bold"/> 
                                </div> 
                                <input type="submit" value="Subscribe" className="button btn-subscribe"/> 
                            </form>
                        </div>
                    </div>
                    
                </div>      
            </div>
        );
    }
}

export default SubscribeBanner;