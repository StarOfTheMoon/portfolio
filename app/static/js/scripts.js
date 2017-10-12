$(document).ready(function(){
/*********************
  * slider home
 *********************/
  $('.slider').slick({
  	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	dots: true,
	arrows: false,
	infinite: true,
	vertical: true,
	verticalSwiping: true
  });

/*********************
  * grid masonry
 *********************/
  $('.grid').masonry({
	  // options
	  itemSelector: '.grid-item',
	  columnWidth: 200,
	  stamp: '.stamp'
	});
});

