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
			}, {
				field : 'NodeID',
				title : '微法ID',
				sortable : true,
				width : 315,
			}, {
				field : 'NickName',
				title : '作者',
				sortable : true,
				width : 236,
			},{
				field : 'Nodetitle',
				title : '微法标题',
				sortable : true,
				width : 435
			},{
				field : 'HotNode',
				title : '热点法',
				sortable : true,
				width : 130,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'是';
					} else {
						return	'否';
					}
				}
			},{
				field : 'edite',
				title : '操作',
				sortable : true,
				width : 130,
				formatter : function(value, row, index) { 
					value ='<a onclick=$("#microTitle").val(\'' + row.Nodetitle +'\');$("#microId").val(\'' + row.NodeID + '\');$("#al-setmicrolowauthor").click()>设定作者</a>';
					return value;
				}
			}/*{
				field : 'edite',
				title : '操作',
				sortable : true,
				width : 130,
				formatter : function(value, row, index) { 
					value ='<a href="/admin/main/index.html?nodeid=' + row.NodeID + '&flag=1">编辑</a>';
					return value;
				}
			}*/],
			options = {
				url : contextPath + '/v1/api/management/node/nodes.json',
				idField : 'NodeID',
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
		$("#datagridnode").datagrid(options);
		$("#aj-basicSearch").click(function() {//搜索
			$("#datagridnode").datagrid("load",$.serializeObject($('#aj-searchFormnode')));
		});
		
		$("#microbasic-searchReset-btn").click(function() {
			$("#datagridnode").datagrid("load",{ });
			$('#uid').combobox('clear');
			$('#nodeTitle').combobox('clear');
			$('#aj-searchFormnode select').val('');
		});
		$('#uid').combobox({//搜索作者
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
		$('#nodeTitle').combobox({//搜索微法标题   
		    url : contextPath + '/v1/api/management/common/getNodes.json',    
		    valueField :'Nodetitle',    
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
			var p = $("#datagridnode").datagrid('getChecked');
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
		$('#datagridnode').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		$("#datagridnode").datagrid("reload",$.serializeObject($('#aj-searchFormnode')));
	}
	//durian请求体
	var $microbasic = {
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
	
	(function() {//设定热点法
		$class('nssoft.openApi.setHotNode.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;
						if (result.success) {
							var txt=  "设置成功！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
							reloadClear();
						} else {
							var txt=  "设置失败！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						    return false;
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
	}());
	
	(function() {//取消热点法
		$class('nssoft.openApi.removeHotNode.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;
						if (result.success) {
							var txt=  "取消成功！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
							reloadClear();
						} else {
							var txt=  "取消失败！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						    return false;
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
	}());
	(function() {// 设定微法律作者
		$class('nssoft.openApi.SetAuthor.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;
						if (result) {
							var txt=  "设定成功！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
							$("#mymodalBasic").modal('hide');
							$("#datagridnode").datagrid("reload",{});
						}else{
							var txt=  "设定失败！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						    return false;
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
				var txt = "发生错误！";
				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
			}
		});
	}());
	
});