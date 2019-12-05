/*
* @Author: admin
* @Date:   2019-11-28 19:43:28
* @Last Modified by:   admin
* @Last Modified time: 2019-11-29 17:26:03
*/
// banner轮播
$(function(){
	$('.banner_left').hover(function() {
		clearInterval(timer);
		$('.banner_left p.b_left').show();
		$('.banner_left p.b_right').show();
	}, function() {
		go();
		$('.banner_left p.b_left').hide();
		$('.banner_left p.b_right').hide();
	});

	$('.banner_left ol li a').hover(function() {
		n = $(this).parent().index();
		$(this).addClass('a_red').parent().siblings().children('a').removeClass("a_red");
		$(".banner_left ul").stop().animate({"left":-693*n+"px"},1000);
		console.log(n);
	},function(){

	});
	$('.banner_left p.b_left').click(function(event) {
		n--;
		if(n<0){
				$(".banner_left ul").stop().animate({"left":-693*6+"px"},0);
				n=5
		}
		$(".banner_left ul").stop().animate({"left":-693*n+"px"},1000);
		$('.banner_left ol li').eq(n).children('a').addClass('a_red').parent().siblings().children('a').removeClass("a_red");
	});
	$('.banner_left p.b_right').click(function(event) {
		n++;
		if(n==6){
			$('.banner_left ol li').eq(0).children('a').addClass('a_red').parent().siblings().children('a').removeClass("a_red");
		}
		if(n>6){
			$(".banner_left ul").animate({"left":"0px"},0)
			n=1;
		}
		$(".banner_left ul").stop().animate({"left":-693*n+"px"},1000);
		$('.banner_left ol li').eq(n).children('a').addClass('a_red').parent().siblings().children('a').removeClass("a_red");
	});
	var timer;
	var n = 0;
	function go(){
		clearInterval(timer);
		function go1(){
			n++;
			if(n==6){
				$('.banner_left ol li').eq(0).children('a').addClass('a_red').parent().siblings().children('a').removeClass("a_red");
			}

			if(n>6){
				$('.banner_left ul').animate({"left" : "0px"},0);
				n=1
			};
				$('.banner_left ul').animate({"left" : -693*n+"px"},1000);
				$('.banner_left ol li').eq(n).children('a').addClass('a_red').parent().siblings().children('a').removeClass("a_red");	

		}
		timer = setInterval(go1,2000);
	}
	go();
})
// type分类
$(function(){
	var a = 0;
	$(".mv_type_left ul li a").click(function(event) {
		a = $(this).parent().index();
		$(this).addClass('btn-info').parent().siblings().children('a').removeClass('btn-info');
		$(".mv_type_right>p").eq(a).show().siblings("p").hide();
		$(".mv_type_right ul li").eq(a).show().siblings().hide();
	});
})