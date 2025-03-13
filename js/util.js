$(function () {

  

    $(".dlImgSlide dd a").text("查看更多 >");

	$(".history .div_r .div_px span.s2").click(function(){
		$(this).toggleClass("on");
		var tb = $(".history .div_r ul li");
		var total = tb.length;
		//外层循环，共要进行arr.length次求最大值操作
		for (var i = 0; i < total; i++) 
		{
			//内层循环，找到第i大的元素，并将其和第i个元素交换
			for (var j = i; j < total ; j++) 
			{
				$(tb).eq(j).insertBefore($(tb).eq(i));
				$(tb).eq(i).insertAfter($(tb).eq(j));
			}
		}
		return;
	});


	// var tb = $(".history .div_r ul li");
	// var total = tb.length;

	// //外层循环，共要进行arr.length次求最大值操作
	// for (var i = 0; i < total; i++) 
	// {
	// 	//内层循环，找到第i大的元素，并将其和第i个元素交换
	// 	for (var j = i; j < total ; j++) 
	// 	{
	// 		$(tb).eq(j).insertBefore($(tb).eq(i));
	// 		$(tb).eq(i).insertAfter($(tb).eq(j));
	// 	}
	// }
	// return;


	
})

$(function () {


// touchslide

var width = $(window).width();
if(width > 1023){
	$(".dlImgSlide dt ").slide({mainCell:".swiper-wrapper",autoPlay:false,trigger:"click",effect:"leftLoop",prevCell:".s_prev",nextCell:".s_next"});
}


if(width < 1023){
	var swiper = new Swiper('dt .swiper-container', {
		loop: true,
	});



}

// 

$(".clubTour .ul_ct li").click(function(){
	$(".popupWinRw").css("opacity","1");
	$(".popupWinRw").css("z-index","999");
	$(".popup_bg").show();
});



// var popupWinIcons22 = new Swiper('.clubTour .popupWinRw .swiper_icons', {
//     spaceBetween: 20,
//     slidesPerView: 5,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
	
// });

// var popupWinImgs22 = new Swiper('.clubTour .popupWinRw .swiper_imgs', {

//     navigation: {
//         nextEl: '.div_icons .s_next', 
//         prevEl: '.div_icons .s_prev',
//     },
//     thumbs: {
//         swiper: popupWinIcons22,
//     },
// });

$(window).scroll(function () {
	if ($(window).scrollTop() > 140) {
		$(".head").addClass("headFix");
		var header_h = $('.sfixed').height();
		$(".head").find(".logo img").attr("src","/images/logo_fo.png");

	} else {

		$(".head").removeClass("headFix")
		var header_hw = $('.sfixed').height() + 40;
		$(".head").find(".logo img").attr("src","/images/logo.png")
	}
});

$(".internationalCourse .div_mod2 .div_map .div_pot1 .shol_list").show();
$(".internationalCourse .div_mod2 .div_map .div_pot1 .s_pot").addClass("on");

$(".internationalCourse .div_mod2 .div_map .div_pot .s_pot").click(function(){
	$(this).parents(".div_map").find(".shol_list").hide();
	$(this).parents(".div_map").find(".s_pot").removeClass("on");
	$(this).addClass("on");
	$(this).parents(".div_pot").find(".shol_list").show();
})

})


// 数字循环
$(function () {
var countCXArr = [];
var countCX = function () {
	$('.numCount').each(function (i, dom) {
		if (countCXArr[i] && countCXArr[i] === true) {
			return;
		}
		var sT;
		var ncTop;
		sT = $(window).scrollTop();
		ncTop = $(dom).offset().top;
		var id, decimals, startVal, endVal, duration;
		if (sT > ncTop - $(window).height() && sT < ncTop) {
			console.log('qqq');
			$(dom).find('.numCX').each(function () {
				id = $(this).attr('id');
				decimals = $(this).attr('data-decimals'),
					startVal = $(this).attr('data-startVal'),
					endVal = $(this).attr('data-endVal'),
					duration = $(this).attr('data-speed');
				new CountUp(id, startVal, endVal, decimals, duration, {
					useEasing: true,//效果
					separator: ''//数字分隔符
				}).start();// target：目标元素id, startVal：你想要开始的值, endVal：你想要到达的值, decimals：小数位数，默认值为0, duration：动画持续时间为秒，默认值为2, options：选项的可选对象
				countCXArr[i] = true;
			})
		}
	})
}
countCX();
$(window).on("scroll", function () {
	countCX();
})
});


$(function(){

// $(window).load(function(){
//     $(".second_banner img").addClass("imgH");
// });


var width = $(window).width();
if(width > 1023){
	// 导航
	$('.head .nav ul li').hover(
		function () {
		var obj = $(this);
				$(obj).find('.nav_list').show()
		},
		function () {
		var obj = $(this);
		$(obj).find('.nav_list').hide()
		}
	);
}


// 选择下拉
$(".container .div_choose span").click(function(){
	$(this).parents(".div_choose").find(".dc_list").slideToggle();
})

$(".container .div_choose .dc_list li ").click(function(){
	var ontext = $(this).text();
	$(this).parents(".dc_list").hide();
	$(this).parents(".div_choose").find("span").text(ontext);
});



// 遇见十一
// 十一风光===========================================

var slidewiperS1111 = new Swiper(".scenery .div_mod2 .swiper-container",{
	slidesPerView: 1,
	spaceBetween: 30,
	loop: false,
	navigation: {
		nextEl: '.lunbo .s_next',
		prevEl: '.lunbo .s_prev',
	},
	breakpoints: { 
		1023: {  //当屏幕宽度大于等于1023
			slidesPerView: 2,
			spaceBetween: 30
		}
	}
});

var slidewiperGro = new Swiper(".growthPlatform .div_mod2 .swiper-container",{
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.lunbo .s_next',
		prevEl: '.lunbo .s_prev',
	},
	breakpoints: { 
		1023: {  //当屏幕宽度大于等于1023
			slidesPerView: 2,
			spaceBetween: 30
		}
	}
});



// 弹窗
$(".scenery .div_mod1 .li1").click(function(){
	$(".popupWin1").css("opacity","1");
	$(".popupWin1").css("z-index","999");
	$(".popup_bg").show();
});

$(".popupWin .close").click(function(){
	// $(".div_if").hide();
	$(this).parents(".popupWin").css("opacity","0");
	$(this).parents(".popupWin").css("z-index","-1");
	$(".popup_bg").hide();
});
$(".if_close").click(function(){
	$(".div_if").hide();
	// $(this).parents(".popupWin").css("opacity","0");
	// $(this).parents(".popupWin").css("z-index","-1");
	// $(".popup_bg").hide();
});
$("#popImgTxt .close").click(function(){
	$("#popImgTxt").hide();
	// $(this).parents(".popupWin").css("opacity","0");
	// $(this).parents(".popupWin").css("z-index","-1");
	// $(".popup_bg").hide();
});
$("")

// 人文弹窗
$(".scenery .div_mod2 .swiper-slide  img").click(function(){
	$(".popupWinRw").css("opacity","1");
	$(".popupWinRw").css("z-index","999");
	$(".popup_bg").show();
});


var popupWinIcons = new Swiper('.scenery .popupWin1 .swiper_icons', {
	spaceBetween: 20,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	
});

var popupWinImgs = new Swiper('.scenery .popupWin1 .swiper_imgs', {

	navigation: {
		nextEl: '.div_icons .s_next', 
		prevEl: '.div_icons .s_prev',
	},
	thumbs: {
		swiper: popupWinIcons,
	},
});


var popupWinIcons2 = new Swiper('.scenery .popupWinRw .swiper_icons', {
	spaceBetween: 20,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	
});

var popupWinImgs2 = new Swiper('.scenery .popupWinRw .swiper_imgs', {

	navigation: {
		nextEl: '.div_icons .s_next', 
		prevEl: '.div_icons .s_prev',
	},
	thumbs: {
		swiper: popupWinIcons2,
	},
});


setTimeout(function(){
	var imgvH = $(".videos .div_video .swiper_imgs ").height();
	$(".videos .div_video .swiper_imgs .video_box").height(imgvH);

	$(".videos .div_video .swiper_imgs .video_cover").click(function(){
		console.log($(this).parents(".swiper-slide").find(".video_box").length);
		if($(this).parents(".swiper-slide").find(".video_box").length){
			$(this).hide();
			$(this).parents(".swiper-slide").find(".video_box").show();
			$(this).parents(".swiper-slide").find(".video_box video").trigger('play');
		}else{
			//console.log(this.getAttribute('url'));
			window.open(this.getAttribute('url'));
		}
	});

},500)
// 十一影像



var activeSlide;
var videoWinIcons = new Swiper('.div_video .swiper_imgs',{
    spaceBetween: 0,
    loop:false,
    navigation: {
            nextEl: '.div_video .s_next',
            prevEl: '.div_video .s_prev',
        },
    on:{
        init: function(swiper){
            activeSlide=this.activeIndex;
        }, 
        slideChange: function(){
            
            // $(".swiper_imgs").find(".video_cover").show();
            // $(".swiper_imgs").find(".video_box").hide();
            var preSlide = $('.div_video .swiper-slide').eq(activeSlide);
            preSlide.find('video').trigger('pause') ;
            activeSlide=this.activeIndex;
        

        },
    },
    thumbs: {
        swiper: {
        el: '.div_video .div_icons .swiper_icons',
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true,
        },
        autoScrollOffset:0,
    },
})


// 十一校史
$(".history .div_r ul li a").click(function(){
	// $(this).parents("ul").find("li").removeClass("current");
	// $(this).parents("ul").find("li a").show();
	// $(this).parents("ul").find(".div_more").css("height","0.4rem");
	
	$(this).hide();
	$(this).parents("li").addClass("current");
	$(this).parents("li").find(".div_more").css("height","auto");
})

// $(".history .div_r .div_px span").click(function() {
//     if($(this).next())
//         $(this).next().after($(this));
// });

$(".history .div_r .div_px span.s1").click(function(){
	$(this).parents(".div_px").find("span").removeClass("on");
	$(this).addClass("on");

	var tb = $(".history .div_r ul li");
	var total = tb.length;


	$(tb).eq(i).insertAfter($(tb).eq(j));

	//外层循环，共要进行arr.length次求最大值操作
	for (var i = 0; i < total; i++) 
	{
		//内层循环，找到第i大的元素，并将其和第i个元素交换
		for (var j = i; j < total ; j++) 
		{
			$(tb).eq(j).insertBefore($(tb).eq(i));
			$(tb).eq(i).insertAfter($(tb).eq(j));
		}
	}
	return;

})

function SortTb() 
{          
	
}
SortTb()




// 新闻动态
// 党员风采
$(".partyMember .news_list3 ul li a").click(function(){
	$(this).parents("li").find(".popupWin").css("opacity","1");
	$(this).parents("li").find(".popupWin").css("z-index","60");
	$(".popup_bg").show();
});




// 十一课程=================================


$(".dlImgSlide dt").slide({mainCell:"ul",autoPlay:false,trigger:"click",effect:"fade",prevCell:".s_prev",nextCell:".s_next"})



// 多元课程-本部课程-三级页面

var swiperSCD = new Swiper(".schoolCourseDetails .div_mod2 .swiper-container",{
	loop:true,
	slidesPerView: 1,//一行显示3个
	spaceBetween : 30,
	navigation: {
		nextEl: '.lunbo .s_next',
		prevEl: '.lunbo .s_prev',
	},
	breakpoints: { 
		1023: {  //当屏幕宽度大于等于1023
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
	
});

// 国际课程




// 课程体系
$('.internationalCourse .div_mod3 ul li').hover(
	function () {
	  var obj = $(this);
			$(obj).find('.div2').stop().animate({opacity:1},300);

	},
	function () {
	  var obj = $(this);
		  $(obj).find('.div2').stop().animate({opacity:0},300);
	}
);

// 多元探索
$('.internationalCourse .div_mod4 ul li').hover(
	function () {
	  var obj = $(this);

			$(obj).find('.div_info').stop().animate({"padding-top":'.6rem',opacity:1},300);
		
			$(obj).addClass("lihover");

	},
	function () {
	  var obj = $(this);

		  $(obj).find('.div_info').stop().animate({"padding-top":'1.2rem',opacity:1},300);

		$(obj).removeClass("lihover");



	}
);


var swiperiC = new Swiper(".internationalCourse .div_mod5 .swiper-container",{
	loop:true,
	slidesPerView: 1,//一行显示3个
	spaceBetween : 20,
	navigation: {
		nextEl: '.lunbo .s_next',
		prevEl: '.lunbo .s_prev',
	},
	breakpoints: { 
		1023: {  //当屏幕宽度大于等于1023
			slidesPerView: 3,
			spaceBetween: 20
		}
	}
});


// 成长平台
// div_mod3


// 校园生活 =================================================================

// var swiperSeIcons = new Swiper('.lunbo_SE .swiper_icons', {
// 	spaceBetween: 20,
// 	slidesPerView: 2,
// 	freeMode: false, 
// 	navigation: {
// 		nextEl: ' .direction .s_next',
// 		prevEl: ' .direction .s_prev',
// 	},
// 	breakpoints: { 
// 		1023: {  //当屏幕宽度大于等于1023
// 			slidesPerView: 5,
// 			spaceBetween: 30
// 		}
// 	}

// });

// var swiperSeDls = new Swiper('.lunbo_SE .swiper_dls', {
// 	navigation: {
// 		nextEl: ' .direction .s_next',
// 		prevEl: ' .direction .s_prev',
// 	},
// 	thumbs: {
// 		swiper: swiperSeIcons,
// 	},
// });

if(width > 1023){
	// 澶т簨璁癙C

    $(".lunbo_SE .swiper_dls ").addClass("swiper-no-swiping");
	var Swipermemorabilia = new Swiper('.lunbo_SE .swiper_dls',{
		spaceBetween: 0,
		loop:false,
		navigation: {
				nextEl: '.div_swiper_icons .s_next',
				prevEl: '.div_swiper_icons .s_prev',
			},
		thumbs: {
			swiper: {
			el: '.lunbo_SE .swiper_icons',
			spaceBetween: 20,
			slidesPerView: 5,
			watchSlidesVisibility: true,
			},
			autoScrollOffset:0,
		},
	})
}
if(width < 1023){
	// 澶т簨璁癙C
	var Swipermemorabilia = new Swiper('.lunbo_SE .swiper_dls',{
		spaceBetween: 0,
		loop:false,
		navigation: {
				nextEl: '.div_swiper_icons .s_next',
				prevEl: '.div_swiper_icons .s_prev',
			},
		thumbs: {
			swiper: {
			el: '.lunbo_SE .swiper_icons',
			spaceBetween: 10,
			slidesPerView: 2,
			watchSlidesVisibility: true,
			},
			autoScrollOffset:0,
		},
	})
}

// 社团巡礼

var slidewiperS2 = new Swiper(".clubTour .lunbo .swiper-container",{
	loop:true,
	slidesPerView: 1,//一行显示3个
	spaceBetween : 30,
	navigation: {
		nextEl: '.lunbo .s_next',
		prevEl: '.lunbo .s_prev',
	},

	breakpoints: { 
		1024: {  //当屏幕宽度大于等于320
			slidesPerView: 2,
			spaceBetween: 30
		}
	}
});



if(width > 1023){


	$('.clubTour .ul_ct li').hover(
		function () {
		  var obj = $(this);
				$(obj).find('.divbox').stop().animate({opacity:1},300);
		},
		function () {
		  var obj = $(this);
			  $(obj).find('.divbox').stop().animate({opacity:0},300);
		}
	);

	
}




$(".parents .div_mod5 .div_tab").slide({titCell:".tabicons span",mainCell:".tabuls",autoPlay:false,trigger:"click"})








// 效果

// $(".profile .div_tit,.scenery .div_tit,.schoolCourse .div_tit").addClass("wow slideInUp");
// $(".profile .div_text,.scenery .div_text,.partyMember .div_text").addClass("wow slideInUp");
// $(".profile .div_mod2 dl dt,.profile .div_mod6 dl dt,.profile .div_mod9 dl dt").addClass("wow slideInRight");
// $(".profile .div_mod3 dl dt,.profile .div_mod7 dl dt").addClass("wow slideInLeft");



// $(".schoolCourse .dlImgSlide:even dt").addClass("wow slideInRight");
// $(".schoolCourse .dlImgSlide:even dd").addClass("wow slideInUp");
// $(".schoolCourse .dlImgSlide:odd dt").addClass("wow slideInLeft");
// $(".schoolCourse .dlImgSlide:odd dd").addClass("wow slideInUp");

// $(".specialEvents .div_mod:even dt").addClass("wow slideInLeft");
// $(".specialEvents .div_mod:even dd").addClass("wow slideInUp");
// $(".specialEvents .div_mod:odd dt").addClass("wow slideInRight");
// $(".specialEvents .div_mod:odd dd").addClass("wow slideInUp");



new WOW({
  animateClass: 'animated',
  offset: 0,
  callback: function (box) {
	//console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
}).init();



// 首页移动端
if(width < 1023){

	$(".footer .fo_top .fo_nav li h4").click(function(){

		if ($(this).hasClass("on")) {
			$(".footer .fo_top .fo_nav li h4").removeClass("on");
			$(".footer .fo_top .fo_nav li p").hide();
		} else {
			$(".footer .fo_top .fo_nav li h4").removeClass("on");
			$(".footer .fo_top .fo_nav li p").hide();
			$(this).addClass("on");
			$(this).parents("li").find("p").show();
		}

	})

	// 移动端 nav
	$(".phNavIcon").click(function(e) {
        e.stopPropagation();
		$(".head .nav").toggle();
		$(this).toggleClass('on');
	});
    $("body").click(function() {
        
        $(".head .nav").hide();
        $(".phNavIcon").removeClass("on")
    });

    $(".head .nav").click(function(e){
        e.stopPropagation();
    })

	$(".head .nav ul li span").click(function(){
		$(".head .nav ul li .nav_list").hide();
		$(this).parents("li").find(".nav_list").show();
	})


	var e = $("#popImgTxt .div_l");
	// move up:
	e.prev().insertAfter(e);



}


if(width < 1023){
    $(".internationalCourse .div_mod4 ul li .div_info a").click(function(){
        $(this).parents("li").removeClass("lihover");
    })
}

});






