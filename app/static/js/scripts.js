$(document).ready(function(){
	$('.btn-toggle').on('click', function() {
		console.log($('.nav-toggle.collapse').hasClass('show'));
		if($('.nav-toggle.collapse').hasClass('show')) {
			$('.pusher').removeClass('menu-show');
		} 
		else {
			$('.pusher').addClass('menu-show');
		}
	})

/*********************
	* slider home
	*********************/
	if($('.slider').length != 0) {
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
	}

/*********************
	* grid
	*********************/
	if($('.grid').length != 0) {
		$('.nav-item').not('.nav-item.works').hide();
		var grid = new Muuri('.grid', {
			layout: {
			    fillGaps: false,
			    horizontal: true,
			    alignRight: false,
			    alignBottom: true,
			    rounding: true
			}
		});
	}
});

$(window).on('load', function(){
	// split title in letters with space
	title = document.querySelector('.title-page');
	if(title) {
	    charming(title);
	    //document.title.letters = Array.from(document.title.querySelectorAll('span'));
    }

	// var $cont = document.querySelector('.cont');
	// var $elsArr = [].slice.call(document.querySelectorAll('.el'));

	if(window.location.pathname != '/projects/') {
		var $pathArray = window.location.pathname.split( '/' );
		var $pathName = $pathArray[2];

		// $elsArr.forEach(function($el) {
		// 	// get all headings
		// 	$name = $el.querySelector('.el__heading').innerHTML;
		// 	$name = $name.toLowerCase().replace(' ','-');
		// 	// get the element html and show it
		// 	if($name == $pathName) {
		// 		$cont.classList.add('s--el-active');
		// 		$el.classList.add('s--active');
		// 	}
		// })
	}
});  

function getCookie(name) {
	var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
