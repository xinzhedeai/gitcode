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
	getMyBlogs(paramUserId,page,rows);
	searchMyFris(loginUsId,page,rows);
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
				 var l = '我的收藏（'+rows.collectBlogNo+')';
				 $(".myCollect").html(l);
				 
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
function getMyBlogs(paramUserId,page,rows){//获取所有自己和好友说说（这个数据库查询语句待修改。）
	$.post('/blogAction/searchMyRecBlogs.action',$.param({"usId":paramUserId,"page":page,"rows":rows}), function(res) {
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
					if(loginUsId == rows[i].blogUsId){
						 
						 p += '<div class="blogTrash" onclick="blogReverse(\''+blogId+'\',\''+loginUsId+'\');"><i class="fa fa-lg fa-mail-forward"></i></div>';
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
					//点赞信息开始
						var upvoteInfoRows = rows[i].upvoteInfo;
						if(upvoteInfoRows!=null){
							p += '<div class="index-zan"><ol>';
							p += '<li><i class="fa fa-lg fa-thumbs-up"></i></li>';
							for(var j=0;j<upvoteInfoRows.length;j++){
								p += '<li><img src="/storage/upload/head/'+upvoteInfoRows[j].upvoteHeadImg+'"></li>';
							}
							p += '<li class="upVoteText'+blogId+'"><span>觉得赞！</span></li>'	;
							p += '</ol></div>';
						}
					//获取点赞人信息结束
					
						
					//获取所有评论开始
					var commentInfoRows = rows[i].commentInfo;
					if(commentInfoRows!=null){
						p += '<div class="index-comment"><ol>';
						 	/*p += '<li><i class="fa fa-lg fa-thumbs-up"></i></li>';*/
							for(var k=0;k<commentInfoRows.length;k++){
								p += '<li>';
								p += '<img src="/storage/upload/head/'+commentInfoRows[k].commentHeadImg+'">';
								p += '<div class="commContentAll">';
								p += '<div class="commContent">';
								p += '<span>'+commentInfoRows[k].commentUsName+'&nbsp;&nbsp;:</span>';
								p += commentInfoRows[k].commentContent;
								p += '</div>'
								p += '<div class="commDate">'
							    var birthday = new Date(commentInfoRows[k].commentDate);
			                    var commentDate = birthday.toLocaleString();
								p += '<span>'+commentDate+'</span>';	
								commentId = commentInfoRows[k].commentId;
								p += '<i class="fa fa-sm fa-comment iCommentReply " onclick="showReplyDiv(\''+loginUsId+'\',\''+blogId+'\',\''+commentInfoRows[k].commentId+'\');"></i>';
								p += '</div>'	
								p += '</div>'//每个评论结束
								var replyInfoRows = commentInfoRows[k].replyInfo;
								if(replyInfoRows!=null){
									p += '<div class="index-reply">';//评论的全部回复s开始
									p += '<ol>'	;
									for(var n=0;n<replyInfoRows.length;n++){
										p += '<li>';
										p += '<div class="replyContentAll">';
										p += '<div class="replyContent">';
										replyUsId = replyInfoRows[n].replyUsId;
										if(replyInfoRows[n].replyReplyUsId == '0'){
											p += '<img src="/storage/upload/head/'+replyInfoRows[n].replyHeadImg+'">';
											p += '<span>'+replyInfoRows[n].replyUsName+'&nbsp;&nbsp;回复</span>&nbsp;&nbsp;';
											p += '<img src="/storage/upload/head/'+commentInfoRows[k].commentHeadImg+'">';
											p += '<span>'+commentInfoRows[k].commentUsName+'</span>:'
											p +=  replyInfoRows[n].replyContent;
											p += '</div>';	
											p += '<div class="replyDate">';
											 var birthday = new Date(replyInfoRows[n].replyDate);
						                     var replyDate = birthday.toLocaleString();
											p += '<span>'+replyDate+'</span>';
											//这里回复人的回复有问题，可能需要重新构建表。
											p += '<i class="fa fa-sm fa-comment iReplyReply"  onclick="showReplyReplyDiv(\''+loginUsId+'\',\''+replyUsId+'\',\''+blogId+'\',\''+commentId+'\');"></i>';
											p += '</div>';	
											p += '</div>';
											
										}else{
											p += '<img src="/storage/upload/head/'+replyInfoRows[n].replyReplyHeadImg+'">';
											p += '<span>'+replyInfoRows[n].replyReplyUsName+'&nbsp;&nbsp;回复</span>&nbsp;&nbsp;';
											p += '<img src="/storage/upload/head/'+replyInfoRows[n].replyHeadImg+'">';
											p += '<span>'+replyInfoRows[n].replyUsName+'</span>:'
											p +=  replyInfoRows[n].replyContent;
											p += '</div>';	
											p += '<div class="replyDate">';
											 var birthday = new Date(replyInfoRows[n].replyDate);
						                     var replyDate = birthday.toLocaleString();
											p += '<span>'+replyDate+'</span>';
											//这里回复人的回复有问题，可能需要重新构建表。
											var replyReplyUsId = replyInfoRows[n].replyReplyUsId;
											p += '<i class="fa fa-sm fa-comment iReplyReply"  onclick="showReplyReplyDiv(\''+loginUsId+'\',\''+replyReplyUsId+'\',\''+blogId+'\',\''+commentId+'\');"></i>';
											p += '</div>';	
											p += '</div>';
										}
										
										p += '</li>';	
									}
									p += '</ol>';
									p += '</div>';	//评论的全部回复s结束
								}	
								
								p += '</li>';
							}//遍历所有评论结束
							p += '</ol></div>';//获取所有评论结束
						}//判断评论是否为空
						
						//发表评论的回复
						p += '<div class="sendAndReply reply'+blogId+'" style="display:none;">';
						p += '<div class="sendContent">';
						p += '<textarea class="form-control sendArea sendAreaReply replyArea'+blogId+'"></textarea>';
						p += '</div><div class="sendContentBtn'+blogId+'">';
						p += '</div></div>';
						//发表评论的回复
							
						//发表评论
						p += '<div class="sendAndComment comment'+blogId+'" style="display:none;">';
						p += '<div class="sendContent">';
						p += '<textarea class="form-control sendArea sendCommentArea commentArea'+blogId+'" ></textarea>';
						p += '</div><div class="sendContentBtn">';
						p += '<button type="button" class="btn btn-default btn-sm sendCommentBtn" id="" onclick="addComment(\''+loginUsId+'\',\''+blogId+'\');">评论</button></div>';
						//发表评论结束	
						p += '</div></li>';	
					
						
				}	
				p += '</ul>';
				$(".myRecovery").append(p);
				 $("img").error(function() { 
						$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 }); 
			}
		
		} else {
			var txt=  "发生错误！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
	
}
function addUpVote(blogId,loginUsId,loginHeadImg){//点赞
	// alert(blogId+"****"+userId);
	 $.post('/blogAction/addUpVote.action', $.param({'usId':loginUsId,'blogId':blogId}), function(result) {
		    if(result.success){
				var tnum = parseInt($("#" + blogId).text());
				$("#" + blogId).text(tnum + 1);
				$("." + blogId).hide();
				$("." + blogId + 1).show();
				$(".upVoteText"+blogId).before("<li class='"+blogId+"upvoteImg'><img src='/storage/upload/head/"+loginHeadImg+"'></li>");
			}else{
			//	$("#addUpVote").show();
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}

function delUpVote(blogId,loginUsId,loginHeadImg){//取消点赞(这里的userId用户到了，原来是供跳转页面使用的，下次应该换位当前登录的用户id，从后台返回的。)
	 $.post('/blogAction/delUpVote.action', $.param({'usId':loginUsId,'blogId':blogId}), function(result) {
		 if(result.success){
		    var tnum = parseInt($("#" + blogId).text());
		    $("#" + blogId).text(tnum - 1);
			$("." + blogId).show();
			$("." + blogId + 1).hide();
			$("." + blogId+"upvoteImg").remove();
		}else{
			var txt = result.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function collect(blogId,loginUsId){//收藏动态。
	 $.post('/blogAction/addCollect.action', $.param({'usId':loginUsId,'blogId':blogId}), function(result) {
		    if(result.success){
				var tnum = parseInt($("#collect" + blogId).text());
				$("#collect" + blogId).text(tnum + 1);
				$(".collect" + blogId).hide();
				$(".noCollect" + blogId).show();
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function delCollect(blogId,loginUsId){//收藏动态。
	 $.post('/blogAction/delCollect.action', $.param({'usId':loginUsId,'blogId':blogId}), function(result) {
		    if(result.success){
				var tnum = parseInt($("#collect" + blogId).text());
				$("#collect" + blogId).text(tnum - 1);
				$(".collect" + blogId).show();
				$(".noCollect" + blogId).hide();
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
var flag = true;
function showCommentDiv(blogId){
	if(flag){
		flag = false;
		$(".comment"+blogId).attr("style","display:block");
		
	}else{
		$(".comment"+blogId).attr("style","display:none");
		flag = true;
	}
}
var flag1 = true;
function showReplyDiv(loginUsId,blogId,commentId){
	if(flag1){
		flag1 = false;
		$(".reply"+blogId).attr("style","display:block");
		$(".sendContentBtn"+blogId).html('<button type="button" class="btn btn-default btn-sm sendReply-btn" onclick="addReply(\''+loginUsId+'\',\''+commentId+'\',\''+blogId+'\');">回复</button>');
		
	}else{
		$(".reply"+blogId).attr("style","display:none");
		flag1 = true;
	}
}
var flag2 = true;
function showReplyReplyDiv(loginUsId,replyedUsId,blogId,commentId){//回复 回复该评论的人的回复
	if(flag2){
		flag2 = false;
		$(".reply"+blogId).attr("style","display:block");
		$(".sendContentBtn"+blogId).html('<button type="button" class="btn btn-default btn-sm sendReply-btn" onclick="addReplyReply(\''+loginUsId+'\',\''+replyedUsId+'\',\''+blogId+'\',\''+commentId+'\');">回复</button>');
		
	}else{
		$(".reply"+blogId).attr("style","display:none");
		flag2 = true;
	}
}


function deleteBlog(blogId,loginUsId){
	 $.post('/blogAction/deleteBlogPhysical.action', $.param({'blogId':blogId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = "person-center.html?paramUserId="+loginUsId;
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function confirmDelete(blogId,loginUsId){//提示框，是否删除。
	var txt=  "确定删除？";
	var option = {
			title: "系统信息",
			btn: parseInt("0011",2),
			onOk: function(){
				deleteBlog(blogId,loginUsId);
			},
		onCancel: function(){
			
		}
	}
	window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
}
function addComment(loginUsId,blogId){
	var commentText = $('.commentArea'+blogId).val();
	 $.post('/blogAction/addComment.action', $.param({'usId':loginUsId,'blogId':blogId,'commentContent':commentText}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = 'myRecovery.html?paramUserId='+loginUsId;
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}

function addReply(loginUsId,commentId,blogId){
	var replyContent = $('.replyArea'+blogId).val();
	 $.post('/blogAction/addCommentReply.action', $.param({'usId':loginUsId,'replyContent':replyContent,'commentId':commentId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = 'myRecovery.html?paramUserId='+loginUsId;
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function addReplyReply(loginUsId,replyedUsId,blogId,commentId){
	var replyContent = $('.replyArea'+blogId).val();
	 $.post('/blogAction/addReplyReply.action', $.param({'usId':loginUsId,'replyContent':replyContent,'commentId':commentId,'replyedUsId':replyedUsId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = 'myRecovery.html?paramUserId='+loginUsId;
			}else{
				var txt= result.msg;
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
		    /*	$("img").error(function() { 
					$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
		    	});*/
		    	
			}else{
				var txt= "返回数据为空！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}


function blogReverse(blogId,loginUsId){
	 $.post('/blogAction/blogReverse.action', $.param({'blogId':blogId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = 'myRecovery.html?paramUserId='+loginUsId;
			}else{
				var txt= result.msg;
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
		    	$("img").error(function() { 
					$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
		    	});
		    	
			}else{
				var txt= "返回数据为空！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
