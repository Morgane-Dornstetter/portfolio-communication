$(".image").click(function(){
    $(".image").removeClass("active");
    $(this).addClass("active");

    $('.image.active').click(function() {
        var URL = $(this).css('background-image');
        window.open(URL.split('"')[1], '_blank'); 
    });
  })
  