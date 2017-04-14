$(document).ready(function () {

        /* Browser Check */
        function checkBrowser(){
            var userAgent = navigator.userAgent.toLowerCase();

            if (userAgent.indexOf('safari')!=-1){
                if(userAgent.indexOf('chrome')  > -1){
                    //Chrome

                }
                else
                {
                    //Safari
                    $('.pageContainer').css(
                        {'top': '17%'}
                    );

                    $('.labelMenu').css(
                        {
                            'top': '10%',
                            'left': '20%'
                        }
                    );
                }
            }
        }
        checkBrowser();


    /* Buttons Animation */
    $('.pageBtn').hover( function () {
        if(!$(this).hasClass('nextBtn') && !$(this).hasClass('prevBtn'))
        {
            $(this).addClass('animated jello');
        }
    });

    $('.pageBtn').mouseleave( function () {
        $(this).removeClass('animated jello');
    });



    /*
    var player;

    function onYouTubePlayerAPIReady() {
        alert('test');
        // create the global player from the specific iframe (#video)
        player = new YT.Player('youtubeVideo', {
            events: {
                // call this function when player is ready to use
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {

        $('#play-button').click(function (e) {
            e.preventDefault();
            alert('test');
            player.playVideo();
        });

        $('#pause-button').click(function (e) {
            e.preventDefault();
            player.pauseVideo();
        });

    }


    var tag = document.createElement('youtubePlayerScript');
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('youtubePlayerScript')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    */

    var videoSlider = new Swiper('.videoSlider', {
        nextButton: '.nextBtnMain',
        prevButton: '.prevBtnMain',
        centeredSlides: true,
        spaceBetween: 10
    });

    var videoThumbs = new Swiper('.gallery-thumbs', {
        nextButton: '.nextBtnThumb',
        prevButton: '.prevBtnThumb',
        spaceBetween: 8,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    videoSlider.params.control = videoThumbs;
    videoThumbs.params.control = videoSlider;

    var searchState = false;
    var toggleSearch = function () {
        if(!searchState)
        {
            $('.searchInputContainer').fadeIn(500);
            $('.searchInputContainer').removeClass('bounceOut');
            $('.searchInputContainer').addClass('bounceIn');
            $('.searchInputContainer > input:first-child').focus();
            searchState = true;
        }
        else
        {
            $('.searchInputContainer').fadeOut(800);
            $('.searchInputContainer').removeClass('bounceIn');
            $('.searchInputContainer').addClass('bounceOut');
            searchState = false;
        }
    };

    $('.searchBtn a').click(function (e) {
       e.preventDefault();
        toggleSearch();
    });

    var toggleMenu = function () {
        if(!$('.menu').is(':visible'))
        {
            $('.menu').toggle();
            if($('.menuItem').hasClass('bounceOut'))
            {
                $('.menuItem').removeClass('bounceOut');
            }
            $('.menuItem').addClass('bounceIn');
        }
        else if($('.menu').is(':visible'))
        {

            if($('.menuItem').hasClass('bounceIn'))
            {
                $('.menuItem').removeClass('bounceIn');
            }

            setTimeout(function () {
                $('.menuServices').addClass('bounceOut');
            }, 200);
            setTimeout(function () {
                $('.menuStories').addClass('bounceOut');
            }, 400);
            setTimeout(function () {
                $('.menuKhabar').addClass('bounceOut');
            }, 600);
            setTimeout(function () {
                $('.menuPreschool').addClass('bounceOut');
            }, 800);
            setTimeout(function () {
                $('.menuKnowledge').addClass('bounceOut');
            }, 1000);

            setTimeout(function () {
                $('.menu').fadeOut('200');
            }, 1200);
        }
    };


    var goBack = function() {
        window.history.back();
    };

    $('.menuBtn a').click(function (e) {
        e.preventDefault();
        toggleMenu();
    });

    $('.closeBtn').click(function (e) {
        e.preventDefault();
        toggleMenu();
    });


    $('#goBackBtn').click(function (e) {
        e.preventDefault();
        //console.log(window.history.back());
        console.log(window.history.href);
    });


    
    $('.menuMainLink').hover(function () {
        $(this).addClass('rubberBand');
    });

    $('.menuMainLink').mouseleave(function () {
        $(this).removeClass('rubberBand');
    });

    var knowledgeCheck = false;

    $('.menuMainLink').click(function (e) {
        e.preventDefault();
        if($('.menuInner').is(':visible'))
        {
            var visibleInnerMenu = ($('.menuInner').not(':hidden'));
            visibleInnerMenu.find('li').removeClass('bounceIn');
            visibleInnerMenu.find('li').addClass('bounceOut');
            setTimeout(function () {
               visibleInnerMenu.fadeOut(100);
            }, 500);
        }


        if(!$(this).next('.menuInner').is(':visible'))
        {
            $(this).next('.menuInner').fadeIn(300);
            $(this).next('.menuInner').find('li').removeClass('bounceOut');
            $(this).next('.menuInner').find('li').addClass('bounceIn');
            $('.menuItem').css({
                'top': '0'
            });
            knowledgeCheck = false;
        }
        else
        {
            $(this).next('.menuInner').fadeOut(600);
            $(this).next('.menuInner').find('li').removeClass('bounceIn');
            $(this).next('.menuInner').find('li').addClass('bounceOut');
            $('.menuItem').css({
                'top': '0'
            });
            knowledgeCheck = false;
        }

    });

    $('.menuKnowledge a').click(function (e) {
        e.preventDefault();
        if(!knowledgeCheck)
        {
            $('.menuItem').css({
                'top': '-10%'
            });
            knowledgeCheck = true;
        }


    });

    /* Sound Mute */
    $('.mute a').click(function (e) {
        e.preventDefault();
        var backgroundMusic = $('.backgroundMusic')[0];
        var micIcon = $(this).find('i');
        backgroundMusic.muted = !backgroundMusic.muted;



        if(micIcon.hasClass('fa-microphone'))
        {
            micIcon.removeClass('fa-microphone');
            micIcon.addClass('fa-microphone-slash');
        }
        else if(micIcon.hasClass('fa-microphone-slash'))
        {
            micIcon.removeClass('fa-microphone-slash');
            micIcon.addClass('fa-microphone');
        }
    });

    /* On Model Load */
    $('.islandsIframe').on('load', function () {
        setTimeout(function()
        {
            $('.logoContainer img').addClass('animated bounceOutUp');
        }, 3000);

        setTimeout(function()
        {

            $('.mainContainer').fadeOut('slow');
            $('.logoContainer').addClass('animated bounceOutUp');

        }, 5000);
    });

    /*************************** Radio Player ************************/

    $('.radioContainer').on('load', function () {
       $(this).focus();
    });

    $('.articlesContainer').mCustomScrollbar({
        theme:"dark-3",
        scrollButtons:{ enable: true }
    });

    $('.galleryContainer').mCustomScrollbar({
        theme:"dark-3",
        scrollButtons:{ enable: true }
    });

    $('.radioContainer').mCustomScrollbar({
        theme:"dark-3",
        scrollButtons:{ enable: true }
    });

    $('.relatedArticles > div').mCustomScrollbar({
        theme:"minimal-dark",
        scrollButtons:{ enable: true }
    });

    $('.articleContent > div').mCustomScrollbar({
        theme:"minimal-dark",
        scrollButtons:{ enable: true }
    });
    /*************************** Radio Player ************************/

    $('.galleryContainer').on('load', function () {
       $(this).focus();
    });

});