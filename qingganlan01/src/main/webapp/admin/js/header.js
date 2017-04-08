/**
 * @file header
 * @author Jianghaipeng 
 * @date: 2015/11/09 14:16
 * @version: V1.0
 */
'use strict';

$(function() {
	$(document).ready(function() {
		var admin_userId = getCookie('admin_userId');
		if (!admin_userId) {
			location.href = '/admin/login.html';
		}
		getUserDetail(admin_userId);
		$("#loginout").click(function(){
			logout(admin_userId)
		});
	});
	
	function logout(admin_userId){
		delCookie('admin_userId');
		location.href = "/admin/login.html"
	}
	function getUserDetail(userId){//获取用户详情
		$.post('/mUserAction/userInfoDetail.action', $.param({'usId':userId}), function(res) {
			if (res.success) {
				var rows = res.result ;
			}
				if(rows!=null){
					var t = '<span>欢迎</span><a href="/admin/main/index.html?flag=4">' + rows.US_NAME + '</a><span>登录！</span>';
					$("#welcome").html(t);
			} else {
				alert(res.msg);
			}
		}, "JSON");
	}
	
});

