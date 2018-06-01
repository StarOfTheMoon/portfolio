$(document).ready(function(){
	var backdrop = $('.dropdown-backdrop');
	if(backdrop) { 
		backdrop.hide();
	}

	backdrop.click(function () {
	    $('.pusher').removeClass('menu-show');
	  	$('.nav-toggle.collapse').removeClass('show'); 
		backdrop.hide();
	})

	$('.btn-toggle').on('click', function() {
		if($('.nav-toggle.collapse').hasClass('show')) {
			$('.pusher').removeClass('menu-show');
			backdrop.hide();
		} 
		else {
			$('.pusher').addClass('menu-show');
			backdrop.show();
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
    }

	if(window.location.pathname != '/projects/') {
		var $pathArray = window.location.pathname.split( '/' );
		var $pathName = $pathArray[2];
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
