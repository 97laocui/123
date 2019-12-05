/*
* @Author: admin
* @Date:   2019-12-03 19:56:43
* @Last Modified by:   admin
* @Last Modified time: 2019-12-04 15:20:55
*/
$(function(){
	$(".pic1").slideDown(1000);
	var a =1;
	// var h = $(window).width();
	// console.log(h);
	 $(".directory_pub").click(function() {
	 	console.log(document.body.scrollWidth-document.body.offsetWidth);
	 	var w =document.body.scrollWidth-document.body.offsetWidth;
	 	// $('body')[0].scrollWidth
	 	if($(window).width()>0&&$(window).width()<768-w){
		 		console.log($(this).children('.directory1_column').css("display"));
		 	if($(this).children('.directory1_column').css("display")=="none"){
		 		$(this).children('.directory1_column').slideDown(1000);
		 		$(this).addClass('a');
		 	}
		 	else if($(this).children('.directory1_column').css("display")=="block"){
		 		$(this).children('.directory1_column').slideUp(1000);
		 		$(this).removeClass('a');
	 		}
	 	}	
	 })
	// var a =1;
	// $(".directory_pub").click(function() {
	// 	if(a==1)
	// 	{
	// 		$(this).children('.directory1_column').stop().animate({"height":"120px"}, 1000);
	// 		a=0;
	// 		$(this).addClass('a');
	// 	}
	// 	else
	// 	{
	// 		$(this).children('.directory1_column').stop().animate({"height":"0px"}, 1000);
	// 		$(".directory_pub::after").css("transform","rotate(0) scale(1.2)")
	// 		a=1;
	// 		$(this).removeClass('a');
	// 	}
	$(".phone ul li").hover(function() {
		$(this).stop().animate({"background-size":"120%"}, 1000);
	}, function() {
		$(this).stop().animate({"background-size":"100%"}, 1000);
	});
	
})