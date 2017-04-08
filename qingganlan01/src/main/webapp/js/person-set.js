$(function(){
	$('.header').load("header.html",function(){
		getUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	var loginUsId = getCookie('loginUsId');
	if (!loginUsId) {
		location.href = '/login.html';
		return false;
	}
	$("#city_2").citySelect({
		prov:"山东",
		nodata:"none"
	});
	$("#change_usInfo").click(function(){
		userInfoSet(loginUsId);
	})
	$(".header").on("click",".myHomePage",function(){
		location.href="person-center.html?paramUserId="+loginUsId;
	})
	$(".header").on("click",".personalCenter",function(){
		location.href="person-center.html";
	})
	$(".header").on("click",".topIcon",function(){
		location.href="index.html";
	})
	$(".header").on("click","#search",function(){
		window.location.href="search.html?searchWords=" + $('#searchword').val();
	});
	var flag = false;
	var uploader = new plupload.Uploader({
	    browse_button : 'pickfiles', // you can pass in id...
	    url : "/userAction/UploadFile.action",
	    filters : {
	      //  max_file_size : '3mb',
	        mime_types: [
	            {title : "Image files", extensions : "jpg,gif,png"}
	        ]
	    },
	    //这里的module_cd是第一次上传图片文件时需要传递的参数。
	    multipart_params : {
	    	module_cd : '/head'
	    },
	    multi_selection : false,
	    flash_swf_url : 'lib/plugin/plupload-2.1.2/Moxie.swf',
		silverlight_xap_url : 'lib/plugin/plupload-2.1.2/MoxiDe.xap',
	    init: {
	        FilesAdded: function (uploader, file) {
	        	var filefor = uploader.getFile(file[0].id);
	        	if(filefor.size > 2097152){
	        		alert("文件大小超过2M！") ;
				
					uploader.files.splice(0, 1);
	        	}else{
	        		uploader.start();
	        	}
	        },
			FileUploaded: function (uploader, file, responseObject) {
				var res = $.parseJSON(responseObject.response);
				console.info(res);
				if(res.result && res.result.files) {
					var file = res.result.files[0];
					 filepath = file.FILE_ABS_PATH;
					 headImg = file.FILE_ID + '.' +  file.FILE_EXTENSION;
					 //这里的MODU_CD是保存图片的时候传给后台的。
					 upfile = '[{"MODU_CD":"/head","file_ids":["' + file.FILE_ID + '"]}]';
					$('#previewArea').html('<img id="' + file.FILE_ID + '" src="' + contextPath + '/storage/upload/' + file.FILE_REL_PATH + '/' + file.FILE_ID + '.' + file.FILE_EXTENSION + '"/>');
				    w = file.width, 
					h = file.height;
					var Ratio = 1,
						wRatio = Math.ceil(w / 230),
						hRatio = Math.ceil(h / 230);
					if(wRatio >= 1){
						if(hRatio >= 1){
							Ratio = Math.ceil((wRatio + hRatio) / 2);
						}else{
							Ratio = wRatio;
						}
						$('#' + file.FILE_ID).height(h/Ratio);
						$('#' + file.FILE_ID).width(w/Ratio);
					}else{
						if(hRatio >= 1){
							Ratio = hRatio;
							$('#' + file.FILE_ID).height(h/Ratio);
							$('#' + file.FILE_ID).width(w/Ratio);
						}else{
							var wratio = Math.ceil(230/w);
							var hratio = Math.ceil(230/h);
							if(wratio <= hratio){
								Ratio = wratio;
							}else{
								Ratio = hratio;
							}
							$('#' + file.FILE_ID).height(h * Ratio);
							$('#' + file.FILE_ID).width(w * Ratio);
							
							 flag = true;
						}
					}
					 scale = Ratio;
					 $('#' + file.FILE_ID).Jcrop({
						 setSelect: [0,0,120,120],
						 onChange:showPreview,
				        onSelect:showPreview,
						 aspectRatio:1
					 });
				} else {
					alert("获取失败！") ;
				}
			}
	    }
	}).init();
	//点击保存
	$("#keep").click(function(){
		if(upfile != null){
			modifyHeadPortrait(headImg, upfile,  x, y, w, h, filepath, scale, flag,loginUsId);
			console.info(headImg);
		}else{
			alert("未选择上传图片！");
		
		}
	});
	var uploaders = new plupload.Uploader({
	    browse_button : 'pickfiles1', // you can pass in id...
	    url : "/userAction/uploadImgAuth.action",
	    filters : {
	     //   max_file_size : '3mb',
	        mime_types: [
	            {title : "Image files", extensions : "jpg,gif,png"}
	        ]
	    },
	    multipart_params : {
	    	module_cd : '/authentication'
	    },
//	    resize : {width:120, height:120, quality:90, crop:false, preserve_headers:true},
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
				console.info(res);
				if(res.result && res.result.files) {
					var file = res.result.files[0];
					 filepath = file.FILE_ABS_PATH;
					 headImgAuth = file.FILE_ID + '.' +  file.FILE_EXTENSION;
					 //这里的MODU_CD是保存图片的时候传给后台的。
					 upfile = '[{"MODU_CD":"/authentication","file_ids":["' + file.FILE_ID + '"]}]';
					$('#previewArea1').html('<img id="' + file.FILE_ID + '" width="312" height="262" src="' + contextPath + '/storage/upload/' + file.FILE_REL_PATH + '/' + file.FILE_ID + '.' + file.FILE_EXTENSION + '"/>');
				} else {
					var txt=  "获取失败！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				}
			}
	    }
	}).init();
	//点击保存
//	认证部分保存图片
	$("#keep1").click(function(){
		/*var name = $("#authName").val();
		var sex = $("#authSex").val();
		var cardId = $("#authCardId").val();
		var profession = $("#authProfession").val();*/
		if ($('#auth-form').form('validate')) {
			applyAuth(loginUsId,headImgAuth);
		}		
	});
	//确认修改密码
	$("#ModifyPwdBtn").click(function(){
		modifyPwd(loginUsId);
	});
});

function userInfoSet(loginUsId) {//个人信息设置

	var form = $('#person_set_form');//选中的tab里面的form
	var formvalue = form.serialize();
	var area = '';
	var prov = $(".prov").val();
	var city = $(".city").val();
	var dist = $(".dist").val();
	if(prov){
		area = prov;
		if(city){
			area += "|"+city;
			if(dist){
				area += "|"+dist;
			}
		}
	}
	$.post('/userAction/userInfoSet.action', $.param({'usId':loginUsId,'area':area}) + '&' +$('#person_set_form').serialize(), function(result) {
		if (result.success) {
			var txt=  result.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			location.href = " index.html";
			
		} else {
			var txt=  result.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
	
}

function showPreview(coords){//head cut
    if(parseInt(coords.w) > 0){ //切片其实终止位置及宽度和高度
        x = coords.x;
        y = coords.y;
        w = coords.w;
        h = coords.h;
    }
}
function modifyHeadPortrait(headImg, upfile,  x, y, w, h, filepath, scale, flag,loginUsId){//head cut
	
	$.post('/userAction/userInfoUploadImg.action', $.param({'usId':loginUsId,'headImg':headImg,'files':upfile,'x':x,"y":y,"destWidth":w,"destHeight":h,"file_absolute_path":filepath,"scale":scale,"flag":flag}), function(result) {
		if (result.success) {
			var txt=  result.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			location.href = " index.html";
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
function modifyPwd(loginUsId){//head cut
	
	$.post('/userAction/modifyPwd.action',$.param({'usId':loginUsId}) + '&' +$('#modifyPsForm').serialize() , function(result) {
		if (result.success) {
			alert(result.msg);
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
function getUserDetail(loginUsId){
	$.post('/userAction/userInfoDetail.action', $.param({'usId':loginUsId}), function(res) {
		if (res.success) {
			var rows = res.result ;
			if(rows!=null){
				auth = rows.AUTH_STATE;
				switch(auth){
				case 'Y' :
					$("#personsetPro2").show();
					$("#auth-form").hide();
					break;
				case 'F' :
					$("#alter").show();
					break;
				case 'P' :
					$("#personsetPro").show();
					$("#auth-form").hide();
					break;
				case 'N' :
					$("#alter2").show();
					break;
				}
				
				console.info(auth);
				$(".personSetNickName").val(rows.usName);
				var cityStr = [];
				if(rows.area != null){
					$("#prov").val('');
					$("#city").val('');
					$("#dist").val('');
					cityStr = (rows.area).split("|");
					var prov1 = cityStr[0];
					var city1 = cityStr[1];
					var dist1 = cityStr[2];
					if(prov1){
						if(city1){
							if(dist1){
								$("#city_2").citySelect({
									prov: prov1,
									city: city1,
									dist: dist1,
									nodata:"none"
								});
							}else{
								$("#city_2").citySelect({
									prov: prov1,
									city: city1,
									nodata:"none"
								});
							}
						}else{
							$("#city_2").citySelect({
								prov: prov1,
								nodata:"none"
							});
						}
					}
				}else{
					$("#city_2").citySelect({
						prov:"山东",
						nodata:"none"
					});
				}
				if(rows.sex == 1) 
					$("#girl").attr("selected","selected");
				else 
					$("#boy").attr("selected","selected");
				if(rows.ps != null){
					$("#personinfo").val(rows.ps);
				}else{
					$("#personinfo").val("");
				}
			
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
				/*var k = q;
					q += "<span class='caret'></span>";*/
				//person-set页面欢迎昵称文字冗余。。
				 $(".indexHeadImg").html(p);
				 $(".usName").html(q);
//				 $("#personSet-nickName").text(k);
			}
		} else {
			alert(result.msg);
		}
	}, "JSON");
}

function applyAuth(loginUsId,headImgAuth){
	
	$.post('/userAction/applyAuth.action', $.param({'US_ID':loginUsId,'PICTURE':headImgAuth}) +'&'+ $("#auth-form").serialize(), function(res) {
//		var result = res.result;
		if(res.success){
			console.info(res.msg);
			var txt=  "认证信息提交成功，请等待管理员审核！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info)
		//	console.info(auth);
			location.href = " index.html";
		//	var auth = $personset.auth;
	/*		switch(auth){
				case 'Y' :
					$("#personsetPro2").show();
					$("#auth-form").hide();
					break;
				case 'F' :
					$("#alter").show();
					break;
				case 'P' :
					$("#personsetPro").show();
					$("#auth-form").hide();
					break;
				case 'N' :
					$("#alter2").show();
					break;
			}*/
		}else{
			$("#alter2").show();
		}
	}, "JSON");
}
