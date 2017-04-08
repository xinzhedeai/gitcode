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
				field : 'BlogPostID',
				title : '帖子ID',
				sortable : true,
				width : 220,
			}, {
				field : 'NodeID',
				title : '微法ID',
				sortable : true,
				width : 170
			},{
				field : 'Date',
				title : '发布时间',
				sortable : true,
				width : 160
			},{
				field : 'NickName',
				title : '用户昵称',
				sortable : true,
				width : 160
			},{
				field : 'Nodetitle',
				title : '微法标题',
				sortable : true,
				width : 100
			},{
				field : 'Content',
				title : '帖子内容',
				sortable : true,
				width : 220
			}, {
				field : 'Type',
				title : '帖子类型',
				sortable : true,
				width : 70,
				formatter : function(value, row, index) {  
					if (value == 'NORMAL') {
						return	'普通';
					} else if(value == 'THEORY'){
						return	'法理';
					} else if(value == 'OPINION'){
						return	'意见';
					}
				}
				
			}, {
				field : 'HotBlogPost',
				title : '热帖',
				sortable : true,
				width : 50,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'是';
					} else {
						return	'否';
					}
				}
			}, {
				field : 'UpVoteNo',
				title : '赞',
				sortable : true,
				width : 40,
			},{
				field : 'ClassicalBlogPost',
				title : '经典贴',
				sortable : true,
				width : 55,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'是';
					} else {
						return	'否';
					}
				}
			}],
			options = {
				url : contextPath + '/v1/api/management/blogpost/blogposts.json',
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
		$("#datagridblog").datagrid(options); 
		
		$("#blog-searchReset-btn").click(function() {
			$("#datagridblog").datagrid("reload",{ });
			$('#userid').combobox('clear');
			$('#nodeId').combobox('clear');
			$('#aj-searchForm select').val('');
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
					blogPostIdList[i] = p[i].BlogPostID;
				}
				var txt=  "确定要删除？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$blog.deleteBlogPost(JSON.stringify(blogPostIdList));
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
		
		$("#aj-hotset").click(function(){
			var p = $("#datagridblog").datagrid('getChecked');
			if(p.length > 0){
				var blogPostIdList = new Array();
				for(var i = 0; i < p.length; i++){
					if(p[i].HotBlogPost == 'N'){
						blogPostIdList[i] = p[i].BlogPostID;
					}else{
						var txt=  "请选择不是热帖的数据进行设置！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false;
					}
					
				}
				var txt=  "确定要设为热帖？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$blog.setHotBlogPost(JSON.stringify(blogPostIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择要设置的数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		
		$("#aj-hotdel").click(function(){
			var p = $("#datagridblog").datagrid('getChecked');
			if(p.length > 0){
				var blogPostIdList = new Array();
				for(var i = 0; i < p.length; i++){
					if(p[i].HotBlogPost == 'Y'){
						blogPostIdList[i] = p[i].BlogPostID;
					}else{
						var txt=  "请选择热帖的数据进行设置！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false;
					}
					
				}
				var txt=  "确定要取消热帖？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$blog.jremoveHotBlogPost(JSON.stringify(blogPostIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择要设置的数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		$("#aj-classset").click(function(){
			var p = $("#datagridblog").datagrid('getChecked');
			if(p.length > 0){
				var blogPostIdList = new Array();
				for(var i = 0; i < p.length; i++){
					if(p[i].ClassicalBlogPost == 'N'){
						blogPostIdList[i] = p[i].BlogPostID;
					}else{
						var txt=  "请选择不是经典帖的帖子进行设置！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false;
					}
					
				}
				var txt=  "确定要设为经典评？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$blog.jsetClassicalBlogPost(JSON.stringify(blogPostIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择要设置的数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		
		$("#aj-classdel").click(function(){
			var p = $("#datagridblog").datagrid('getChecked');
			if(p.length > 0){
				var blogPostIdList = new Array();
				for(var i = 0; i < p.length; i++){
					if(p[i].ClassicalBlogPost == 'Y'){
						blogPostIdList[i] = p[i].BlogPostID;
					}else{
						var txt=  "请选择经典帖的帖子进行设置！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						return false;
					}
					
				}
				var txt=  "确定要取消经典评？";
				var option = {
						title: "系统信息",
						btn: parseInt("0011",2),
						onOk: function(){
							$blog.jremoveClassicalBlogPost(JSON.stringify(blogPostIdList));
						},
					onCancel: function(){
						
					}
				}
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
			}else{
				var txt=  "请选择要设置的数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
		$('#userid').combobox({    
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
	});
	function reloadClear(){
		$('#datagridblog').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		$("#datagridblog").datagrid("reload",$.serializeObject($('#aj-searchForm')));
	}
	//durian请求体
	var $blog = {
			deleteBlogPost : function(blogPostIdList) {
				var deleteBlogPost = new nssoft.openApi.deleteBlogPost.api();
				deleteBlogPost.addParam('blogPostIdList', blogPostIdList);
				deleteBlogPost.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/blogpost/deleteBlogPost.json'
				});
			},
			setHotBlogPost : function(blogPostIdList) {
				var setHotBlogPost = new nssoft.openApi.setHotBlogPost.api();
				setHotBlogPost.addParam('blogPostIdList', blogPostIdList);
				setHotBlogPost.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/blogpost/setHotBlogPost.json'
				});
			},
			jremoveHotBlogPost : function(blogPostIdList) {
				var jremoveHotBlogPost = new nssoft.openApi.jremoveHotBlogPost.api();
				jremoveHotBlogPost.addParam('blogPostIdList', blogPostIdList);
				jremoveHotBlogPost.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/blogpost/removeHotBlogPost.json'
				});
			},
			jsetClassicalBlogPost : function(blogPostIdList) {
				var jsetClassicalBlogPost = new nssoft.openApi.jsetClassicalBlogPost.api();
				jsetClassicalBlogPost.addParam('blogPostIdList', blogPostIdList);
				jsetClassicalBlogPost.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/blogpost/setClassicalBlogPost.json'
				});
			},
			jremoveClassicalBlogPost : function(blogPostIdList) {
				var jremoveClassicalBlogPost = new nssoft.openApi.jremoveClassicalBlogPost.api();
				jremoveClassicalBlogPost.addParam('blogPostIdList', blogPostIdList);
				jremoveClassicalBlogPost.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/blogpost/removeClassicalBlogPost.json'
				});
			},
	
	};
	
	(function() {//删除
		$class('nssoft.openApi.deleteBlogPost.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result.success) {
						var txt=  "删除成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						//reloadClear();
						$("#datagridblog").datagrid("reload",{});
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
	
	(function() {//设热帖
		$class('nssoft.openApi.setHotBlogPost.api').extend(nssoft.absAPI).define({
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
	
	(function() {//取消热帖
		$class('nssoft.openApi.jremoveHotBlogPost.api').extend(nssoft.absAPI).define({
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
	
	(function() {//设经典评
		$class('nssoft.openApi.jsetClassicalBlogPost.api').extend(nssoft.absAPI).define({
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
	
	(function() {//取消经典评
		$class('nssoft.openApi.jremoveClassicalBlogPost.api').extend(nssoft.absAPI).define({
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

	