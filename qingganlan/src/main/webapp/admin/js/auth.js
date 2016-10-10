/**
 * @file auth
 * @author zhaojunbao 
 * @date: 2015/11/13 15:49
 * @version: V1.0
 */

'use strict';
window.$auth = window.$auth || {};
$(function() {
	$(document).ready(function() {
		var columns = [{
				field : 'UserID',
				title : '用户ID',
				sortable : true,
				width :295,
				formatter : function(value, row, index) {  
					value ='<a onclick="$auth.authInfoDetail(\'' + row.ID + '\')">' + value + '</a>';
					return value;
				}
			}, {
				field : 'LandID',
				title : '用户登录ID',
				sortable : true,
				width : 170,
			}, {
				field : 'NickName',
				title : '用户昵称',
				sortable : true,
				width : 190
			}, {
				field : 'Sex',
				title : '性别',
				sortable : true,
				width : 60,
				formatter : function(value, row, index) {  
					if (value == '1') {
						return	'男';
					} else {
						return	'女';
					}
				}
			}, {
				field : 'PersonalitySignature',
				title : '个性签名',
				sortable : true,
				width : 259,
			}, {
				field : 'State',
				title : '状态',
				sortable : true,
				width : 65,
				formatter : function(value, row, index) {  
					if (value == 'NORMAL') {
						return	'正常';
					} else {
						return	'受限';
					}
				}
			},/*{
				field : 'Profession',
				title : '职业',
				sortable : true,
				width : 215,
				hidden : true,
				formatter : function(value, row, index) {  
				}
			},*/{
				field : 'Area',
				title : '所在地',
				sortable : true,
				width : 115
			},{
				field : 'ClassicalUser',
				title : '精华人',
				sortable : true,
				width : 60,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'是';
					} else {
						return	'否';
					}
				}
			},{
				field : 'Authentication',
				title : '认证',
				sortable : true,
				width : 60,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'已认证';
					} else if(value == 'PROCESSING'){
						return	'未认证';
					}else if(value == 'FAILED'){
						return	'认证失败';
					}/*else if(value == 'PROCESSING'){
						return	'认证中';
					}*/
				}
			}],
			options = {
				url : contextPath + '/v1/api/management/user/authenticationInfos.json',
				idField : 'BlogPostID',
				loadFilter : function(data) {
					if (data != null) {
						if(data.result.rows != null){
							return data.result;
						}else{
							var txt=  "没有相关数据！";
							window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						}
						
					} else {
						window.location.href='/admin/login.html';
					}
				},
				sortOrder : 'desc',
				pageSize : 10,
				width : 1307,
		    	pagination : true,
				fitColumns : false,
				rownumbers : true,
				checkOnSelect:false,
				columns : [columns],
				rowStyler: function(index,row){
						return 'height:50px;';	
				}
			}
		//创建easyUI datagrid
		$("#datagridAuth").datagrid(options); 
		
		$("#az-authSearch").click(function() {
			$("#datagridAuth").datagrid("reload",$.serializeObject($('#az-auth-searchForm')));
		});
		$("#auth-searchReset-btn").click(function() {
			$("#datagridAuth").datagrid("reload",{});
			$('#az-auth-sName').combobox('clear');
			$('#az-auth-searchForm select').val('');
		});
		$("#auth-detail-btn").click(function() {
			var rows=$('#datagridAuth').datagrid("getSelections");
			if(rows.length!=1&&rows.length!=0){
				var txt = "只能查看一个用户的认证相关信息！";
				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
			}else if(rows.length==1){
				var ID=rows[0].ID;
				$auth.authInfoDetail(ID);
			
			}else{
				var txt = "您还未选择选择用户！！";
				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
			}
		});
		$("#auth-saveDetailModal-btn").click(function() {
			var state="Y";
			$auth.setAuth($auth.id,state);
		});
		$("#auth-noSaveDetailModal-btn").click(function() {
			var state="FAILED";
			$auth.setAuth($auth.id,state);
		});
		$('#az-auth-sName').combobox({    
		    url : contextPath + '/v1/api/management/common/getUsers.json',    
		    valueField :'NickName',    
		    textField : 'NickName',
		    width : 400,
		    height : 35,
		    loadFilter : function(data) {
				if (data != null) {
					return data.result.rows;
				} else {
					window.location.href='/admin/login.html';
				}
			},
		});  
	});
	function reloadClear(){
		$('#datagridAuth').datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections').datagrid("clearChecked");
		$("#datagridAuth").datagrid("reload",$.serializeObject($('#az-auth-searchForm')));
	}
	//durian请求体
	$auth = {
			id : null,
			Profession : null,
			setAuth : function(id,state) {
				var setAuth = new nssoft.openApi.setAuth.api();
				setAuth.addParam('id', id);
				setAuth.addParam('state', state);
				setAuth.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/user/setAuthentication.json'
				});
			},
			authInfoDetail : function(ID) {
				var authInfoDetail = new nssoft.openApi.authInfoDetail.api();
				authInfoDetail.addParam('id', ID);
				authInfoDetail.request({
					method : 'POST',
					async : true,
					url : contextPath + '/v1/api/management/user/authenticationInfoDetail.json'
				});
			},
			authGetCommonCodes : function(b_class_cd ){
				var getCommonCodes = new nssoft.openApi.authGetCommonCodes.api();
				getCommonCodes.addParam('b_class_cd', b_class_cd);
			//	getCommonCodes.addParam('exp', exp);
				getCommonCodes.request({
					method : 'POST',
					async : false,
					url : contextPath + '/v1/api/noauth/common/getCommonCode.json'
				});
			},
	};
	(function() {//设置认证
		$class('nssoft.openApi.setAuth.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result.success) {
						var txt=  "设置成功！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						reloadClear();
						$("#AuthDetailModal").modal('hide');
					} else {
						var txt=  "设置失败！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					    return false;
					}
					break;
				case -600 :
					var txt = "没有权限！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
					break;
				case -601 :
					var txt = "权限失效！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
					location.href = '/admin/login.html';
					break;
				}
			},
			onFail : function(status) {
				var txt=  "发生错误！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
	}());
	(function() {//设置认证
		$class('nssoft.openApi.authInfoDetail.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				switch(res.errCd){
				case 0 :
					var result = res.result;
					if (result) {
						//用户详情模态框
						$("#AuthDetailModal").modal();
						$("#az-auth-mDetail td:even").css("width",90);
						$("#az-auth-mDetail td:odd").css("width",370);
						//不可编辑
						var landId=result.LandID;
						var NickName=result.NickName;
						var UserID=result.UserID;
						$auth.id=result.ID;
						var Tel=result.Tel;
						var Email=result.Email;
						var PS=result.PersonalitySignature;
						var Area=result.Area;
						var RegDate=result.RegDate;
						var Auth=result.Authentication;
						if(Auth=="Y"){
							$("#authDetail_Authen").text("已认证");
							$("#auth-saveDetailModal-btn").hide();
							$("#auth-noSaveDetailModal-btn").hide();
						}else if(Auth=="PROCESSING"){
							$("#authDetail_Authen").text("未认证");
							$("#auth-saveDetailModal-btn").show();
							$("#auth-noSaveDetailModal-btn").show();
						}else if(Auth=="FAILED"){
							$("#authDetail_Authen").text("认证失败");
							$("#auth-saveDetailModal-btn").hide();
							$("#auth-noSaveDetailModal-btn").hide();
						}/*else if(Auth=="PROCESSING"){
							$("#authDetail_Authen").text("认证中");
							$("#auth-saveDetailModal-btn").show();
							$("#auth-noSaveDetailModal-btn").show();
						}*/
						var Sex=result.Sex;
						if(Sex=="1"){
							$("#authDetail_Sex").text("男");
						}else{
							$("#authDetail_Sex").text("女");
						}
						//不可编辑赋值
						$("#authDetail_landId").text(landId);
						$("#authDetail_name").text(NickName);
						$("#authDetail_userId").text(UserID);
						
						$("#authDetail_Tel").text(Tel);
						$("#authDetail_Email").text(Email);
						$("#authDetail_PS").text(PS);
						$("#authDetail_Area").text(Area);
						$("#authDetail_RegDate").text(RegDate);
						
						var AbilityScope=result.AbilityScope;
						var Profession=result.Profession;
						var State=result.State;
						if(State=="LIMIT"){
							$("#authDetail_Limit").text("受限");
						}else{
							$("#authDetail_Limit").text("正常");
						}
						var Level=result.Level;
						$("#authDetail_Level").text(Level);
						var CU=result.ClassicalUser;
						if(CU=="N"){
							$("#authDetail_ClassicUser").text("否");
						}else{
							$("#authDetail_ClassicUser").text("是");
						}
						//$("#detail_ClassicUser").text(CU);
						var cardId=result.CardID;
						var date=result.Date;
						var picture=result.Picture;
						var t = '';
						if(picture!="null"){
							t = '<h5>认证所用身份证照片:</h5><a class="img" href="imageshow.html?img=' + result.Picture + '" target="_blank" title="点击查看大图"><img style="display:none;" src="' + contextPath + '/storage/upload/authentication/' + result.Picture +'" /></a>';
						}else{
						    t = '<span>该用户还未上传相关认证照片</span>'
						}
						$('#authPreviewArea').html(t);
						$("#authDetail_cardId").text(cardId);
						$("#authDetail_Date").text(date);
						$("#authDetail_Profession").text(Profession);
						$auth.Profession = Profession;
						
						$(".img img").load(function(){
							DrawImage(this, 416, 312);
							$(".img img").show();
						});
						
						var b_class_cd = "PROFESSION";
						//var exp = "AUTHENTICATION";
						$auth.authGetCommonCodes(b_class_cd);
					}
					break;
				case -600 :
					var txt = "没有权限！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
					break;
				case -601 :
					var txt = "权限失效！";
					window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
					location.href = '/admin/login.html';
					break;
				}
			},
			onFail : function(status) {
				var txt=  "发生错误！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
	}());
	(function(){
		$class('nssoft.openApi.authGetCommonCodes.api').extend(nssoft.absAPI).define({
			onSuccess : function(status, res) {
				if (res.errCd === 0) {
					var result = res.result;
					if(result){
						var rows = result.rows;
						var p = null;
						for (var i=0; i<rows.length; i++) {
							if($auth.Profession == rows[i].s_class_cd){
								var ProfessionName = rows[i].s_class_nm;
								$("#authDetail_Profession").text(ProfessionName);
								return false;
							}
						}
					}else{
						var txt=  result.msg;
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$("#name").focus();
					}
					
				} else {
					if(res.errCd === -600){
						var txt=  "身份失效！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						delCookie('access_token',getCookie('access_token'));
						window.location.href = "/login.html";
					}else{
						var txt=  "发生错误！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					}
				}
			},
			onFail : function(status) {
				var txt=  "发生错误！";
				window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			}
		});
	}());
	
});

function DrawImage(Img, FitWidth, FitHeight) {//按比例显示
    var image = new Image();
    image.src = Img.src;
    if (image.width > 0 && image.height > 0) {
        if (image.width / image.height >= FitWidth / FitHeight) {
            if (image.width > FitWidth) {
                Img.width = FitWidth;
                Img.height = (image.height * FitWidth) / image.width;
            } else {
                Img.width = image.width;
                Img.height = image.height;
            }
        } else {
            if (image.height > FitHeight) {
                Img.height = FitHeight;
                Img.width = (image.width * FitHeight) / image.height;
            } else {
                Img.width = image.width;
                Img.height = image.height;
            }
        }
    }
    
}

