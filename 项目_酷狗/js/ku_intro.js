
/*
* @Author: admin
* @Date:   2019-11-30 09:28:47
* @Last Modified by:   admin
* @Last Modified time: 2019-12-05 19:16:34
*/
// 登陆页面
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
$(function(){
	$(".screen1 ul").animate({"right":"0"}, 1500);
	$(".screen1 span").css("transform","scale(1)");
	var timer =0;
	var n= 0;
	var timer1 =0;
	var a = 0;
	// 左导航事件
		$("aside ol li a").click(function(event) {
			n = $(this).parent().index();
			$(this).addClass('_blue').parent().siblings().children('a').removeClass('_blue');
			$('section>div').stop().animate({'top':-100*n+'%'}, 500);
			if(n==1){
			 		go();
			 		function go(){
			 			clearTimeout(timer1);
			 			timer1 = setInterval(function(){
			 			a++;
			 			if(a>3){a=0}
			 			$(".screen2 ul li").eq(a).animate({"opacity":"1"}, 2000).siblings('li').animate({"opacity":"0"}, 2000);
			 			$(".screen2 ol li").eq(a).addClass('_blue').siblings('li').removeClass("_blue");
			 			// console.log(a);
			 			},3000)
			 		}
				 		$(".screen2 .content").hover(function() {
						clearTimeout(timer1);
						}, function() {
							go();
						});
			 	}
			if(n==2){
						$(".screen3 ul").animate({"opacity":"1"}, 1000)
						$(".screen3 ul").css("transform","scale(1)");
						$(".screen3 .content>div").animate({"opacity":"1"}, 1000);
						$(".screen3 .content>div").css("transform","scale(1)");
			 	    }
	 	    if(n==3){
				$(".screen4 ul").animate({"opacity":"1"}, 1000)
				$(".screen4 ul").css("transform","scale(1)");
				$(".screen4 .content>div").animate({"opacity":"1"}, 1000);
				$(".screen4 .content>div").css("transform","scale(1)");
	 	    }
		});
	// 滚轮事件
	 $(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(function(){
			n=n-d;
			console.log(n);
			 if(n==1){
			 		go();
			 		function go(){
			 			clearTimeout(timer1);
			 			timer1 = setInterval(function(){
			 			a++;
			 			if(a>3){a=0}
			 			$(".screen2 ul li").eq(a).animate({"opacity":"1"}, 2000).siblings('li').animate({"opacity":"0"}, 2000);
			 			$(".screen2 ol li").eq(a).addClass('_blue').siblings('li').removeClass("_blue");
			 			// console.log(a);
			 			},3000)
			 		}
				 		$(".screen2 .content").hover(function() {
						clearTimeout(timer1);
						}, function() {
							go();
						});
			 	}
			if(n==2){
						$(".screen3 ul").animate({"opacity":"1"}, 1000)
						$(".screen3 ul").css("transform","scale(1)");
						$(".screen3 .content>div").animate({"opacity":"1"}, 1000);
						$(".screen3 .content>div").css("transform","scale(1)");
			 	    }
	 	    if(n==3){
				$(".screen4 ul").animate({"opacity":"1"}, 1000)
				$(".screen4 ul").css("transform","scale(1)");
				$(".screen4 .content>div").animate({"opacity":"1"}, 1000);
				$(".screen4 .content>div").css("transform","scale(1)");
	 	    }
			if(n<0){n=0}
			if(n>3){n=3}
			$('section>div').stop().animate({'top':-100*n+'%'}, 500);
			$('aside ol li a').eq(n).addClass('_blue').parent().siblings().children('a').removeClass('_blue');
		},1000)
		
	})
	 // 内容2小圆点
	$(".screen2 ol li").hover(function() {
		a =$(this).index();
		$(".screen2 ol li").eq(a).addClass('_blue').siblings('li').removeClass("_blue");
		$(".screen2 ul li").eq(a).stop().animate({"opacity":"1"}, 2000).siblings('li').stop().animate({"opacity":"0"}, 2000);
	});
})