import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

//import component

class PortfoliosTable extends Component {

  	render() {
        return(
            <div className="container list-container table-responsive">
            	
			   	<table id="master-table" className="table">
			      	<thead className="">
			         	<tr className="p-hd p-row ui sticky theadSticky">
			            	<th className="p-u "><span>User</span><span className="caret"></span></th>
			            	<th className="p-s "><span>Items</span><span className="caret"></span></th>
			            	<th className="p-mv "><span><span className="hidden-xs">Market Value</span></span><span className="caret"></span></th>
			            	<th className="p-gl "><span>Gain/Loss</span><span className="caret"></span></th>
			            	<th className="p-ap "><span>Average Price</span><span className="caret"></span></th>
			         	</tr>
			      	</thead>
      				
      				<tbody id="context">
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  logitech12301
				               	</span>
				            </td>
				            <td className="p-s ">20095</td>
				            <td className="p-mv ">$1,148,042</td>
				            <td className="p-gl red ">-$1,567,561 (-58%)</td>
				            <td className="p-ap ">$57</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  abduljabbar
				               	</span>
            				</td>
				            <td className="p-s ">11379</td>
				            <td className="p-mv ">$550,736</td>
				            <td className="p-gl green ">-$945,120 (-63%)</td>
				            <td className="p-ap ">$48</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  logitech12301
				               	</span>
				            </td>
				            <td className="p-s ">20095</td>
				            <td className="p-mv ">$1,148,042</td>
				            <td className="p-gl red ">-$1,567,561 (-58%)</td>
				            <td className="p-ap ">$57</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  abduljabbar
				               	</span>
            				</td>
				            <td className="p-s ">11379</td>
				            <td className="p-mv ">$550,736</td>
				            <td className="p-gl green ">-$945,120 (-63%)</td>
				            <td className="p-ap ">$48</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  logitech12301
				               	</span>
				            </td>
				            <td className="p-s ">20095</td>
				            <td className="p-mv ">$1,148,042</td>
				            <td className="p-gl red ">-$1,567,561 (-58%)</td>
				            <td className="p-ap ">$57</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  abduljabbar
				               	</span>
            				</td>
				            <td className="p-s ">11379</td>
				            <td className="p-mv ">$550,736</td>
				            <td className="p-gl red ">-$945,120 (-63%)</td>
				            <td className="p-ap ">$48</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  logitech12301
				               	</span>
				            </td>
				            <td className="p-s ">20095</td>
				            <td className="p-mv ">$1,148,042</td>
				            <td className="p-gl red ">-$1,567,561 (-58%)</td>
				            <td className="p-ap ">$57</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  abduljabbar
				               	</span>
            				</td>
				            <td className="p-s ">11379</td>
				            <td className="p-mv ">$550,736</td>
				            <td className="p-gl red ">-$945,120 (-63%)</td>
				            <td className="p-ap ">$48</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  logitech12301
				               	</span>
				            </td>
				            <td className="p-s ">20095</td>
				            <td className="p-mv ">$1,148,042</td>
				            <td className="p-gl red ">-$1,567,561 (-58%)</td>
				            <td className="p-ap ">$57</td>
         				</tr>
         				<tr className="p-row p-dt">
            				<td className="p-u ">
				               	<span className="productCol">
				                  	<div className="p-img"><img alt="Collection-Thumbnail" src="/storage/images/home/category-1.png" className=""/></div>
				                  abduljabbar
				               	</span>
            				</td>
				            <td className="p-s ">11379</td>
				            <td className="p-mv ">$550,736</td>
				            <td className="p-gl red ">-$945,120 (-63%)</td>
				            <td className="p-ap ">$48</td>
         				</tr>
     				</tbody>
   				</table>
   				
            </div>
        );
    }
}

export default PortfoliosTable;