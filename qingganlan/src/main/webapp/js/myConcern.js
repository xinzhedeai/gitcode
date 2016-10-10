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
	$(".myBlog").click(function(){
		location.href= "person-center.html?paramUserId="+paramUserId;
	});
	$(".myConcern").click(function(){
		location.href= "myConcern.html?paramUserId="+paramUserId;
	});
	$(".myCollect").click(function(){
		location.href= "myCollection.html?paramUserId="+paramUserId;
	});
	$(".myBlogTrash").click(function(){
		location.href= "myRecovery.html?paramUserId="+paramUserId;
	});
	$(".myLog").click(function(){
		location.href= "myLog.html?paramUserId="+paramUserId;
	});
	$(".header").on("click","#search",function(){
		window.location.href="search.html?searchWords=" + $('#searchword').val();
	});
	var page = 1,rows= 50;
	//var friPage = 1,rows = 50;

	getUserDetail(paramUserId);
	//getMyBlogs(paramUserId,page,rows);
	searchMyFris(loginUsId,page,rows);
	
	searchMyConcern(paramUserId,page,rows);
	
	searchMyFellowShips(loginUsId,page,rows);
})

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
function getUserDetail(paramUserId){//获取用户详情
	$.post('/userAction/userInfoDetail.action', $.param({'usId':paramUserId}), function(res) {
		if (res.success) {
			var rows = res.result 
		}
			if(rows!=null){
				var i = '<img src="/storage/upload/head/'+rows.headImg+'"  class="thumbnail" alt="" >';
					i += '<span class="personCenterNickName">'+rows.usName+'</span>';
				$(".person-c-headImage").html(i);
				 var f = '全部好友 ('+rows.myFriendNo+')'; 
			 	 $(".myFriendsNo").html(f);
				 var n = '我的动态（'+rows.blogNo+')';
				 $(".myBlog").html(n);
				 var m = '我的关注（'+rows.concernNo+')';
				 $(".myConcern").html(m);
				 $("#concern_Tab_No").html(m);
				 var l = '我的收藏（'+rows.collectBlogNo+')';
				 $(".myCollect").html(l);
				 $("#collect_Tab_No").html(m);
				 var z = '回收站('+rows.myRecoveryNo+')';
				 $(".myBlogTrash").html(z);
				 var h = '我的日志('+rows.myLogNo+')';
				 $(".myLog").html(h);
				 var s = '留言板('+rows.myMsgNo+')';
				 $(".myMsgBoard").html(s);
				 $("img").error(function() { 
						$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 }); 
				
		} else {
			alert(result.msg);
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
		    /*	$("img").error(function() { 
					$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
		    	});*/
		    	
			}else{
				var txt= "返回数据为空！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function searchMyConcern(paramUserId,page,rows){
	 $.post('/userAction/searchMyConcern.action', $.param({'usId':paramUserId,'page':page,'rows':rows}), function(res) {
		    if(res.result){
		    	var rows = res.result.rows;
		    	var p = '<ul class="myConcernListUL">';
		    	var q = '';
		    	for(var i=0;i<rows.length;i++){
		    		p += '<li><div class="myConcernList">';
		    		p += '<img class="thumbnail"  alt="" src="/storage/upload/head/'+rows.headImg+'">';
		    		p += '<div class="ConcernCnt">';
		    		p += '<h4>'+rows[i].usName+'</h4>';
		    		p += '<ul>';
		    		var area = rows[i].area;
		    		if(area != null && area.trim() !=="" ){
						var t = "\\|";
						var reg = new RegExp(t,"g");
						area = area.replace(reg," ");
						q += "<span>";
						if(area == "其他 其他 其他" || area == "其他 其他" || area == 'null'){
							q += "其他";
						}else{
							q += area;
						}
						q += "</span>";
					}else{
						q += '';
					}
		    		p += '<li>'+q+'</li>';
		    		p += '<li>帖子（'+rows[i].blogNo+'）</li>';
		    		p += '<li>关注（'+rows[i].concernNo+'）</li>';
		    		p += '<li>粉丝（'+rows[i].fansNo+'）</li>';
		    		p += '</ul>';
		    		p += '<span class="concernPs">耶和华施行公义，为一切受屈的人伸冤。</span>';
		    		p += '</div>';
		    		if(paramUserId == loginUsId){
		    			p += '<i class="fa fa-lg fa-trash-o concernTrash"></i>';
		    		}
		    		
		    		p += '</div></li>';
		    		
		    	}
		    	p += '</ul>';
		    	$(".myConcernList").append(p);
		    	$("img").error(function() { 
					$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
		    	});
		    	
			}else{
				var txt= "返回数据为空！";
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
