/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Itsource = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.Animation();
				this.BackgroundImage();
				this.MobileStickyMenu();
				this.ArchSPortfolio();
				this.SkillProgress();
				this.ArchsPartnerSlider2();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			MobileStickyMenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.main-header-area').addClass('sticky-on')
					} else {
						jQuery('.main-header-area').removeClass('sticky-on')
					}
				})
				$('.str-open_mobile_menu').on("click", function() {
					$('.str-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.str-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.str-mobile_menu li.dropdown ul').length){
					$('.str-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.str-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			ArchSPortfolio: function (){
				jQuery(window).on('load', function(){
					jQuery('.archs-portfolio-slider').owlCarousel({
						items: 1,
						margin: 0,
						loop: true,
						nav: true,
						dots: false,
						navSpeed: 800,
						autoplay: false,
						smartSpeed: 2000,
						navText: [ '<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>' ],
					})
				});
				jQuery('.archs-testimonial-slider-area').owlCarousel({
					items: 1,
					loop: true,
					nav: false,
					dots: false,
					autoplay: true,
					navSpeed: 800,
					smartSpeed: 1000,
				});
			},
			SkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
			ArchsPartnerSlider2: function (){
				$('#client-slide-6').owlCarousel({
					margin: 100,
					autoplay: true,
					loop: true,
					nav: false,
					dots: false,
					autoplay:true,
					autoplaySpeed: 6000,
					responsiveClass:true,
					autoplayTimeout: 6000,
					autoplayHoverPause: true,
					slideTransition: 'linear',
					responsive:{
						0:{
							items:2,
						},
						400:{
							items:2,
						},
						600:{
							items:3,
						},
						700:{
							items:3,
						},
						1000:{
							items:3,

						},
						1300:{
							items:4,

						}
					},
				})
			},

		}
	}
	jQuery(document).ready(function (){
		Itsource.init();
	});

})();