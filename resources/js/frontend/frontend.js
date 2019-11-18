require('./layouts/AppComponent');

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if(scroll >= 100) {
    	toggleClassOntop(false)
    } else {
    	toggleClassOntop(true)
    }
});

function toggleClassOntop(onTop) {
	var topBar = $('#top-bar').find('.home-topbar')
	if(onTop == true) {
		if(!topBar.hasClass('on-top')) {
			topBar.addClass('on-top')
		}
	} else {
		if(topBar.hasClass('on-top')) {
			topBar.removeClass('on-top')
		}
	}
}

$('.home-slider').slick({
	dots: false,
	infinite: true,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	variableHeight: true,
	vertical: true,
});

	data = [
[1317888000000,372.5101,375,372.2,372.52],
[1317888060000,372.4,373,372.01,372.16],
[1317888120000,372.16,372.4,371.39,371.62],
[1317888180000,371.62,372.16,371.55,371.75],
[1317888240000,371.75,372.4,371.57,372],
[1317888300000,372,372.3,371.8,372.24],
[1317888360000,372.22,372.45,372.22,372.3],
[1317888420000,372.3,373.25,372.3,373.15],
[1317888480000,373.01,373.5,373,373.24],
[1317888540000,373.36,373.88,373.19,373.88],
[1317888600000,373.8,374.34,373.75,374.29],
[1317888660000,374.29,374.43,374,374.01],
[1317888720000,374.05,374.35,373.76,374.35],
[1317888780000,374.41,375.24,374.37,374.9],
[1317888840000,374.83,375.73,374.81,374.96],
[1317888900000,374.81,375.4,374.81,375.25],
[1317888960000,375.2,375.7,375.14,375.19],
[1317889020000,375.43,375.43,374.75,374.76],
[1317889080000,374.94,375.5,374.81,375.13],
[1317889140000,375.12,375.48,375,375.04],
[1317889200000,375.24,375.24,375,375.08],
[1317889260000,375.16,375.16,374.51,374.51],
[1317889320000,374.51,374.75,374.2,374.27],
[1317889380000,374.22,374.55,373.83,374.55],
[1317889440000,374.69,374.86,374.01,374.2],
[1317889500000,374.32,374.65,374.31,374.51],
[1317889560000,374.65,375.12,374.51,375.12],
[1317889620000,375.13,375.25,374.83,375.22],
[1317889680000,375.16,375.22,375,375],
[1317889740000,375,375,374.66,374.8],
[1317889800000,374.88,375,374.5,374.85],
[1317889860000,374.41,374.67,374.25,374.67],
[1317889920000,374.5,374.75,374.27,374.42],
[1317889980000,374.4,374.93,374.38,374.85],
[1317890040000,374.86,375.3,374.8,375.09],
[1317890100000,375,375.18,374.9,375.02],
[1317890160000,375.02,375.08,374.86,374.87],
[1317890220000,374.93,375.75,374.93,375.75],
[1317890280000,375.75,376.5,375.75,376.31],
[1317890340000,376.31,377.2,376.19,377.04],
[1317890400000,377.2,377.33,376.45,376.47],
[1317890460000,376.75,376.99,376.53,376.54],
[1317890520000,376.54,376.67,376.08,376.35],
[1317890580000,376.41,376.94,376.2,376.5],
[1317890640000,376.46,376.51,376.06,376.09],
[1317890700000,376.38,376.84,376.09,376.78],
[1317890760000,376.55,376.6,376.41,376.44],
];
$('.sales-histories-highchart').each(function() {
    // create the chart
    Highcharts.stockChart({
        chart: {
            renderTo: this
        },
        xAxis: {
            gapGridLineWidth: 0
        },
        navigator: {
            enabled: false
        },
        rangeSelector: {
            buttons: [
                {
                    type: 'month',
                    count: 1,
                    text: '1M'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '3M'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '6M'
                },
                {
                    type: 'month',
                    count: 1,
                    text: 'YTD'
                },
                {
                    type: 'year',
                    count: 1,
                    text: '1Y'
                },
                {
                    type: 'all',
                    count: 1,
                    text: 'All'
                },
            ],
            selected: 1,
            inputEnabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false 
        },
        scrollbar: {
            enabled: false
        },
        series: [{
            name: 'Amount',
            type: 'area',
            data: data,
            gapSize: 5,
            tooltip: {
                valueDecimals: 2
            },
            color: '#509e2f',
            lineWidth: 1,
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1       
                },
                stops: [
                    [0, 'rgb(80,158,47)'],
                    [1, 'rgb(80,158,47, 0)']
                ]
            },
            threshold: null
        }]
    });
})


$(document).ready(function() {
	$('.popoverData').popover();

	$( ".vice" ).click(function() {
		if( $(this).hasClass('button-light-green') ){
			$(this).removeClass('button-light-green');

		}else {
			$(this).addClass('button-light-green');
			
		}
	});

    if (window.matchMedia('(min-width: 1170px)').matches) {
        $('.theadSticky')
        .sticky({
            context: '#context',
            offset: 90,
        });
    }




})