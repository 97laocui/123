/*
* @Author: admin
* @Date:   2019-11-22 19:34:39
* @Last Modified by:   admin
* @Last Modified time: 2019-12-05 19:19:30
*/

$(function(){
	$(".add_m img").click(function(event) {
		$(this).toggleClass('m_play');
		var a = $(this).hasClass('m_play')
		if(a)
		{
			$("audio")[0].pause();
			$(".add_m ol").hide();
		}
		else{
			$("audio")[0].play();
			$(".add_m ol").show();
		}
	});
})
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
//返回顶部 和选择
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

//more更多
$(function(){
	$(".nav_m").hover(function(){
		$(this).children(".header_more1").stop().slideDown(300);
		$(this).children("a").addClass('one_a');
	},function(){
		$(this).children(".header_more1").stop().slideUp(300);
		$(this).children("a").removeClass('one_a');
	})
})
//搜索记录
$(function(){
	$("body").click(function(event) {
		$('.header_con>ul').fadeOut();
	});
	// $(".header_search>input").focus(function(event) {
	// 	$('.header_con>ul').fadeIn();
	// 	// return false;
	// });

	// $(".header_search>input").blur(function(event) {
	// 	$('.header_con>ul').fadeOut();
	// 	// return false;
	// });
	$(".header_search").click(function(event) {
		$('.header_con>ul').fadeToggle();
		return false;
	});
})
// 轮播banner
	$(function(){
		var n = 0;
		var timer;
		 var w = $(window).width();
		$(".banner_bg li img").css("width",w+"px");
		$(".banner").mouseenter(function(event) {
			clearInterval(timer);
			$(".banner .l_right").css("display","block");
			$(".banner .l_left").css("display","block");
		})
		$(".banner").mouseleave(function(event) {
			go();
			$(".banner .l_right").css("display","none");
			$(".banner .l_left").css("display","none");
		})

		$(".banner .banner_ol li").mouseenter(function(event) {
			n = $(this).index();
			$(".banner .banner_ul li").eq(n).stop().animate({"opacity":"1"}, 1000).siblings().stop().animate({"opacity":"0"}, 1000);
			$(".banner .banner_ol li").eq(n).css("background-color","#fff").siblings().css("background-color","rgba(0, 0, 0, 0.5)");
			$(".banner_bg li").eq(n).stop().animate({"opacity":"1"}, 1000).siblings().stop().animate({"opacity":"0"}, 1000);
			
			// console.log(n);
		});
		$(".banner .l_right").click(function(event) {
			n++;
			if(n==6){n=0};
			$(".banner .banner_ul li").eq(n).stop().animate({"opacity":"1"}, 1000).siblings().stop().animate({"opacity":"0"},1000);
			$(".banner .banner_ol li").eq(n).css("background-color","#fff").siblings().css("background-color","rgba(0, 0, 0, 0.5)");
			$(".banner_bg li").eq(n).stop().animate({"opacity":"1"}, 1000).siblings().stop().animate({"opacity":"0"}, 1000);
		});
		$(".banner .l_left").click(function(event) {
			n--;
			if(n<0){n=5};
			$(".banner .banner_ul li").eq(n).stop().animate({"opacity":"1"}, 1000).siblings().stop().animate({"opacity":"0"},1000);
			$(".banner .banner_ol li").eq(n).css("background-color","#fff").siblings().css("background-color","rgba(0, 0, 0, 0.5)");
			$(".banner_bg li").eq(n).stop().animate({"opacity":"1"}, 1000).siblings().stop().animate({"opacity":"0"}, 1000);
		});
		function go(){
				clearInterval(timer);
				function go1(){
				n++;
				if(n==6){n=0}
				$(".banner .banner_ul li").eq(n).stop().animate({"opacity":"1"}, 1000).siblings().animate({"opacity":"0"}, 1000);
				$(".banner .banner_ol li").eq(n).css("background-color","#fff").siblings().css("background-color","rgba(0, 0, 0, 0.5)");
				$(".banner_bg li").eq(n).stop().animate({"opacity":"1"}, 1000).siblings().stop().animate({"opacity":"0"}, 1000);
			}
			timer = setInterval(go1,2000);
		}
		go();
	})
//section第一部分左下内容
		$(function(){
			$(".left_content li a").mouseenter(function(event) {
				$(this).append('<div class="play"></div>');
				$(this).append('<div class="play2"></div>');
			});
			$(".left_content li a").mouseleave(function(event) {
				$(this).children(".play").remove();
				$(this).children(".play2").remove();
			});;
		})
//section第二部分左上,左下轮播，
		$(function(){
			var n = 0;
			var a = 0;
			// 换取歌曲风格
			$(".left2_top b li").click(function(event) {
				n = $(this).index();
				$(this).children("a").addClass('r3_t_li').parent().siblings().children('a').removeClass('r3_t_li')
				$('.left2_content ul li').eq(n).show().siblings().hide();

				$(".song_move ol li").eq(0).addClass('_blue').siblings().removeClass('_blue');
				$('.left2_content ul li').eq(n).children('dl').eq(0).show().siblings().hide();
			});
			// 歌曲页数
			$(".song_move ol li").click(function(event) {
				a = $(this).index();
				$(this).addClass('_blue').siblings().removeClass('_blue');
				$('.left2_content ul li').eq(n).children('dl').eq(a).show().siblings().hide();
			});
			// 左右移动歌曲页数
			$(".song_move .min_left").click(function(){
				a--;
				if(a<0){a=2}
				$(".song_move ol li").eq(a).addClass('_blue').siblings().removeClass('_blue');
				$('.left2_content ul li').eq(n).children('dl').eq(a).show().siblings().hide();
			})
			$(".song_move .min_right").click(function(){
				a++;
				if(a>2){a=0}
				$(".song_move ol li").eq(a).addClass('_blue').siblings().removeClass('_blue');
				$('.left2_content ul li').eq(n).children('dl').eq(a).show().siblings().hide();
			})
		})
//section第二部分左下内容
	$(function(){
			$(".left2_content a").mouseenter(function(event) {
				// $(".songImg").css("display","none").parent("a").parent("dd").siblings().children("a").children(".songImg").css("display","block");
				// $(".songImg").css("display","none");
				// $(".songPlay").addClass('show');
				// $(".songDown").addClass('show');
				$(this).children('.songImg').hide();
				$(this).children('.songPlay').show();
				$(this).children('.songDown').show();
			});
			$(".left2_content a").mouseleave(function(event) {
				// $(".songImg").css("display","none").parent().parent().siblings().children("a").children(".songImg").css("display","block")
				// $(".songImg").css("display","block");
				$(this).children('.songImg').show();
				$(this).children('.songPlay').hide();
				$(this).children('.songDown').hide();
			});

			$(".songPlay").mouseenter(function(event) {
				$(this).css("background-position","0 -30px");
			})
			$(".songPlay").mouseleave(function(event) {
				$(this).css("background-position","0 0");
			})
			$(".songDown").mouseenter(function(event) {
				$(this).css("background-position","-90px -30px");
			})
			$(".songDown").mouseleave(function(event) {
				$(this).css("background-position","-90px 0");
			})
		})
//section第二部分左下内容
$(function(){
		$('.right2_content li a').mouseenter(function(event) {
			$(this).append('<div class="play"></div>');
			$(this).append('<div class="play1"></div>');
		});
		$('.right2_content li a').mouseleave(function(event) {
			$(this).children("div").remove();
		});


})
// section第三部分右下内容
$(function(){
	$(".right3_top ul li").mouseenter(function(){
		var a = $(this).index();
		$(this).find("a").addClass('r3_top_li').parents("li").siblings().children('a').removeClass("r3_top_li");
		$(".right3_content ul li").eq(a).show().siblings().hide();
	})
	// $(".right3_top ul li").mouseleave(function(){
	// 	$(this).find("a").removeClass('r3_top_li');
	// })
	// friend_link友情链接
	$(function(){
		$(".friend_link ul li a").hover(function() {
			$(this).children("img").stop().fadeIn(200);
		}, function() {
			$(this).children("img").stop().fadeOut(200);
		});
	})
})




		