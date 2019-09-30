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

// $('.dropdown-menu').click(function(e) {
// 	e.stopPropagation();
// })

// $('body').on('click', function (e) {
//     if (!$('.options .select-options .dropdown-toggle').is(e.target) 
//         && $('.options .select-options .dropdown-toggle').has(e.target).length === 0 
//         && $('.show').has(e.target).length === 0
//     ) {
//         $('.options .select-options .dropdown-toggle').removeClass('show');
//     }
// });

$(document).ready(function() {
	$('.popoverData').popover();

	$( ".vice" ).click(function() {
		if( $(this).hasClass('button-light-green') ){
			$(this).removeClass('button-light-green');

		}else {
			$(this).addClass('button-light-green');
			
		}
	});
})