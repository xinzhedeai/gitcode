/**
 * @file leftslide
 * @author Jianghaipeng 
 * @date: 2015/11/04  13:00
 * @version: V1.0
 */
'use strict';


$(function(){
	$(".leftsidebar_box dt").css({"background-color":"#62bf50"});
	$(".leftsidebar_box dt >i").attr("class","fa fa-caret-right");
	$(".leftsidebar_box dd").hide();
	$(".leftsidebar_box dt").click(function(){
		$(".leftsidebar_box dt").css({"background-color":"#62bf50"})
		$(this).css({"background-color": "rgb(152, 179, 114)"});
		$(this).parent().find('dd').removeClass("menu_chioce");
		$(".leftsidebar_box dt >i").attr("class","fa fa-caret-right");
		$(this).parent().find('dt >i').attr("class","fa fa-caret-down");
		$(".menu_chioce").slideUp(); 
		$(this).parent().find('dd').slideToggle();
		$(this).parent().find('dd').addClass("menu_chioce");
	});
	
	$(document).ready(function() {
		var admin_userId = getCookie('admin_userId');
		console.info("leftside"+admin_userId);
		if (!admin_userId) {
			location.href = '/admin/login.html';
			return false;
		}
	//	$leftslide.getAccountsInfo();
	});
/*	var $leftslide = {
			getAccountsInfo : function(userId) {
				var getAccountsInfo = new nssoft.openApi.getAccountsInfo.api();
				getAccountsInfo.request({
					method : 'POST',
					async : false,
					url :  contextPath + '/v1/api/management/common/getAccountsInfo.json'
				});
			}
			
	};

	(function() {
		$class('nssoft.openApi.getAccountsInfo.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;
						if(result){
							switch(result.Auth){
								case "BLOGMANAGER" :
									$(".al-listtree").hide();
									break;
								case "USERMANAGER" :
									$(".custom").hide();
									$(".channel").hide();
									$("#ltto").hide();
									break;
							}
						};
						break;
					case -600 :
						var txt=  "身份失效！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						delCookie('access_token',getCookie('access_token'));
						window.location.href = "/admin/login.html";
						break;
					case -601 :
						var txt = "权限失效！";
						window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
						location.href = '/admin/login.html';
						break;
				}
			},
			onFail : function(status) {
				var txt=  "发生错误！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
	}());
		
*/
})