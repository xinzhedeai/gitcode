/**
 * @file login
 * @author Jianghaipeng 
 * @date: 2015/11/04 13:00
 * @version: V1.0
 */
'use strict';

$(function() {
	
	var userId = getCookie('admin_userId');
	if (userId) {
		location.href = '/admin/index.html';
	} 
	if($.cookie('uname') != "" && $.cookie('password') != ""){
		$("#username").val($.cookie('uname'));
		$("#password").val($.cookie('password'));
		$("#check").attr("checked",true);
	}
	$(".i-text").focus(function(){
		$(this).addClass('h-light');
		});

		$(".i-text").focusout(function(){
		$(this).removeClass('h-light');
		});
	$("input:not(:first)").keypress(function(e){ 
	     if(e.which==13){ 
	    	 loginCookie();
	     } 
	    });

	
	$("#send-btn").click(function(){
		loginCookie();
	});

});

/*var $login = {
		
		userid : null,
		login : function(userId, password){
			var login = new nssoft.openApi.login.api();
			login.addParam('userId', userId);
			login.addParam('passWord', password);
			login.request({
				method : 'POST',
				async : false,
				url :  contextPath + '/v1/api/noauth/user/LoginManager.json'
			});
		}
		
};*/
function login(userId, password){
	$.post('/mUserAction/login.action', $.param({"usId":userId, "usPs":password}), function(res) {
		
		if(res.success){
			var result = res.result;
			if (result) {
				console.info(result.US_ID);
				setCookie('admin_userId',result.US_ID);
				window.location.href = "/admin/main/index.html";
				$("#load").attr("disabled",true);
			} 
		}else {
			var txt=  res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		    $("#password").val('');
		    $("#usernume").focus();
		    return false;
		}
	}, "JSON");
}

/*(function() {//登录
	$class('nssoft.openApi.login.api').extend(nssoft.absAPI).define({
		onSuccess : function(status, res) {
			switch(res.errCd){
				case 0 :
					var result = res.result;
					if(result){
						var rest = result.result;
						if (result.success) {
							setCookie('access_token_admin',rest.access_token);
							window.location.href = "/admin/main/index.html";
							$("#load").attr("disabled",true);
						} else {
							var txt=  "登录失败！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						    $("#password").val('');
						    $("#usernume").focus();
						    return false;
						}
					};
					break;
				case -600 :
					var txt = "没有权限！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
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
}());*/
function loginCookie(){
	var userId = $("#username").val();
	var password = $("#password").val();
	if(userId){
		if(password){
			if($("#check").is(':checked')){
				$.cookie('uname', userId, { expires: 30 });
				$.cookie('password', password, { expires: 30 });
			}else{
				$.cookie('uname', '');
				$.cookie('password', '');
			}
			password = hex_md5(password);
			login(userId, password);
		}else{
			var txt=  "请输入密码！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}else{
		var txt=  "用户名为空！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
	}
}