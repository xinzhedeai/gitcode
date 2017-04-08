/**
 * @file fsQuesition.js
 * @author dabao
 * @date: 2015/11/13 13:02
 * @version: V1.0
 */

'use strict';
$(function() {
	
	$(document).ready(function() {
		var columns = [{
				field : 'ck',
				checkbox : true
			}/*, {
				field : 'QUESITION_ID',
				title : '问题ID',
				sortable : true,
				width : 315,
			}*/,{
				field : 'QUESITION_NAME',
				title : '问题名称',
				sortable : true,
				width : 235
			},{
				field : 'QUESITION_CONTENT',
				title : '问题内容',
				sortable : true,
				width : 335
			},{
				field : 'US_ID',
				title : '提问人ID',
				sortable : true,
				width : 200
			}, {
				field : 'FS_ID',
				title : '团契ID',
				sortable : true,
				width : 200,
			},{
				field : 'REQUEST_DATE',
				title : '提问时间',
				sortable : true,
				width : 200,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			},{
				field : 'QUESITION_STATE',
				title : '问题状态',
				sortable : true,
				width : 60
			},{
				field : 'QUESITION_SOLUTED_DATE',
				title : '是否已被解决',
				sortable : true,
				width : 60
			},{
				field : 'VIEWS',
				title : '浏览次数',
				sortable : true,
				width : 60
			},{
				field : 'QUESITION_REPLY_NO',
				title : '答案数量',
				sortable : true,
				width : 60
			}],
			options = {
				url : contextPath + '/mFSAction/getFSQs.action',
				idField : 'FS_ID',
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
		
		//创建easyUI datagrid
		$("#datagridFSQ").datagrid(options);
		$("#aj-basicSearch").click(function() {//搜索
			$("#datagridFSQ").datagrid("load",$.serializeObject($('#aj-searchFormnode')));
		});
		
		$("#microbasic-searchReset-btn").click(function() {
			$("#datagridFSQ").datagrid("load",{ });
		});
		$('#fellowShipId').combobox({//搜索团契名称
			url : contextPath + '/mFSAction/getFSName.action',    
		    valueField :'FS_ID',    
		    textField : 'FS_NAME',
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
		
		$("#aj-sethotnode").click(function(){
			var p = $("#datagridnode").datagrid('getChecked');
			if(p.length > 0){
				var nodeIdList = new Array();
				for(var i = 0; i < p.length; i++){
					if(p[i].HotNode == 'N'){
						nodeIdList[i] = p[i].NodeID;
					}else{
						var txt=  "请选择不是热点法的数据进行设置！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false;
					}
					
				}
				var txt=  "确定要设为热点法？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$microbasic.setHotNode(JSON.stringify(nodeIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		
		$("#aj-delhotnode").click(function(){
			var p = $("#datagridFSPray").datagrid('getChecked');
			if(p.length > 0){
				var nodeIdList = new Array();
				for(var i = 0; i < p.length; i++){
					if(p[i].HotNode == 'Y'){
						nodeIdList[i] = p[i].NodeID;
					}else{
						var txt=  "请选择是热点法的数据进行设置！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false;
					}
				}
				var txt=  "确定要取消热点法？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$microbasic.removeHotNode(JSON.stringify(nodeIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		$('#uid').combobox({    
		    url : contextPath + '/v1/api/management/common/getUsers.json',    
		    valueField :'UserID',    
		    textField : 'NickName',
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
		$('#nodeId').combobox({    
		    url : contextPath + '/v1/api/management/common/getNodes.json',    
		    valueField :'NodeID',    
		    textField : 'Nodetitle',
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
		
		
		$("#al-setmicrolowauthor").click(function() {//设定微法律作者
		/*	var rows = $('#datagridnode').datagrid("getSelections");
			if(rows.length != 1 && rows.length != 0){
				var txt = "只能选择一条信息";
				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
			}else if(rows.length == 1){
*/
				$("#mymodalBasic").modal();
				/*var nodeId = rows[0].NodeID;
				$("#microId").val(nodeId);*/
				$("#microId").attr("disabled","disabled");
			/*	var nodeTitle = rows[0].Nodetitle;
				$("#microTitle").val(nodeTitle);*/
				$("#microTitle").attr("disabled","disabled");
				
				$('.microAuthor').combobox({    
				    url : contextPath + '/v1/api/management/common/getUsers.json',    
				    valueField :'UserID',   //传的值
				    textField : 'NickName',//页面表单显示的值
				    width : 265,
				    height : 35,
				    loadFilter : function(data) {
						if (data != null) {
							return data.result.rows;
						} else {
							window.location.href='/admin/login.html';
						}
					},
				});
			/*}else{
				var txt = "您还未选择要设定作者的用户,请选择一项进行设定！！";
				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
			}*/
		});  

		$("#setSaveBtn").click(function(){
			var txt = new Array();
			txt = $.serializeObject($('#setAuthorForm'));
			var nodeId = $("#microId").val();
			var userId = txt.microAuthor;
			if(userId){
				$microbasic.SetAuthor(nodeId, userId);
			}else{
				var txt = "您还未选择相应作者！";
				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
			}
			
			
		});
		$("#setCloseBtn").click(function(){
			$("#mymodalBasic").modal('hide');
		});
	});
	function reloadClear(){
		$('#datagridFSPray').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		$("#datagridFSPray").datagrid("reload",$.serializeObject($('#aj-searchFormnode')));
	}
	//durian请求体
	var $friend = {
			setHotNode : function(nodeIdList) {
				var setHotNode = new nssoft.openApi.setHotNode.api();
				setHotNode.addParam('nodeIdList', nodeIdList);
				setHotNode.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/node/setHotNode.json'
				});
			},
			removeHotNode : function(nodeIdList) {
				var removeHotNode = new nssoft.openApi.removeHotNode.api();
				removeHotNode.addParam('nodeIdList', nodeIdList);
				removeHotNode.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/node/removeHotNode.json'
				});
			},
			SetAuthor : function(nodeId, userId) {//设定微法律作者
				var SetAuthor = new nssoft.openApi.SetAuthor.api();
				SetAuthor.addParam('nodeId', nodeId);
				SetAuthor.addParam('userId', userId);
				SetAuthor.request({
					method : 'POST',
					async : false,
					url : contextPath + '/v1/api/management/node/setAuthor.json'
				});
			}
			
	};

	

	
});