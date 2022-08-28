(function($) {
	'use strict';
	$(window).on('load', function() {
		var preLoder = $("#preloader");
		preLoder.delay(700).fadeOut(500).addClass('loaded');
	});

	// Select all links with hashes
	var headerHeight = $(".header_wrap").height() - 10;
    $('a.page-scroll').on('click', function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
        var target = $(this.hash),
            speed= $(this).data("speed") || 800;
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top - headerHeight
            }, speed);
        }
        }
    });
	
	$(window).on("load resize ready",function () {
		$(".header_wrap.fixed-top").css({"padding-top": $(".alertbox").height() });
	});
	$('.alertbox .close').on("click",function () {
		$(".header_wrap ").css({"padding-top": "0" });
	});

	$(function () {
		if ($('.header_wrap').hasClass('fixed-top')) {
			$('.alertbox').addClass('alert_fixed');
		}
	});

	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 60) {
			$('header').addClass('nav-fixed');
			$('.alert_fixed').addClass('fixed');
		} else {
			$('header').removeClass('nav-fixed');
			$('.alert_fixed').removeClass('fixed');
		}
	});
	
	$( document ).on("ready", function () {
		$( '.dropdown-menu a.dropdown-toggler' ).on( 'click', function ( e ) {
			
			if ( !$( this ).next().hasClass( 'show' ) ) {
				$( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
			}
			var $subMenu = $( this ).next( ".dropdown-menu" );
			$subMenu.toggleClass( 'show' );
			
			$( this ).parent( "li" ).toggleClass( 'show' );
	
			$( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
				$( '.dropdown-menu .show' ).removeClass( "show" );
			} );
			
			return false;
		});
	});
	
	//Hide Navbar Dropdown After Click On Links
	var navBar = $(".header_wrap");
	var navbarLinks = navBar.find(".navbar-collapse ul li a.page-scroll");

    $.each( navbarLinks, function( i, val ) {
    	var navbarLink = $(this);
		navbarLink.on('click', function () {
			navBar.find(".navbar-collapse").collapse('hide');
			$("header").removeClass("active");
		});
    });
	

	$('.navbar-toggler').on('click', function() {
		$("header").toggleClass("active");
		if($('.search-overlay').hasClass('open'))
		{
			$(".search-overlay").removeClass('open');
			$(".search_trigger").removeClass('open');
		}
	});	
	
	$(window).on("load resize ready",function () {
	function getClass(element, startsWith) {

		var result = 0;
		$(element.attr('class').split(' ')).each(function() {

			if (this.indexOf(startsWith) > -1) result = this;
		});
		return result;
	}
	$('.header_wrap').each(function() {
		var className = getClass( $(this), 'bg_') || getClass( $(this), 'bg-');
		if($('.header_wrap').hasClass(className))
		{
			Array.prototype.forEach.call(document.querySelectorAll(".dropdown-menu"), function(el) {
				el.classList.add(className);
			});
		}
		if ($(window).width() <= 992){
			$('.navbar-nav').addClass(className);
		}
	});
	});
	
	$('.sidetoggle').on('click', function () {
		$('.sidebar_menu').addClass('active');
		$('body').addClass('active');
		$("body").append('<div id="header-overlay" class="header-overlay"></div>');
	});
	
	$(document).on('click', '#header-overlay, .sidemenu_close',function() {
		$('.sidebar_menu').removeClass('active');
		$('body').removeClass('active');
		$('#header-overlay').fadeOut('3000',function()
		{
			$('#header-overlay').remove();
		});  
		return false;
	});

	$(document).on("ready", function() {
		$(".custome_select").msDropdown();
	});
	
	$( window ).on( "load", function() {
		$('.carousel_slider').each( function() {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots : $carousel.data("dots"),
				loop : $carousel.data("loop"),
				items: $carousel.data("items"),
				margin: $carousel.data("margin"),
				mouseDrag: $carousel.data("mouse-drag"),
				touchDrag: $carousel.data("touch-drag"),
				autoHeight: $carousel.data("autoheight"),
				center: $carousel.data("center"),
				nav: $carousel.data("nav"),
				rewind: $carousel.data("rewind"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplay : $carousel.data("autoplay"),
				animateIn : $carousel.data("animate-in"),
				animateOut: $carousel.data("animate-out"),
				autoplayTimeout : $carousel.data("autoplay-timeout"),
				smartSpeed: $carousel.data("smart-speed"),
				responsive: $carousel.data("responsive")
			});	
			
		});
	});

    $('.countdown_time').each(function() {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function(tm) {
            $(this).html(tm.strftime('<div class="countdown_box"><div class="countdown_content"><span class="countdown days">%D </span><span class="cd_text">Days</span></div></div><div class="countdown_box"><div class="countdown_content"><span class="countdown hours">%H</span><span class="cd_text">Hrs</span></div></div><div class="countdown_box"><div class="countdown_content"><span class="countdown minutes">%M</span><span class="cd_text">Min</span></div></div><div class="countdown_box"><div class="countdown_content"><span class="countdown seconds">%S</span><span class="cd_text">Sec</span></div></div>'));
        });
    });
	
	$("#submitButton").on("click", function(event) {
	    event.preventDefault();
	    var mydata = $("form").serialize();
	    $.ajax({
	        type: "POST",
	        url: "contact.php",
	        data: mydata
	    })
	});
	
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 150) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	$(".scrollup").on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	$('.content-popup').magnificPopup({
		type: 'inline',
		preloader: true,
		mainClass: 'mfp-zoom'
	});
	
	$('.image_gallery').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled:true
			},
			zoom: {
				enabled: true,
				duration: 300,
				opener: function(element) {
					return element.find('img');
				}
			}
		});
	});
	
	$(document).on("ready", function() {
		$('.popup-ajax').magnificPopup({
			type: 'ajax',
		});
	});
	
	$(document).on("ready", function() {
		$('.video_popup, .iframe_popup').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			fixedContentPos: false
		});
	});
	
	$(function() {
	
		function ckScrollInit(items, trigger) {
			items.each(function() {
				var ckElement = $(this),
					AnimationClass = ckElement.attr('data-animation'),
					AnimationDelay = ckElement.attr('data-animation-delay');
	
				ckElement.css({
					'-webkit-animation-delay': AnimationDelay,
					'-moz-animation-delay': AnimationDelay,
					'animation-delay': AnimationDelay,
					opacity: 0
				});
	
				var ckTrigger = (trigger) ? trigger : ckElement;
	
				ckTrigger.waypoint(function() {
					ckElement.addClass("animated").css("opacity", "1");
					ckElement.addClass('animated').addClass(AnimationClass);
				}, {
					triggerOnce: true,
					offset: '95%',
				});
			});
		}
	
		ckScrollInit($('.animation'));
		ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));
	
	});
	
	$(".background_bg").each(function() {
		var attr = $(this).attr('data-img-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background-image', 'url(' + attr + ')');
			$(this).css('background-position', 'center center');
			$(this).css('background-size', 'cover');
		}
	});
	
	$('.counter').counterUp({
		time: 1500
	});
	
	$(window).on('load', function() {
        $('.parallax_bg').parallaxBackground();
	});
	
	$(document).on("ready", function(){
		$('.star_rating span').on('click', function(){
			var onStar = parseFloat($(this).data('value'), 10); // The star currently selected
			var stars = $(this).parent().children('.star_rating span');
			for (var i = 0; i < stars.length; i++) {
				$(stars[i]).removeClass('selected');
			}
			for (i = 0; i < onStar; i++) {
				$(stars[i]).addClass('selected');
			}
		});
	});
	
	if ($(".fit-videos").length > 0){
		$(".fit-videos").fitVids({ 
			customSelector: "iframe[src^='https://w.soundcloud.com']"
		});
	}
	
	$( window ).on( "load", function() {
		var $grid_selectors  = $(".grid_container");
		var filter_selectors = ".grid_filter > li > a";
		if( $grid_selectors.length > 0 ) {
			$grid_selectors.imagesLoaded(function(){
				if ($grid_selectors.hasClass("masonry")){
					$grid_selectors.isotope({
						itemSelector: '.grid_item',
						percentPosition: true,
						layoutMode: "masonry",
						masonry: {
							columnWidth: '.grid-sizer'
						},
					});
				} 
				else {
					$grid_selectors.isotope({
						itemSelector: '.grid_item',
						percentPosition: true,
						layoutMode: "fitRows",
					});
				}
			});
		}
	
		$(document).on( "click", filter_selectors, function() {
			$(filter_selectors).removeClass("current");
			$(this).addClass("current");
			var dfselector = $(this).data('filter');
			if ($grid_selectors.hasClass("masonry")){
				$grid_selectors.isotope({
					itemSelector: '.grid_item',
					layoutMode: "masonry",
					masonry: {
						columnWidth: '.grid_item'
					},
					filter: dfselector
				});
			} 
			else {
				$grid_selectors.isotope({
					itemSelector: '.grid_item',
					layoutMode: "fitRows",
					filter: dfselector
				});
			}
			return false;
		});

		$(window).on("resize", function () {
			setTimeout(function () {
				$grid_selectors.find('.grid_item').removeClass('animation').removeClass('animated'); // avoid problem to filter after window resize
				$grid_selectors.isotope('layout');
			}, 300);
		});
	});
	
	$('.grid_item .image_popup').on('click', function () {
		$(this).find('.link_container').magnificPopup('open');
	});
	$('.link_container').each(function () {
		$(this).magnificPopup({
			delegate: '.image_popup',
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});
	
	if ($(".sliding_tab li a").length > 0){
			$(".sliding_tab").append('<li class="tab_bg"></li>');
			$('.sliding_tab li:first-child a').addClass('active_hover');
			var aa = $(".sliding_tab li a.active_hover").position().left,
			i = $(".sliding_tab li a.active_hover").css("width"),
			k = $(".sliding_tab li a.active_hover").css("height");
			$(".tab_bg").css({
				left: aa,
				width: i,
				height: k
		});
		$(".sliding_tab li a").on("click", function() {
			$(".sliding_tab li a.active_hover").removeClass("active_hover") ;
			$(this).closest('.sliding_tab li a').addClass("active_hover");
			var tt = $(".sliding_tab li a.active_hover").position().left,
				w = $(".sliding_tab li a.active_hover").css("width"),
				k = $(".sliding_tab li a.active_hover").css("height");
			$(".tab_bg").css({
				left: tt,
				width: w,
				height: k
			});
		});
	}
	
	$(document).on("ready", function() {
		$('.classes_filter li a').on("click", function() {
			var ourClass = $(this).attr('data-filter');
			
			$('.classes_filter li a').removeClass('current');
			$(this).addClass('current');
			
			if(ourClass == 'all') {
				$('[data-classes-schedule]').removeClass('invisible');
			}
			else {
				$('[data-classes-schedule]').addClass('invisible');
				$("[data-classes-schedule=" + ourClass +"]").removeClass('invisible');
			}
			return false;
		});
	});
	
	$(document).on("ready", function() {
		$('.progress .progress-bar').css("width",
			function() {
				return $(this).attr("aria-valuenow") + "%";
			}
		);
	});
	
	$(function () {
		$('[data-toggle="tooltip"]').tooltip({
			trigger: 'hover',
		});
	});
	$(function () {
		$('[data-toggle="popover"]').popover({trigger: 'hover',});
	});
	
	$( window ).on( "load", function() {
		document.onkeydown = function(e) {
			if(e.keyCode == 123) {
				return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
				return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
				return false;
			}
			if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
				return false;
			}
		
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
				return false;
			}      
		};
		
		$("html").on("contextmenu",function(){
			return false;
		});
	});
	
})(jQuery);