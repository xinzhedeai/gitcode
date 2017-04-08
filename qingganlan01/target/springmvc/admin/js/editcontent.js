/**
 * @file editcontent
 * @author lvhejing 
 * @date: 2015/11/18 13:26
 * @version: V1.0
 */

'use strict';
window.$editcontent = window.$editcontent || {};
$(function() {
	var admin_userId = getCookie('admin_userId');
	if (!admin_userId) {
		location.href = '/admin/login.html';
	}
	$(document).ready(function() {
		$editcontent.keyId = getParameter('keyId');
		$editcontent.getFinalTreeDetail($editcontent.keyId);
		$editcontent.idr = getParameter('idr');
	});
	
	$("#editContentBtn").click(function(){
		var content = UE.getEditor('editorContents').getContent();
		$editcontent.modifyContent( $editcontent.keyId, content);
	})

 
	//durian请求体
	$editcontent = {
			keyId : '',
			userid : '',
			NodeID : null,
			IDr : null,
			type : null,
			modifyContent : function(keyId,content) {//修改内容
				var modifyContent = new nssoft.openApi.modifyContent.api();
				modifyContent.addParam('keyId', keyId);
				content = encodeURIComponent(content);
				modifyContent.addParam('content', content);
				modifyContent.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/node/modifyContent.json'
				});
			},
			getFinalTreeDetail : function(keyId) {//获取解释详情
				var getFinalTreeDetail = new nssoft.openApi.getFinalTreeDetail.api();
				getFinalTreeDetail.addParam('keyId', keyId);
				getFinalTreeDetail.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/node/getFinalTreeDetail.json'
				});
			}
	};
	
	(function() {//修改内容
		$class('nssoft.openApi.modifyContent.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;  
						if (result.success) {
							var txt =  "确定要修改？";
							var option = {
									title: "系统信息",
									onOk: function(){
										window.location.href = "/admin/main/index.html?nodeid=" + $editcontent.NodeID +"&type="+ $editcontent.type +"&idr=" + $editcontent.idr + "&flag=2";/* "&type=" + $editcontent.type + */
									},
							}
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
						} else {
							var txt =  "设置失败！";
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
	(function() {//获取解释详情
		$class('nssoft.openApi.getFinalTreeDetail.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
					case 0 :
						var result = res.result;  
						if (result != null) {
							$editcontent.NodeID = result.NodeID;
							$editcontent.IDr = result.IDr;
							$editcontent.type = result.UPUPupID;
							var LAWNAME = ' ';
							var KEYID = result.KeyID;
							var UPUPID = result.UPupID;
							var TITLE = result.TITLE;
							$("#nodeid").text($editcontent.NodeID);
							$("#lawname").text(LAWNAME);
							$("#keyid").text(KEYID);
							$("#upupid").text(UPUPID);
							$("#title").text(TITLE);
							var CONTENT = result.Contents;
							$("#editorContents").val(CONTENT);
							
							UE.getEditor('editorContents', {
								  enterTag: "",
						          toolbars: [
						               ['fullscreen', 'source', 'undo', 'redo', 'bold', 'italic', 'link', 'fontborder', 'backcolor', 'fontsize', 'fontfamily', 'justifyleft', 'justifyright', 'justifycenter', 'justifyjustify']
						          ]
							});
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
	
});

	