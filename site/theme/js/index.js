/**
 * Main JS file for GhostScroll behaviours
 */

var $post = $('.post');
var $first = $('.post.first'); 
var $last = $('.post.last'); 
var $fnav = $('.fixed-nav');
//var $postholder = $('.post-holder');
var $postholder = $('.post');
var $postafter = $('.post-after');
var $sitehead = $('#blog-header');

var $authorhead = $('#author-head');

/* Globals jQuery, document */
(function ($) {
	"use strict";
	function srcTo (el) {
		$('html, body').animate({
			scrollTop: el.offset().top
		}, 1000);
	}
	$(document).ready(function(){

        
        // FitVids for responsive videos
        //$('.post-content').fitVids();
	 
	/*$('#site-head').click( function () { srcTo($first); });
	$('.btn.first').click( function () { srcTo($first); });
	$('.btn.last').click( function () { srcTo($last); });
	$('#header-arrow').click(function () { srcTo($first); });
        $('#totop-arrow').click(function () { srcTo($sitehead); });*/

		$('.post-title > a').each(function () {
			var t = $(this).text();
			//var index = $(this).parents('.post-holder').index();
			//var index = $(this).parents('.post').index();
			var index = $(this).parents('article').index();
			$fnav.append("<a class='fn-item' item_index='"+index+"'>"+t+"</a>")
			//$(this).parents('article').attr('id',t.toLowerCase().split(' ').join('-'));
			$(this).parents('article').attr('id',t.toLowerCase().split(' ').join('-'));
			$('.fn-item').last().click(function () {
				var i = $(this).attr('item_index');
				var s = $(".post[item_index='"+i+"']");

				$('html, body').animate({
					scrollTop: s.offset().top
				}, 0);

			});
		});

		$('.post.last').next('.post-after').hide();
		if($sitehead.length) { 
			$(window).scroll( function () {
				var w = $(window).scrollTop();
				var g = $sitehead.offset().top;
				var h = $sitehead.offset().top + $(this).height()-100;
				
                
				if(w >= g && w<=h) {
					$('.fixed-nav').fadeOut('fast');
				} else if($(window).width() > 1130) {
					$('.fixed-nav').fadeIn('slow');
				}

				$post.each(function () {
					var f = $(this).offset().top;
					var b = $(this).offset().top + $(this).height();
					//var t = $(this).parent('.post-holder').index();
					var t = $(this).parent('article').index();
					var i = $(".fn-item[item_index='"+t+"']");
					//var a = $(this).parent('.post-holder').prev('.post').find('.post-after');
					var a = $(this).parent('.post').prev('.post').find('.post-after');

					$(this).attr('item_index', t);

					if(w >= f && w<=b) {
						i.addClass('active');
						a.fadeOut('slow');
					} else {
						i.removeClass('active');
						a.fadeIn('slow');
					}
				});
			});
		}

		//$('.fixed-nav').append("<div id='about-side'></div>")
		//$('#about-side').load('about-side.html');	


	});
	
}(jQuery));
