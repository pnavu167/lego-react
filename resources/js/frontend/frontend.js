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

$(document).ready(function() {
	$('.popoverData').popover()
})