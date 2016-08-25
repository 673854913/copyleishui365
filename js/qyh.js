//找事务所、找税务师、找服务、找培训
var provinceAndHotCity = [
                          ["110000","北京"],["310000","上海"],["440100","广州"],["440300","深圳"],
                          ["510100","成都"],["120000","天津"],["320100","南京"],["330100","杭州"],
                          ["420100","武汉"],["340000","安徽"],["350000","福建"],["620000","甘肃"],
                          ["440000","广东"],["450000","广西"],["520000","贵州"],["460000","海南"],
                          ["130000","河北"],["410000","河南"],["230000","黑龙江"],["420000","湖北"],
                          ["430000","湖南"],["320000","江苏"],["360000","江西"],["220000","吉林"],
                          ["210000","辽宁"],["150000","内蒙古"],["640000","宁夏"],["630000","青海"],
                          ["370000","山东"],["140000","山西"],["610000","陕西"],["510000","四川"],
                          ["710000","台湾"],["540000","西藏"],["650000","新疆"],["530000","云南"],
                          ["330000","浙江"],["810000","香港"],["820000","澳门"],["500000","重庆"]
                          ];
//首页
var provinceAndHotCity2 = [
                          ["110000","北京"],["310000","上海"],["120000","天津"],["500000","重庆"],
                          ["440300","深圳"],["210200","大连"],["350200","厦门"],["340000","安徽"],
                          ["350000","福建"],["620000","甘肃"],["440000","广东"],["450000","广西"],
                          ["520000","贵州"],["460000","海南"],["130000","河北"],["410000","河南"],
                          ["230000","黑龙江"],["420000","湖北"],["430000","湖南"],["320000","江苏"],
                          ["360000","江西"], ["220000","吉林"],["210000","辽宁"], ["150000","内蒙古"],
                          ["640000","宁夏"],["630000","青海"],["370000","山东"],["140000","山西"],
                          ["610000","陕西"],["510000","四川"],["540000","西藏"],["650000","新疆"],
                          ["530000","云南"],["330000","浙江"]
                          ];

function isProvinceOrHotCity(mycityId){
	var flag = false;
	for(i=0; i<provinceAndHotCity.length; i++){
		if(provinceAndHotCity[i][0] == mycityId){
			flag = true;
			break;
		}
	}
	return flag;
}

function isProvinceOrHotCity2(mycityId){
	var flag = false;
	for(i=0; i<provinceAndHotCity2.length; i++){
		if(provinceAndHotCity2[i][0] == mycityId){
			flag = true;
			break;
		}
	}
	return flag;
}

function findParentCityId(mycityId) {
	if(mycityId == null){
        return null;
    }
	var parentCityId = "";
	
	var valuePrefix2 = mycityId.substring(0, 2);
	var valuePrefix4 = mycityId.substring(0, 4);

	if (valuePrefix2 == '11') {
		parentCityId = '110000';
	} else if (valuePrefix2 == '31') {
		parentCityId = '310000';
	} else if (valuePrefix2 == '12') {
		parentCityId = '120000';
	} else if (valuePrefix2 == '50') {
		parentCityId = '500000';
	} else if (valuePrefix2 == '34') {
		parentCityId = '340000';
	} else if (valuePrefix2 == '35') {
		if (valuePrefix4 == '3502') {
			parentCityId = '350200';
		} else {
			parentCityId = '350000';
		}
	} else if (valuePrefix2 == '62') {
		parentCityId = '620000';
	} else if (valuePrefix2 == '44') {
		if (valuePrefix4 == '4403') {
			parentCityId = '440300';
		} else {
			parentCityId = '440000';
		}
	} else if (valuePrefix2 == '45') {
		parentCityId = '450000';
	} else if (valuePrefix2 == '52') {
		parentCityId = '520000';
	} else if (valuePrefix2 == '46') {
		parentCityId = '460000';
	} else if (valuePrefix2 == '13') {
		parentCityId = '130000';
	} else if (valuePrefix2 == '41') {
		parentCityId = '410000';
	} else if (valuePrefix2 == '23') {
		parentCityId = '230000';
	} else if (valuePrefix2 == '42') {
		parentCityId = '420000';
	} else if (valuePrefix2 == '43') {
		parentCityId = '430000';
	} else if (valuePrefix2 == '32') {
		parentCityId = '320000';
	} else if (valuePrefix2 == '36') {
		parentCityId = '360000';
	} else if (valuePrefix2 == '22') {
		parentCityId = '220000';
	} else if (valuePrefix2 == '21') {
		if (valuePrefix4 == '2102') {
			parentCityId = '210200';
		} else {
			parentCityId = '210000';
		}
	} else if (valuePrefix2 == '15') {
		parentCityId = '150000';
	} else if (valuePrefix2 == '64') {
		parentCityId = '640000';
	} else if (valuePrefix2 == '63') {
		parentCityId = '630000';
	} else if (valuePrefix2 == '37') {
		parentCityId = '370000';
	} else if (valuePrefix2 == '14') {
		parentCityId = '140000';
	} else if (valuePrefix2 == '61') {
		parentCityId = '610000';
	} else if (valuePrefix2 == '51') {
		parentCityId = '510000';
	} else if (valuePrefix2 == '54') {
		parentCityId = '540000';
	} else if (valuePrefix2 == '65') {
		parentCityId = '650000';
	} else if (valuePrefix2 == '53') {
		parentCityId = '530000';
	} else if (valuePrefix2 == '33') {
		parentCityId = '330000';
	}
	
	return parentCityId;
}

function getCityNameById(mycityId){
	var cityName;
	for(i=0; i<provinceAndHotCity.length; i++){
		if(provinceAndHotCity[i][0] == mycityId){
			cityName = provinceAndHotCity[i][1];
			break;
		}
	}
	return cityName;
}

function getCityNameById2(mycityId){
	var cityName;
	for(i=0; i<provinceAndHotCity2.length; i++){
		if(provinceAndHotCity2[i][0] == mycityId){
			cityName = provinceAndHotCity2[i][1];
			break;
		}
	}
	return cityName;
}

function getCookie(Name) {
	var search = Name + "=";
	var returnvalue = "";
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1)
				end = document.cookie.length;
			returnvalue = unescape(document.cookie.substring(offset,
					end));
		}
	}
	return returnvalue;
}

function getMyCityID(){
	var myIp = "";
	var myIpCookie = "";
	var mycityId = "";
	var mycityIdCookie = "";
	app.getClientIp(function(data) {
		myIp = data.clientIP;
	});
	myIpCookie = app.getStorage("myIp");
	if(myIp == myIpCookie) {
		mycityIdCookie = app.getStorage("cityId");
		if(mycityIdCookie == undefined || mycityIdCookie == ""){
			mycityId = app.getCityIdByIp(myIp);
			if(mycityId != null && mycityId != ""){
				app.storage("cityId",mycityId);
			}		
		}
		mycityId = app.getStorage("cityId");
	} else {
		app.storage("myIp", myIp);
		mycityId = app.getCityIdByIp(myIp);
		if(mycityId != null && mycityId != ""){
			app.storage("cityId",mycityId);
		}		
	}
	return mycityId;
}
