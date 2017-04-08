/**
 * @file microbasic
 * @author Jianghaipeng 
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
				field : 'CHURCH_ID',
				title : '教会ID',
				sortable : true,
				width : 215,
			}*/,{
				field : 'US_NAME',
				title : '分享人',
				sortable : true,
				width : 200
			},{
				field : 'TYPE',
				title : '教会类型',
				sortable : true,
				width : 150,
				formatter : function(value, row, index) { 
					if(value == '0')
						value = '家庭教会';
					else
						value = '三自教会';
					return value;
				}
			
			},{
				field : 'AREA',
				title : '教会所在地区',
				sortable : true,
				width : 235
			},{
				field : 'ADDRESS',
				title : '聚会详细地址',
				sortable : true,
				width : 235
			},{
				field : 'ADORATION_TIME',
				title : '敬拜时间',
				sortable : true,
				width : 200,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			},{
				field : 'CHURCH_PS',
				title : '教会简介',
				sortable : true,
				width : 335
			},{
				field : 'CHURCH_MASTER_NAME',
				title : '负责人名称',
				sortable : true,
				width : 200
			},{
				field : 'CHURCH_MASTER_TEL',
				title : '负责人联系方式',
				sortable : true,
				width : 200
			},{
				field : 'CHURCH_MASTER_EMAIL',
				title : '负责人邮箱',
				sortable : true,
				width : 200
			}],
			options = {
				url : contextPath + '/mFSAction/getChurchs.action',
				idField : 'CHURCH_ID',
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
				frozenColumns:[[
	                {
	    				field : 'CHURCH_NAME',
	    				title : '教会名称',
	    				sortable : true,
	    				width : 235,
	    			},
			    ]],
				checkOnSelect : false,
				rowStyler: function(index,row){
						return 'height:50px;';	
				}
			}
		
		//创建easyUI datagrid
		$("#datagridChurch").datagrid(options);
		$("#aj-basicSearch").click(function() {//搜索
			$("#datagridChurch").datagrid("load",$.serializeObject($('#aj-searchFormnode')));
		});
		
		$("#microbasic-searchReset-btn").click(function() {
			$("#datagridChurch").datagrid("load",{ });
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