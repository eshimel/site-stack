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