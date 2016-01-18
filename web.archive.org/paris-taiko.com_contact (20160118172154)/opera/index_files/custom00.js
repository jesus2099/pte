




/*
     FILE ARCHIVED ON 17:19:57 janv. 18, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:23:54 janv. 8, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/* ------------------------------------------------------------------------------

    Custom JS - All front-end jQuery

------------------------------------------------------------------------------ */

jQuery(document).ready(function(){
    'use strict';
    
    /* make code pretty
    /* ========================================================= */
    window.prettyPrint && prettyPrint();
    
    /* Fix bootstrap submenu
    /* ========================================================= */
    jQuery('.dropdown-toggle').click(function(e) {
        e.preventDefault();
        setTimeout(jQuery.proxy(function() {
            if ('ontouchstart' in document.documentElement) {
                jQuery(this).siblings('.dropdown-backdrop').off().remove();
            }
        }, this), 0);
    });    

    /* Adding active state to accordion heading
    /* ========================================================= */
    jQuery('.accordion-body').on('show',
        function(e){
            jQuery(e.currentTarget).parent().find('.accordion-heading').addClass('active')
    });

    jQuery('.accordion-body').on('hide',
        function(e){
            jQuery(e.currentTarget).parent().find('.accordion-heading').removeClass('active')
    });

    /* Video in posts and portfolio
    /* ========================================================= */
    jQuery('.content').fitVids();

    /* Video headers
    /* ========================================================= */
    jQuery('.background-video').each(function(){
        var el = jQuery(this);
        el.videobackground({
            videoSource     : [[el.attr('data-mp4'), 'video/mp4'],
                              [el.attr('data-webm'), 'video/webm'],
                              [el.attr('data-ogv'), 'video/ogg']],
            poster          : el.attr('data-image'),
            loop            : true,
            resize          : false,
            controlPosition : 'hide'
        });
    });

    /* Modifiers
    /* ========================================================= */
    
    function thegravity_fade_texts(){
        jQuery('.fadeFromTop').delay(1000).animate({ top: '0', opacity: 1 }, 'slow');
        jQuery('.fadeFromBottom').delay(1000).animate({ top: '0', opacity: 1 }, 'slow');
        jQuery('.fastFadeFromTop').delay(300).animate({ top: '0', opacity: 1 }, 'slow');
        jQuery('.fastFadeFromBottom').delay(300).animate({ top: '0', opacity: 1 }, 'slow');
    }    
    var pagetitle = jQuery('.page-title');
    if (pagetitle.length) {
        var images = jQuery('img, .page-title');
        jQuery.each(images, function(){
            var el = jQuery(this),
            image = el.css('background-image').replace(/"/g, '').replace(/url\(|\)$/ig, '');
            if(image && image !== '' && image !== 'none')
                images = images.add(jQuery('<img>').attr('src', image));
            if(el.is('img'))
                images = images.add(el);
        });
        images.imagesLoaded(thegravity_fade_texts);
    } else {
        thegravity_fade_texts();
    }
    
    /*  Tooltips
    /* ========================================================= */
    
    jQuery('[data-toggle=tooltip]').tooltip();

    /*  Contact Panel
    /* ========================================================= */

    var navbarFixedTop      = jQuery('.navbar-fixed-top'),
        contactBarBtn       = jQuery('.contact-bar-btn'),
        contactBar          = jQuery('.contact-bar'),
        contactCorner       = jQuery('.contact-bar-corner'),
        searchBarBtn        = jQuery('.search-bar-btn'),
        searchBar           = jQuery('.search-bar'),
        searchBarCorner     = jQuery('.search-bar-corner'),
        closeBtn            = jQuery('.search-bar .close, .contact-bar .close'),
        projectNavBar       = jQuery('.project-navbar'),
        projectNav          = jQuery('.project-nav'),
        content             = jQuery('.content'),
        footer              = jQuery('footer');
        

    contactBar.css({ top: -contactBar.height() });
    searchBar.css({ top: -searchBar.height() });
    
    /*  Content Margin
    /* ========================================================= */
    if (footer.length) {
        content.css({ marginBottom: footer.height() });
    }

    function contact_close() {
        contactBar.animate({ top: -contactBar.height() }, 'slow');
        contactCorner.css('display', 'none');
    }
    
    function search_close() {
        searchBar.animate({ top: -searchBar.height() }, 'slow');
        searchBarCorner.css('display', 'none');
    }
    
    contactBarBtn.click(function (e) {
        search_close();
        contactBar.show();
        navbarFixedTop.animate({ top: contactBar.height() }, 'slow'),
        contactBar.animate({ top: '0' }, 'slow'),
        stickyHeader.addClass('sticky'),
        contactCorner.css('display', 'block'),
        e.preventDefault();
        return false;
    });

    closeBtn.click(function (e) {
        navbarFixedTop.animate({ top: '0' }, 'slow'),
        searchBar.animate({ top: -searchBar.height() }, 'slow'),
        contactBar.animate({ top: -contactBar.height() }, 'slow'),
        stickyHeader.removeClass('sticky'),
        searchBarCorner.css('display', 'none'),
        contactCorner.css('display', 'none'),
        e.preventDefault();
        return false;
    });

    searchBarBtn.click(function (e) {
        contact_close();
        searchBar.show();
        navbarFixedTop.animate({ top: searchBar.height() }, 'slow'),
        searchBar.animate({ top: '0' }, 'slow'),
        stickyHeader.addClass('sticky'),
        searchBarCorner.css('display', 'block'),
        e.preventDefault();
        return false;
    });

    /*  Sticky Header
    /* ========================================================= */

    var stickyHeader = jQuery('.navbar-fixed-top');

    jQuery(window).scroll(function() {
        if( stickyHeader.offset().top > 100 ) {
            stickyHeader.addClass('sticky')
        } else {
            stickyHeader.removeClass('sticky')
        }
    });

    /*  Fader Modifier
    /* ========================================================= */
        
    var fader = jQuery('.fader');

    jQuery(window).scroll(function() {
       var percent = jQuery(document).scrollTop() / 200;
       fader.css('opacity', 1 - percent);
    });
    
    /* Resizing Portfolio Images
    /* ========================================================= */
    function images_resize() {
        jQuery('.grid-item').each(function(){
            var $el = jQuery(this),
                width = $el.width(),
                $img = $el.find('img');
            if ($img.length) {
                var imgw = $img.width(),
                    imgh = $img.height();                
                if ((imgw * 0.7) >= imgh) {
                    $img.height(Math.round(width * 0.7));
                    $img.width(Math.round($img.height() * imgw / imgh));
                } else {
                    $img.width(width);
                    $el.height(Math.round(width * 0.7));
                    $img.height(Math.round($img.width() * imgh / imgw));
                }                                    
            }
        });        
    }
    
    jQuery(window).smartresize(function(){
        images_resize();
    });

    /*  Isotope filterable items
    /* ========================================================= */

    var filtersSet = jQuery('.filters-set'),
        $container = jQuery('.filterable-items > .row, .filterable-items > .row-fluid');

    // filters
    jQuery('.filters-btn').on('mouseenter', function () {
        if ( filtersSet.is(':hidden') ) {
             filtersSet.slideDown('normal');
        }
    });
    
    jQuery('filters-btn').click(function(){
        return false;
    });
    
    jQuery('.filters').on('mouseleave', function () {
        filtersSet.slideUp('normal');
    });

    // Initialize isotope 
    jQuery(window).smartresize(function(){
        $container.isotope();
    });            
   
    
    $container.imagesLoaded(function(){        
        jQuery(window).smartresize();        
    });
    
    // Filter items when filter link is clicked
    filtersSet.find('a').click(function() {
        var selector = jQuery(this).attr('data-filter');
        filtersSet.find('a').removeClass('current');
        jQuery(this).addClass('current');
        $container.isotope( { 
            filter : selector
        });        
        return false;
    });

    // Infinite Scroll
    $container.infinitescroll({
            navSelector     : '#page-nav',
            nextSelector    : '#page-nav a',
            itemSelector    : '.filterable-items > .row > div, .filterable-items > .row-fluid > div',
            loading: {
                finishedMsg: theme.txt_nomoreitems,
                img: theme.theme_url + '/img/loader.gif',
                msgText: theme.txt_loadingnewitems
            }
        },
        // call isotope as a callback
        function( newElements ) {
            // Resize images
            images_resize();
            // hide new items while they are loading
            var $newElems = jQuery( newElements ).css({ opacity: 0 });
            // ensure that images load before adding to masonry layout
            $newElems.imagesLoaded(function(){
                // show elems now they're ready
                $newElems.animate({ opacity: 1 });
                $container.isotope( 'appended', $newElems, true ); 
            });
        }
    );

    // kill scroll binding
    jQuery(window).unbind('.infscr');

    // Load more items
    jQuery('#load-more-items').click(function(){
        $container.infinitescroll('retrieve');
        return false;
    });

    /*  Stellar
    /* ========================================================= */
    jQuery(window).stellar( {

        // Set scrolling to be in either one or both directions
        horizontalScrolling: false,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

        // Refreshes parallax content on window load and resize
        responsive: false,

        // Select which property is used to calculate scroll.
        // Choose 'scroll', 'position', 'margin' or 'transform',
        // or write your own 'scrollProperty' plugin.
        scrollProperty: 'scroll',

        // Select which property is used to position elements.
        // Choose between 'position' or 'transform',
        // or write your own 'positionProperty' plugin.
        positionProperty: 'transform',

        // Enable or disable the two types of parallax
        parallaxBackgrounds: true,
        parallaxElements: true,

        // Hide parallax elements that move outside the viewport
        hideDistantElements: false,

        // Customise how elements are shown and hidden
        hideElement: function($elem) { $elem.hide(); },
        showElement: function($elem) { $elem.show(); }

    });

    /*  Back to Top
    /* ========================================================= */

    var $toTop = jQuery('#to-top');
    $toTop.hide();
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            $toTop.show();
        } else {
            $toTop.hide();
        }
    });

    $toTop.click(function() {
        jQuery('body, html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /*  Services Scroll
    /* ========================================================= */
      
    jQuery('.services-small').click(function(){
        if (jQuery(this).attr('href')) {
            return true;
        }        
        var tag = jQuery(this).attr('data-tag'),
            pos = jQuery('.services-big[data-tag="' + tag + '"]').offset();
        if (pos) {
            jQuery('body, html').animate({
                scrollTop: pos.top > 100 ? pos.top - 100 : 0
            }, 600);
        }
        return false;
    });
        
    /*  Picture Slider (Flexslider)
    /* ========================================================= */

    jQuery('.flexslider').flexslider( {
        namespace: 'flex-',
        selector: '.slides > li',
        animation: 'fade',
        easing: 'swing',
        direction: 'horizontal',
        reverse: false,
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        initDelay: 0,
        randomize: false,
         
        // Usability features
        pauseOnAction: true,
        pauseOnHover: false,
        useCSS: true,
        touch: true,
        video: false,
         
        // Primary Controls
        controlNav: true,
        directionNav: true,
        prevText: '',
        nextText: '',
         
        // Secondary Navigation
        keyboard: true,
        multipleKeyboard: false,
        mousewheel: false,
        pausePlay: false,
        pauseText: 'Pause',
        playText: 'Play',
         
        // Special properties
        controlsContainer: '',
        manualControls: '',
        sync: '',
        asNavFor: '',
         
        // Carousel Options
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
                                         
        // Callback API
        start: function(){},
        before: function(){},
        after: function(){},
        end: function(){},
        added: function(){},
        removed: function(){}
    });

    /*  Like buttons for Portfolio
    /* ========================================================= */

    jQuery('.like-btn').click(function(){
        var el = jQuery(this),
            postid = el.attr('data-postid');
        if (!el.hasClass('active')) {
            jQuery.post(
                theme.ajax_url,
                {
                    action : 'portfolioitem_like',
                    postid : postid
                },
                function (response) {
                    if (response) {
                        el.find('span').html(response);
                        el.addClass('active');
                        el.unbind('click');
                        el.click(function(){
                            return false;
                        });
                    }
                }
            );            
        }
        return false;
    });

    /*  Contact Forms
    /* ========================================================= */

    jQuery('form.contacter').each(function(){
        var el = jQuery(this),
            button = el.find('#contacter-button'),
            mnonce = el.attr('data-nonce');
        button.click(function(){
            var mname = el.find('#contacter-name'),
                memail = el.find('#contacter-email'),
                mmessage = el.find('#contacter-message');
            function check_empty(el) {
                if (el.val().length == 0) {
                    el.addClass('error');
                } else {
                    el.removeClass('error');
                }
            }
            check_empty(mname);
            check_empty(memail);
            check_empty(mmessage);
            if (mname.val().length > 0 && memail.val().length > 0 && mmessage.val().length > 0) {
                jQuery.post(
                    theme.ajax_url,
                    {
                        action : 'contactform_sendmessage',
                        name : mname.val(),
                        email : memail.val(),
                        message : mmessage.val(),
                        nonce : mnonce
                    },
                    function (response) {
                        jQuery('#contact-form').modal('hide');
                        if (response) {
                            jQuery('#contact-form-success').modal();
                        } else {
                            jQuery('#contact-form-fail').modal();
                        }
                    }
                );
            }
            return false;
        });
    });    
    
    /*  Google Maps
    /* ========================================================= */

    var gmaps = jQuery('.google-map');
    if (gmaps.length > 0) {   
        jQuery.getScript('/web/20160118171957/https://www.google.com/jsapi', function() {
            google.load('maps', '3', { other_params: 'sensor=false', callback: function() {
                gmaps.each(function() {
                    var target = jQuery(this);
                    var title = target.attr('data-title');
                    var map = null;
                    var latlng = new google.maps.LatLng(target.attr('data-lat'), target.attr('data-lng')),
                        mapOptions = {
                            zoom                    : parseInt(target.attr('data-zoom'), 10) || 10,
                            center                  : latlng,
                            panControl              : false,
                            scrollwheel             : false,
                            zoomControl             : true,
                            zoomControlOptions: {
                                style: google.maps.ZoomControlStyle.SMALL,
                                position: google.maps.ControlPosition.LEFT_BOTTOM
                            },
                            scaleControl            : false,
                            mapTypeControl          : false,
                            mapTypeControlOptions   : {
                                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                            }
                    };                 
                    map = new google.maps.Map(this, mapOptions);
                    var infowindow = new google.maps.InfoWindow({
                        content: '<div id="google-map-marker">' + title + '</div>'
                    });
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map, 
                        title: title
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map,marker);
                    });
                    var height = target.attr('data-height');
                    if (jQuery.isNumeric(height) && height > 0) {
                        target.height(height);
                    } else {
                        target.height(target.width() * 3 / 8);
                    }
                });
           }});
        });
    }
});