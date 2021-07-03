$(document).ready(function() {

	// Sticky Header: Sticky que diminui e muda de cor ao descer scroll
	function headerSticky(){
		var windowPos=$(window).scrollTop();
		if( windowPos>20){
			// SCROLL
			$('.fixed-top').addClass("on-scroll");
			$('#svg-normal').removeClass("svg-hidden");
			$('#svg-branca').addClass("svg-hidden");
			$('.nav-link ').addClass("my-menu-scroll");
		} else {
			// FIXADO (É O INICIAL)
			$('.fixed-top').removeClass("on-scroll");
			$('#svg-normal').addClass("svg-hidden");
			$('#svg-branca').removeClass("svg-hidden");
			$('.nav-link ').removeClass("my-menu-scroll");
		}
	}
	headerSticky();
	$(window).scroll(headerSticky);

		// nav scroll :: Click nav-bar => scroll slowing
		if($('#header-global').length){ // id da tag header
			var navoffset = $('#header-global').height(); // tamanho do nav-bar
			// nav-link deve ser a classe que esta acima das tag a
			$('.nav-link a[href^="#"], .logo-scroll-link').on("click", function(e) { // eh o nav-bar e o icone, para ir ao topo
				e.preventDefault(); // prevenir de fazer o jump brusco
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top - navoffset - 50
				}, "slow","easeInSine");
			});
		} else {
			$('.logo-scroll-link').on("click", function(e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top
				}, "slow","easeInSine");
			});
		}

		// scrollspy : o nav-bar piscar a medida que desce as seções
		var win = $(window);
		$("section").each(function () {
			if (win.scrollTop() >= $(this).offset().top - 50) {
				$(".nav-link a[href='#" + $(this).attr("id") + "']").addClass("nav-active").siblings().removeClass("nav-active");
			}
		});
		win.on("scroll", function () {
			$("section").each(function () {
				if (win.scrollTop() >= $(this).offset().top - 50) {
					$(".nav-link a[href='#" + $(this).attr("id") + "']").addClass("nav-active").siblings().removeClass("nav-active");
				}
			});
		});

		/*==========   Scroll Top Button   ==========*/
		// Global variables
    var $win = $(window);

    var $scrollTopBtn = $('#scrollTopBtn');
    // Show Scroll Top Button
    $win.on('scroll', function () {
        if ($(this).scrollTop() > 700) {
            $scrollTopBtn.addClass('actived');
        } else {
            $scrollTopBtn.removeClass('actived');
        }
    });
    // Animate Body after Clicking on Scroll Top Button
    $scrollTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

		// WOW - Animaçao ao scroll (em conjunto com animate.css)
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: "wow", // animated element css class (default is wow)
				animateClass: "animated", // animation css class (default is animated)
				mobile: true, // trigger animations on mobile devices (default is true)
				live: true, // act on asynchronously loaded content (default is true)
			});
			wow.init();
		}

});


// on load
$(window).on('load', function(){
	"use strict";

 // preloader
 $('.dtr-preloader').delay(400).fadeOut(500);
});
// on load end
