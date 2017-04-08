/**
 * @file detailelse
 * @author Jianghaipeng 
 * @date: 2015/11/13 13:02
 * @version: V1.0
 */

'use strict';

window.$detailelse = window.$detailelse || {};

$(function() {
	
	$(document).ready(function() {
		var admin_userId = getCookie('admin_userId');
		if (!admin_userId) {
			location.href = '/admin/login.html';
		}
		$detailelse.nodeid = getParameter('nodeid');
		$detailelse.idr = getParameter('idr');
		$detailelse.keyId = getParameter('keyId');
		$detailelse.contents = getParameter('contents');
		var type = getParameter('type');
		$detailelse.type = decodeURIComponent(type);
		var columns = [{
				field : 'NodeID',
				title : '微法ID',
				sortable : true,
				width : 195,
			}, {
				field : 'LawName',
				title : '微法名称',
				sortable : true,
				width : 340
			},{
				field : 'KeyID',
				title : '键值ID',
				sortable : true,
				width : 70
			},{
				field : 'UPupID',
				title : '法律解释名称',
				sortable : true,
				width : 150,
			},{
				field : 'Title',
				title : '解释详情标题',
				sortable : true,
				width : 110
			},{
				field : 'Contents',
				title : '解释详情内容',
				sortable : true,
				width : 409,
				formatter : function(value, row, index){
					value = value.replace(/<\/?.+?>/g,"");
					return value;
				}
			}/*,{
				field : 'modifyContents',
				title : '操作',
				sortable : true,
				width : 80,
				formatter : function(value, row, index) { 
					value ='<a href="/admin/main/index.html?keyId='+ row.KeyID +'&idr='+ $detailelse.idr +'&flag=5">修改内容</a>';
					return value;
				}
			}*/],
			options = {
				url : contextPath + '/v1/api/management/node/explainContents.json',
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
					nodeId:$detailelse.nodeid,
					idr:$detailelse.idr,
					type:$detailelse.type,
				}
			}
		
		//创建easyUI datagrid
		$("#DetailElsegrid").datagrid(options); 
		
		UE.getEditor('contentsEditor', {//编辑器
	          toolbars: [
	               ['fullscreen', 'source', 'undo', 'redo', 'bold', 'italic', 'link', 'fontborder', 'backcolor', 'fontsize', 'fontfamily', 'justifyleft', 'justifyright', 'justifycenter', 'justifyjustify']
	          ]
		});
		$("#microContentsBtn").click(function(){//隐藏按钮
			$("#microExplainModal").modal();
		});
		$("#microExplainSaveBtn").click(function(){//编辑器保存按钮
			var content = UE.getEditor('contentsEditor').getContentTxt();
			$detailelse.modifyContent($detailelse.keyId, content);
			$("#microExplainModal").modal("hide");
		})
		
	});
	
	//durian请求体
	var $detailelse = {
			modifyContent : function(keyId,content) {
				var modifyContent = new nssoft.openApi.modifyContent.api();
				modifyContent.addParam('keyId', keyId);
				modifyContent.addParam('content', content);
				modifyContent.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/node/modifyContent.json'
				});
			},
		
	};
	
	(function() {//修改内容格式
		$class('nssoft.openApi.modifyContent.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;
						if (result.success) {
							var txt = "设置成功！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
							$("#DetailElsegrid").datagrid("reload");
						} else {
							var txt = "设置失败！";
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
	}())
	
	
	
	
});