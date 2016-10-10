$(function(){
	$('.header').load("header.html",function(){
		getHeaderUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	var logId = getParameter("logId");//通过好友列表链接进来的
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
	//百度编辑器的初始化函数是一个空间，外面的只能是全局变量才能在里面生效。
	str = "马太福音【7:5】你这假冒为善的人！先去掉自己眼中的梁木，然后才能看得清楚，去掉你弟兄眼中的刺。";
	//对编辑器的操作最好在编辑器ready之后再做
/*	ue.ready(function() {
	    //设置编辑器的内容
	//	var str = '   马太福音【7:5】你这假冒为善的人！先去掉自己眼中的梁木，然后才能看得清楚，去掉你弟兄眼中的刺。';
	    ue.setContent(str);
	});*/
	$("#editLog").click(function(){//编辑器保存按钮
		var logTitle = $(".logTitle").val();
		console.info(logTitle);
		var logContent = ue.getContent();
		editLog(logId,logTitle,logContent);
	});
	getLogDetail(logId);

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
function getLogDetail(logId){//获取用户详情
	$.post('/logAction/getLogDetail.action', $.param({'logId':logId}), function(res) {
		if (res.success) {
			var rows = res.result;
		}
		if(rows!=null){
			var p = '';
				logTitle = rows.LOG_TITLE;
				logContent = rows.LOG_CONTENT;
				p += '<div class="logTitle">'+logTitle+'</div>';
				p += '<div class="logContent">'+logContent+'</div>';
				var sendDate = new Date(rows.SEND_DATE);
				sendDate = sendDate.toLocaleString();
				p += '<h4>'+sendDate+'</h4>';
				$(".logDetailAll").append(p);
				$(".logTitle").val(logTitle);//为什么模态获取文本框的值是这个值，而不是用户手动输入的。。。。很奇怪。
				ue.ready(function() {
					ue.setContent(logContent);
				});
				
					
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
function editLog(logId,logTitle,logContent){
	$.post('/logAction/editLog.action', $.param({'logId':logId,'logTitle':logTitle,'logContent':logContent}), function(res) {
		if (res.success) {
			var txt= res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			location.href="logDetail.html?logId="+logId;
		} else {
			var txt= res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
