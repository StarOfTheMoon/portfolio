let $rect = $('.rect');
let project_slider = new Glide('.glide.projects-sl', {
	type: "slide",
	startAt: 0,
	perView: 1,
	gap: 0
});
let home_slider = new Glide('.glide.index', {
	type: "slide",
	startAt: 0,
	perView: 1,
	gap: 0,
	autoplay: 2000,
	width: 400,
	wrapperWidth: 400
})


$(window).on('load', function(){
	// split title in letters with space
	title = document.querySelector('.title-page');
	if(title) {
	    charming(title);
	}
	loadContent();
});  

function changeURL(slug) {
	window.history.replaceState(null, null, 'http://'+window.location.host+'/projects/'+slug+'/'); 
}

function loadContent() {
	var index = $('.item-content.glide__slide--active').attr('idx');
	var $pathArray = window.location.pathname.split( '/' );
	var $pathName = $pathArray[2];
	switch (window.location.pathname) {
		case '/':
			$rect.addClass('home');
			home_slider.mount();
			break;
		case '/about/':
			$rect.addClass('about');
			break;
		case '/contact/':
			$rect.addClass('contact');
			break;
		case '/projects/':
			project_slider.mount();
			$rect.addClass('projects');
			break;
		case '/projects/' + $pathName + '/':
			//changeURL($pathName);
			$rect.addClass('projects');
			project_slider.update({ startAt: index });
			project_slider.mount();
			break;
		default:
			$rect.addClass('404');
			break;
	}
}

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
