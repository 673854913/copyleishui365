$(function(){
	//获取用户登录地区行政区划代码
	// mycityId = getMyCityID();
	// if(null == mycityId) {
	// 	ipLocation("all0");
	// } else {
	// 	mycityIdParent = findParentCityId(mycityId);
	// 	ipLocation(mycityIdParent);
	// }

	//a链接选中效果初始化
	$('body').find('a.gray').mouseover(topDhtQh);
	$('body').find('a.gray').mouseout(topDhtQh);
	$('body').find('a.orange').mouseover(topDhtQh);
	$('body').find('a.orange').mouseout(topDhtQh);
	$('body').find('a.white').mouseover(topDhtQh);
	$('body').find('a.white').mouseout(topDhtQh);
	//第二级菜单显示隐藏
	$('#kouhao_topdh').find('.haveMenu').mouseover(switchTopDhtMenu);
	$('#kouhao_topdh').find('.haveMenu').mouseout(switchTopDhtMenu);
	$('input').unbind();
	//模态框初始化
	$('#loginWaySwitch').click(switchLoginWay);
	//绑定关闭广告
	$('.ad').find('a').click(closeAd);
	//切换搜索
	$('#searchBox').find('.dropdown-menu').find('li').click(switchSearch);

	//首页菜单切换效果
	$('#shouyeTopLeft').find('li').mouseover(switchMenu);
	$('#shouyeTopLeft').find('li').mouseout(switchMenu);

	//公告栏tab切换效果
	$('#shouyeTopRight').find('.notice').find('.px-title').find('li').click(switchNotic);

	//初始化地区
	$('.dq_btn').find('.btnLeft').click(moveCity);
	$('.dq_btn').find('.btnRight').click(moveCity);
	$('.prev_list').find('li').click(clickDq);
	$('.prev_list').find('span').click(clickDq);

    //初始化事务所推荐
    $('.sws_cbox1_right').find('.sws-list').mouseover(imgInterchange);
    //大咖观点
    $('#dkgdlist').find('.sws-list').mouseover(imgInterchange);
    //纳税故事(未完成)
    $('#nsgslist').find('li').find('img').mouseover(switchTaxStroy);
    $('#nsgslist').find('li').mouseout(switchTaxStroy);


    //侧边栏
    $('.right-ico1').mouseover(gzwzHover);
    $('.right-ico1').mouseout(gzwzHover);
    $('#moquu_top').click(pageScroll);
});