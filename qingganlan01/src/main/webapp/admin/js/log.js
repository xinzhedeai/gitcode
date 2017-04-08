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
				field : 'LOG_ID',
				title : '日志ID',
				sortable : true,
				width : 315,
			}*/,{
				field : 'LOG_TITLE',
				title : '日志标题',
				sortable : true,
				width : 200
			}, {
				field : 'US_NAME',
				title : '发表日志人',
				sortable : true,
				width : 160,
			},{
				field : 'LOG_CONTENT',
				title : '日志内容',
				sortable : true,
				width : 400
				/*formatter : function(value, row, index) { 
					if(value == '0')
						value = '家庭教会';
					else
						value = '三自教会';
					return value;
				}*/
			
			},{
				field : 'SEND_DATE',
				title : '发表日期',
				sortable : true,
				width : 130,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			},{
				field : 'IS_DELETE',
				title : '是否已删',
				sortable : true,
				width : 70
			},{
				field : 'LOG_TYPE',
				title : '日志类型',
				sortable : true,
				width : 90,
				formatter : function(value, row, index) { 
					if(value == '0')
						value = '见证';
					else
						value = '灵修日志';
					return value;
				}
			},{
				field : 'LOG_UPDATE_DATE',
				title : '日志最近修改时间',
				sortable : true,
				width : 190,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			}],
			options = {
				url : contextPath + '/mUserAction/getLogs.action',
				idField : 'LOG_ID',
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
		$("#datagridLog").datagrid(options);
		$("#aj-basicSearch").click(function() {//搜索
			$("#datagridLog").datagrid("load",$.serializeObject($('#aj-searchFormnode')));
		});
		
		$("#microbasic-searchReset-btn").click(function() {
			$("#datagridLog").datagrid("load",{ });
		});
		$('#logUserId').combobox({    
		    url : contextPath + '/mUserAction/getAllUsersCom.action',    
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
		
		$("#delLog").click(function(){
			var p = $("#datagridLog").datagrid('getChecked');
			if(p.length > 0){
				var logIdList = new Array();
				for(var i = 0; i < p.length; i++){
					logIdList[i] = p[i].LOG_ID;
				}
				var txt=  "确定要删除所选的日志吗？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$log.delLog(JSON.stringify(logIdList));
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
		$('#datagridLog').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		$("#datagridLog").datagrid("reload",$.serializeObject($('#aj-searchFormnode')));
	}
	//durian请求体
	var $log = {
			delLog : function(logIdList) {
				$.post('/mUserAction/delLog.action', $.param({'logIdList':logIdList}), function(result) {
					if (result.success) {
						var txt = "删除成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$("#datagridLog").datagrid("reload",{});
					} else {
						var txt = "删除失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}, "JSON");
			}
	}

	

	
});