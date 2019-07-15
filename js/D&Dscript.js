$(document).ready(function(){
  var height = $(window).height();
  var width = $(window).width();
    $divheight = ((width * 70) /100) /2;
  console.log($divheight); 
    
    
  $('.thumbnail').css('height', $divheight -10);
  

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
    $('.item10').css({ 
     "background-image": "url('Img/Space-jumper/thumbnail.jpg')", 
     "background-size": "100%"
     });
    $('.item11').css({ 
     "background-image": "url('Img/Skyuber/thumbnail.jpg')", 
     "background-size": "100%"
     });
    $('.item2').css({ 
     "background-image": "url('Img/FunAtTheQueue/sleutelbeeld-01.png')", 
     "background-size": "100%"
     });
    $('.item6').css({ 
     "background-image": "url('Img/Webshop/sluitelbeeld_webshop-design4_01-01.png')", 
     "background-size": "100%"
     });
     $('.item4').css({ 
     "background-image": "url('Img/Jubelparkwebsite/sleutelbeeld-02.png')", 
     "background-size": "100%"
     });
    $('.item5').css({ 
     "background-image": "url('Img/unity/sluitelbeeld.png')", 
     "background-size": "100%"
     });
    $('.item8').css({ 
     "background-image": "url('Img/Techmeetsdesign/sluitelbeeld_geschiedenis-design5_02.png')", 
     "background-size": "100%"
     });
    $('.item7').css({ 
     "background-image": "url('Img/PrinciplesDesign/sleutelbeeld_principlesOfDesign-1.png')", 
     "background-size": "100%"
     });
    $('.item1').css({ 
     "background-image": "url('Img/sosJobs/sluitelbeeld_logo-show-01.png')", 
     "background-size": "100%"
     });
	$('.item3').css({ 
     "background-image": "url('Img/nappi/sleutelbeeld2_DetailItemMotion.png')", 
     "background-size": "100%"
     });
    $('.item9').css({ 
     "background-image": "url('Img/gamification/sluitelbeeld_visitekaartje_G4B.png')", 
     "background-size": "100%"
     });
    
     $('.item10').click(function() {
    window.location = "space-jumper.html";
    });
    $('.item11').click(function() {
    window.location = "skyuber.html";
    })
    $('.item1').click(function() {
    window.location = "sosjobs.html";
    });
    $('.item2').click(function() {
    window.location = "FATQ.html";
    });
    $('.item3').click(function() {
      
    window.location = "nappi.html";
    });
    $('.item4').click(function() {
    window.location = "jubelparkmuseum.html";
    });
    $('.item5').click(function() {
    window.location = "UnityGame.html";
    });
    $('.item6').click(function() {
    window.location = "webshop.html";
    });
    $('.item7').click(function() {
    window.location = "principlesofdesign.html";
    });
    $('.item8').click(function() {
    window.location = "TechMeetsDesign.html";
    });
    $('.item9').click(function() {
    window.location = "gamification.html";
    });
    
     
    
});