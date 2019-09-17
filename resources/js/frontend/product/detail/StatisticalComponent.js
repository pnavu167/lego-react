import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//import component

class ProductDetail extends Component {

  	render() {
        return(
            <section className="statistical">
                <div className="container">
                    <div className="statistical-container">
                        <div className="related-banner">
                            <div className="related-banner-content">
                                lastest sale
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductDetail;
Highcharts.setOptions({
            // カスタムカラーを設定
            colors: ['#666666', '#dc3545', '#ffc107', '#1d8c69']
        });

        Highcharts.chart('chart-container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: '{{$chartTitle}}'
            },
            credits: {
                enabled: false
            },
            exporting: { 
                enabled: false 
            },
            xAxis: {
                categories: listMachine,
                min: 0,
                max: 5,
                scrollbar: {
                    enabled: true
                },
                tickLength: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: '実績一覧'
                },
                max: 100
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: '電源OFF',
                data: listData['STATUS_POWER_OFF']
            }, {
                name: 'アラーム',
                data: listData['STATUS_ALARM']
            }, {
                name: '停止',
                data: listData['STATUS_STOP']
            }, {
                name: '自動運転',
                data: listData['STATUS_DRIVING']
            }]
        }
    });