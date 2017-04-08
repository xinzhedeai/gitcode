$(function(){
	$('.header').load("header.html",function(){
		getHeaderUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	//var paramFellowId = getParameter("paramFellowId");//获取当前团契的id
	var paramFellowId = 'fs1003'
	loginUsId = getCookie('loginUsId');
	
	if (!loginUsId) {
		location.href = '/login.html';
		return false;
	}
	$(".header").on("click",".header_person_set",function(){
		location.href="person-set.html";
	})
	$(".header").on("click",".topIcon",function(){
		location.href="index.html";
	})
	$(".header").on("click",".myHomePage",function(){
		location.href="person-center.html?paramUserId="+loginUsId;
	})
	$(".sendPray").click(function(){
		location.href="prayAdd.html?paramUserId="+loginUsId;
	})
	$(".lookPrayDisplay").click(function(){
		location.href="prayWall.html?paramUserId="+loginUsId;
	})
	$(".lookPrayList").click(function(){
		location.href="prayList.html?paramUserId="+loginUsId;
	})

	
	$('#prayListTable').datagrid({
		url : '/fellowShipAction/searchPrays.action?fsId='+paramFellowId,
		idField : 'LOG_ID',
		pagination : true,
		fitColumns : true,
		rownumbers : true,
		checkOnSelect:false,
		width : 1150,
		sortOrder : 'desc',
		pageSize : 10,
		columns : [[{
			field : 'ck',
			checkbox : true
		}, {
			field : 'PRAY_ID',
			title : '祷告编号',
			sortable : true,
			width : 220,
		}, {
			field : 'PRAY_CONTENT',
			title : '祷告内容',
			sortable : true,
			width : 220,
			formatter : function(value, row, index) { 
				var a ='<a href=logDetail.html?logId='+row.LOG_ID+'>';
				if(value.length>30){
					a += value.substring(0,30)+'...';
				}else{
					a += value;
				}
				a += '</a>';
				return a;
			}
		}, {
			field : 'SENDER_NAME',
			title : '发送人',
			sortable : true,
			width : 170,
		}, {
			field : 'RECEIVER_NAME',
			title : '接受人',
			sortable : true,
			width : 170,
			
		}, {
			field : 'PRAY_DATE',
			title : '日期',
			sortable : true,
			width : 170,
			
		}]],
		loadFilter : function(data) {
			if (data != null) {
				console.info(data);
				if(data.result.rows != null){
					return data.result;
				}else{
					var txt=  "没有相关数据！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					$('#prayListTable').datagrid('loadData', { total: 0, rows: [] });
				}
			} else {
				window.location.href='/admin/login.html';
			}
		}
	});

});	
	function getHeaderUserDetail(loginUsId){//获取用户详情
		$.post('/userAction/userInfoDetail.action', $.param({'usId':loginUsId}), function(res) {
			if (res.success) {
				var rows = res.result 
			}
				if(rows!=null){
					var p = '';//中文p
					p = "<img class='thumbnail' src='";
					if(rows.headImg != null){
						p +=  "/storage/upload/head/";
						p += rows.headImg;
					}else{
						p +=  "/lib/img/images/microlaw.jpg";
					}
					 p += "' width='120' height='120'>";
					var q = rows.usName;
						q += "<span class='caret'></span>";
					 $(".indexHeadImg").html(p);
					 $(".usName").html(q);	
					 $("img").error(function() { 
							$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
					 }); 
					
			} else {
				alert(result.msg);
			}
		}, "JSON");
	}
	