/**
 * 文档就绪
 */
$(function(){
	
	//回到顶部按钮
	var topcontrol = $('#topcontrol');
	
	//导航条对象
	var nav = $('.nav-wrap');
	
	//导航条相对于网页原点的垂直位置
	var navPos = nav.offset().top;
	
	//导航条高度
	var navHeight = nav.outerHeight();
	
	//滚动条事件
	$(window).scroll(function() {
		
		//获得滚动条的位置
		var sTop = $(window).scrollTop();
		
		//判断滚动条位置,动态显示隐藏回到顶部按钮
		if(sTop >= 200){
			topcontrol.fadeIn(1000);
		}else{	
			topcontrol.fadeOut(1000);
		}
		
		//自动给导航条加fixed样式
		if(sTop >= navPos) {
			if( !nav.hasClass('fixed')){
				nav.addClass('fixed');
				$('.banner').css('margin-bottom',navHeight);//站位
			}
		}else{
			if( nav.hasClass('fixed')){
				nav.removeClass('fixed');
				$('.banner').css('margin-bottom',0);//取消站位
			}
		}
		
		//判断是否进入海量正版免费下载区域
		var introPos = {
			start:$('#post-intro').offset().top - navHeight,
			  end:$('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight
		}
		
		if(sTop >= introPos.start && sTop < introPos.end) {
			$('.intro').addClass('active');
		}else{
			$('.intro').removeClass('active');
		}
		
		//判断是否进入无需苹果账号区域
		var usagePos = {
			start:$('#post-usage').offset().top - navHeight,
			  end:$('#post-usage').offset().top + $('#post-usage').outerHeight() - navHeight
		}
		
		if(sTop >= usagePos.start && sTop < usagePos.end) {
			$('.usage').addClass('active');
		}else{
			$('.usage').removeClass('active');
		}
		
		//判断是否进入苹果瘦身区域
		var choicePos = {
			start:$('#choiceness').offset().top - navHeight,
			  end:$('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight
		}
		
		if(sTop >= choicePos.start && sTop < choicePos.end) {
			$('.choice').addClass('active');
		}else{
			$('.choice').removeClass('active');
		}
		
	});
	
	//回到顶部按钮单击
	topcontrol.on('click',function(){
		
		$('html,body').animate({
			scrollTop:0
		},1000);
		
	});
	
	//网页内部锚点链接跳转
	$('.nav-wrap a').on('click',function() {
		
		//获得对应区域相对于网页原点的位置
		var top = $(this.hash).offset().top - navHeight;
		$('html,body').animate({
			scrollTop:top
		},1000);
		return false;
	});
	
});
