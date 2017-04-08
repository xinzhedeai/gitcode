$(function(){
	$('.header').load("header.html",function(){
		getHeaderUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	//var paramFellowId = getParameter("paramFellowId");//获取当前团契的id
	//var paramFellowId = 'fs1003'
	loginUsId = getCookie('loginUsId');
	var paramFellowId = getCookie('fellowShipId');
	keyWord = getParameter("keyWord");
	keyWord = decodeURIComponent(keyWord);
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
	$(".sendPray").click(function(){
		location.href="prayAdd.html?paramUserId="+loginUsId;
	});
	$(".lookPrayDisplay").click(function(){
		location.href="prayWall.html?paramUserId="+loginUsId;
	});
	$(".lookPrayList").click(function(){
		location.href="prayList.html?paramUserId="+loginUsId;
	});
	
	$(".header").on("keypress","#searchword",function(e){
		if(e.which==13){ 
			window.location.href="search.html?searchWords=" + $('#searchword').val();
		} 
	});
	$(".header").on("click","#search",function(){
		window.location.href="search.html?searchWords=" + $('#searchword').val();
	});
	$(".prayForm input:text").val("");
	var flagA = 0,
		name = '';
	var page = 1,rows = 100;
	
	if(keyWord != null && keyWord != '' && keyWord != 'false'){
		console.info(keyWord);
		name = keyWord;
		//我去了。没想到这里的形参需要跟下面的需要调用的方法的参数要一致，这个跟java是不一样的。
		searchPrays(paramFellowId,name,page,rows);
	}
	$('.prayerName').keyup(searchWordFunc);
	$(".SearchPrayByName").click(function(){
		name = $(".prayerName").val();
		searchPrays(paramFellowId,name,page,rows);
		flagA = 1;
	});
	if(flagA == 0){
		searchPrays(paramFellowId,name,page,rows);
	}

	var sendDate = new Date();
	sendDate = sendDate.toLocaleString();//获取日期与时间 
	$(".sendDate").text(sendDate);
	$(".praySubmit").click(function(){
		addPray(paramFellowId,sendDate);
	});
	
});	
	function getHeaderUserDetail(loginUsId){//获取用户详情
		$.post('/userAction/userInfoDetail.action', $.param({'usId':loginUsId}), function(res) {
			if (res.success) {
				var rows = res.result;
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
	function addPray(paramFellowId,sendDate){
		console.info(paramFellowId);
		$.post('/fellowShipAction/addPray.action', $.param({'fellowShipId':paramFellowId,'sendDate':sendDate}) + '&' +$('.prayForm').serialize(), function(res) {
			if (res.success) {
				var txt= "添加祷告成功！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			} else {
				var txt= "添加祷告失败！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
	}
	function searchPrays(paramFellowId,name,page,rows){
		console.info(paramFellowId);
		$.post('/fellowShipAction/searchPrays.action', $.param({'fsId':paramFellowId,'name':name,'page':page,'rows':rows}), function(res) {
			var result = res.result;
			if ( result!= null) {
				var rows = result.rows;
				var p = '<ul>';
				if(rows != null){
					
					for(var i=0;i<rows.length;i++){
						p += '<li>';
						p += '<div class="prayPreTop"><a onclick="confirmDel(\''+rows[i].PRAY_ID+'\');"><img src="/lib/img/images/close.gif" class="closeImg" /></a>';
						p += '<h5>祷告编号:'+rows[i].PRAY_ID+'</h5></div>';
						p += '<div class="prayPreContentAll">';
						p += '<h5 class="Prereceiver" style="color: #FF3992;">'+rows[i].RECEIVER_NAME+'</h5>';
						p += '<div class="prayPreContent">'+rows[i].PRAY_CONTENT+'</div>';
						p += '<h5 style="text-align:right;color: #FF3992;" class="senderName">'+rows[i].SENDER_NAME+'</h5>';
						p += '<h5 style="text-align:right;color:#aaa;" class="sendDate">'+rows[i].PRAY_DATE+'</h5>';
						p += '<img alt="" src="/lib/img/images/previewImg.png" class="preContentImg">';
						p += '</div></li>'
					}
					p += '</ul>';
					$(".prayDisplay").html(p);
				}else{
					p += '<h4>未查询到相关内容</h4>';
					p += '</ul>';
					$(".prayDisplay li").html('');
					$(".prayDisplay").html(p);
				}
			
					
			} else {
				var txt= "添加祷告失败！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
	}
	///fellowShipAction/searchPrays.action?fsId='+paramFellowId
	function confirmDel(prayId){
		var txt=  "确定删除？";
		var option = {
				title: "系统信息",
				btn: parseInt("0011",2),
				onOk: function(){
					deletePrayById(prayId);
				},
			onCancel: function(){
				
			}
		}
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
	}	
	function deletePrayById(prayId){
		$.post('/fellowShipAction/deletePrayById.action', $.param({'prayId':prayId}), function(res) {
			if (res.success) {
				var txt= "删除成功!";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				location.href = "prayWall.html";
			} else {
				var txt= "删除失败!";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		}, "JSON");
	}
	function searchWordFunc(){
	    var searchWord=$(this).val().substr(0,12);
	    console.info("输入框输入。。。");
	    $(this).val(searchWord);
	};