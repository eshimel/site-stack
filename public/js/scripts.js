/*global $:false */
'use strict'

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

//$.ajax({
//    url: "/",
//    success: function(data){
//        $('body').load('/site/pages/about.html body');
//    }
//});

//$('.grid').masonry({
//  // options... 
//  itemSelector: '.grid-item'
//});
//function sticky_relocate() {
//    var window_top = $(window).scrollTop();
//    var div_top = $('#sticky-anchor').offset().top;
//    if (window_top > div_top) {
//        $('.sticky').addClass('stick');
//    } else {
//        $('.sticky').removeClass('stick');
//    }
//}
//
//$(function () {
//    $(window).scroll(sticky_relocate);
//    sticky_relocate();
//});

function buttonClick(e) {
   if (!e) e = window.event;
   e.stopPropagation();
   // do what you want
}



$(document).ready(function(){
    $("header").click(function(){
        $(this).slideUp();
    });
});

$(document).ready(function(){
    $(".contact-btn").click(function(e){
        e.stopPropagation();
        //alert("Hello")
    });
});

$(document).ready(function(){
    $("#mail-button").click(function(e){
        e.stopPropagation();
        alert("Hello")
    });
});


$('.box').click( function() {
  var box = $(this).html();
  $('#slide').animate({
    left : 0
  }, 500).html(box);
  //$(this).css('width', w * .9);
  //$(this).css('height', h * .9);
});

$('#slide').click( function() {
  $(this).stop().animate({
    left : '2000px'
  }, 500);
  //$(this).css('width', w * .9);
  //$(this).css('height', h * .9);
});


//$('.box__track').hide();

//$('#current').click( function() {
//  $('.box.box__track.box__nowPlaying').show();
//  $('.box.box__track').show().animate(300);
//});



$(function(){
 $('#search').on('keyup', function(e){
   if(e.keyCode === 13) {
     var parameters = { search: $(this).val() };
       $.get( '/searching',parameters, function(data) {
        $('#whatevr').html(data);
     });
    }
 });
});


