function toggleMainMenu() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $("html").toggleClass("toggled");
    });

    $(document).mouseup(function(e)
    {
        var container = $("#sidebar-wrapper");

        if ($("#wrapper").hasClass("toggled") && !container.is(e.target)
            && container.has(e.target).length === 0)
        {
            $("#wrapper").toggleClass("toggled");
            $("html").toggleClass("toggled");
        }
    });
}

function toggleHotNews() {
    $("#newest-toggle").click(function(e) {
        e.preventDefault();
        $("#newest-all").toggleClass("toggled");
        $("html").toggleClass("toggled");
    });

    $(document).mouseup(function(e)
    {
        var container = $("#newest-wrapper");

        if ($("#newest-all").hasClass("toggled") && !container.is(e.target)
            && container.has(e.target).length === 0)
        {
            $("#newest-all").toggleClass("toggled");
            $("html").toggleClass("toggled");
        }
    });
}

function stickyMainMenu() {

var menu = $('.cd-main-nav-1');
var origOffsetY = menu.offset().top;

function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
        $('.cd-main-nav-1').addClass('nav-sticky');
        // $('.content').addClass('menu-padding');
        $(".back-to-top").css("display", "inherit");
        $(".search-btn").css("right", 40);
    } else {
        $('.cd-main-nav-1').removeClass('nav-sticky');
        $(".back-to-top").css("display", "none");
        $(".search-btn").css("right", 20);
        // $('.content').removeClass('menu-padding');
    }


   }
  document.onscroll = scroll;
};

function hideStickyMainMenu() {
    var previousScroll = 0,
    navOffset = $('.cd-main-nav-1').height()+300;

    $(window).scroll(function () {

        var currentScroll = $(this).scrollTop();
        if (currentScroll > navOffset) {
            if (Math.abs(currentScroll - previousScroll) > 40) {
                if (currentScroll > previousScroll) {
                    $('.cd-main-nav-1').addClass("retreat");
                } else {
                    $('.cd-main-nav-1').removeClass("retreat");
                }
            }
        }
        previousScroll = currentScroll;

         if ($(window).scrollTop() == 0) {
            $('.cd-main-nav-1').removeClass("retreat");
         }
    });
}

function firstMaxHeight() {
    var maxHeight = 0;

    if ($(window).width() > 768) {
        $('.content-box').each(function() {
         maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
       });

       $('.content-box').each(function() {
         $(this).height(maxHeight);
       });
    } else {
        $('.content-box').each(function() {
            $(this).height("auto");
        });
    }
};

function quotesMaxHeight() {
    var maxHeight = 0;

    if ($(window).width() > 768) {
        $('.cd-popular-quotes-1 .item').each(function() {
         maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
       });

       $('.cd-popular-quotes-1 .item').each(function() {
         $(this).height(maxHeight);
       });
    } else {
        $('.cd-popular-quotes-1 .item').each(function() {
            $(this).height("auto");
        });
    }
};


function setDimensions() {

    if (jQuery(window).width() > 992) {

        max = $(".article-citat").outerHeight() > $(".akter-header").outerHeight() ? $(".article-citat").outerHeight() : $(".akter-header").outerHeight();
        $(".article-citat, .akter-header").outerHeight(max);
    } else {
        $(".akter-header").css("height", "auto");
    }
    
    if (jQuery(window).width() <= 768) {
            jQuery(".hn-col-1").css("float", "none");
            jQuery(".hn-col-1").css("width", "100%");
    } else {
        jQuery(".hn-col-1").css("float", "left");
    }

    window.onload = setDimensions;
}

function fontSize() {
    if (jQuery(window).width() > 768) {
    	jQuery(".top-news-in").each(function() {
    		if (jQuery(this).height() > 300) {
    			jQuery(this).find(".headline").animate({
    				fontSize : '22px'
    			}, "fast");
    			jQuery(this).find(".headline").css("line-height", "31px");
    		}
    	});
    }

	window.onload = fontSize;
}

function showSearch() {
    $(".search-input").toggle();
    $(".search-btn").addClass('selected');
    if($(".search-input").css("display")=="none") {
        $(".search-btn").removeClass('selected');
    }
}

function trDropdown() {
    $(".trending-dropdown").toggle();
    $(".trending-toggle").addClass('selected');
    if($(".trending-dropdown").css("display")=="none") {
        $(".trending-toggle").removeClass('selected');
    }
}

function backToTop() {
    jQuery('.back-to-top').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
}

jQuery(document).ready(function() {
    firstMaxHeight();
	quotesMaxHeight();
    setDimensions();
    fontSize();
    stickyMainMenu();
    backToTop();
    hideStickyMainMenu();
    toggleMainMenu();
    toggleHotNews();
});

jQuery(window).resize(function() {
    firstMaxHeight();
	quotesMaxHeight();
    setDimensions();
});