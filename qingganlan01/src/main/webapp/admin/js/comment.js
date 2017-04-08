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
				field : 'BLOG_ID',
				title : '帖子ID',
				sortable : true,
				width : 280,
			}, {
				field : 'BLOG_US_NAME',
				title : '发帖人',
				sortable : true,
				width : 200,
			},{
				field : 'COMMENT_US_NAME',
				title : '评论人',
				sortable : true,
				width : 200
			}/*, {
				field : 'COMMENT_ID',
				title : '评论ID',
				sortable : true,
				width : 315
			}*/,{
				field : 'COMMENT_CONTENT',
				title : '评论内容',
				sortable : true,
				width : 270
			},{
				field : 'COMMENT_DATE',
				title : '评论时间',
				sortable : true,
				width : 210,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			}],
			options = {
				url : contextPath + '/mBlogAction/getAllComments.action',
				idField : 'COMMENT_ID',
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
					commentIdList[i] = p[i].COMMENT_ID;
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
		    url : contextPath + '/mUserAction/getAllUsersCom.action',    
		    valueField :'US_ID',    
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
		$('#blogPostId').combobox({    
		    url : contextPath + '/mBlogAction/getblogPostId.action',    
		    valueField :'BLOG_ID',    
		    textField : 'BLOG_ID',
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
				$.post('/mBlogAction/deleteComment.action', $.param({'commentIdList':commentIdList}), function(result) {
					if (result.success) {
						var txt = "删除成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$("#datagridcomment").datagrid("reload",{});
					} else {
						var txt = "删除失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}, "JSON");
			},
	};
	
});