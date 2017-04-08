/**
 * @file microbasic
 * @author Jianghaipeng 
 * @date: 2015/11/13 13:02
 * @version: V1.0
 */

'use strict';
$(function() {
	
	$(document).ready(function() {
		var columns = [/*{
				field : 'ck',
				checkbox : true
			},*{
				field : 'FS_NAME',
				title : '团契名称',
				sortable : true,
				width : 200
			},{
				field : 'JOIN_DATE',
				title : '加入团契日期',
				sortable : true,
				width : 200,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			}/*,  {
				field : 'AGE',
				title : '年龄',
				width : 60,
				sortable : true,
			}, */ {
				field : 'SEX',
				title : '性别',
				width : 60,
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
				width : 100,
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
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
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
			},{
				field : 'PROFESSION',
				title : '职业',
				sortable : true,
				width : 435
			},{
				field : 'IS_MASTER',
				title : '是否为负责人',
				sortable : true,
				width : 130,
				formatter : function(value, row, index) { 
				    if(value == 'N')
				    	value = '否'
			    	else
			    		value = '是'
					return value;
				}
			}],
			options = {
				url : contextPath + '/mFSAction/getAllFSMember.action',
			//	idField : 'FS_ID',
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
					field : 'US_NAME',
					title : '用户名',
					width : 200,
					sortable : true,
					
					},
			    ]],
				checkOnSelect : false,
				rowStyler: function(index,row){
						return 'height:50px;';	
				}
			}
		
		//创建easyUI datagrid
		$("#datagridFSMember1").datagrid(options);
		$("#aj-basicSearchFsMember").click(function() {//搜索
			$("#datagridFSMember1").datagrid("load",$.serializeObject($('#aj-searchFormFSMember')));
		});
		
		$("#fS-Member-eset-btn").click(function() {//重置
			$("#datagridFSMember1").datagrid("load",{ });
			$('#fellowShipId').combobox('clear');
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
		


		$("#setCloseBtn").click(function(){
			$("#mymodalBasic").modal('hide');
		});
		$(".excelBtn").click(function(){
			 var url="/mFSAction/getAllFSMemberExcel.action";
		        window.open(url);
		//	$fSMember.export();
		});
	});
	function reloadClear(){
		$('#datagridFS').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		$("#datagridFS").datagrid("reload",$.serializeObject($('#aj-searchFormnode')));
	}
	//durian请求体
	var $fSMember = {
			export : function(nodeIdList) {
				$.post('/mFSAction/getAllFSMemberExcel.action', $("#aj-searchFormFSMember").serialize(), function(result) {
					if (result.success) {
						var loginUsId = result.result.userid;
						setCookie('loginUsId',loginUsId);
						console.info(loginUsId);
						//location.href = 'html/index.html?userId=';
						location.href = 'html/index.html';
					} else {
						alert(result.msg);
					}
				}, "JSON");
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
			

	}
});