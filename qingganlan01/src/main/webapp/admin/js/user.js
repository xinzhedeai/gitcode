/**
 * @file user
 * @author zhaojunbao
 * @date: 2015/11/13 9:00
 * @version: V1.0
 */
'use strict';

window.$user = window.$user || {};
$(function(){
	$(document).ready(function() {
		var admin_userId = getCookie('admin_userId');
		if (!admin_userId) {
			location.href = '/admin/login.html';
		}
		$('#az-user-tableList').datagrid({
			url : contextPath + '/mUserAction/getAllUser.action',
			pagination : true,
			fitColumns : false,
			rownumbers : true,
			checkOnSelect:false,
			width : 1307,
			sortOrder : 'desc',
			idField : 'US_ID',
			pageSize : 10,
			frozenColumns : [[{
				field : 'ck',
				checkbox : true
			}, {
				field : 'US_ID',
				title : '账号',
				width: 200,
				halign : 'center',
				sortable : true,
				formatter : function(value, row, index) {  
					value ='<a onclick="$user.userDetail(\'' + value + '\')">' + value + '</a>'; 
					return value;
				}           
			}]],
			columns : [ [   {
				field : 'US_NAME',
				title : '用户名',
				width : 200,
				sortable : true,
			
			}, /* {
				field : 'AGE',
				title : '年龄',
				width : 60,
				sortable : true,
			}, */ {
				field : 'SEX',
				title : '性别',
				width : 100,
				sortable : true,
				formatter : function(value, row, index) {  
					if (value == '0') {
						return	'男';
					} else {
						return	'女';
					}
				}
			},  {
				field : 'AUTHENTICATION',
				title : '是否认证',
				width : 100,
				sortable : true,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'是';
					} else {
						return	'否';
					}
				}
			},  {
				field : 'STATE',
				title : '状态',
				width : 100,
				sortable : true,
				formatter : function(value, row, index) {  
					if (value == 'LIMIT') {
						return	'受限';
					} else {
						return	'正常';
					}
				}
		    },  {
				field : 'TEL',
				title : '手机号',
				width : 100,
				sortable : true,
			} ,  {
				field : 'EMAIL',
				title : '邮箱',
				width : 100,
				sortable : true,
			},  {
				field : 'WEICHAT',
				title : '微信号',
				width : 100,
				sortable : true,
			},  {
				field : 'TEL',
				title : '手机号',
				width : 100,
				sortable : true,
			},  {
				field : 'PS',
				title : '个性签名',
				width : 150,
				sortable : true,
			},  {
				field : 'HOBBY',
				title : '爱好',
				width : 100,
				sortable : true,
			},  {
				field : 'AREA',
				title : '地址',
				width : 100,
				sortable : true,
			},  {
				field : 'PROFESSION',
				title : '职业',
				width : 100,
				sortable : true,
			},  {
				field : 'CHIRCH_TYPE',
				title : '参与教会类型',
				width : 100,
				sortable : true,
			},  {
				field : 'START_TRUTH',
				title : '开始信主日期',
				width : 100,
				sortable : true,
			},  {
				field : 'REG_DATE',
				title : '注册时间',
				width : 100,
				sortable : true,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			},  {
				field : 'IS_BAPTISM',
				title : '是否受洗',
				width : 100,
				sortable : true,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'是';
					} else {
						return	'否';
					}
				}
			},  {
				field : 'IS_TRUTH',
				title : '是否有信仰',
				width : 100,
				sortable : true,
			},  {
				field : 'BLOG_NO',
				title : '发表帖子数',
				width : 100,
				sortable : true,
			},  {
				field : 'COLLECT_BLOG_NO',
				title : '收藏帖子数',
				width : 100,
				sortable : true,
			},  {
				field : 'CONCERN_NO',
				title : '关注的人的数目',
				width : 100,
				sortable : true,
			},  {
				field : 'FANS_NO',
				title : '粉丝数目',
				width : 100,
				sortable : true,
			},  {
				field : 'MY_FRIEND_NO',
				title : '我的好友数',
				width : 100,
				sortable : true,
			}] ],
			loadFilter : function(data) {
				if (data != null) {
					if(data.result.rows != null){
						return data.result;
					}else{
						var txt=  "没有相关数据！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$('#az-user-tableList').datagrid('loadData', { total: 0, rows: [] });
					}
				} else {
					window.location.href='/admin/login.html';
				}
			}
		});
		
		$("#user-searchReset-btn").click(function() {
			$('#az-user-tableList').datagrid('load',{});
			$('#az-user-sNickName').combobox('clear');
			$('#az-user-sLandId').combobox('clear');
			$('#z-user-searchForm select').val('');
		});
		$("#user-search-btn").click(function() {
			$('#az-user-tableList').datagrid('load', $.serializeObject($('#z-user-searchForm')));
		});
		$("#user-forbidden-btn").click(function() {//禁用用户
			var rows = $('#az-user-tableList').datagrid('getChecked');
			var ids = [];
			if (rows.length > 0) {
				for (var i = 0; i < rows.length; i++) {
					if(rows[i].STATE=='LIMIT'){
						var txt=  "选择的用户中已被禁用,不需要重新禁用！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false
					}else{
					ids.push(rows[i].US_ID);
					}
				}
				var userIdList=ids;
				var txt=  "确定要禁用已选择的用户吗？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$user.deleteUser(JSON.stringify(userIdList));
						},
					onCancel: function(){
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择要禁用的用户！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}); 
		$("#user-unforbidden-btn").click(function() {//取消禁用用户
			var rows = $('#az-user-tableList').datagrid('getChecked');
			var ids = [];
			if (rows.length > 0) {
				for (var i = 0; i < rows.length; i++) {
					if(rows[i].STATE=='NORMAL'){
						var txt=  "选择的用户含有未被禁用的用户,不需要取消禁用！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false
					}else{
						ids.push(rows[i].US_ID);
					}
			}
				var userIdList=ids;
				var txt=  "确定要取消禁用吗？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$user.RecoverUser(JSON.stringify(userIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择用户！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
			
		
		$('#az-user-sLandId').combobox({    
		    url :'/mUserAction/getUsIds.action',    
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
			}
		});  
		$('#az-user-sNickName').combobox({    
		    url : '/mUserAction/getAllUsersCom.action',    
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
  });
	
	function reloadClear(){
		$('#az-user-tableList').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		//$('#az-user-tableList').datagrid("reload",{ });
		$('#az-user-tableList').datagrid('load', $.serializeObject($('#z-user-searchForm')));
	}

	$user = {
			userDetail : function(usId) {// 用户信息详情
			$.post('/mUserAction/userDetail.action', $.param({'usId':usId}), function(res) {
				if (res.success) {
					var result = res.result;
					if (result) {
						//用户详情模态框
						$("#UserdetailModal").modal();
						$("#az-user-mDetail td:even").css("width",90);
						$("#az-user-mDetail td:odd").css("width",370);
						//不可编辑
						var NickName = result.US_NAME;
						console.log(NickName);
						var UserID = result.US_ID;
						var Age = result.AGE;
						var Sex = result.SEX;
						var Tel = result.TEL;
						var Email = result.EMAIL;
						var QQ = result.QQ;
						var WeiChat = result.WEICHAT;
						var PS = result.PS;
						var Hobby = result.HOBBY;
						var Area = result.AREA;
						var Profession = result.PROFESSION;
						var ChirchType = result.CHIRCH_TYPE;
						//var State = result.STATE;
						var StartTruth = result.START_TRUTH;
						var RegDate = result.REG_DATE;
					
						var Auth = result.AUTHENTICATION;
						var IsBaptism = result.IS_BAPTISM;
						var IsTruth = result.IS_TRUTHJ;
						if(Auth == "N"){
							$("#detail_Authen").html("否");
						}else{
							$("#detail_Authen").html("是");
						}
						
						var Sex = result.Sex;
						if(Sex == "1"){
							$("#detail_Sex").text("男");
						}else{
							$("#detail_Sex").text("女");
						}
						//不可编辑赋值
						
						$("#detail_name").text(NickName);
						$("#detail_userId").text(UserID);
						
						$("#detail_Tel").text(Tel);
						$("#detail_Email").text(Email);
						$("#detail_PS").text(PS);
						$("#detail_Area").text(Area);
						$("#detail_RegDate").text(RegDate);
						//$("#detail_Authen").val(Auth);
						$("#detail_age").text(Age);
						$("#detail_sex").text(Sex);
						$("#detail_qq").text(QQ);
						$("#detail_weiChat").text(WeiChat);
						$("#detail_hobby").text(Hobby);
						$("#detail_chirchType").text(ChirchType);
						$("#detail_startTruth").text(StartTruth);
						$("#detail_isBaptism").text(IsBaptism);
						$("#detail_isTruth").text(IsTruth);
						//可编辑
						var State = result.STATE;
			/*			if(State=="LIMIT"){
							$(".limitY").attr("selected", true);
						}else{
							$(".limitN").attr("selected", true);
						}*/
						if(State == "LIMIT"){
							$("#detail_Limit").text("受限");
						}else{
							$("#detail_Limit").text("正常");
						}
						
						//可编辑赋值
						//$("#detail_AbilityScope").val(AbilityScope);
						$("#detail_Profession").text(Profession);
					}else{
						var txt = "未查到查询用户详情！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}
				
			}, "JSON");
		},
			deleteUser : function(userIdList) {
				$.post('/mUserAction/deleteUser.action', $.param({'userIdList':userIdList}), function(result) {
					if (result.success) {
						var txt = "禁用成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						reloadClear();
					} else {
						var txt = "禁用失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}, "JSON");
			},
		modifyUser : function(userId,limit){
			$.post('/mUserAction/modifyUser.action', $.param({'usId':userId,'limit':limit}), function(result) {
				if (result.success) {
					var txt = "修改成功！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					reloadClear();
				} else {
					var txt = "修改失败！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			}, "JSON");
		}
	
	}
});


