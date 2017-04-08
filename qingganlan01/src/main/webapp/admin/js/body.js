/**
 * @file body
 * @author Jianghaipeng 
 * @date: 2015/11/04 13:00
 * @version: V1.0
 */
'use strict';

$(function() {
	$(document).ready(function(){
		/*	var access_token = getCookie('access_token');
		if (access_token) {
			location.href = 'index.html';
		} */
		var checked = getParameter('flag');
		if(checked){
			switch(checked){
			case "1" :
				addTab($("#mfdetail"));
				break;
			case "2" :
				addTab($("#detailcontant"));
				break;
			case "3" :
				addTab($("#editetitle"));
				break;
			case "4" :
				addTab($("#adperson"));
				break;
			case "5" :
				addTab($("#editecontant"));
				break;
			}
		}else{
			addTab($("#adperson"));
		}
		
		
		$(".leftsidebar_box a").click(function() {
			var contentid = $(this).attr("id");
			var tabid = null;
			switch(contentid){
				case "useraccount":
					tabid = "accountuser";
					break;
				case "adminaccount":
					tabid = "accountadmin";
					break;
				case "blogmanage":
					tabid = "manageblog";
					break;
				case "commentmanage":
					tabid = "managecomment";
					break;
				case "replymanage"://新添加的页面。3-14
					tabid = "managereply";
					break;
				case "mfinfomanage":
					tabid = "managemfinfo";
					break;
				case "identityauth":
					tabid = "authidentity";
					break;
				case "FSInfomanage"://团契管理
					tabid = "manageFSInfo";
					break;
				case "FSPraymanage"://团契祷告
					tabid = "manageFSPray";
					break;
				case "FSQuesitionmanage"://团契问题答疑
					tabid = "manageFSQuesition";
					break;
				case "churchmanage"://教会信息
					tabid = "managechurch";
					break;	
				case "logmanage"://日志信息
					tabid = "managelog";
					break;
				case "FSMemberInfomanage"://团契成员信息
					tabid = "manageFSMemberInfo";
					break;
			}
			if($("#" + tabid).parent().css("display") == "none"){
				$("#" + tabid).parent().show();
				$("#content div").hide();
		        $("#tabs li").removeClass("current");

		        // show current tab
		        $("#" + tabid + "_content").show();
		        $("#" + tabid + "_content" + " div").show();
		        $("div.modal").hide();
		        $("#" + tabid).parent().addClass("current");
			}else{
				if($("#" + tabid + "_content").css("display") == "none"){
					$("#content div").hide();
			        $("#tabs li").removeClass("current");

			        // show current tab
			        $("#" + tabid + "_content").show();
			        $("#" + tabid + "_content" + " div").show();
			        $("div.modal").hide();
			        $("#" + tabid).parent().addClass("current");
				}else{
					addTab($(this));
				}
				 
			}
			
			/*if(contentid == "ltsix"){
				if($("#Document6_content").css("display") == "none"){
					$("#content div").hide();
			        $("#tabs li").removeClass("current");

			        // show current tab
			        $("#Document6_content").show();
			        $("#Document6_content" + " div").show();
			        $("#Document6").parent().addClass("current");
				}else{
					 addTab($(this));
				}
			}*/
			
	    });

		$(document).on('click','#tabs a.tab', function() {
	        // Get the tab name
	        var contentname = $(this).attr("id") + "_content";

	        // hide all other tabs
	        $("#content div").hide();
	        $("#tabs li").removeClass("current");

	        // show current tab
	        $("#" + contentname).show();
	        $("#" + contentname + " div").show();
	        $("div.modal").hide();
	        $(this).parent().addClass("current");
	    });

	    $(document).on('click','#tabs a.remove', function() {
	        // Get the tab name
	        var tabid = $(this).parent().find(".tab").attr("id");

	        // remove tab and related content
	        var contentname = tabid + "_content";
	        $("#" + contentname).hide();
	        $(this).parent().hide();

	        // if there is no current tab and if there are still tabs left, show the first one
	        if ($("#tabs li.current").css("display") == "none" && $("#tabs li").length > 0) {

	            // find the first tab
	        	if($("#tabs li").eq(0).css("display") == "none"){
	        		for(var i = 0; i <= $("#tabs li").length; i++){
	            		switch ($("#tabs li").eq(i).css("display")){
	            			case "none" :
	            				var firsttab = $("#tabs li").eq(i+1);
	            	            firsttab.addClass("current");
	            	            var firsttabid = $(firsttab).find("a.tab").attr("id");
	            	            if(firsttab.css("display") == "block"){
	            	            	$("#" + firsttabid + "_content").show();
	            	                $("#" + firsttabid + "_content" + " div").show();	
	            	            }
	            	            $("div.modal").hide();
	            	            break;
	            		}
	            	}
	        	}else{
	        		var firsttab = $("#tabs li:first-child");
	                firsttab.addClass("current");
	        	}
	        	
	        	
	           /* var firsttab = $("#tabs li:first-child");
	            firsttab.addClass("current");*/

	            // get its link name and show related content
	            var firsttabid = $(firsttab).find("a.tab").attr("id");
	            if(firsttab.css("display") == "block"){
	            	$("#" + firsttabid + "_content").show();
	                $("#" + firsttabid + "_content" + " div").show();	
	            }
	            $("div.modal").hide();
	        }
	    });
	});

});

function addTab(link) {
    // If tab already exist in the list, return
    if ($("#" + $(link).attr("rel")).length != 0)
        return;
    
    // hide other tabs
    $("#tabs li").removeClass("current");
    $("#content div").hide();
    
    // add new tab and related content
    $("#tabs").append("<li class='current'><a class='tab' id='" +
        $(link).attr("rel") + "' href='#'>" + $(link).html() + 
        "</a><a href='#' class='remove'>x</a></li>");
    switch($(link).attr("rel")){
    	case "accountuser" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/user.html");
        	break;
    	case "accountadmin" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/admin.html");
        	break;
    	case "manageblog" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/blog.html");
        	break;
    	case "managecomment" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/comment.html");
        	break;
    	case "managereply" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/reply.html");
        	break;
    	case "managemfinfo" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/Friends.html");
        	break;
    	case "detailmf" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/microdetail.html");
        	break;
    	case "authidentity" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/auth.html");
        	break;
    	case "contantdetail" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/detailelse.html");
        	break;
    	case "titleedite" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/editdetail.html");
        	break;
    	case "personad" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/managerdetail.html");
        	break;
    	case "contantedite" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/editcontent.html");
        	break;
    	case "manageFSInfo" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/fellowShip.html");
        	break;
    
     	case "manageFSPray" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/fSPray.html");
        	break;
    	case "manageFSQuesition" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/fSQuesition.html");
        	break;
    	case "managechurch" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/church.html");
        	break;
    	case "managelog" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/log.html");
        	break;
    	case "manageFSMemberInfo" :
    		$("#content").append("<div id='" + $(link).attr("rel") + "_content'></div>");
        	$("#" + $(link).attr("rel") + "_content").load("/admin/main/fellowShipMember.html");
        	break;
    }
    
    
    // set the newly added tab as current
    $("#" + $(link).attr("rel") + "_content").show();
}

/*var $body = {
		
		
		body : function(userId, password, clientId, clientSecret){
			var body = new nssoft.openApi.login.api();
			body.addParam('userId', userId);
			body.addParam('passWord', password);
			body.addParam('clientId', clientId);
			body.addParam('clientSecret', clientSecret);
			body.request({
				method : 'POST',
				async : false,
				url :  contextPath + '/v1/api/noauth/user/login.json'
			});
		}
		
};*/