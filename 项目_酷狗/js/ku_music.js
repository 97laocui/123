/*
* @Author: admin
* @Date:   2019-12-05 10:08:51
* @Last Modified by:   admin
* @Last Modified time: 2019-12-05 16:30:06
*/
$(function(){	
	$(".m_btn1").click(function(event) {
		var h = $(window).scrollTop();
		var tag =`<video controls autoplay="autoplay" class="video1" >
						<source src="music/drawing.mp4" type="video/mp4" >
						<source src="music/drawing.Ogg" type="video/Ogg" >
				 </video>`
		$(".video1").remove();

		$(".m_name").after(tag);
		$(".m_name1").html("邓紫棋-画")
		setTimeout(function(){
			$(window).scrollTop(h);
		},20)
	})

	$(".m_btn2").click(function(event) {
		var h = $(window).scrollTop();
		var tag =`<video controls autoplay="autoplay" class="video1" >
						<source src="music/ye.mp4" type="video/mp4" >
						<source src="music/ye.Ogg" type="video/Ogg" >
				 </video>`
		$(".video1").remove();

		$(".m_name").after(tag);
		$(".m_name1").html("夜")
		setTimeout(function(){
			$(window).scrollTop(h);
		},20)

	// 	var t = $(window).scrollTop()
	// 	console.log(t);
			
	// 	console.log($(".video1 source").eq(0).attr("src"));
	// 	$(".video1").remove()
	// 	var tag=`<video controls autoplay="autoplay" class="video1" ><source src="music/ye.mp4" type="video/mp4" >
	// 		<source src="music/ye.Ogg" type="video/Ogg" ></video>`
	// 	$(".m_name").after(tag)
	// 	// $(".video1 source").eq(0).attr("src","music/ye.mp4");
	// 	// $(".video1 source").eq(1).attr("src","music/ye.Ogg");
	// 	// console.log($(".video1 source").eq(0).attr("src"));
	// 	// $('.video1').attr("controls","true");
 //      setTimeout(function(){
 //      	 $(window).scrollTop(t);
 //      },80)
	});
})