let rect = $('.rect');
let portrait = $('.portrait');
let count = $('#count');
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
	autoplay: 2000
})
let csrftoken = getCookie('csrftoken');



$(window).on('load', function(){
	// split title in letters with space
	// title = document.querySelector('.title-page');
	// if(title) {
	//     charming(title);
	// }
	loadContent();
	countProject();
	clickOnProject();
});

$(document).ready(function() {
	$('#contact-form').submit(function(event){
		event.preventDefault();
		let post_url = $(this).attr("action"); //get form action url
		let request_method = $(this).attr("method"); //get form GET/POST method
		let form_data = $('#contact-form').serialize(); //Encode form elements for submission
		console.log(form_data)
		let csrftoken = $("[name=csrfmiddlewaretoken]").val();

		$.ajax({
			url : post_url,
			type: request_method,
			headers: {'X-CSRFToken': csrftoken},
			data : form_data 
		}).done(function(response){ 
			$("#contact-form").html(response);
		});
	})
})

function clickOnProject() {
	let mobile_overlay = $('.mobile-image');
	mobile_overlay.on('click', function() {
		project = $(this).siblings().find('li.glide__slide--active').children('a');
		slug = project.attr('data-slug');
		project[0].click()
		changeURL(slug);
	})
}

function countProject() {
	value = project_slider.index + 1;
	count.text('0' + value);
	// if click left 
	$('.glide__arrow--left').on('click', function() {
		value = project_slider.index + 1;
		count.text('0' + value);
	})
	// if click right 
	$('.glide__arrow--right').on('click', function() {
		value = project_slider.index + 1;
		count.text('0' + value);
	})
}

function changeURL(slug) {
	window.history.replaceState(null, null, 'http://'+window.location.host+'/projects/'+slug+'/'); 
}

function switchPositionRect(pathName, detail = null, index) {
	detail !== null ? pathName = pathName + '/' + detail : pathName = pathName;
	switch (pathName) {
		case '':
			rect.addClass('home');
			home_slider.mount();
			break;
		case 'about':
			rect.addClass('about');
			portrait.addClass('show');
			break;
		case 'contact':
			rect.addClass('contact');
			break;
		case 'projects':
			project_slider.mount();
			rect.addClass('projects');
			break;
		case 'projects/' + detail:
			//changeURL($pathName);
			rect.addClass('projects');
			project_slider.update({ startAt: index });
			project_slider.mount();
			break;
		default:
			rect.addClass('404');
			break;
	}
}

function loadContent() {
	var $index = $('.item-content.glide__slide--active').attr('idx');
	var $pathArray = window.location.pathname.split( '/' );
	// In case of adding prefix language
	if($pathArray[1] === "fr" || $pathArray[1] === "en") {
		// send detail name if exist
		$pathArray.length == 5 ? switchPositionRect($pathArray[2], $pathArray[3], $index) : switchPositionRect($pathArray[2], $index);
	} 
	else {
		// send detail name if exist
		$pathArray.length == 4 ? switchPositionRect($pathArray[1], $pathArray[2], $index) : switchPositionRect($pathArray[1], $index);
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
