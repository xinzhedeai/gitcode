$(document).ready(function() {
	$('.header').load("header.html",function(){
		getHeaderUserDetail(loginUsId);//获取用户信息详情
	});
	$('.footer').load("footer.html");
	//var fellowShipId = getParameter("fellowShipId");//通过团契列表链接进来的
	loginUsId = getCookie('loginUsId');
	var fellowShipId = getCookie('fellowShipId');
	
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
	
	var page = 1,rows= 50;
	var friPage = 1,rows = 50;
	
	console.info(fellowShipId);
//	getUserDetail(paramUserId);
	getFSAlbumImgs(fellowShipId,page,rows);
	$("#upLoadAlbum").plupload({
		
		// General settings
		runtimes : 'html5,flash,silverlight,html4',
		url : '/fellowShipAction/addAlbum.action?fsId='+fellowShipId,
		
		// User can upload no more then 20 files in one go (sets multiple_queues to false)
		max_file_count: 20,
		
		chunk_size: '1mb',
		// Resize images on clientside if we can
		resize : {
			width : 200, 
			height : 200, 
			quality : 90,
			crop: true // crop to exact dimensions
		},
		multipart_params: {
			module_cd : '/fSAlbum'
		},
		filters : {
			// Maximum file size
			max_file_size : '1000mb',
			// Specify what files to browse for
			mime_types: [
				{title : "Image files", extensions : "jpg,gif,png"},
				{title : "Zip files", extensions : "zip"},
				{title : "Excel files", extensions:"xls,xlsx"}
				
			]
		},
		// Rename files by clicking on their titles
		rename: true,
		
		// Sort files
		sortable: true,

		// Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)
		dragdrop: true,

		// Views to activate
		views: {
			list: true,
			thumbs: true, // Show thumbs
			active: 'thumbs'
		},

		   flash_swf_url : 'lib/plugin/plupload-2.1.2/Moxie.swf',
		silverlight_xap_url : 'lib/plugin/plupload-2.1.2/MoxiDe.xap'
	});


	// Handle the case when form was submitted before uploading has finished
	$('#form').submit(function(e) {
		// Files in queue upload them first
		if ($('#upLoadAlbum').plupload('getFiles').length > 0) {

			// When all files are uploaded submit form
			$('#upLoadAlbum').on('complete', function() {
				$('#form')[0].submit();
			});

			$('#upLoadAlbum').plupload('start');
		} else {
			alert("You must have at least one file in the queue.");
		}
		return false; // Keep the form from submitting
	});
})

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
			/*	 $("img").error(function() { 
						$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 });*/ 
			}	 
				
		} else {
			alert(result.msg);
		}
	}, "JSON");
}

function getFSAlbumImgs(fellowShipId,page,rows){
	$.post('/fellowShipAction/getFSAlbumImgs.action', $.param({'fsId':fellowShipId,'page':page,'rows':rows}), function(res) {
		if (res.success) {
			var rows = res.result.rows ;
			if(rows!=null){
				var p = '';//中文p
				for(var i=0;i<rows.length;i++){
					var fileName = rows[i].FILE_NM;
					if(fileName.length>10){
						fileName = fileName.substr(0,15)+"...";
					}
					p += '<li><div class="fellowShipPictures"><h4>'+fileName+'</h4><i class="fa fa-md fa-close" onclick="confirmDelete(\''+fellowShipId+'\',\''+rows[i].FILE_ID+'\');"></i>';
					p += '<img alt="" src="/storage/upload'+rows[i].MODU_CD+'/'+rows[i].FILE_ID+'.'+rows[i].FILE_EXTENSION+'" class="preContentImg">';
					 var uploadTs = new Date(rows[i].UPLOAD_TS);
                     uploadTs = uploadTs.toLocaleString();	
					p += '<h4>'+uploadTs+'</h4>';
				}
				 $(".fSAlbumUl").html(p);
				 $("img").error(function() { 
						$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 }); 
			}	 
				
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
function delFellowPic(fsId,picId){//获取用户详情
	$.post('/fellowShipAction/delFellowPic.action', $.param({'fsId':fsId,'fileId':picId}), function(res) {
		if (res.success) {
			var txt=  "删除成功！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);	
			location.href = "fellowShipAlbum.html";
		} else {
			var txt=  "删除失败！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);	
		}
	}, "JSON");
}
function confirmDelete(fsId,picId){//提示框，是否删除。
	var txt=  "确定删除？";
	var option = {
			title: "系统信息",
			btn: parseInt("0011",2),
			onOk: function(){
				delFellowPic(fsId,picId);
			},
		onCancel: function(){
			
		}
	}
	window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
}