/**
 * @file comment
 * @author Jianghaipeng 
 * @date: 2015/11/12 12:49
 * @version: V1.0
 */

'use strict';

$(function() {
	
	$(document).ready(function() {
		var columns = [{
				field : 'ck',
				checkbox : true
			}, {
				field : 'BlogPostID',
				title : '帖子ID',
				sortable : true,
				width : 280,
			}, {
				field : 'NickName',
				title : '用户昵称',
				sortable : true,
				width : 171,
			}, {
				field : 'CommentID',
				title : '评论ID',
				sortable : true,
				width : 315
			},{
				field : 'Content',
				title : '评论内容',
				sortable : true,
				width : 270
			},{
				field : 'CommentTime',
				title : '评论时间',
				sortable : true,
				width : 210
			}],
			options = {
				url : contextPath + '/v1/api/management/blogpost/comments.json',
				idField : 'BlogPostID',
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
				checkOnSelect : false,
				columns : [columns],
				rowStyler: function(index,row){
						return 'height:50px;';	
				}
			}
		//创建easyUI datagrid
		$("#datagridcomment").datagrid(options); 
		
		$("#aj-commentsearch").click(function() {
			var patrn=/[`~!@#$%^&*_+<>?{}\/'[\]]/im; 
			var commentScontent=$("#commentScontent").val();
    		if(patrn.test(commentScontent)){  
    			var txt=  "含有非法字符！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				return false;
    		}
			$("#datagridcomment").datagrid("load",$.serializeObject($('#aj-commentsearchForm')));
		});
		$("#comment-searchReset-btn").click(function() {
			$("#datagridcomment").datagrid("load",{ });
			$('#userId').combobox('clear');
			$('#blogPostId').combobox('clear');
			$('#aj-commentsearchForm input').val('');
		});
		
		$("#aj-commentdel").click(function(){
			var p = $("#datagridcomment").datagrid('getChecked');
			if(p.length > 0){
				var commentIdList = new Array();
				for(var i = 0; i < p.length; i++){
					commentIdList[i] = p[i].CommentID;
				}
				var txt=  "确定要删除？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$comment.deleteComment(JSON.stringify(commentIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择要删除的数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		
		$('#userId').combobox({    
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
		$('#blogPostId').combobox({    
		    url : contextPath + '/v1/api/management/common/getPlogPost.json',    
		    valueField :'BlogPostID',    
		    textField : 'BlogPostID',
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
	
	//durian请求体
	var $comment = {
			deleteComment : function(commentIdList) {
				var deleteComment = new nssoft.openApi.deleteComment.api();
				deleteComment.addParam('commentIdList', commentIdList);
				deleteComment.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/blogpost/deleteComment.json'
				});
			},
	};
	
	(function() {//删除
		$class('nssoft.openApi.deleteComment.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result.success) {
						var txt=  "删除成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$("#datagridcomment").datagrid("reload",{ });
					} else {
						var txt=  "删除失败！";
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
	}());
	
	
	
});