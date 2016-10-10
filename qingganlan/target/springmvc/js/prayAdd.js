$(function(){
	$('.header').load("header.html",function(){
		getHeaderUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	//var paramFellowId = getParameter("paramFellowId");//获取当前团契的id
	var paramFellowId = 'fs1003'
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
	$(".sendPray").click(function() {
		location.href = "prayAdd.html?paramUserId=" + loginUsId;
	});
	$(".lookPrayDisplay").click(function(){
		location.href="prayWall.html?paramUserId="+loginUsId;
	});
	$(".lookPrayList").click(function(){
		location.href="prayList.html?paramUserId="+loginUsId;
	});
	$(".prayForm input:text").val("");
	$('#prayReceiverName').keyup(autoWriteReceiver);
	$('#praySenderName').keyup(autoWriteSender);
	$('#prayContent').keyup(autoWriteContent);
	
	var sendDate = new Date(); 
	sendDate = sendDate.toLocaleString();//获取日期与时间 
	$(".sendDate").text(sendDate);
	$(".praySubmit").click(function(){
		addPray(paramFellowId,sendDate);
	});
//	$(".prayForm span").css("style","float:right;");
//	$(".prayForm td:odd").css("width",370);
});	
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
	function autoWriteReceiver(){
	    var prayReceiverName=$(this).val().substr(0,30);
	    $(this).val(prayReceiverName);
	    $(".Prereceiver").text($(this).val());
	};
	function autoWriteSender(){
	    var praySenderName=$(this).val().substr(0,30);
	    $(this).val(praySenderName);
	    $(".senderName").text($(this).val());
	};
	function autoWriteContent(){
	    var prayContent=$(this).val().substr(0,100);
	    $(this).val(prayContent);
	    $(".textAreaCount").text($(this).val().length+"/100");
	    $(".prayPreContent").text($(this).val());
	};