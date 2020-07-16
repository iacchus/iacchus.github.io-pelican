/**
 * Main JS file for GhostScroll behaviours
 */

var $post = $('article');
//var $first = $('.post.first'); 
var $first = $('section#wrapper'); 
var $last = $('.post.last'); 
var $fnav = $('.fixed-nav');
//var $postholder = $('.post-holder');
var $postholder = $('.post');
var $postafter = $('.post-after');
//var $sitehead = $('#blog-header');
//var $sitehead = $('div.blog-cover');
var $sitehead = $('div.cover');

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
   
  $('div.cover').click( function () { srcTo($first); });
  /*$('.btn.first').click( function () { srcTo($first); });
  $('.btn.last').click( function () { srcTo($last); });
  $('#header-arrow').click(function () { srcTo($first); });
        $('#totop-arrow').click(function () { srcTo($sitehead); });*/

    $('.post-title > a').each(function () {
      var t = $(this).text();
      //var index = $(this).parents('article').index();
      var index = $(this).parents('div.post-type').index();
      $fnav.append("<a class='fn-item' item_index='"+index+"'>"+t+"</a>")
      //$(this).parents('article').attr('id',t.toLowerCase().split(' ').join('-'));
      $(this).parents('div.post-type').attr('id',t.toLowerCase().split(' ').join('-'));
      //$(this).parents('article').attr('item_index',index);
      $(this).parents('div.post-type').attr('item_index', index);
      $('.fn-item').last().click(function () {
        var i = $(this).attr('item_index');
        var s = $("div.post-type[item_index='"+i+"']");

        $('html, body').animate({
          scrollTop: s.offset().top
        }, 300);
        //}, 0);

      });
    });

    $('.post.last').next('.post-after').hide();
    if($sitehead.length) { 
      $(window).scroll( function () {
        var w = $(window).scrollTop();
        var g = $sitehead.offset().top;
        //var h = $sitehead.offset().top + $(this).height()-100;
        var h = $sitehead.offset().top + $sitehead.height()-100;
        
                
        if(w >= g && w<=h) {
          $('.fixed-nav').fadeOut('fast');
        } else if($(window).width() > 1130) {
          $('.fixed-nav').fadeIn('slow');
        }

        $post.each(function () {
          var f = $(this).offset().top;
          var b = $(this).offset().top + $(this).height();
          var t = $(this).index();
          var i = $(".fn-item[item_index='"+t+"']");
          //var a = $(this).parent('.post').prev('.post').find('.post-after');
          var a = $(this).parent('div.post-type').prev('div.post-type').find('div.post-type');

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
