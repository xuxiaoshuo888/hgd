// JavaScript Document

// 选项卡
function tab(tabID,box){  
    $(tabID).click(function(){  
        $(tabID).removeClass('on');  
        $(box).hide();  
        $(this).addClass('on');  
        $(box).eq($(this).index()).fadeIn(600);
    });  
}  
$(document).ready(function(){   
	tab(".con_left_wdsc ol li",'.wdsc_tab_con .min'); // 我的收藏  
    tab(".bt_bg_list ul li",'.gzt_tab_con .min');  // 工作台  
	tab(".con_right_xyzx ol li",'.xyzx_tab_con .min');   //校园资讯 
	tab(".con_right_fw ol li",'.fw_tab_con .min');   //服务 
	tab(".bm_cwzx ol li",'.bm_cwzx_con .min'); // 财务处资讯
	tab(".fav_tab_bt li",'.tav_tab_con .min'); // 财务处资讯
	tab(".work_tab_bt ul li",'.work_tab_con .work_tab_con_min'); // work
	tab(".search_con .tab_bt ul li",'.search_con .tab_con .min'); // search
});


// 导航
 $(document).ready(function($){
			var mst;
			jQuery(".multiUl li,.header_bottom ul li").hover(function(){
			var curItem = jQuery(this);
			mst = setTimeout(function(){//延时触发
				curItem.find("blockquote").fadeIn('');
				mst = null;
			});
			}, function(){
			if(mst!=null)clearTimeout(mst);
			jQuery(this).find("blockquote").fadeOut('');
			});
})
//点击移动 首页小海报
$(function(){
	$('.marquee_1').kxbdSuperMarquee({
		distance:823,
		time:3,
		btnGo:{left:'.gol',right:'.gor'},
		direction:'left'
	});
});
//点击关闭
 $(document).ready(function($){
	$('.con_right_banner h3 a').click(function(){
		$('.con_right_banner').fadeOut(300);
	})
})
//返回顶部
 $(document).ready(function($){
	$('.go_top').click(function(){	$('html,body').animate({scrollTop: '0px'}, 800);});
})

