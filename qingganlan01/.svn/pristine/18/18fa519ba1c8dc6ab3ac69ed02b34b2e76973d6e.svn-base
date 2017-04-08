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
	var friPage = 1,rows = 50;

	getUserDetail(paramUserId);
	searchMyFris(loginUsId,page,rows);
	getMyCollectBlogs(paramUserId,page,rows);
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
		 		 var k = '我的团契 ('+rows.myFellowShipNo+')'; 
			 	 $(".myFellowsNo").html(k);
				 var n = '我的动态（'+rows.blogNo+')';
				 $(".myBlog").html(n);
				 var m = '我的关注（'+rows.concernNo+')';
				 $(".myConcern").html(m);
				 $("#concern_Tab_No").html(m);
				 var l = '我的收藏（'+rows.collectBlogNo+')';
				 $(".myCollect").html(l);
				 $("#collect_Tab_No").html(l);
				 
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
function searchMyFris(loginUsId,friPage,friRows){
	 $.post('/friendAction/searchMyFris.action', $.param({'usId':loginUsId,'page':friPage,'rows':friRows}), function(res) {
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
function getMyCollectBlogs(paramUserId,page,rows){//获取所有自己和好友说说（这个数据库查询语句待修改。）
	$.post('/userAction/getMyCollectBlogs.action',$.param({"usId":paramUserId,"page":page,"rows":rows}), function(res) {
		if (res.result != null) {
			var result = res.result;
			var rows = result.rows;
			if(rows){
				var p =	'<ul class="index-shareContentUl">';
				for(var i=0;i<rows.length;i++){
				    blogId = rows[i].blogId;
					p += '<li><div class="index-shareContentLi">';
					p += '<a href=""><img src="/storage/upload/head/';//发贴人信息开始
					if(rows[i].headImg!=null){
						p += rows[i].headImg;
					}else{
						p += 'qingganlan.jpg';
					}
					p += '" class="thumbnail"></a>';
					p += '<div class="name-time"><div class="li-name">';
					p += rows[i].usName;	
					p += '</div><div class="li-time">';
	                    var birthday = new Date(rows[i].sendTime);
	                    var sendTime = birthday.toLocaleString();
	                    p += sendTime; 
	                  
					p += '</div></div>'	;//发帖人信息结束
					if(loginUsId == paramUserId){
						p += '<div class="blogTrash" onclick="confirmDelete(\''+blogId+'\',\''+loginUsId+'\');"><i class="fa fa-lg fa-trash-o"></i></div>';
					}
					p += '<div class="shareContentPart">';//帖子内容开始
					p += '<div class="content">';
					p += rows[i].content;
					p += '</div>';
					if(rows[i].blogImg!=null){
						p += '<div class="contentImg">';
						p += '<img src="/storage/upload/blog/'+rows[i].blogImg+'"></div>';
					}
					
					p += '</div>'//帖子内容结束
					/*if(loginUsId == paramUserId){
						p += '<div class="blogTrash" onclick="confirmDelete(\''+rows[i].blogId+'\',\''+rows[i].loginUsId+'\');"><i class="fa fa-lg fa-trash-o"></i></div>';
					}
					*/
					 	 	
					//与帖子关系模块开始	
					p += '<div class="functionPart"><ul>';
					//是否被赞显示状态切换
					var zanStyle = "block";
					var noZanStyle = "none";
					if(rows[i].isUpvote == 'N'){
						zanStyle = "none";
						noZanStyle = "block";
					}
					var collectStyle = "block";
					var noCollectStyle = "none";
					if(rows[i].isCollected == 'N'){
						collectStyle = "none";
						noCollectStyle = "block";
					}
					p += '<li><i class="fa fa-sm fa-comment-o myComment" onclick="showCommentDiv(\''+blogId+'\');"></i>评论('+rows[i].blogCommentedNo+')</li>';
					p += "<li><i class='fa fa-thumbs-o-up upVote "+ blogId + "' id='addUpVote' style='display:" + noZanStyle + ";' onclick='addUpVote( \""+ blogId +"\", "+ loginUsId + ", \""+ rows[i].loginHeadImg +"\");' blogid= '" + blogId + "'></i>";
					p += "<i class='fa fa-thumbs-up upVote " + blogId + 1 + "' id='delUpVote' style='display:" + zanStyle + ";' onclick='delUpVote(\"" + rows[i].blogId + "\", "+ loginUsId + ", \""+ rows[i].loginHeadImg +"\");' blogid='" + blogId + "'></i><span>(</span><span id='" + blogId + "'>" + rows[i].upvoteNo +"</span><span>)</span></li>";
					
					//p += "<li><i class='fa fa-sm fa-star' onclick='collect( \""+ rows[i].blogId +"\", "+ userId + ");'></i>收藏("+rows[i].blogCollectedNo+")</li></ul></div>";
					  p += "<li><i class='fa fa-sm fa-star-o collect"+ blogId + "' id='collect' style='display:" + noCollectStyle + ";' onclick='collect( \""+ blogId +"\", "+ loginUsId + ");'></i>";
					  p += "<i class='fa fa-sm fa-star  noCollect"+ blogId +"' id='delCollect' style='display:" + collectStyle + ";' onclick='delCollect(\"" + blogId + "\", "+ loginUsId + ");'></i><span>(</span><span id='collect" + blogId + "'>" + rows[i].blogCollectedNo +"</span><span>)</span></li>";
					p += "</ul></div>"
					  //与帖子关系模块结束
					
						
				}	
				p += '</ul>';
				$(".myCollectBlog").append(p);
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
