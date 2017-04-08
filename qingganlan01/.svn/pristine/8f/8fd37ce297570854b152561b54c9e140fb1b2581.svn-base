/**
 * @file microdetail
 * @author zhaojunbao 
 * @date: 2015/11/13 15:49
 * @version: V1.0
 */

'use strict';
window.$microdetail = window.$microdetail || {};
$(function() {
	
	$(document).ready(function() {
		var admin_userId = getCookie('admin_userId');
		if (!admin_userId) {
			location.href = '/admin/login.html';
		}
		var nodeId=getParameter('nodeid');
		$microdetail.nodeid = nodeId;
		$("#az-microId").text(nodeId);
	  //$("#az-microId").val(nodeId);
		var txt = $.serializeObject($('#az-microExpForm'));
		$microdetail.microLawtype=txt.type;
		var columns = [{
				field : 'NodeID',
				title : '微法ID',
				sortable : true,
				width : 205,
			}, {
				field : 'UPID',
				title : 'UPID',
				sortable : true,
				width : 165,
			},{
				field : 'KeyID',
				title : '键值ID',
				sortable : true,
				width : 70
			},{
				field : 'IDr',
				title : '微法解释的id',
				sortable : true,
				width : 285
			},{
				field : 'Title',
				title : '微法标题',
				sortable : true,
				width : 409,
				formatter : function(value, row, index) { 
					value =value.replace(/<\/?.+?>/g,"");
					return value;
				}
			}, {
				field : 'OrderNo',
				title : '序号',
				sortable : true,
				width : 70
			},{
				field : 'edit',
				title : '操作',
				sortable : true,
				width : 70,
				formatter : function(value, row, index) { 
					value ='<a href="/admin/main/index.html?nodeid=' + row.NodeID +'&idr='+row.IDr +'&type='+$microdetail.microLawtype+'&flag=2">详情</a>';
					return value;
				}
			}/*,{
				field : 'modifyTitle',
				title : '操作',
				sortable : true,
				width : 65,
				formatter : function(value, row, index) { 
					value ='<a href="/admin/main/index.html?keyId='+row.KeyID +'&flag=3">修改标题</a>';
					return value;
				}
			}*//*,{
				field : 'modifyOrder',
				title : '操作',
				sortable : true,
				width : 65,
				formatter : function(value, row, index) { 
					value ='<a title="双击修改" onclick=$("#microExp-Order-btn").click()>修改顺序</a>';
					return value;
				}
			}*/],
			options = {
				url : contextPath + '/v1/api/management/node/explains.json',
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
				checkOnSelect:false,
				columns : [columns],
				rowStyler: function(index,row){
						return 'height:50px;';	
				},
				queryParams: {
					nodeId:nodeId,
					type:$microdetail.microLawtype,
				},
			}
		
		//创建easyUI datagrid
		$("#datagridMicrolow").datagrid(options); 
		$("#microdetailNodeId").val(nodeId);
		$("#microdetailSearch").click(function() {
			$('#datagridMicrolow').datagrid('load', $.serializeObject($('#az-microExpForm')));
			var txt = $.serializeObject($('#az-microExpForm'));
			$microdetail.microLawtype=txt.type;
		});
		$("#microdetail-searchReset-btn").click(function() {
			$("#datagridMicrolow").datagrid("load",{
				nodeId: $microdetail.nodeid,
				type: '解释',
			});
		});
		
		var nodeId='';
		var keyId='';
		var oldOrder='';
		$("#microExp-Order-btn").click(function() {
			var rows=$('#datagridMicrolow').datagrid("getSelections");
			nodeId=rows[0].NodeID;
			keyId=rows[0].KeyID;
			oldOrder=rows[0].OrderNo;
			$('#microExp_nodeId').text(nodeId);
			if($microdetail.microLawtype=="解释"){
				$("#exp").attr("selected",true);
			}else{
				$("#buildLow").attr("selected",true);
			}
			$('#microKeyId').text(keyId);
			$('#modifyOldOrder').text(oldOrder);
			$("#microExpModal").modal();
		});
		/*$("#microExp-OrderS-btn").click(function(){
			var newOrder= $('#modifyNewOrder').val();
			var reg = new RegExp("^[0-9]*$");  
			if (!reg.test(newOrder)) {
				$("#alter").show();
					var txt=  "顺序只能设置数字！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					return false;
				}
			$microdetail.modifyOrder(nodeId,keyId,$microdetail.microLawtype,oldOrder,newOrder);
		});
		$("#closebtn").click(function(){
			$("#alter").hide();
		});
		$(".close").click(function(){
			$("#alter").hide();
		});*/
	});
	//durian请求体
	 $microdetail = {
			nodeid : null,
			microLawtype : null,
			modifyOrder : function(nodeId, keyId, microLawtype, oldOrder, newOrder) {
				var modifyOrder = new nssoft.openApi.modifyOrder.api();
				modifyOrder.addParam('nodeId', nodeId);
				modifyOrder.addParam('type', microLawtype);
				modifyOrder.addParam('keyId', keyId);
				modifyOrder.addParam('oldOrderNo', oldOrder);
				modifyOrder.addParam('newOrderNo', newOrder);
				modifyOrder.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/node/modifyOrder.json'
			});
		},
	};
	
/*	(function() {//修改顺序
		$class('nssoft.openApi.modifyOrder.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result.success) {
						var txt=  "设置成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$("#microExpModal").modal('hide');
						$("#datagridMicrolow").datagrid("reload",{ 
								nodeId: $microdetail.nodeid,
								type: $microdetail.microLawtype,
						});
					} else {
						var txt=  "设置失败！";
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

		