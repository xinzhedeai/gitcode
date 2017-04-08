/**
 * @file admin
 * @author lvhejing
 * @date: 2015/11/05 16:39
 * @version: V1.0
 */
'use strict';
window.$admin = window.$admin || {};

$(function() {
	$(document).ready(function(){
		var columns = [{
			field : 'ck',
			checkbox : true
		}, {
			field : 'US_ID',
			title : '管理员ID',
			sortable : true,
			width : 270,
			formatter : function(value, row, index) {  
				value ='<a onclick="$admin.managerDetail(\'' + value + '\')">' + value + '</a>'; 
				return value;
			}
		}, {
			field : 'US_NAME',
			title : '姓名',
			sortable : true,
			width : 200,
		}, {
			field : 'SEX',
			title : '性别',
			sortable : true,
			width : 100,
			formatter : function(value, row, index) {  
				if (value == '1') {
					return	'男';
				} else {
					return	'女';
				}
			}
		},{
			field : 'EMAIL',
			title : '邮箱',
			sortable : true,
			width : 250,
		},{
			field : 'TEL',
			title : '联系方式',
			sortable : true,
			width : 250,
		},{
			field : 'AUTHENTICATION',
			title : '权限',
			sortable : true,
			width : 175,
			formatter : function(value, row, index) {
				switch(value){
					case 'ADMIN' :
						return	'超级管理员';
						break;
					case 'BLOGMANAGER' :
						return	'微法管理员';
						break;
					case 'USERMANAGER' :
						return	'帐号管理员';
						break;
				}
				}
		}],
		
		options = {
			url : '/mUserAction/getAllManagers.action',
			idField : 'US_ID',
			loadFilter : function(data) {
				if (data != null) {
					if(data.result.rows != null){
						return data.result;
					}else{
						var txt=  "没有相关数据！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				} else {
					window.location.href='/admin/login.html';
				}
			},
			sortOrder : 'desc',
			pageSize : 10,
			width : 1307,
	    	pagination : true,
			fitColumns : false,
			rownumbers : true,
			columns : [columns],
			checkOnSelect : false,
			rowStyler: function(index,row){
					return 'height:50px;';	
			}
		}
	
		$("#AdminDataGridblog").datagrid(options);
		$("#al-Search").click(function(){//搜索
			$('#AdminDataGridblog').datagrid('load', $.serializeObject($('#al-searchForms')));
		});
		$("#admin-searchReset-btn").click(function() {
			$("#AdminDataGridblog").datagrid('load',{});
			$('#adminId').combobox('clear');
			$('#adminName').combobox('clear');
			$('#al-searchForms select').val('');
		});
		$('#adminId').combobox({//搜索管理员ID
		    url:'/mUserAction/getManagersCom.action',    
		    valueField :'US_ID',    
		    textField : 'US_ID',
		    width : 400,
		    height : 35,
		    loadFilter : function(data) {
				if (data != null) {
					return data.result.rows;
				} else {
					window.location.href='/admin/login.html';
				}
			},
		});  
		$('#adminName').combobox({//搜索姓名    
			url:'/mUserAction/getManagersCom.action',   
		    valueField :'US_NAME',    
		    textField : 'US_NAME',
		    width : 400,
		    height : 35,
		    loadFilter : function(data) {
				if (data != null) {
					return data.result.rows;
				} else {
					window.location.href='/admin/login.html';
				}
			},
		}); 
		
		$("#al-add").click(function(){//添加管理员
			$("#mymodal").modal();
		});

		$("#savebtn").click(function(){
			var patrn=/[`~!@#$%^&*_+<>?{}\/'[\]]/im; 
			var userId = $("#SadId").val();
			var name = $("#Sname").val();
			var sex = $("#Ssex").val();
			if(sex == "男"){
				sex = 1;
			}else{
				sex = 0;
			}
			var auth = $("#Sauth").val();
			var tel = $("#Sphone").val();
			var email = $("#Semail").val();
			if(userId){
				if(patrn.test(userId)){  
	    			var txt=  "含有非法字符！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					return false;
	    		}
				if(name){
					if(patrn.test(name)){  
		    			var txt=  "含有非法字符！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false;
		    		}
					if(tel){
						var ValidataTel = /^1[3|4|5|8][0-9]\d{4,8}$/;
						if (!ValidataTel.test(tel)) {
							var txt=  "手机号码格式不对！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
							return false;
						}
					}	
					if(email){
						var email_str = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
						if(!email_str.test(email)){
							var txt=  "邮箱不合法！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
							return false;
						}
					}	
					$admin.addManager(userId, name, sex, auth, tel, email);
					
				}else{
					var txt=  "请填写性名！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			}else{
				var txt=  "请填写管理员ID！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		$("#closebtn").click(function() {//添加管理员关闭按钮
			$("#mymodal").hide();
		});
		
		
		
		$("#al-modify").click(function() {//修改管理员信息
			var rows=$('#AdminDataGridblog').datagrid("getSelections");
			if(rows.length != 1 && rows.length != 0){
				var txt = "只能选择一条信息进行修改";
				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
			}else if(rows.length == 1){
					var userId=rows[0].UserID;
					$admin.ManagerDetail(userId);
					
			}else{
				var txt = "您还未选择要修改的用户,请选择一项进行修改！！";
				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
			}
		});
		$("#AdminModifySaveBtn").click(function(){
			var userId=$("#adId").val();
			var patrn=/[`~!@#$%^&*_+<>?{}\/'[\]]/im; 
			var name=$("#name").val();
    		if(patrn.test(name)){  
    			var txt=  "含有非法字符！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				return false;
    		}
			var sex=$("#sex").val();
			if(sex == "男"){
				sex = 1;
			}else{
				sex = 0;
			}
			var auth=$("#auth").val();
			if(auth == "超级管理员"){
				auth = "ADMIN";
			}else if(auth == "超级管理员"){
				auth = "MANAGER";
			}
		
			var tel=$("#phone").val();
			var ValidataTel = /^1[3|4|5|8][0-9]\d{4,8}$/;
			if(tel){
				if (!ValidataTel.test(tel)) {
					var txt=  "手机号码格式不对！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					return false;
				}
			}
			
			var email=$("#email").val();
			var email_str = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
			if(email){
				if(!email_str.test(email)){
					var txt=  "邮箱不合法！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					return false;
				}
			}
			$admin.modifyManager(userId, name, sex, auth, tel, email);
		});
		
		$("#ModifyCloseBtn").click(function(){
			$("#amodal").modal('hide');
		});
		$("#al-delete").click(function(){
			var p = $("#AdminDataGridblog").datagrid('getSelections');//删除管理员
			console.info(p.length);
			if(p.length > 0){
				var userIdList = new Array();
				for(var i = 0;i < p.length;i++){
					userIdList[i] = p[i].US_ID;
					console.info(userIdList[i]);
				}
				var txt = "确定要删除？";
				var option = {
					title: "系统信息",
					btn:parseInt("0011",2),
					onOk:function(){
						$admin.deleteManager(JSON.stringify(userIdList));//将数组对象转化为json字符串
					},
					onCancle:function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择要删除的数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		
		$("#al-resetpwd").click(function(){//密码重置
			var p = $("#AdminDataGridblog").datagrid('getChecked');
			if(p.length > 0){
				var userIdList = new Array();
				for(var i = 0; i < p.length; i++){
					userIdList[i] = p[i].US_ID;
				}
				var txt=  "确定要重置密码？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$admin.resetPassword(JSON.stringify(userIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择要重置的数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		
	});
	function reloadClear(){
		$('#AdminDataGridblog').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		$('#AdminDataGridblog').datagrid('load', $.serializeObject($('#al-searchForms')));
	}
	
	//durian请求体  
	$admin = {
		addManager : function(userId, name, sex, auth, tel, email) {//添加管理员
			$.post('/mUserAction/addManager.action', $("#addAdminForm").serialize(), function(result) {
				if (result.success) {
					var txt = "添加成功！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
					$("#mymodal").modal('hide');
					$("#AdminDataGridblog").datagrid("reload",{ });
					$("#SadId").val('');
					$("#Sname").val('');
					$("#Ssex").val('');
					$("#Sphone").val('');
					$("#Semail").val('');
					$("#Sauth").val('');
					
				} else {
					var txt = "添加失败！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
					$("#SadId").val('');
					$("#Sname").val('');
					$("#Ssex").val('');
					$("#Sphone").val('');
					$("#Semail").val('');
					$("#Sauth").val('');
					return false;
				};
			}, "JSON");
		},
		modifyManager : function(userId, name, sex, auth, tel, email ) {//修改管理员信息
			$.post('/mUserAction/modifyManager.action', $.param({'adId':userId}) + '&' +$("#modifyAdminForm").serialize(), function(result) {
				if (result.success) {
					var txt = "修改成功！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
					$("#amodal").modal('hide');
					$("#AdminDataGridblog").datagrid("reload",{ });
					$("#AdminDataGridblog").datagrid("clearChecked");
				} else {
					var txt = "修改失败！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			}, "JSON");
		},
		deleteManager : function(userIdList) {//删除管理员
			$.post('/mUserAction/deleteManager.action', $.param({'userIdList':userIdList}), function(result) {
				if (result.success) {
					var txt = "删除成功！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
					$("#AdminDataGridblog").datagrid("reload",{ });
					$("#AdminDataGridblog").datagrid("clearChecked");
				} else {
					var txt = "删除失败！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			}, "JSON");
		},
		managerDetail : function(userId) {//管理员信息
			$.post('/mUserAction/managerDetail.action', $.param({'usId':userId}), function(res) {
				if (res.success) {
					var result = res.result;
					if (result) {
						$("#amodal").modal();
						
						var adId = result.US_ID;
						$("#adId").val(adId);
						$("#adId").attr("disabled","disabled");
						var NAME = result.US_NAME;
						$("#name").val(NAME);
						var TEL = result.TEL;
						$("#phone").val(TEL);
						var EMAIL = result.EMAIL;
						$("#email").val(EMAIL);
						var SEX=result.SEX;
						if(SEX == 1){
							$("#boy").attr("selected", true);
							$("#girl").attr("selected", false);
						}else{
							$("#boy").attr("selected", false);
							$("#girl").attr("selected", true);
						}
						var AUTH = result.AUTHENTICATION;
						switch(AUTH){
							case "ADMIN" :
								$(".superUser").attr("selected", true);
								$(".BlogUser").attr("selected", false);
								$(".AccountUser").attr("selected", false);
								break;
							case "BLOGMANAGER" :
								$(".superUser").attr("selected", false);
								$(".BlogUser").attr("selected", true);
								$(".AccountUser").attr("selected", false);
								break;
							case "USERMANAGER" :
								$(".superUser").attr("selected", false);
								$(".BlogUser").attr("selected", false);
								$(".AccountUser").attr("selected", true);
								break;
						}
						if(AUTH == "ADMIN"){
							$(".superUser").attr("selected", true);
						}else if(AUTH == "BLOGMANAGER"){
							$(".BlogUser").attr("selected", true);
						}else if(AUTH == "USERMANAGER"){
							$(".AccountUser").attr("selected", true);
						}
					}	
				} else {
					var txt = "查看用户详情失败！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			}, "JSON");
		},
		resetPassword : function(userIdList) {//密码重置
			$.post('/mUserAction/resetPassword.action', $.param({'userIdList':userIdList}), function(result) {
				if (result.success) {
					var txt=  "重置成功！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					reloadClear();
				} else {
					var txt = "重置密码失败！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			}, "JSON");
		}
	};
	
});
