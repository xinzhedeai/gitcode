window.$job = window.$job || {};
$(document).ready(function() {
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
		$job.pageA = 1,rows = 12;//pageA指的是请求后台数据分页的page
		var flag = null;
	
		page=1;//初始化当前的版面为1
		$show=$("#zzsc").find(".zzsc_box");//找到图片展示区域
		
		getJobPages($job.pageA,rows);//初始页面请求接口
		
		$(".next").click(function(){
			$job.pageA += 1;
			$job.numsA = $job.pageA * rows;
			if($job.flagA == 1){//当设置全局标志位为数字时，初始值尽量不要是null，最好是1还是其他数字，否则在做判断是会有问题。
				getJobPages($job.pageA,rows);
			}
			//首先判断展示区域是否处于动画
		//	if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav(page,$job.page_count);
				$number=page-1;
				$("#zzsc").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
		//	}
				return false;
		});
		$(".pre").click(function(){
			if(!$show.is(":animated")){
				$show.animate({left:'+='+$width_box},"normal");
				page--;
				nav(page,$job.page_count);
				$number=page-1;
				$("#zzsc").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		});
		$("#zzsc").find(".pre").hide();//初始化为第一版
		
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
	//	$(".bottomNav").on("click",".nav a",function(){
		$("#zzsc").on("click",".nav a",function(){//为甚么使用上面的类选择器触发不了事件啊。
			$index=$(this).index();
			page=$index+1;
			nav(page,$job.page_count);
			$show.animate({left:-($width_box*$index)},"normal");	
			$(this).addClass("now").siblings("a").removeClass("now");
			return false;
		});
	/*	var b_class_cd = "";
		getCommonCodes(b_class_cd);*/
		
		$(".saveWebUrlBtn").click(function(){
			addInChristWeb();
		});
	})
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
	function getJobPages(pageA,rows){//获取主内工作网站
		$.post('/userAction/getJobPages.action', $.param({'page':pageA,'rows':rows,'webType':'A03'}), function(res) {
			var rows = null;
			if (res.success) {
				rows = res.result.rows ;
				if(rows){
					$job.total = res.result.total;
					var pageNum = Math.ceil($job.total/12);
					console.info(pageNum);
					var q = '';
						q += '<a class="now"></a>';
						for(var k=0;k<pageNum-1;k++){
							q += '<a></a>'
						}
						$(".bottomNav").html(q);
					var p = '';//中文p
						p += '<ul>';
						for(var i=0;i<rows.length;i++){
							p += '<li>';
							p += '<div class="websiteUrl">';
							p += '<a href="'+rows[i].WEB_URL+'">'+rows[i].WEBSITE_NAME+'</a>';
							p += '</a></div>';
							p += '<span class="title">'+rows[i].NOTES+'</span></li>'
						}
						p += '</ul>';
						
						$(".zzsc_box").append(p);
						if($job.numsA > $job.total){
							$job.flagA = 0;
						}
						$job.page_count = pageNum;
						nav(page,$job.page_count );
						$width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div ----null*0 = 0
				}else{
					var txt= "未获取到相关数据！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			} else {
				var txt= res.msg;
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
	}

	function nav(page,page_count){//这段代码主要是左右翻页的箭头。
		console.info('sdkflksdjlfkjs'+page_count);
		if(page_count==1){
			$("#zzsc").find(".next").hide().siblings(".pre").hide();
		}else if(page==1){
			$("#zzsc").find(".pre").hide().siblings(".next").show();
		}else if(page==page_count){
			$("#zzsc").find(".next").hide().siblings(".pre").show();
		}else{
			$("#zzsc").find(".pre").show().siblings(".next").show();
		}
	}
	function getCommonCodes(b_class_cd){
		$.post('/userAction/getCommonCodes.action', $.param({'b_class_cd':b_class_cd}), function(res) {
			var rows = null;
			if (res.success) {
				rows = res.result.rows ;
				if(rows!=null){
					var p = '';
					for (var i=0; i<rows.length; i++) {
						p += '<option value="';
						p += rows[i].s_class_no + '">'
						p += rows[i].s_class_nm +'</option>';
					}
					$("#webType").append(p);
					
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

	function addInChristWeb() {
	$.post('/userAction/addInChristWeb.action',$.param({'usId':loginUsId}) + '&' + $(".InChristWebForm").serialize(), function(result) {
		if (result.success) {
			var txt= "添加主内网址成功！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			location.href = '/html/InChristJob.html';
		} else {
			var txt= "添加主内网址失败！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}

	$job = {
		numsA : null,
		pageA : null,
		flagA : 1 ,
		total : null,
		page_count : 0,
	}
})