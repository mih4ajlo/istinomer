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

function hnmaxHeight() {
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

function setDimensions() { /*.cd-hot-news-1, */
	// if (jQuery(".cd-hot-news-1").css('display') === 'block') {
	// 	jQuery(".cd-hot-news-1").css("display", "none");
	// } else if (jQuery(".cd-hot-news-1").css('display') === 'none') {
	// 	jQuery(".cd-hot-news-1").css("display", "block");
	// }
    //jQuery(".hot-news-wrapper, .btn-left, .btn-right").css("height", jQuery("#hnews-position").outerHeight()); /*treba .hn-current*/ /*#hnews-position*/
    //jQuery(".hot-news-wrapper, .hn-col-wrap").css("width", jQuery(".cd-hot-news-1").outerWidth()-jQuery(".btn-left").outerWidth()*2-3);


    // jQuery(".content-right").css("min-height", jQuery(".content-left").outerHeight());

    if (jQuery(window).width() <= 768) {
            jQuery(".hn-col-1").css("float", "none");
            jQuery(".hn-col-1").css("width", "100%");
    } else {
        jQuery(".hn-col-1").css("float", "left");
    }

    // if($(window).width() >= 768) {
    //     // $(".cd-poll-1").css("height", 650-$(".cd-question-and-answer-1").height()-15);
    //     // $(".cd-poll-1").css("height", $(".cd-question-and-answer-1").height());

    //     $(".cd-recommend-1 .pic").css("height",$(".cd-recommend-1 h2 a").outerHeight()+$(".cd-recommend-1 .text").outerHeight()+27);

    //     $(".cd-recommend-1 .pic img").css({
    //         "width":"auto",
    //         "height":"100%",
    //         "margin-left":"-25%"
    //     });
    // } else {
    //     $(".cd-poll-1").css("height", "auto");

    //     $(".cd-recommend-1 .pic").css("height","auto");

    //     $(".cd-recommend-1 .pic img").css({
    //         "width":"100%",
    //         "height":"auto",
    //         "margin-left":0
    //     });
    // }

    window.onload = setDimensions;
}

function fontSize() {
	// console.log(jQuery(".cd-top-news-1").css("height"));
	jQuery(".top-news-in").each(function() {
		if (jQuery(this).height() > 300) {
			jQuery(this).find(".headline").animate({
				fontSize : '22px'
			}, "fast");
			jQuery(this).find(".headline").css("line-height", "31px");
		}
	});

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
	hnmaxHeight();
    setDimensions();
    fontSize();
    stickyMainMenu();
    backToTop();
    hideStickyMainMenu();
    // toggleCurrent();
});

jQuery(window).resize(function() {
	hnmaxHeight();
    setDimensions();
});

// $( document ).ready(function() {
//     $( ".container" ).each(function() {
//         var newHeight = 0, $this = $( this );
//         $.each( $this.children(), function() {
//             newHeight += $( this ).height();
//         });
//         $this.height( newHeight );
//     });
// });

// function toggleCurrent() {
// 	$('.hn-col-wrap').toggle(function() {
// 	    $(this)
// 	        .addClass('hn-current')
// 	        console.log("lalal");
// 	    return false;
// 	}, function() {
// 	    $(this)
// 	        .addClass('hn-current')
// 	    return false;
// 	});
// };