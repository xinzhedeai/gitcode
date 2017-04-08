/**
 * @file blog
 * @author Jianghaipeng 
 * @date: 2015/11/05 15:49
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
				width : 200,
			},  {
				field : 'CONTENT',
				title : '帖子内容',
				sortable : true,
				width : 350,
			},{
				field : 'SEND_TIME',
				title : '发表时间',
				sortable : true,
				width : 200,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			},{
				field : 'UPVOTE_NO',
				title : '被赞数目',
				sortable : true,
				width : 80
			},{
				field : 'COMMENT_NO',
				title : '被评论数目',
				sortable : true,
				width : 80
			},{
				field : 'COLLECT_NO',
				title : '被收藏数目',
				sortable : true,
				width : 80
			}, {
				field : 'IS_DELETE',
				title : '是否已放入回收站',
				sortable : true,
				width : 80,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'是';
					} else if(value == 'N'){
						return	'否';
					}
				}
				
			}],
			options = {
				url : contextPath + '/mBlogAction/searchBlogs.action',
				idField : 'BLOG_ID',
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
				frozenColumns:[[
					{
						field : 'US_NAME',
						title : '发帖人名称',
						sortable : true,
						width : 170
					},
			    ]],
				/*frozenColumns:[[    
	                 {field:'BLOG_ID',title:'BLOG_ID',width:80},    
	                 {field:'COLLECT_NO',title:'COLLECT_NO',width:80},    
	             ]],    */
				rowStyler: function(index,row){
						return 'height:50px;';	
				}
			}
		//创建easyUI datagrid
		$("#datagridblog").datagrid(options); 
		
		$("#blog-searchReset-btn").click(function() {
			$("#datagridblog").datagrid("reload",{ });
			$('#userid').combobox('clear');
			$('#aj-searchForm input').val('');
		});
		
		$("#aj-search").click(function() {
			var patrn=/[`~!@#$%^&*_+<>?{}\/'[\]]/im; 
			var blogSname=$("#blogSname").val();
    		if(patrn.test(blogSname)){  
    			var txt=  "含有非法字符！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				return false;
    		}

			$("#datagridblog").datagrid("load",$.serializeObject($('#aj-searchForm')));
		});
		$("#aj-del").click(function(){
			var p = $("#datagridblog").datagrid('getChecked');
			if(p.length > 0){
				var blogPostIdList = new Array();
				for(var i = 0; i < p.length; i++){
					blogPostIdList[i] = p[i].BLOG_ID;
				}
				var txt=  "确定要删除？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$blog.deleteBlog(JSON.stringify(blogPostIdList));
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
		
		
		$('#userid').combobox({    
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
		
	});
	function reloadClear(){
		$('#datagridblog').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		$("#datagridblog").datagrid("reload",$.serializeObject($('#aj-searchForm')));
	}
	//durian请求体
	var $blog = {
			deleteBlog : function(blogPostIdList) {
				$.post('/mBlogAction/deleteBlog.action', $.param({'blogPostIdList':blogPostIdList}), function(result) {
					if (result.success) {
						var txt = "删除成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$("#datagridblog").datagrid("reload",{});
					} else {
						var txt = "删除失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}, "JSON");
			}
	};
	
});

	