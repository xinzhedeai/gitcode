/**
 * @file managerdetail
 * @author zhaojunbao 
 * @date: 2015/11/13 15:49
 * @version: V1.0
 */

'use strict';
window.$managerdetail = window.$managerdetail || {};

$(function() {
	$(document).ready(function(){
		var admin_userId = getCookie('admin_userId');
		if (!admin_userId) {
			location.href = '/admin/login.html';
		}
		getUserDetail(admin_userId);//获取用户详情
		$("#manaDetailModify").click(function(){
			var patrn=/[`~!@#$%^&*_+<>?{}\/'[\]]/im; 
			var name=$("#manadetailName").val();
    		if(patrn.test(name)){  
    			var txt=  "含有非法字符！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				return false;
    		}
			var sex=$("#manadetailSex").val();
			var email=$("#manadetailEmail").val();
			var email_str = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
			if(!email_str.test(email)){
				var txt=  "邮箱不合法！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				return false;
			}
			var tel=$("#manadetailTel").val();
			var ValidataTel = /^1[3|4|5|8][0-9]\d{4,8}$/;
			if (!ValidataTel.test(tel)) {
				var txt=  "手机号码格式不对！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				return false;
			}
			modifyPersonalInfo(name ,sex, tel, email,admin_userId);
		});
		$("#manaDetailModifyPwd").click(function(){
			var manadetailPwd = $("#manadetailPwd").val();
			var manadetailNewPwd = $("#manadetailNewPwd").val();
			var manadetailReNewPwd = $("#manadetailReNewPwd").val();
			if(manadetailPwd){
				manadetailPwd = hex_md5(manadetailPwd);
				if(manadetailNewPwd){
					manadetailNewPwd = hex_md5(manadetailNewPwd);
					if(manadetailReNewPwd){
						manadetailReNewPwd = hex_md5(manadetailReNewPwd);
						if(manadetailNewPwd == manadetailReNewPwd){
							modifyPersonalPW(manadetailNewPwd,manadetailPwd,admin_userId);
						}else{
							var txt=  "两次输入密码不相同，请重新输入！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						}
					}else{
						var txt=  "确认密码不能为空！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}else{
					var txt=  "新密码不能为空！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			}else{
				var txt=  "原密码不能为空！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		})
	});
	//durian请求体
	$managerdetail = {
		modifyPersonalInfo : function(name ,sex, tel, email) {
			var modifyPersonalInfo = new nssoft.openApi.modifyPersonalInfo.api();
			modifyPersonalInfo.addParam('name', name);
			modifyPersonalInfo.addParam('sex', sex);
			modifyPersonalInfo.addParam('tel', tel);
			modifyPersonalInfo.addParam('email', email);
			modifyPersonalInfo.request({
				method : 'POST',
				async : true,
				url : contextPath + '/v1/api/management/manager/modifyPersonalInfo.json'
			});
		},	
	
	};
	function getUserDetail(admin_userId){//获取用户详情
		$.post('/mUserAction/userInfoDetail.action', $.param({'usId':admin_userId}), function(res) {
		
			if (res.success) {
				var rows = res.result ;
			}
				if(rows!=null){
					var Name = rows.US_NAME;
					var Email = rows.EMAIL;
					var UserID = rows.US_ID;
					var Tel = rows.TEL;
					var Sex = rows.SEX;
					var Auth = rows.AUTHENTICATION;
					if(Sex == "1"){
						$(".manadetailSex1").attr("selected", true);
					}else{
						$(".manadetailSex0").attr("selected", true);
					}
					if(Auth=="ADMIN"){
						Auth="超级管理员";
					}else if(Auth=="BLOGMANAGER"){
						Auth="微法管理员";
					}else if(Auth=="USERMANAGER"){
						Auth="帐号管理员";
					}
					$("#manadetailUserId").text(UserID);
					$("#manadetailAuth").text(Auth);
					$("#manadetailEmail").val(Email);
					$("#manadetailTel").val(Tel);
					$("#manadetailName").val(Name);
			} else {
				alert(res.msg);
			}
		}, "JSON");
	}
	function modifyPersonalPW(manadetailNewPwd,manadetailPwd,admin_userId) {
		$.post('/mUserAction/modifyPersonalPW.action', $.param({'newPassWord':manadetailNewPwd,'oldPassWord':manadetailPwd,'usId':admin_userId}), function(res) {
			alert("id0"+admin_userId);
			if (res.success) {
				var txt = "修改成功！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}else{
				var txt = "修改失败！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
			
		}, "JSON");
	}
	function modifyPersonalInfo(name ,sex, tel, email,admin_userId){
		$.post('/mUserAction/modifyPersonalInfo.action', $.param({'usName':name,'sex':sex,'tel':tel,'email':email,'usId':admin_userId}), function(res) {
			if (res.success) {
				var txt = "修改成功！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}else{
				var txt = "修改失败！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
			
		}, "JSON");
	}
/*	(function() {//修改管理员信息
		$class('nssoft.openApi.modifyPersonalInfo.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result.success) {
						var txt = "修改成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					} else {
						var txt = "修改失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					    return false;
					}
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
				var txt = "发生错误！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
	}());
	(function() {//获取登录账号
		$class('nssoft.openApi.getAccountsInfot.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result != null) {
						var Name = result.Name;
						var Email = result.Email;
						var UserID = result.UserID;
						var Tel = result.Tel;
						var Sex = result.Sex;
						var Auth = result.Auth;
						if(Sex == "1"){
							$(".manadetailSex1").attr("selected", true);
						}else{
							$(".manadetailSex0").attr("selected", true);
						}
						if(Auth=="ADMIN"){
							Auth="超级管理员";
						}else if(Auth=="BLOGMANAGER"){
							Auth="微法管理员";
						}else if(Auth=="USERMANAGER"){
							Auth="帐号管理员";
						}
						$("#manadetailUserId").text(UserID);
						$("#manadetailAuth").text(Auth);
						$("#manadetailEmail").val(Email);
						$("#manadetailTel").val(Tel);
						$("#manadetailName").val(Name);
					} 
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
	}());
	(function() {//修改管理员密码
		$class('nssoft.openApi.modifyPersonalPW.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result.success) {
						var txt = "修改成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$('#manadetailPwd').val('');
						$('#manadetailNewPwd').val('');
						$('#manadetailReNewPwd').val('');
					} else {
						var txt = "修改失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					    return false;
					}
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
});

		