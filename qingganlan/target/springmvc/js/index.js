/*操控左侧手风琴菜单*/
	$(document).ready(function() {
		$('.header').load("header.html",function(){
			getUserDetail(userId);//获取用户信息详情
		});
		$('.footer').load("footer.html");
		$(".header").on("click","#search",function(){
			window.location.href="search.html?searchWords=" + $('#searchword').val();
		});
		//手风琴插件开始
		var accordion_head = $('.accordion > li > a'),
			accordion_body = $('.accordion li > .sub-menu');
			accordion_head.first().addClass('active').next().slideDown('normal');
			accordion_head.on('click', function(event) {
			event.preventDefault();
			if ($(this).attr('class') != 'active'){
				accordion_body.slideUp('normal');
				$(this).next().stop(true,true).slideToggle('normal');
				accordion_head.removeClass('active');
				$(this).addClass('active');
			}
		});//手风琴插件结束
		delCookie('myFriendId',getCookie('myFriendId'));
		//var userId = getParameter("userId");//之前说getParameter（）方法未定义，原来是p的大小写的问题！！！
		var userId = getCookie('loginUsId');
		if (!userId) {
			location.href = '/login.html';
			return false;
		}
		var page = 1,rows= 50;
		blogImg = '';
		getAllBlogs(userId,page,rows);//之前放到了变量的上面，未定义。。但是获取用户详情的却能获取到userId值。加载顺序的问题。
		$(".header").on("click",".header_person_set",function(){
		//$(".header_person_set").click(function(){
			location.href="person-set.html";
		})
		$(".header").on("click",".myHomePage",function(){
			location.href="person-center.html?paramUserId="+userId;
		})

		
		var uploaders = new plupload.Uploader({//发表图片说说上传图片。
		    browse_button : 'index_send_img', // you can pass in id...
		    url : "/blogAction/uploadBlogImg.action",
		    filters : {
		     //   max_file_size : '3mb',
		        mime_types: [
		            {title : "Image files", extensions : "jpg,gif,png"}
		        ]
		    },
		    multipart_params : {
		    	module_cd : '/blog'
		    },
//		    resize : {width:120, height:120, quality:90, crop:false, preserve_headers:true},
		    multi_selection : false,
		    flash_swf_url : 'lib/plugin/plupload-2.1.2/Moxie.swf',
			silverlight_xap_url : 'lib/plugin/plupload-2.1.2/MoxiDe.xap',
		    init: {
		        FilesAdded: function (uploaders, file) {
		        	var filefor = uploaders.getFile(file[0].id);
		        	if(filefor.size > 3145728){
		        		var txt = "文件大小超过3M！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						uploaders.files.splice(0, 1);
		        	}else{
		        		uploaders.start();
		        	}
		        //	uploaders.start();
		        },
				FileUploaded: function (uploaders, file, responseObject) {
					var res = $.parseJSON(responseObject.response);
					if(res.result && res.result.files) {
					  //$(".l-setting").css("height",977)
						var file = res.result.files[0];
						
						 filepath = file.FILE_ABS_PATH;
						 blogImg = file.FILE_ID + '.' +  file.FILE_EXTENSION;
						
						 //这里的MODU_CD是保存图片的时候传给后台的。
						 upfile1 = '[{"MODU_CD":"/head","file_ids":["' + file.FILE_ID + '"]}]';
						$('#previewArea').html('<img id="' + file.FILE_ID + '" src="' + contextPath + '/storage/upload/' + file.FILE_REL_PATH + '/' + file.FILE_ID + '.' + file.FILE_EXTENSION + '"/>');
					} else {
						var txt=  "获取失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}
		    }
		}).init();
		$(".i-commentReply").on('click',function(){
			$(".sendAndReply").toggle();
		});
		$("#index_send_blog").click(function(){// 发送帖子
			var  blogContent = $("#index_area_top").val().trim();
			sendBlog(blogContent,blogImg,userId);
		})
	});
	
function getUserDetail(userId){//获取用户详情
	$.post('/userAction/userInfoDetail.action', $.param({'usId':userId}), function(res) {
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
				
		} else {
			alert(result.msg);
		}
	}, "JSON");
}

function getAllBlogs(userId,page,rows){//获取所有自己和好友说说
	$.post('/blogAction/searchAllBlogsByUser.action',$.param({"usId":userId,"page":page,"rows":rows}), function(res) {
		if (res.result != null) {
			var result = res.result;
			var rows = result.rows;
			if(rows){
				var p =	'<ul class="index-shareContentUl">';
				for(var i=0;i<rows.length;i++){
				    blogId = rows[i].blogId;
				    loginUsId = rows[i].loginUsId
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
					if(rows[i].loginUsId == rows[i].blogUsId){
						p += '<div class="blogTrash" onclick="confirmDelete(\''+rows[i].blogId+'\',\''+rows[i].loginUsId+'\');"><i class="fa fa-lg fa-trash-o"></i></div>';
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
					p += '<li><i class="fa fa-md fa-comment-o myComment" onclick="showCommentDiv(\''+rows[i].blogId+'\');"></i>评论('+rows[i].blogCommentedNo+')</li>';
					p += "<li><i class='fa fa-md fa-thumbs-o-up upVote "+ rows[i].blogId + "' id='addUpVote' style='display:" + noZanStyle + ";' onclick='addUpVote( \""+ rows[i].blogId +"\", "+ userId + ", \""+ rows[i].loginHeadImg +"\");' blogid= '" + rows[i].blogId + "'></i>";
					p += "<i class='fa fa-md fa-thumbs-up upVote " + rows[i].blogId + 1 + "' id='delUpVote' style='display:" + zanStyle + ";' onclick='delUpVote(\"" + rows[i].blogId + "\", "+ userId + ", \""+ rows[i].loginHeadImg +"\");' blogid='" + rows[i].blogId + "'></i><span>(</span><span id='" + rows[i].blogId + "'>" + rows[i].upvoteNo +"</span><span>)</span></li>";
					  p += "<li><i class='fa fa-md fa-star-o collect"+ rows[i].blogId + "' id='collect' style='display:" + noCollectStyle + ";' onclick='collect( \""+ rows[i].blogId +"\", "+ userId + ");'></i>";
					  p += "<i class='fa fa-md fa-star  noCollect"+ rows[i].blogId +"' id='delCollect' style='display:" + collectStyle + ";' onclick='delCollect(\"" + rows[i].blogId + "\", "+ userId + ");'></i><span>(</span><span id='collect" + rows[i].blogId + "'>" + rows[i].blogCollectedNo +"</span><span>)</span></li>";
					p += "</ul></div>"
					  //与帖子关系模块结束
					//点赞信息开始
						var upvoteInfoRows = rows[i].upvoteInfo;
//						console.info(upvoteInfoRows);
						if(upvoteInfoRows!=null){
							p += '<div class="index-zan"><ol>';
							p += '<li><i class="fa fa-md fa-thumbs-up"></i></li>';
							for(var j=0;j<upvoteInfoRows.length;j++){
								p += '<li><img src="/storage/upload/head/'+upvoteInfoRows[j].upvoteHeadImg+'"></li>';
							}
							p += '<li class="upVoteText'+rows[i].blogId+'"><span>觉得赞！</span></li>'	;
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
								commentId = commentInfoRows[k].commentId;
								p += '<span>'+commentInfoRows[k].commentUsName+'&nbsp;&nbsp;:</span>';
								p += commentInfoRows[k].commentContent;
								if(loginUsId == commentInfoRows[k].commentUsId){
									p += '&nbsp;&nbsp;<i class="fa fa-sm fa-trash-o" onclick="confirmDelComment(\''+loginUsId+'\',\''+commentInfoRows[k].commentId+'\');"></i>';
								}
								p += '</div>';
								p += '<div class="commDate">';
							    var birthday = new Date(commentInfoRows[k].commentDate);
			                    var commentDate = birthday.toLocaleString();
								p += '<span>'+commentDate+'</span>';	
								
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
						p += '<div class="sendAndReply reply'+rows[i].blogId+'" style="display:none;">';
						p += '<div class="sendContent">';
						p += '<textarea class="form-control sendArea sendAreaReply replyArea'+rows[i].blogId+'" placeholder="在这里输入回复的内容:"></textarea>';
						p += '</div><div class="sendContentBtn'+blogId+'">';
						p += '</div></div>';
						//发表评论的回复
							
						//发表评论
						p += '<div class="sendAndComment comment'+rows[i].blogId+'" style="display:none;">';
						p += '<div class="sendContent">';
						p += '<textarea class="form-control sendArea sendCommentArea commentArea'+rows[i].blogId+'" placeholder="在这里输入评论的内容:" ></textarea>';
						p += '</div><div class="sendContentBtn">';
						p += '<button type="button" class="btn btn-default  btn-sm sendCommentBtn btnPrimary " id="" onclick="addComment(\''+rows[i].loginUsId+'\',\''+rows[i].blogId+'\');">评论</button></div>';
						//发表评论结束	
						p += '</div></li>';	
					
						
				}	
				p += '</ul>';
				$(".index-sharecontent").append(p);
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
function sendBlog(blogContent,blogImg,userId){
	$.post('/blogAction/addBlog.action', $.param({'usId':userId,'content':blogContent.trim(),'blogImg':blogImg}), function(result) {
		if (result.success) {
			location.href="index.html?userId="+userId;
		} else {
			alert(result.msg);
		}
	}, "JSON");
}

 function addUpVote(blogId,userId,loginHeadImg){//点赞
	 $.post('/blogAction/addUpVote.action', $.param({'usId':userId,'blogId':blogId}), function(result) {
		    if(result.success){
				var tnum = parseInt($("#" + blogId).text());
				$("#" + blogId).text(tnum + 1);
				$("." + blogId).hide();
				$("." + blogId + 1).show();
				$(".upVoteText"+blogId).before("<li class='"+blogId+"upvoteImg'><img src='/storage/upload/head/"+loginHeadImg+"'></li>");
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}

function delUpVote(blogId,userId,loginHeadImg){//取消点赞(这里的userId用户到了，原来是供跳转页面使用的，下次应该换位当前登录的用户id，从后台返回的。)
	 $.post('/blogAction/delUpVote.action', $.param({'usId':userId,'blogId':blogId}), function(result) {
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
function collect(blogId,userId){//收藏动态。
	 $.post('/blogAction/addCollect.action', $.param({'usId':userId,'blogId':blogId}), function(result) {
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
function delCollect(blogId,userId){//收藏动态。
	 $.post('/blogAction/delCollect.action', $.param({'usId':userId,'blogId':blogId}), function(result) {
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
var flag1 = true;
function showReplyDiv(loginUsId,blogId,commentId){
	if(flag1){
		console.info("显示回复框");
		flag1 = false;
		$(".reply"+blogId).attr("style","display:block");
		$(".sendContentBtn"+blogId).html('<button type="button" class="btn btn-default btn-sm sendReply-btn" onclick="addReply(\''+loginUsId+'\',\''+commentId+'\',\''+blogId+'\');">回复</button>');
		
	}else{
		console.info("隐藏回复框");
		$(".reply"+blogId).attr("style","display:none");
		flag1 = true;
	}
}
var flag2 = true;
function showReplyReplyDiv(loginUsId,replyedUsId,blogId,commentId){//回复 回复该评论的人的回复
	if(flag2){
		console.info("显示回复框");
		flag2 = false;
		$(".reply"+blogId).attr("style","display:block");
		$(".sendContentBtn"+blogId).html('<button type="button" class="btn btn-default btn-sm sendReply-btn" onclick="addReplyReply(\''+loginUsId+'\',\''+replyedUsId+'\',\''+blogId+'\',\''+commentId+'\');">回复</button>');
		
	}else{
		console.info("隐藏回复框");
		$(".reply"+blogId).attr("style","display:none");
		flag2 = true;
	}
}
var flag = true;
function showCommentDiv(blogId){
	if(flag){
		console.info("显示评论框");
		flag = false;
		$(".comment"+blogId).attr("style","display:block");
		
	}else{
		console.info("隐藏评论框");
		$(".comment"+blogId).attr("style","display:none");
		flag = true;
	}
}

function deleteBlog(blogId,loginUsId){
	 $.post('/blogAction/deleteBlog.action', $.param({'blogId':blogId,'usId':loginUsId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = 'index.html';
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
	/*alert('.commentArea'+blogId);
	alert(commentText);*/
	 $.post('/blogAction/addComment.action', $.param({'usId':loginUsId,'blogId':blogId,'commentContent':commentText}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = 'index.html';
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function delComment(loginUsId,commentId){
	 $.post('/blogAction/delComment.action', $.param({'usId':loginUsId,'commentId':commentId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = 'index.html';
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
function confirmDelComment(loginUsId,commentId){//提示框，是否删除。
	var txt=  "确定删除该评论吗？";
	var option = {
			title: "系统信息",
			btn: parseInt("0011",2),
			onOk: function(){
				delComment(loginUsId,commentId);
			},
		onCancel: function(){
			
		}
	}
	window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
}
function addReply(loginUsId,commentId,blogId){
	var replyContent = $('.replyArea'+blogId).val();
	 $.post('/blogAction/addCommentReply.action', $.param({'usId':loginUsId,'replyContent':replyContent,'commentId':commentId}), function(result) {
		    if(result.success){
		    	var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		    	location.href = "index.html";
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
		    	location.href = "index.html";
			}else{
				var txt= result.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
}
