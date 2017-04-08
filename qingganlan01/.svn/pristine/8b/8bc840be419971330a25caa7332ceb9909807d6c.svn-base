$(document).ready(function() {
	$('.header').load("header.html",function(){
		getHeaderUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	var paramUserId = getParameter("paramUserId");//通过好友列表链接进来的
	loginUsId = getCookie('loginUsId');
	
	if (!loginUsId) {
		location.href = '/login.html';
		return false;
	}
	$(".header").on("click",".header_person_set",function(){
		location.href="person-set.html";
	});
	$(".header").on("click",".topIcon",function(){
		location.href="index.html";
	});
	$(".header").on("click",".myHomePage",function(){
		location.href="person-center.html?paramUserId="+loginUsId;
	});

	$('input:text:first').focus(); 
//	$("input:text:first").keypress(function(e){ //搜索
	$(".header").on("keypress","#searchword",function(e){//我去，感謝主，太神奇了，前幾天一直都不好用，今天好使了，哈哈。
		if(e.which==13){ 
			window.location.href="search.html?searchWords=" + $('#searchword').val();
		} 
	});
//$("#search").click(function(){//搜索
	$(".header").on("click","#search",function(){
		window.location.href="search.html?searchWords=" + $('#searchword').val();
	});
	//点击页面任何位置弹框关闭
	$(document).click(function(){
	    $(".cardDiv").hide();
	});
	$(".cardDiv").hide();
	var page = 1,rows= 50;
	var keyword = getParameter('searchWords');
	keyword = decodeURIComponent(keyword);
//	keyword = keyword ? keyword : '团契';
	KEYWORD = keyword ? keyword : '团契';
	searchUsers(page, rows, KEYWORD);
	searchFellowShips(page, rows, KEYWORD);
	//searchChurchs(paged, rows, KEYWORD);//搜索教会，功能待定
});

function getHeaderUserDetail(loginUsId){//获取用户详情
	$.post('/userAction/userInfoDetail.action', $.param({'usId':loginUsId}), function(res) {
		var rows = null;
		if (res.success) {
			rows = res.result ;
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
				
			}else{
				var txt= "为获取到相关数据！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		} else {
			var txt= res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function searchUsers(page, rows, KEYWORD){//获取用户详情
	$.post('/userAction/searchUsers.action', $.param({'keyword':KEYWORD,'page':page,'rows':rows}), function(res) {
		
		if (res.success) {
			var rows = res.result.rows ;//之前在这里居然遇到个坑，原因是rows没有获取到相应的值。为undefined，而且不为null，所以循环才没有进去
			if(rows!=null){
				var p = '';
				var user;
				var tempStr;
				for(var i=0;i<rows.length;i++){
					tempStr=JSON.stringify(rows[i]);
					user=encodeURIComponent(tempStr);
					p += '<li class="person"><a onmouseout="hidePopup()" onmouseover="showPopup(this,\'' +user+'\')">';
					p += '<img src="/storage/upload/head/'+rows[i].HEAD_IMG+'" alt=""></a>';
				
					var usName = rows[i].US_NAME;
					if(usName.length>5){
						usName = usName.substr(0,5)+"...";
					}
					p += '<span>'+usName+'</span></li>';
				}
				$(".searchUSUl").append(p);
				 $("img").error(function() { 
						$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 }); 
			}else{
				/*var txt= "尚未搜索到符合条件的用户信息！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);*/
				$(".searchUSUl").html("<strong>尚未搜索到符合条件的用户信息</strong>");
			}
		} else {
			var txt= res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function searchFellowShips(page, rows, KEYWORD){//获取用户详情
	$.post('/fellowShipAction/searchFS.action', $.param({'keyword':KEYWORD,'page':page,'rows':rows}), function(res) {
		
		if (res.success) {
			var rows = res.result.rows
			if(rows){
				var p = '';
				var user;
				var tempStr;
				for(var i=0;i<rows.length;i++){
					tempStr=JSON.stringify(rows[i]);
					fS=encodeURIComponent(tempStr);
					p += '<li class="person"><a onmouseout="hideFSPopup()" onmouseover="showFSPopup(this,\'' +fS+'\')">';
					p += '<img src="/storage/upload/head/'+rows[i].FS_HEAD_IMG+'" alt=""></a>';
					var fsName = rows[i].FS_NAME;
					if(fsName.length>5){
						fsName = fsName.substr(0,5)+"...";
					}
					p += '<span>'+fsName+'</span></li>';
				}
				$(".searchFSUl").append(p);
				$("img").error(function() { 
					$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 }); 
			}else{
			/*	var txt= "尚未搜索到符合条件的团契信息！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);*/
				$(".searchFSUl").html("<strong>尚未搜索到符合条件的团契信息</strong>");
			}
		} else {
			var txt= res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function showPopup(thisObj,user){
	var user = decodeURIComponent(user);//这里只是得到的json字符串。
	user = JSON.parse(user);//将json字符串转换为json对象，从而才能去取到数据。
	$(".cardDivName").html(user.US_NAME);
	//console.info(user);
	var sex = user.SEX;
	var area = user.AREA;
	var ps = user.PS;
	var friendUsId = user.US_ID;
	if(sex == '0')
		sex = '男'
	else
		sex = '女'
	$(".cardDivSex").html(sex);
	$(".cardDivArea").html(area);
	$(".cardDivPs").html(ps);
	var p = '';
	if(loginUsId != friendUsId){
		p += '<button type="button" onclick="addFriend(\'' +loginUsId+'\',\'' +friendUsId+'\')"  class="btn"><i class="fa fa-plus"></i>加好友</button>';
	}
	$(".cardBottom").html(p);
	var d = $(thisObj);
	var pos = d.offset();
	var t = pos.top + d.height() +30; // 弹出框的上边位置
	var l = pos.left + d.width() - 10;  // 弹出框的左边位置
	$(".cardDiv").css({ "top": t, "left": l }).show("normal");

}

function showFSPopup(thisObj,fS){
	
	var fS = decodeURIComponent(fS);//这里只是得到的json字符串。
	fS = JSON.parse(fS);//将json字符串转换为json对象，从而才能去取到数据。
	$(".cardDivName").html(fS.FS_NAME);
//	console.info(user);
	var fSType = fS.TYPE;
	var area = fS.ADDRESS;
	var ps = fS.FS_PS;
	var fSId= fS.FS_ID;
	console.info(fSId);
	if(fSType == '0')
		fSType = '教会团契';
	else
		fSType = '大学生团契';
	$(".cardDivFSType").html(fSType);
	$(".cardDivArea").html(area);
	$(".cardDivPs").html(ps);
	var p = '';
		p += '<button type="button" onclick="joinFellowShip(\'' +fSId+'\')"  class="btn"><i class="fa fa-plus"></i>加入该团契</button>';
	$(".cardBottom").html(p);
	var d = $(thisObj);
	var pos = d.offset();
	var t = pos.top + d.height() +30; // 弹出框的上边位置
    var l = pos.left + d.width() - 10;  // 弹出框的左边位置
    $(".fSCardDiv").css({ "top": t, "left": l }).show("normal");
}
function hidePopup(){
	$(".cardDiv").mouseover(function(){
		$(".cardDiv").show();
	}).mouseout(function(){
		$(".cardDiv").hide();
	});
	$(".cardDiv").hide();
}
function hideFSPopup(){
	$(".fSCardDiv").mouseover(function(){
		$(".fSCardDiv").show();
	}).mouseout(function(){
		$(".fSCardDiv").hide();
	});
	$(".fSCardDiv").hide();
}

function addFriend(loginUsId,friendId){
	 $.post('/userAction/addFriend.action', $.param({'usId':loginUsId,'friendId':friendId}), function(res) {
		    if(res.success){
		    	var txt= res.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				//location.href = "person-center.html?paramUserId="+paramUserId;
			}else{
				var txt= res.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function joinFellowShip(fSId){//加入团契
	 $.post('/userAction/joinFellowShip.action', $.param({'usId':loginUsId,'fSId':fSId}), function(res) {
		    if(res.success){
	    		var txt= "成功加入该团契！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}else{
				var txt= "加入失败！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
