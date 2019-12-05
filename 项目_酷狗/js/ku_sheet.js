/*
* @Author: admin
* @Date:   2019-11-27 18:36:02
* @Last Modified by:   admin
* @Last Modified time: 2019-11-27 20:45:28
*/
$(function(){
	var n = 0;
	$(".content_left ul li").click(function(event) {
		n =$(this).index();
		console.log(n);
		$(this).children("a").addClass('btn-info').parent().siblings().children('a').removeClass('btn-info');
		$(".content_right ul").eq(n).show().siblings().hide();
	});
})