$(document).ready(function(){
  var height = $(window).height();
  var width = $(window).width();
    $divheight = ((width * 70) /100) /2;
  console.log($divheight); 
    
    
  $('.thumbnail').css('height', $divheight -6);
  

   $("svg").click(function(){     
        
       window.location = "index.html#secondPage";
   }); 
    
   $('.thumbnailbox').animate({
       opacity: .9
   });
    
     $('.thumbnailbox').hover(function() {
         $(this).stop().animate({ opacity: .1}, 'fast');
         $(this).children().stop().animate({ opacity: .1}, 'fast');
         
     }, function() {
         $(this).stop().animate({opacity: 0.9}, 'fast');
         $(this).children().stop().animate({ opacity: .9}, 'fast');   
     });
    
    
    
    /*$('.item3').css({'background-image': 'url("Img/Jubelparkwebsite/sleutelbeeld-01.png")'});*/
     $('.item7').css({ 
     "background-image": "url('')", 
     "background-size": "100%"
     });
     $('.item8').css({ 
     "background-image": "url('')", 
     "background-size": "100%"
     });
     $('.item9').css({ 
     "background-image": "url('')", 
     "background-size": "100%"
     });
     $('.item10').css({ 
     "background-image": "url('Img/facefake/facefake.png')", 
     "background-size": "100%"
     });
    $('.item11').css({ 
     "background-image": "url('Img/facefake/facefake.png')", 
     "background-size": "100%"
     });
    $('.item1').css({ 
     "background-image": "url('Img/uzleuven.jpg')", 
     "background-size": "100%"
     });
    $('.item2').css({ 
     "background-image": "url('Img/rubcyle.jpg')", 
     "background-size": "100%"
     });
     $('.item3').css({ 
     "background-image": "url('Img/Aftermovie-handsup/sluitelbeeld.jpg')", 
     "background-size": "100%"
     });
    $('.item5').css({ 
     "background-image": "url('Img/multec@work s1/sluitelbeeld03.jpg')", 
     "background-size": "100%"
     });
    $('.item4').css({ 
     "background-image": "url('Img/Demo Real/sleutelbeeld.png')", 
     "background-size": "100%"
     });
    $('.item6').css({ 
     "background-image": "url('Img/Ostend hyperlapse/sleutelbeeld.jpg')", 
     "background-size": "100%"
     });
    $('.item12').css({ 
     "background-image": "url('Img/uzleuven.jpg')", 
     "background-size": "100%"
     });
    $('.item13').css({ 
     "background-image": "url('Img/rubcyle.jpg')", 
     "background-size": "100%"
     });
    
    
    $('.item7').click(function() {
    window.location = "sportkompas.html";
    });
    $('.item8').click(function() {
    window.location = "aftermovie-handsup.html";
    });
    $('.item9').click(function() {
    window.location = "tedxkuleuven.html";
    });
    $('.item10').click(function() {
    window.location = "facefake.html";
    });
    $('.item11').click(function() {
    window.location = "facefake.html";
    });
    $('.item1').click(function() {
    window.location = "uzleuven.html";
    });
    $('.item2').click(function() {
    window.location = "rubcycle.html";
    });
    $('.item3').click(function() {
        
    
    window.location = "aftermovie-handsup.html";
    });
    $('.item4').click(function() {
    window.location = "reel.html";
    });
    $('.item5').click(function() {
    window.location = "multecatwork.html";
    });
    $('.item6').click(function() {
    window.location = "hyperlapse.html";
    });
    $('.item12').click(function() {
    window.location = "UZLeuven.html";
    });
    $('.item13').click(function() {
    window.location = "rubcycle.html";
    });
    
     
    
});