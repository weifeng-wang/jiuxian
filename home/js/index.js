$(function(){

	$('.right .myjiuxian').mouseenter(function(){
		$(this).css({'background':'#FFFFFF'})
		$(this).find('.myjiudown').show();
		$(this).find('.myjiu').css({'transform':'rotate(180deg)'})
	});
	$('.right .myjiuxian').mouseleave(function(){
		$(this).css({'background':'#F2F2F2'})
		$(this).find('.myjiudown').hide();
	});

	$('.right .mykefu').mouseenter(function(){
		$(this).css({'background':'#FFFFFF'})
		$(this).find('.kefudown').show();
	});
	$('.right .mykefu').mouseleave(function(){
		$(this).css({'background':'#F2F2F2'})
		$(this).find('.kefudown').hide();
	});

	$('.mydaohang').mouseenter(function(){
		$(this).css({'background':'#FFFFFF'})
		$(this).find('.daohangdown').show();
	});
	$('.mydaohang').mouseleave(function(){
		$(this).css({'background':'#F2F2F2'});
		$(this).find('.daohangdown').hide();
	});

	//大幻灯片上部导航区域js代码
	$('.div-daohang ul li').mouseenter(function(){
		$(this).css({'background':'#b40c10'})
	});
	$('.div-daohang ul li').mouseleave(function(){
		$(this).css({'background':'#990000'})
	});

	// 左侧侧边栏目mouseenter特效

	// $('.left-aside-1').eq(0).show()
	$('.left-aside li').mouseenter(function(){
		
		$(this).find('.left-aside-1').show();
		$('.left-aside-1').not($(this).find('.left-aside-1')).hide()

		$(this).css({'background':'#f1f1f1','border-left':'3px solid red'});
		$('.left-aside li').not($(this)).css({'background':'#FFFFFF',
			'border-left':'3px solid #ffffff'})

	});

	$('.left-aside li').mouseleave(function(){

		$(this).find('.left-aside-1').hide();
		$(this).css({'background':'#FFFFFF','border-left':'3px solid #ffffff'})
	});

	// 大幻灯片开始
	//  	// /*大幻灯片效果*/
	//  	// // 第一步：
(function(){

	$('.middle-aside .paging').show();
	$('.middle-aside .paging a:first').addClass('active');

		//固定在大幻灯片右边广告位---开始
	var num=$('.middle-aside .paging a:first').attr('rel');
	var arr=[1,2,3,4,5,6,7,8,9,10,11,12];
	var imgs=arr.slice((num-1)*3,num*3);

	for(var i=0;i<imgs.length;i++){
		$('.'+imgs[i]).show();
	}
		//固定在大幻灯片右边广告位---结束

	var imageWidth = $(".middle-aside .window").width();
	var imageSum = $(".middle-aside .image_reel img").length;
	var imageReelWidth = imageWidth * imageSum;

	$(".middle-aside .image_reel").css({'width':imageReelWidth});	

// // 	// 第二步
	var rotate = function(){
		
			var triggerID = $active.attr("rel") - 1; 
			var image_reelPosition = triggerID * imageWidth;

			$('.middle-aside .paging a').removeClass('active');
			$active.addClass('active');
			
			$('.middle-aside .image_reel').animate({
				left:-image_reelPosition
			},1000);

			var act=$('.middle-aside .paging a.active').attr('rel')
			var imgs=arr.slice((act-1)*3,act*3);
			for(var i=0;i<imgs.length;i++){
				$('.'+imgs[i]).show();
			}

		};

	var rotateSwitch = function(){
		play = setInterval(function(){

			$('.img').hide();   
			$active = $('.middle-aside .paging a.active').next();
			if ( $active.length === 0 ) {  
				$active = $('.middle-aside .paging a:first');  
			}
			rotate(); 
		},3000);
	};
	rotateSwitch();

	// // 第三步
	$('.middle-aside .image_reel a').hover(function(){
		clearInterval(play);
	},function(){
		rotateSwitch();
	});
	
	//on click
	$('.middle-aside .paging a').click(function(){
		$('.img').hide();
		$active = $(this);

		var act=$(this).attr('rel')
		var imgs=arr.slice((act-1)*3,act*3);
			for(var i=0;i<imgs.length;i++){
				$('.'+imgs[i]).show();
			}

		clearInterval(play);
		rotate();
		rotateSwitch();
		return false;
	});

})();


	// 大幻灯片结束

	// 大幻灯片下内容区：

	$('.content .left-box .nav ul li').mouseenter(function(){
		$(this).addClass('active');
		$('.content .left-box .nav ul li').not(this).removeClass('active');

		idx=$(this).index('.content .left-box .nav ul li');

		$('.content .left-box .ul-content').eq(idx).show();
		$('.content .left-box .ul-content').not($('.content .left-box .ul-content')
			.eq(idx)).hide();

	});

	$('.content .left-box .ul-content').hide();
	$('.content .left-box .ul-content').first().show();

	//内容区右边大盒子，上

    $('.content .right-box .top-nav ul li').mouseenter(function(){
    	$(this).addClass('active');
    	$('.content .right-box .top-nav ul li').not($(this)).removeClass('active');

    	idx=$(this).index('.content .right-box .top-nav ul li');

    	$('.content .right-box .top-nav-down ul').eq(idx).show();
    	$('.content .right-box .top-nav-down ul').not($('.content .right-box .top-nav-down ul')
    		.eq(idx)).hide();
    });

    $('.content .right-box .top-nav-down ul').hide();
    $('.content .right-box .top-nav-down ul').first().show();


//右侧公告区第一个幻灯片开始
	
	(function(){

		 	// // 第一步：
			$('.content .carousel-middle .paging').show();
			$('.content .carousel-middle .paging a:first').addClass('active');

			var imageWidth = $(".content .carousel-middle .window").width();
			var imageSum = $(".content .carousel-middle .image_reel img").length;
			var imageReelWidth = imageWidth * imageSum;

			$(".content .carousel-middle .image_reel").css({'width':imageReelWidth});	

		// 	// 第二步
			var rotate = function(){
				
					var triggerID = $active2.attr("rel") - 1; 
					var image_reelPosition = triggerID * imageWidth;

					$('.content .carousel-middle .paging a').removeClass('active');
					$active2.addClass('active');
					
					$('.content .carousel-middle .image_reel').animate({
						left:-image_reelPosition
					},500);
				};

			var rotateSwitch = function(){
				play2 = setInterval(function(){   
					$active2 = $('.content .carousel-middle .paging a.active').next();
					if ( $active2.length === 0 ) {  
						$active2 = $('.content .carousel-middle .paging a:first');  
					}
					rotate(); 
				},3000);
			};
			rotateSwitch();

			// 第三步
			$('.content .carousel-middle .image_reel a').hover(function(){
				clearInterval(play2);
			},function(){
				rotateSwitch();
			});
			
			$('.content .carousel-middle .paging a').click(function(){
				$active2 = $(this);
				clearInterval(play2);
				rotate();
				rotateSwitch();
				return false;
			});

	})();


//右侧公告区第二个幻灯片开始
	
	(function(){

		 	// // 第一步：
			$('.content .carousel-bottom .paging').show();
			$('.content .carousel-bottom .paging a:first').addClass('active');

			var imageWidth = $(".content .carousel-bottom .window").width();
			var imageSum = $(".content .carousel-bottom .image_reel img").length;
			var imageReelWidth = imageWidth * imageSum;

			$(".content .carousel-bottom .image_reel").css({'width':imageReelWidth});	

		// 	// 第二步
			var rotate = function(){
				
					var triggerID = $active3.attr("rel") - 1; 
					var image_reelPosition = triggerID * imageWidth;

					$('.content .carousel-bottom .paging a').removeClass('active');
					$active3.addClass('active');
					
					$('.content .carousel-bottom .image_reel').animate({
						left:-image_reelPosition
					},500);
				};

			var rotateSwitch = function(){
				play3 = setInterval(function(){   
					$active3 = $('.content .carousel-bottom .paging a.active').next();
					if ( $active3.length === 0 ) {  
						$active3 = $('.content .carousel-bottom .paging a:first');  
					}
					rotate(); 
				},3000);
			};
			rotateSwitch();

			// 第三步
			$('.content .carousel-bottom .image_reel a').hover(function(){
				clearInterval(play3);
			},function(){
				rotateSwitch();
			});
			
			$('.content .carousel-bottom .paging a').click(function(){
				$active3 = $(this);
				clearInterval(play3);
				rotate();
				rotateSwitch();
				return false;
			});

	})();






});
