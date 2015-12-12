function hnmaxHeight() {
    var maxHeight = 0;

    $('.cd-popular-quotes-1 .item').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.cd-popular-quotes-1 .item').each(function() {
     $(this).height(maxHeight);
   });
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

    $(".cd-poll-1").css("height", 676-$(".cd-question-and-answer-1").height()-15);

    if($(window).width() >= 768) {
        $(".cd-recommend-1 .pic").css("height",$(".cd-recommend-1 h2 a").outerHeight()+$(".cd-recommend-1 .text").outerHeight()+20);

        $(".cd-recommend-1 .pic img").css({
            "width":"auto",
            "height":"100%",
            "margin-left":"-25%"
        });
    } else {
        $(".cd-recommend-1 .pic img").css({
            "width":"100%",
            "height":"auto",
            "margin-left":0
        });
    }

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
}

jQuery(document).ready(function() {
	hnmaxHeight();
    setDimensions();
    fontSize();
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