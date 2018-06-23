



$(document).ready(function () {
   
    $screenwidth = $(window).width();
    $screenheight = $(window).height();
    
    
    
    
    
    
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage'],


    });

    
    
    
    $automargin = ($screenwidth - (($screenwidth * 80) / 100)) / 2;
    console.log($automargin);
    $(".aboutinfo").css("margin-top", $automargin);
    $(".contactinfo").css("margin-top", $automargin);

    $(".framework_left_mid").click(function () {
        location.href = 'D&D.html';
    });
    $(".framework_right_mid").click(function () {
        location.href = 'Motion.html';
    });
    $(".framework_mid").click(function () {
        window.open('photography.html');
    });






    //animation

    $(".animsition").animsition({
        inClass: 'fade-in-left-lg',
        outClass: 'fade-out-left-lg',
        inDuration: 1000,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });


    //page2
    /*
    $(document).on('mousemove', function (e) {
        $('#your_div_id').css({
            left: e.pageX,
            top: e.pageY

        });
        console.log(e.pageX);
        console.log(e.pageY);

    });
    */

    //animation test
    /*var mouseX = 0,
        mouseY = 0,
        limitX = 1500 - 15,
        limitY = 1500 - 15;
    $(window).mousemove(function (e) {
        var offset = $('.animation_container').offset();
        mouseX = Math.min(e.pageX - offset.left, limitX);
        mouseY = Math.min(e.pageY - offset.top, limitY);
        if (mouseX < 0) mouseX = 0;
        if (mouseY < 0) mouseY = 0;
    });

    
    var follower = $("#follower");
    var xp = 0,
        yp = 0;
    var loop = setInterval(function () {
        
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;

        xp = (xp * 5) / 100;
        yp = (yp * 5) / 100;


        follower.animate({
            left: xp + 122,
            top: yp + 195
        } , 1000, "linear");

    }, 500);
    */


    //load animation
    
    






});