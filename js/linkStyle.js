//a切换颜色
function topDhtQh(){
	var textcolor=this.getAttribute('class');
    if(textcolor=='gray'){
	    this.setAttribute('class','orange g');
    }else if(textcolor=='white'){
    	this.setAttribute('class','orange w');
    }else if(textcolor=='orange'||textcolor=='orange g'){
	    this.setAttribute('class','gray');
    }else if(textcolor=='orange w'){
    	this.setAttribute('class','white');
    }
};

//乐税一下改变背景色
function changbackcolor(){
	var backcolor=this.getAttribute('class');
	console.log(backcolor);
	if(backcolor=='btn btn-primary back_red'){
		this.setAttribute('class','btn btn-primary back_orange')
	}else if(backcolor=='btn btn-primary back_orange'){
		this.setAttribute('class','btn btn-primary back_red')
	}
}

//模态框切换
function switchLoginWay(){
	var state=$('#userLoginTitle').text()
	if(state=='账户登录'){
		$('#accountLogin').attr('class','loginGroup hide');
		$('#mobileLogin').attr('class','loginGroup show');
	    $('#userLoginTitle').text('手机登录')
	}else if(state=='手机登录'){
		$('#mobileLogin').attr('class','loginGroup hide');
		$('#accountLogin').attr('class','loginGroup show');
	    $('#userLoginTitle').text('账户登录')

	}
}

//显示隐藏第二级菜单
function switchTopDhtMenu(){
    var flag=$(this).children('ul').css('display');
    if(typeof(flag) == 'undefined'){
    	flag=$(this).children('div').css('display');
    }
    var aim=$(this).children('a').text()
    if(flag=='none'){
    	if(aim=='免费注册'){
    		$(this).find('ul').attr('class','dop_zcxq show');
    	}else if(aim=='关注乐税'){
    		$(this).find('div').attr('class','ewm_le show');
    	}
    }else if(flag=='block'){
        if(aim=='免费注册'){
    		$(this).find('ul').attr('class','dop_zcxq hide');
    	}else if(aim=='关注乐税'){
    		$(this).find('div').attr('class','ewm_le hide');
    	}
    }
}

//关闭广告
function closeAd(){
	var ad=this.parentNode;
	$('#'+ad.getAttribute('id')).slideUp();
}

//切换搜索
function switchSearch(){
	var textVal =$(this).find('a').text();
	if(typeof(textVal)!='undefined'){
		$('#optionList').text(textVal);
	}
}

//首页垂直菜单切换效果
function switchMenu(){
	var classname=$(this).attr('class');
	if(typeof(classname)!='undefined'){
	    if(classname=='outHover'){
		    $(this).attr('class','overHover');
		    $(this).find('div').show();
	    }else if(classname=='overHover'){
		    $(this).attr('class','outHover');
		    $(this).find('div').hide();
	    }
    }
}

//公告栏tab切换效果
function switchNotic(){
	//是否被选中（选中再点无效）
	var flag =$(this).attr('class');
	var noticText=null;
	console.log(flag);
	if(flag!='curr'){
		noticText=$(this).text();
		if(typeof(noticText)!='undefined'){
			if(noticText=='公告'){
				$('#shouyeTopRight').find('.abs1').attr('class','px-list abs1 show');
				$('#shouyeTopRight').find('.abs2').attr('class','px-list abs2 hide');
			    $(this).attr('class','curr');
			    $(this).next().attr('class','');
			}else if(noticText=='活动'){
				$('#shouyeTopRight').find('.abs2').attr('class','px-list abs2 show');
				$('#shouyeTopRight').find('.abs1').attr('class','px-list abs1 hide');
			    $(this).attr('class','curr');
			    $(this).prev().attr('class','');
			}
		}
	}
}

//根据用户IP定位用户所在地区
function ipLocation(mycityId){
	if(mycityId == null || mycityId == undefined || mycityId == "") {
		mycityId = "all0";
	}
	if("all0" == mycityId) { // 全国
		$("#qg").addClass("qg_active");
		$("#icon_list1").find("li").removeClass("yz_ys");
		$("#qg").addClass("yz_ys");
	} else if(mycityId != "" && isProvinceOrHotCity2(mycityId)){
		mycity = getCityNameById2(mycityId);
		$("#icon_list1").find("a[data-value='" + mycityId + "']").parent().remove();
		$("<li class=\"yz_ys\"><a data-value='"+mycityId+"'>"+mycity+"</a></li>")
			.insertAfter($("#location"));
	}
}

//地区滚动
function moveCity(){

	//允许点击
	$('.dq_btn').find('.u_btnLeft').attr('class','btnLeft');
	$('.dq_btn').find('.u_btnRight').attr('class','btnRight');
	//重新绑定点击
	$('.dq_btn').find('.btnLeft').unbind();
	$('.dq_btn').find('.btnRight').unbind();
	$('.dq_btn').find('.btnLeft').click(moveCity);
	$('.dq_btn').find('.btnRight').click(moveCity);

	var direction=$(this).attr("class")
	var size=parseInt($('.qieh_houver1').find('ul').css('left'));
	if(direction=="btnLeft"){
		size=size+70;
		$('.qieh_houver1').find('ul').css('left',size+'px');
	}else if(direction=="btnRight"){
		size=size-70;
		$('.qieh_houver1').find('ul').css('left',size+'px');
	}
	//判断改变按钮状态
	
	if(size==0){
		$('.dq_btn').find('.btnLeft').attr('class','u_btnLeft')
		//必须解绑
		$('.dq_btn').find('.u_btnLeft').unbind();
	}else if(size==-1540){
		$('.dq_btn').find('.btnRight').attr('class','u_btnRight')
		$('.dq_btn').find('.u_btnRight').unbind();
	}
}

//选中地区
function clickDq(){
	if($(this).is('li')){
	    $(this).siblings().attr('class','');
	    $('.prev_list').find('.dq').find('span').attr('class','qg_ys');
	    $(this).attr('class','click');
    }else if($(this).is('span')){
    	$(this).attr('class','click qg_ys');
    	$('.prev_list').find('.dq').find('.qieh_houver1').find('li').attr('class','');
    }
}

//推荐事务所图片切换
function imgInterchange(){
	if($(this).hasClass('default')){
		return;
	}else{
		$(this).siblings().attr('class','sws-list')
		$(this).attr('class','sws-list default')
	}
}

//纳税故事显示隐藏
function switchTaxStroy(){
	if($(this).is('img')){
		if($(this).siblings('div').css('display')=='none'){
		    $(this).siblings('div').slideDown();
	    }
	}else if($(this).find('div').css('display')=='block'){
		$(this).find('div').slideUp();
	}
}

//回到顶部
function pageScroll(){
    window.scrollBy(0,-100);
    scrolldelay=setTimeout('pageScroll()',10);
    if($('body').scrollTop()==0)
    	clearTimeout(scrolldelay);

}

//浮动侧边栏_hover
function gzwzHover(){
	if($(this).find('.floating_left').css("display")=='none'){
		$(this).find('.floating_left').css("display",'block');
		$(this).find('i').css("display",'block');
	}else if($(this).find('.floating_left').css("display")=='block'){
		$(this).find('.floating_left').css("display",'none');
		$(this).find('i').css("display",'none');
	}
}