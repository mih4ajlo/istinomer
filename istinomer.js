function search_website(){
	var search_website = $('[name="search_website"]').val();
	var forbiden = /[%:\?. .,\/\\\'’`!+\"®!?\*^&#<>;{}\(\)|~\[\]“”„“=]/g;
	
	search_website = search_website.replace(/\s+/g,'-');
	search_website = search_website.replace(forbiden,'');
	
	document.location = 'http://www.istinomer.rs/pretraga/'+search_website+'/';
}

function runScript(e) {
	if (e.keyCode == 13) {
		search_website();
		return false;
	}
}

//

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-11754978-1', 'auto');
ga('send', 'pageview');
ga('send', {
  hitType: 'social',
  socialNetwork: 'Facebook',
  socialAction: 'like',
  socialTarget: ''
});

ga('send', {
  hitType: 'social',
  socialNetwork: 'Facebook',
  socialAction: 'share',
  socialTarget: ''
});

ga('send', {
  hitType: 'social',
  socialNetwork: 'Twitter',
  socialAction: 'Tweet',
  socialTarget: ''
});
/*'UA-11754978-1'*/

//

var hot_news_open = false;

function hot_news(){
	if(!hot_news_open){
		hot_news_open = true;
		$('.cd-hot-news-1').slideDown('fast');
		$('#hot-news-btn').addClass('selected');
	}else{
		hot_news_open = false;
		$('.cd-hot-news-1').slideUp('fast');
		$('#hot-news-btn').removeClass('selected');
	}
}
var hnews_active_slide = 1;
function hot_news_change_slide(side){
	var hnews_max_slides = Math.ceil($('.hn-col-wrap').size());	
	
	if(side=="right" && (hnews_active_slide<hnews_max_slides)){
		$('#hnews-btn-left').removeClass('disabled');

		$('#hnews-position').animate({left:(hnews_active_slide)*(-jQuery(".hn-col-1").outerWidth())},"fast");
		hnews_active_slide ++;
		if(hnews_active_slide==hnews_max_slides){
			$('#hnews-btn-right').addClass('disabled');
		}
	}else if(side=="left" && (hnews_active_slide>1)){
		
		$('#hnews-btn-right').removeClass('disabled');
		hnews_active_slide --;
		$('#hnews-position').animate({left:(hnews_active_slide)*(-jQuery(".hn-col-1").outerWidth())+jQuery(".hn-col-1").outerWidth()},"fast");
		
		if(hnews_active_slide==1){
			$('#hnews-btn-left').addClass('disabled');
		}
	}
}
   
function anketa(id){
	start_global_call_loader(); 
	var id_ankete = id;
	var odgovor = $('[name="answer"]:checked').val();
	var call_url = "anketa";  
	var call_data = { 
		id_ankete:id_ankete,
		odgovor:odgovor
	}  
	var callback = function(odgovor){  
		finish_global_call_loader(); 
		if(odgovor.success){  
			valid_selector = "success";  
		}else{  
			valid_selector = "error";  
		}  
		show_user_message(valid_selector,odgovor.message)  
	}
	ajax_json_call(call_url, call_data, callback);
}

function rezultat_ankete(){ 
	var data = ''; 
	var call_url = "rezultat_ankete";
	var call_data = { 
		data:data 
	} 
	var callback = function(odgovor){
		$('.cd-poll-1').html(odgovor); 
	} 
	ajax_call(call_url, call_data, callback);
} 
$(function(){
	rezultat_ankete();
}); 
function prikazi_rezultate(){
	$('.all-answers').hide();
	$('.all-results').show();
}

//

var mni_active = false;

function main_nav(tab){

	if(!mni_active){
		mni_active = tab;
		$('#mni-position').animate({left:(tab-1)*(-960)},0);
		$('.dropdown-wrapper').slideDown('fast');
		$('.mni').removeClass('selected');
		$('#mni-'+tab).addClass('selected');
		
	}else if(mni_active==tab){
		mni_active = false;

		$('#mni-position').animate({left:(tab-1)*(-960)},0);
		$('.dropdown-wrapper').slideUp('fast');
		$('.mni').removeClass('selected');		

	}else if(mni_active!=tab){
		mni_active = tab;

		$('#mni-position').animate({left:(tab-1)*(-960)},"fast");
		$('.mni').removeClass('selected');
		$('#mni-'+tab).addClass('selected');
	}
}
$(window).scroll(function() {
	mni_active = false;
  	//$('#mni-position').animate({left:(mni_active-1)*(-930)},0);
	$('.dropdown-wrapper').slideUp('fast');
	$('.mni').removeClass('selected');	
});	

//

// $(document).ready(function() {
// 	// grab the initial top offset of the navigation 
//    	var stickyNavTop = $('#sticky-nav').offset().top;
   	
//    	// our function that decides weather the navigation bar should have "fixed" css position or not.
//    	var stickyNav = function(){

// 	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	         
// 	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
// 	    // otherwise change it back to relative
// 	    if ((scrollTop > stickyNavTop && !hot_news_open)||(scrollTop > 610 && hot_news_open)) { 
// 	        $('#sticky-nav').addClass('nav-sticky');
// 	        $('#sticky-arrow').fadeIn(400);
// 	    } else {
// 	        $('#sticky-nav').removeClass('gd-sticky-1'); 
// 	        $('#sticky-arrow').fadeOut(400);
// 	    }
// 	};

// 	stickyNav();
// 	// and run it again every time you scroll
// 	$(window).scroll(function() {
// 		stickyNav();
// 	});
// });

// function move_to_top(){
// 	$('html, body').animate({
//     scrollTop: $("#top-page").offset().top
// 	}, 2000);
// }