$.ajax({
    url: "/",
    success: function(data){
        $('body').load('/site/pages/about.html body');
    }
});



$(document).ready(function(){
    $("header").click(function(){
        $(this).slideUp();
    });
});





$(function(){
 $('#search').on('keyup', function(e){
   if(e.keyCode === 13) {
     var parameters = { search: $(this).val() };
       $.get( '/searching',parameters, function(data) {
        $('#results').html(data);
     });
    };
 });
});


