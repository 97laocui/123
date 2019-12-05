/*
* @Author: admin
* @Date:   2019-11-27 14:23:18
* @Last Modified by:   admin
* @Last Modified time: 2019-11-27 17:03:47
*/
$(
	function(){
		$(".content1 ol li").hover(function() {
			$(this).css("box-shadow","0 0 25px -10px")
			$(this).children("a").children('span').css("color","blue");
		}, function() {
			$(this).css("box-shadow","")
			$(".content1 li>a span").css("color","#999");
		});


		$(".content2 ul li").hover(function() {
			$(this).css("box-shadow","0 0 25px -10px")
			$(this).children("div").children('a').css("color","blue");
		}, function() {
			$(this).css("box-shadow","")
			$(".content2 li>div a").css("color","#999");
		});
	})