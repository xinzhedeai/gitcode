/**
 * @file editdetail
 * @author Jianghaipeng 
 * @date: 2015/11/05 15:49
 * @version: V1.0
 */

'use strict';
window.$editdetail = window.$editdetail || {};
$(function() {
	$(document).ready(function() {
		var access_token = getCookie('access_token_admin');
		if (!access_token) {
			location.href = '/admin/login.html';
		}
		$editdetail.keyId=getParameter('keyId');
		$editdetail.getTreeDetail($editdetail.keyId);
		$("#editdetailTitle-btn").click(function(){
			var title=UE.getEditor('detaileditor').getContent();
			$editdetail.modifyTitle( $editdetail.keyId,title);
		})
	});
	//durian请求体
	$editdetail = {
		keyId : null,
		NodeID : null,
			modifyTitle : function(keyId,title) {
				var modifyTitle = new nssoft.openApi.modifyTitle.api();
				modifyTitle.addParam('keyId', keyId);
				title = encodeURIComponent(title);
				modifyTitle.addParam('title', title);
				modifyTitle.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/node/modifyTitle.json'
				});
			},
			getTreeDetail : function(keyId) {
				var getTreeDetail = new nssoft.openApi.getTreeDetail.api();
				getTreeDetail.addParam('keyId', keyId);
				getTreeDetail.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/node/getFinalTreeDetail.json'
				});
			},
			
	};
	
	(function() {//修改标题
		$class('nssoft.openApi.modifyTitle.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;  
						if (result.success) {
							
							var txt=  "确定要修改？";
							var option = {
									title: "系统信息",
									onOk: function(){
										window.location.href = "/admin/main/index.html?nodeid=" + $editdetail.NodeID +"&flag=1 ";
									},
							}
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
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
	
	(function() {//修改标题
		$class('nssoft.openApi.getTreeDetail.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;  
						if (result!=null) {
							var UPID=result.UPID;
							$editdetail.NodeID=result.NodeID;
							var KeyID=result.KeyID;
							var IDr=result.IDr;
							var title=result.TITLE;
							$("#UPID").text(UPID);
							$("#editdetailNodeId").text($editdetail.NodeID);
							$("#editdetailKeyID").text(KeyID);
							$("#editdetailIDr").text(IDr);
							$("#detaileditor").val(title);
						   UE.getEditor('detaileditor', {
							   	  enterTag:"",
						          toolbars: [
						               ['fullscreen', 'source', 'undo', 'redo', 'bold', 'italic', 'link', 'fontborder', 'backcolor', 'fontsize', 'fontfamily', 'justifyleft', 'justifyright', 'justifycenter', 'justifyjustify']
						          ]
							});
							
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
	}());
});

	