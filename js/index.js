$(function(){
    $('img.scale').imageScale();
    // 
    $("dl.home_list dd .div_img").addClass("ani");
    $("dl.home_list dt").addClass("ani");
    $("dl.home_list dd .slide_nav").addClass("ani");
    $(".section_tabs .div_tabdivs").addClass("ani");
    $("dl.home_list dd .div_img p").addClass("ani");
    $(".section2 .section_tabs").slide({titCell: ".ol_tabicons li",mainCell: ".div_tabdivs",trigger:"click",titOnClassName:"on"});

    $('img.scale').imageScale();
    

    



    var width = $(window).width();
    if( width > 1023){
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
        

        $(".body_home").mousewheel(function(){
            var ev = ev || window.event;
            var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
            down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
            if (down) {
                $(".body_b").addClass("showdiv");
                $(".body_home").removeClass("showdiv");
        
                $(".head").addClass("headFix");

                $(".nextIcon").hide();
            } else {

            }
        });
        
        $(".body_b").mousewheel(function(event, delta, deltaX, deltaY){
            if(delta>0 && $(".body_b").scrollTop()==0){
                $(".body_home").addClass("showdiv");
                $(".body_b").removeClass("showdiv");
        
                $(".head").removeClass("headFix");
                $(".nextIcon").show();
            }
        });

        $(".nextIcon").click(function(){  
            $(".body_b").addClass("showdiv");//.focus();
            $(".head").addClass("headFix");
            //first=1;
            setTimeout(function(){
                $(".body_home").removeClass("showdiv");//.addClass("leave");
                $(".home5").addClass("showdiv");
                //$(".nav_r").addClass("showdiv");
            },500);



        })
                


    }



    // swiperBanner
    var swiperV = new Swiper('.swiper-container-homebanner', {
        autoplay: 5000,
        longSwipes: false,
        loop: true,
        // pagination: {
        //     el: '.banner_icons',
        //     bulletActiveClass: 'icons-active',
        //     clickable: true,
        // },
        pagination: '.banner_icons',
        paginationClickable: true,

        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
                $('img.scale').imageScale();
            }, 

            slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            $('img.scale').imageScale();
                

                // $('.swiper-slide img').removeClass('imgH');
                // this.slides.eq(this.activeIndex).find('.swiper-slide img').addClass('imgH');

                // $('.swiper-slide img').css("transform","scale(1.1)");
                // this.slides.eq(this.activeIndex).find('.swiper-slide img').css("transform","scale(1)");
                


                $(".section1 .banner_txt").attr("swiper-animate-effect","fadeInUp").addClass("ani");
               
            },


            
        },
        
    });
    



    $(".section1 .nextIcon").addClass("wow slideInUp");

    
    new WOW({
      animateClass: 'animated',
      offset: 0,
      callback: function (box) {
        //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }).init();
    

    if(width === 1024){

        $(window).scroll(function () {
            if ($(window).scrollTop() > 140) {
                
                $(".head").addClass("headFix");
 
                
            } else {
                $(".head").removeClass("headFix");

            }

  
            
        });

    }


    if(width < 1023){

        $(window).scroll(function () {
            if ($(window).scrollTop() > 140) {
                $(".head").addClass("headFix");

              
                $(".head").find(".pc-logo").hide();
                $(".head").find(".md-logo").show();

            } else {

                $(".head").removeClass("headFix")

               
                $(".head").find(".pc-logo").show();
                $(".head").find(".md-logo").hide();
            }
        });


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

    }


})

