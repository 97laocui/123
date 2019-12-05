/*
* @Author: admin
* @Date:   2019-11-27 11:55:23
* @Last Modified by:   admin
* @Last Modified time: 2019-12-05 19:06:56
*/
// 登陆界面
$(function(){
	$(".login_click").click(function(event) {
		$("body").css("overflow","hidden");
		$(".login1").show();
	});
	$(".login_close").click(function(event) {
		$(".login1").hide();
		$("body").css("overflow","");
	});
	$(".login1_a").click(function(event) {
		if($(".column2").css("display")=='none')
		{
			$(".column2").css("display","block");
			$(".column1").css("display","none");
		}
		else{
			$(".column2").css("display","none");
			$(".column1").css("display","block");
		}
	});
})
// 返回顶部
$(function(){
	$(window).scroll(function(event) {
		var h = $(window).scrollTop();
		// console.log(h);
		if(h>300){$(".return_top").fadeIn(100)}
		else{
			$(".return_top").fadeOut(100);}
		$(".select ul").fadeOut(500);
	});
	$(".return_top").click(function(event) {
			var y = $(window).scrollTop();
			$("body,html").animate({"scrollTop":"0px"},1000);
	});

	$(".select").click(function(event) {
		$(this).children('ul').stop().slideToggle(500);
	});
})
// 下拉导航更多
$(function(){
	$(".nav_m").hover(function(){
		$(this).children(".header_more1").stop().slideDown(500);
		$(this).children("a").addClass('one_a');
	},function(){
		$(this).children(".header_more1").stop().slideUp(500);
		$(this).children("a").removeClass('one_a');
	})
})
// 搜索框
$(function(){
	$("body").click(function(event) {
		$('.header_con>ul').fadeOut();
	});
	$(".header_search").click(function(event) {
		$('.header_con>ul').fadeToggle();
		return false;
	});
})