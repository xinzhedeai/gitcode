$(function(){
	$('.header').load("header.html",function(){
		getHeaderUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	quesitionId = getParameter("quesitionId");//通过好友列表链接进来的
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
	$(".header").on("click","#search",function(){
		window.location.href="search.html?searchWords=" + $('#searchword').val();
	});
	
	    ue = UE.getEditor('logEditor', {//编辑器
		toolbars: [
		           [
		               'anchor', //锚点
		               'undo', //撤销
		               'redo', //重做
		               'bold', //加粗
		               'indent', //首行缩进
		               'snapscreen', //截图
		               'italic', //斜体
		               'underline', //下划线
		               'strikethrough', //删除线
		               'subscript', //下标
		               'fontborder', //字符边框
		               'superscript', //上标
		               'formatmatch', //格式刷
		               'source', //源代码
		               'blockquote', //引用
		               'pasteplain', //纯文本粘贴模式
		               'selectall', //全选
		               'print', //打印
		               'preview', //预览
		               'horizontal', //分隔线
		               'removeformat', //清除格式
		               'time', //时间
		               'date', //日期
		               'unlink', //取消链接
		               'insertrow', //前插入行
		               'insertcol', //前插入列
		               'mergeright', //右合并单元格
		               'mergedown', //下合并单元格
		               'deleterow', //删除行
		               'deletecol', //删除列
		               'splittorows', //拆分成行
		               'splittocols', //拆分成列
		               'splittocells', //完全拆分单元格
		               'deletecaption', //删除表格标题
		               'inserttitle', //插入标题
		               'mergecells', //合并多个单元格
		               'deletetable', //删除表格
		               'cleardoc', //清空文档
		               'insertparagraphbeforetable', //"表格前插入行"
		               'insertcode', //代码语言
		               'fontfamily', //字体
		               'fontsize', //字号
		               'paragraph', //段落格式
		               'simpleupload', //单图上传
		               'insertimage', //多图上传
		               'edittable', //表格属性
		               'edittd', //单元格属性
		               'link', //超链接
		               'emotion', //表情
		               'spechars', //特殊字符
		               'searchreplace', //查询替换
		               'map', //Baidu地图
		               'gmap', //Google地图
		               'insertvideo', //视频
		               'help', //帮助
		               'justifyleft', //居左对齐
		               'justifyright', //居右对齐
		               'justifycenter', //居中对齐
		               'justifyjustify', //两端对齐
		               'forecolor', //字体颜色
		               'backcolor', //背景色
		               'insertorderedlist', //有序列表
		               'insertunorderedlist', //无序列表
		               'fullscreen', //全屏
		               'directionalityltr', //从左向右输入
		               'directionalityrtl', //从右向左输入
		               'rowspacingtop', //段前距
		               'rowspacingbottom', //段后距
		               'pagebreak', //分页
		               'insertframe', //插入Iframe
		               'imagenone', //默认
		               'imageleft', //左浮动
		               'imageright', //右浮动
		               'attachment', //附件
		               'imagecenter', //居中
		               'wordimage', //图片转存
		               'lineheight', //行间距
		               'edittip ', //编辑提示
		               'customstyle', //自定义标题
		               'autotypeset', //自动排版
		               'webapp', //百度应用
		               'touppercase', //字母大写
		               'tolowercase', //字母小写
		               'background', //背景
		               'template', //模板
		               'scrawl', //涂鸦
		               'music', //音乐
		               'inserttable', //插入表格
		               'drafts', // 从草稿箱加载
		               'charts', // 图表
		           ]
		       ]
	});
	//getLogDetail(logId);
	var page = 1,rows = 50;
	getQuesitionDetail(quesitionId);
	getAnswers(quesitionId,page,rows);

	$(".fSAnswerBtn").click(function(){//显示回复問題按鈕
	//	$("#mymodal-data").modal();
		$("#addReplyReply").hide();
		$("#addAnswer").show();
	});
	$("#addAnswer").click(function(){//回答問題按鈕
		var replyContent = ue.getContent();
		console.info(replyContent);
		addAnswer(loginUsId,quesitionId,replyContent);
	});
	$("#addReplyReply").click(function(){//回答問題按鈕
		var requestReplyId = $(".requestReplyId").val();
		console.info(requestReplyId);
		var rreplyContent = ue.getContent();
		console.info(rreplyContent);
		addReplyReply(requestReplyId,rreplyContent);
	});

});
function getHeaderUserDetail(loginUsId){//获取用户详情
	$.post('/userAction/userInfoDetail.action', $.param({'usId':loginUsId}), function(res) {
		if (res.success) {
			var rows = res.result ;
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
			}	
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
function getQuesitionDetail(quesitionId){//获取用户详情
	$.post('/fellowShipAction/getQuesitionDetail.action', $.param({'quesitionId':quesitionId}), function(res) {
		if (res.success) {
			var rows = res.result;
			if(rows!=null){
				var p = '';
				
					p += '<div class="requestUserDetail">';
					p += '<img alt="" src="/storage/upload/head/'+rows.HEAD_IMG+'" class="thumbnail fSQUserHeadImg" > ';
					p += '<span><i class="fa fa-md fa-user"></i>'+rows.US_NAME+'</span>';
					p += '<span><i class="fa fa-md fa-edit"></i>'+rows.PS+'</span>';
					p += '<span><i class="fa fa lg fa-home"></i>'+rows.AREA+'</span> ';
					var regDate = new Date(rows.REG_DATE);
                    	regDate = regDate.toLocaleString();
					p += '<span><i class="fa fa-md fa-clock-o"></i>'+regDate+'</span>';
					p += '</div>';
					p += '<div class="fSQDetail">';
					p += '<div class="questionTitle">';
					p += '<label>'+rows.QUESITION_NAME+'</label>';
					var reqDate = new Date(rows.REQUEST_DATE);
                	reqDate = reqDate.toLocaleString();
					p += '<ul class="quesitionTitleUl"><li>'+reqDate+'</li><li>'+rows.VIEWS+'</li></ul>';
					p += '</div>';
					p += '<div class="quesitionContent"><p>'+rows.QUESITION_CONTENT+'</p></div>';
					p += '</div>';
					$(".fSQContentR").append(p);
			}	
					
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
function getAnswers(quesitionId,page,rows){
	$.post('/fellowShipAction/getAnswers.action', $.param({'quesitionId':quesitionId,'page':page,'rows':rows}), function(res) {
		var result = res.result;
		if ( result!= null) {
			var rows = result.rows;
			var p = '<ul>';
			if(rows != null){
				for(var i=0;i<rows.length;i++){
					p += '<li>';
					p += '<div class="fSQContent">';
					p += '<div class="answerUserDetail">';
					p += '<img alt="" src="/storage/upload/head/'+rows[i].HEAD_IMG+'" class="thumbnail fSQUserHeadImg" > '
					p += '<span><i class="fa fa-md fa-user"></i>'+rows[i].REPLY_US_NAME+'</span>';
					p += '<span><i class="fa fa-md fa-edit"></i>'+rows[i].PS+'</span>';
					p += '<span><i class="fa fa lg fa-home"></i>'+rows[i].AREA+'</span> ';
					var regDate = new Date(rows[i].REG_DATE);
					regDate = regDate.toLocaleString();
					p += '<span><i class="fa fa-md fa-clock-o"></i>'+regDate+'</span>';
					p += '</div>';
					p += '<div class="fSQDetail">';
					p += '<div class="answerTitle">';
					var replyDate = new Date(rows[i].REPLY_DATE);
					replyDate = replyDate.toLocaleString();
					p += '<ul class="answerTitleUl"><li>'+replyDate+'</li>';
					p += '<i  class="fa fa-lg fa-thumbs-o-up myComment" onclick="confirmSoluted(\''+rows[i].REQUEST_REPLY_ID+'\');"></i>';
					p += '<i type="button" class="fa fa-lg fa-comment-o myComment" onclick="showRReplyBtn(\''+rows[i].REQUEST_REPLY_ID+'\');"></i>';
					p += '</ul>';
					p += '</div>';
					var replyReplyContent = rows[i].REPLY_REPLY_CONTENT;
					p += '<div class="answerContent">';
					p += '<span class="fSReplyContent">'+rows[i].REPLY_CONTENT+'</span>';
					if(replyReplyContent != null && replyReplyContent != ''){
						p += '<p class="fSReplyReplyContent"><i class="fa fa-md fa-user">'+rows[i].REPLY_REPLY_US_NAME+':</i>'+replyReplyContent+'</p>'
					}
					p += '</div></div></div>';
					p += '</li>';
				}
				p += '</ul>';
				$(".fSQAnswerAll").html(p);
			}else{
				var txt= "该问题暂无人回答！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		
		} else {
			var txt= "获取问题答案失败！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function addAnswer(loginUsId,quesitionId,replyContent){
	$.post('/fellowShipAction/addAnswer.action', $.param({'usId':loginUsId,'quesitionId':quesitionId,'replyContent':replyContent}), function(res) {
		if (res.success) {
			var txt= "成功提交答案！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		} else {
			var txt= "提交答案失敗！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function addReplyReply(requestReplyId,rreplyContent){
	console.info(requestReplyId);
	$.post('/fellowShipAction/addReplyReply.action', $.param({'requestReplyId':requestReplyId,'rreplyContent':rreplyContent}), function(res) {
		if (res.success) {
			var txt= "回复成功！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		} else {
			var txt= "回复失敗！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function showRReplyBtn(requestReplyId){
	$(".requestReplyId").val(requestReplyId);
	$("#mymodal-data").modal();
	$("#addReplyReply").show();
	$("#addAnswer").hide();
}
function confirmSoluted(requestReplyId){
	var txt=  "确定该回答成功的解决了您问题吗？";
	var option = {
			title: "系统信息",
			btn: parseInt("0011",2),
			onOk: function(){
				isSoluted(requestReplyId,quesitionId);
			},
			onCancel: function(){
			
		}
	}
	window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
}
function isSoluted(requestReplyId,quesitionId){
	$.post('/fellowShipAction/isSoluted.action', $.param({'requestReplyId':requestReplyId,'quesitionId':quesitionId}), function(res) {
		if (res.success) {
			var txt= "恭喜，设置完成，您的问题已被解决！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		} else {
			var txt= "抱歉，设置失败！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}