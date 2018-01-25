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

/*********************
  * works
 *********************/
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
    name = $el.querySelector('.el__heading').innerHTML;
    name = name.toLowerCase().replace(' ','-');
    window.history.replaceState(null, null, 'http://'+window.location.host+'/projects/'+name); // change l'URL dynamiquement
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
    window.history.replaceState(null, null, 'http://'+window.location.host+'/projects/');
  });
});

