$(document).ready(function() {
	$('.header').load("header.html",function(){
		getHeaderUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	var fellowShipId = getParameter("fellowShipId");//通过团契列表链接进来的
	setCookie('fellowShipId',fellowShipId);
	console.info(fellowShipId);
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
	$(".myBlog").click(function(){
		location.href= "person-center.html?paramUserId="+paramUserId;
	})
	$(".header").on("click","#search",function(){
		window.location.href="search.html?searchWords=" + $('#searchword').val();
	});
	
	$(".fellowShipPrayWall").click(function(){
		location.href= "prayWall.html";
	})
/*	$(".importFellowMembers").click(function(){
		("#excelUp").showDialog();
	});*/
	//点击页面任何位置弹框关闭
	$(document).click(function(){
	    $(".cardDiv").hide();
	});
	
	var page = 1,rows= 50;
	var friPage = 1,rows = 50;
	

//	getUserDetail(paramUserId);
	getFellowShipDetail(fellowShipId,loginUsId);
	getFellowShipMsg(fellowShipId,loginUsId,page,rows);
	searchMyFris(loginUsId,page,rows);
	searchMyFellowShips(loginUsId,page,rows);
	$("#index_send_blog").click(function(){// 发送帖子
		var  msgContent = $("#index_area_top").val().trim();
		addFellowShipMsg(fellowShipId,loginUsId,msgContent);
	})
	$("#importFellowMembers").click(function(){// 发送帖子
		addFSMembersBatch(fellowShipId,loginUsId,msgContent);
	})
	$("#excelUp").plupload({
		// General settings
		runtimes : 'html5,flash,silverlight,html4',
		url : '/fellowShipAction/addFSMembersBatch.action?fsId='+fellowShipId,

		// User can upload no more then 20 files in one go (sets multiple_queues to false)
		max_file_count: 20,
		
		chunk_size: '1mb',
		// Resize images on clientside if we can
		resize : {
			width : 200, 
			height : 200, 
			quality : 90,
			crop: true // crop to exact dimensions
		},
		filters : {
			// Maximum file size
			max_file_size : '1000mb',
			// Specify what files to browse for
			mime_types: [
				{title : "Image files", extensions : "jpg,gif,png"},
				{title : "Zip files", extensions : "zip"},
				{title : "Excel files", extensions:"xls,xlsx"}
				
			]
		},
		// Rename files by clicking on their titles
		rename: true,
		
		// Sort files
		sortable: true,

		// Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)
		dragdrop: true,

		// Views to activate
		views: {
			list: true,
			thumbs: true, // Show thumbs
			active: 'thumbs'
		},

		   flash_swf_url : 'lib/plugin/plupload-2.1.2/Moxie.swf',
		silverlight_xap_url : 'lib/plugin/plupload-2.1.2/MoxiDe.xap'
	});


	// Handle the case when form was submitted before uploading has finished
	$('#form').submit(function(e) {
		// Files in queue upload them first
		if ($('#excelUp').plupload('getFiles').length > 0) {

			// When all files are uploaded submit form
			$('#excelUp').on('complete', function() {
				$('#form')[0].submit();
			});

			$('#excelUp').plupload('start');
		} else {
			alert("You must have at least one file in the queue.");
		}
		return false; // Keep the form from submitting
	});
})

function getHeaderUserDetail(loginUsId){//获取用户详情
	$.post('/userAction/userInfoDetail.action', $.param({'usId':loginUsId}), function(res) {
		if (res.success) {
			var rows = res.result ;
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
				 var f = '全部好友 ('+rows.myFriendNo+')'; 
			 	 $(".myFriendsNo").html(f);
		 		 var k = '我的团契 ('+rows.myFellowShipNo+')'; 
			 	 $(".myFellowsNo").html(k);
				 $("img").error(function() { 
						$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 }); 
				
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
function getFellowShipDetail(fellowShipId,loginUsId){//获取团契详情
	$.post('/fellowShipAction/getFellowShipDetail.action', $.param({'fsId':fellowShipId,'usId':loginUsId}), function(res) {
		if (res.success) {
			var rows = res.result;
		}
			if(rows!=null){
				 var birthday = new Date(rows.buildDate);
                 var buildDate = birthday.toLocaleString();
                 var q = '<img src="/storage/upload/head/'+rows.fsHeadImg+'"  class="thumbnail" width="120" height="120" alt="" >';
					 q += '<span class="personCenterNickName">'+rows.fsName+'</span>';
				$(".fellowShipTop").html(q);
                 var p = '';
                 	 p += '团契成员（'+rows.membersNo+'）';
                 	 $(".memberNo").text(p);
                 var a = '<li><a><i class="fa fa-lg fa-user"></i>创建者：'+rows.fellowShipMasterName+'</a></li>';
					a += '<li><a><i class="fa fa-lg fa-clock-o"></i>创建时间：'+buildDate+'</a></li>';
					a += '<li><a><i class="fa fa-lg fa-edit"></i>团契简介：'+rows.fsPs+'</a></li>';
					a += '<li><a><i class="fa fa lg fa-home"></i>聚会地点：'+rows.address+'</a></li>';
				$(".fellowShipInfoUl").html(a);
				var users = rows.fellowMembers;
				var b = '';
				//var usName = '',sex = '',area = '',ps = '';
				//var user = '';
				var str=[];
				var user;
				var tempStr;
				for(var i=0;i<users.length;i++){
				//	str.push(users[i]);
					tempStr=JSON.stringify(users[i]);	
				//	sex = users[i].sex;
					user=encodeURIComponent(tempStr);
				//	console.info(user);
				//	area = users[i].area;
				//	ps = users[i].ps;
					b += '<li><a onmouseout="hidePopup()" onmouseover="showPopup(this,\'' +user+'\')"><img src="/storage/upload/head/'+users[i].headImg+'" alt=""></a>';
					b += '<div class="img-span "><span class="textoverflow">'+users[i].usName+'</span></div></li>'
				}
				
				$(".fellowMemberUl").append(b);
				 $("img").error(function() { 
						$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 }); 
				
		} else {
			alert(res.msg);
		}
	}, "JSON");
}
function getFellowShipMsg(fellowShipId,usId,page,rows){//获取所有自己和好友说说（这个数据库查询语句待修改。）
	$.post('/fellowShipAction/getFellowShipMsg.action',$.param({"fsId":fellowShipId,"usId":usId,"page":page,"rows":rows}), function(res) {
		if (res.result != null) {
			var result = res.result;
			var rows = result.rows;
			if(rows){
				var p =	'<ul class="index-shareContentUl">';
				for(var i=0;i<rows.length;i++){
					fsMsgId = rows[i].FS_MSG_ID;
					p += '<li><div class="index-shareContentLi">';
					p += '<a href=""><img src="/storage/upload/head/';//发贴人信息开始
					if(rows[i].HEAD_IMG!=null){
						p += rows[i].HEAD_IMG;
					}else{
						p += 'qingganlan.jpg';
					}
					p += '" class="thumbnail"></a>';
					p += '<div class="name-time"><div class="li-name">';
					p += rows[i].US_NAME;	
					p += '<i class="fa fa-md fa-user"></i></div><div class="li-time">';
	                    var birthday = new Date(rows[i].SEND_DATE);
	                    var sendTime = birthday.toLocaleString();
	                    p += sendTime; 
	                  
					p += '</div></div>'	;//发帖人信息结束
					if(usId == rows[i].SEND_MSG_US_ID){
						p += '<div class="blogTrash" onclick="confirmDelete(\''+fsMsgId+'\',\''+fellowShipId+'\');"><i class="fa fa-lg fa-trash-o"></i></div>';
					}
					p += '<div class="shareContentPart">';//帖子内容开始
					p += '<div class="content">';
					p += rows[i].MSG_CONTENT;
					p += '</div>';
					p += '</div>'//帖子内容结束
				}	
				p += '</ul>';
				$(".fellowShipMsg").append(p);
			}
		
		} else {
			var txt=  "发生错误！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function searchMyFellowShips(loginUsId,page,rows){
	 $.post('/fellowShipAction/searchMyFellowShips.action', $.param({'usId':loginUsId,'page':page,'rows':rows}), function(res) {
		    if(res.result){
		    	var rows = res.result.rows;
		    	var p = '';
		    	for(var i=0;i<rows.length;i++){
		    		p += '<li class="myFriendsLi">';
		    		p += '<a href="fellowShip.html?fellowShipId='+rows[i].fsId+'"><img src="/storage/upload/fellowHead/'+rows[i].fsHeadImg+'">'+rows[i].fsName+'</a></li>'
		    	}
		    	$(".myFellowsUl").append(p);
		    /*	$("img").error(function() { 
					$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
		    	});*/
		    	
			}else{
				var txt= "返回数据为空！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function searchMyFris(loginUsId,page,rows){
	 $.post('/friendAction/searchMyFris.action', $.param({'usId':loginUsId,'page':page,'rows':rows}), function(res) {
		    if(res.result){
		    	var rows = res.result.rows;
		    	var p = '';
		    	for(var i=0;i<rows.length;i++){
		    		p += '<li class="myFriendsLi">';
		    		p += '<a href="person-center.html?paramUserId='+rows[i].usId+'"><img src="/storage/upload/head/'+rows[i].headImg+'">'+rows[i].usName+'</a></li>'
		    	}
		    	$(".myFriendsUl").append(p);
		    	$("img").error(function() { 
					$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
		    	});
		    	
			}else{
				var txt= "返回数据为空！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function addFellowShipMsg(fsId,userId,msgContent){
	$.post('/fellowShipAction/addFellowShipMsg.action', $.param({'fsId':fsId,'usId':userId,'msgContent':msgContent.trim()}), function(result) {
		if (result.success) {
			var txt= result.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			location.href="fellowShip.html?fellowShipId="+fsId;
		} else {
			var txt= result.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function confirmDelete(fsMsgId,fsId){//提示框，是否删除。
	var txt=  "确定删除？";
	var option = {
			title: "系统信息",
			btn: parseInt("0011",2),
			onOk: function(){
				deleteFellowShipMsg(fsMsgId,fsId);
			},
		onCancel: function(){
			
		}
	}
	window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
}
function deleteFellowShipMsg(fsMsgId,fsId){
	 $.post('/fellowShipAction/deleteFellowShipMsg.action', $.param({'fsMsgId':fsMsgId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				alert(fsId);
				location.href="fellowShip.html?fellowShipId="+fsId;
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
	 }, "JSON");
}
function addFSMembersBatch(fsMsgId,fsId){
	 $.post('/fellowShipAction/addFSMembersBatch.action', $.param({'fsMsgId':fsMsgId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				alert(fsId);
				location.href="fellowShip.html?fellowShipId="+fsId;
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
	 }, "JSON");
}

function showPopup(thisObj,user){
	var user = decodeURIComponent(user);//这里只是得到的json字符串。
		user = JSON.parse(user);//将json字符串转换为json对象，从而才能去取到数据。
	$(".cardDivName").html(user.usName);
//	console.info(user);
	var sex = user.sex;
	var area = user.area;
	var ps = user.ps;
	var isConcerned = user.isConcern;
	var fellowMemberId = user.fellowMemberUsId;
	if(sex == '0')
		sex = '男'
	else
		sex = '女'
	$(".cardDivSex").html(sex);
	$(".cardDivArea").html(area);
	$(".cardDivPs").html(ps);
	var p = '';
	if(isConcerned || isConcerned  == 'Y'){
		//console.info(isConcerned+"啊哈");
		p += '<button type="button" onclick="delConcern(\'' +loginUsId+'\',\'' +fellowMemberId+'\')"  class="btn"><i class="fa fa-minus"></i>取消关注</button>';
	}else{
		
		p += '<button type="button" onclick="addConcern(\'' +loginUsId+'\',\'' +fellowMemberId+'\')"  class="btn"><i class="fa fa-plus"></i>加关注</button>';
	}
	$(".cardBottom").html(p);
	var d = $(thisObj);
	var pos = d.offset();
	var t = pos.top + d.height() +50; // 弹出框的上边位置
    var l = pos.left + d.width() - 30;  // 弹出框的左边位置
    $(".cardDiv").css({ "top": t, "left": l }).show("normal");
}
function hidePopup(){
	$(".cardDiv").mouseover(function(){
		$(".cardDiv").show();
	}).mouseout(function(){
		$(".cardDiv").hide();
	});
	$(".cardDiv").hide();
}
function addConcern(loginUsId,fellowMemberId){
	 $.post('/fellowShipAction/addConcern.action', $.param({'usId':loginUsId,'concernedUsId':fellowMemberId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			//	location.href="fellowShip.html?fellowShipId="+fsId;
			}else{
				var txt= "添加关注失败！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
	 }, "JSON");
}
function delConcern(loginUsId,fellowMemberId){
	 $.post('/fellowShipAction/delConcern.action', $.param({'usId':loginUsId,'concernedUsId':fellowMemberId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			//	location.href="fellowShip.html?fellowShipId="+fsId;
			}else{
				var txt= "添加关注失败！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
	 }, "JSON");
}

