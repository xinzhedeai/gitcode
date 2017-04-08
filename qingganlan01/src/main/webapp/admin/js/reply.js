/**
 * @file reply
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
			}/*, {
				field : 'REPLY_ID',
				title : '回复ID',
				sortable : true,
				width : 280,
			}*/, {
				field : 'COMMENT_ID',
				title : '评论ID',
				sortable : true,
				width : 280,
			}, {
				field : 'REPLY_US_ID',
				title : '回复人ID(回复评论人)', 
				sortable : true,
				width : 171,
			}, {
				field : 'REPLY_REPLY_US_ID',
				title : '回复回复人ID(回复回复人)',
				sortable : true,
				width : 171,
				formatter : function(value, row, index) {  
					if (value == '0') {
						return	'回复评论人';
					}else{
						return '回复回复人';
					}
				}
			}, {
				field : 'REPLY_CONTENT',
				title : '回复内容',
				sortable : true,
				width : 335
			},{
				field : 'REPLY_DATE',
				title : '回复日期',
				sortable : true,
				width : 210,
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
			}],
			options = {
				url : contextPath + '/mBlogAction/getAllreplys.action',
				idField : 'REPLY_ID',
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
		$("#datagridreply").datagrid(options); 
		
		$("#aj-replysearch").click(function() {
			var patrn=/[`~!@#$%^&*_+<>?{}\/'[\]]/im; 
			var replyScontent=$("#replyScontent").val();
    		if(patrn.test(replyScontent)){  
    			var txt=  "含有非法字符！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				return false;
    		}
			$("#datagridreply").datagrid("load",$.serializeObject($('#aj-replysearchForm')));
		});
		$("#reply-searchReset-btn").click(function() {
			$("#datagridreply").datagrid("load",{ });
			$('#userId').combobox('clear');
			$('#blogPostId').combobox('clear');
			$('#aj-replysearchForm input').val('');
		});
		
		$("#aj-replydel").click(function(){
			var p = $("#datagridreply").datagrid('getChecked');
			if(p.length > 0){
				var replyIdList = new Array();
				for(var i = 0; i < p.length; i++){
					replyIdList[i] = p[i].REPLY_ID;
				}
				var txt=  "确定要删除？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$reply.deletereply(JSON.stringify(replyIdList));
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
		$('#replyUserId').combobox({    
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
		$('#commentId').combobox({    
		    url : contextPath + '/mBlogAction/getCommentId.action',    
		    valueField :'COMMENT_ID',    
		    textField : 'COMMENT_ID',
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
	var $reply = {
			deletereply : function(replyIdList) {
				$.post('/mBlogAction/deletereply.action', $.param({'replyIdList':replyIdList}), function(result) {
					if (result.success) {
						var txt = "删除成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$("#datagridreply").datagrid("reload",{});
					} else {
						var txt = "删除失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}, "JSON");
			}
	};
	
/*	(function() {//删除
		$class('nssoft.openApi.deletereply.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result.success) {
						var txt=  "删除成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$("#datagridreply").datagrid("reload",{ });
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
	}());*/
	
	
	
});