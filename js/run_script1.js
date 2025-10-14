function adjust_content_to_size1() {
	
	$("#login_body").css("background-image", "url(images/dove_bg2.jpg)");
	
	$("#login_form_container").css({"padding" : "50px 50px 50px 50px", 
	"width" : String($(window).width() - 100), 
	"bottom" : String(($(window).height()/2) - ($("#login_form_container").height()/2)) + "px",
	"right" : "5px"});
}

function adjust_content_to_size2() {
	$("#login_body").css("background-image", "url(images/dove_bg.png)")
	$("#login_form_container").css({"padding" : "50px 50px 50px 50px", 
	"width" : "50%",
	"bottom" : String(Math.floor(0.2 * $(window).height())) + "px",
	"right" : "50px"});
}

function adjust_content_to_size_super() {
	if (($(window).width() <= $(window).height()) || ($(window).width() <= 350)){
		adjust_content_to_size1();
	}
	else {
		adjust_content_to_size2();
	}
}

$(document).ready(function(e){
	
	adjust_content_to_size_super();
	
	$(window).resize(function(){
		
		adjust_content_to_size_super();
		
	});
	
});