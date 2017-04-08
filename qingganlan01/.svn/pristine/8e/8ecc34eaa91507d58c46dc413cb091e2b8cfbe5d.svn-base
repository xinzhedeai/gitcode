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
				field : 'US_ID',
				title : '用户ID',
				sortable : true,
				width :295,
				formatter : function(value, row, index) {  
					value ='<a onclick="$auth.authInfoDetail(\'' + row.US_ID + '\')">' + value + '</a>';
					return value;
				}
			}, {
				field : 'US_NAME',
				title : '用户名',
				width : 223,
				sortable : true,
			
			},  {
				field : 'TEL',
				title : '电话',
				width : 223,
				sortable : true,
			},  {
				field : 'SEX',
				title : '性别',
				width : 100,
				sortable : true,
				formatter : function(value, row, index) {  
					if (value == '0') {
						return	'男';
					} else {
						return	'女';
					}
				}
			}, {
				field : 'STATE',
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
			},{
				field : 'PROFESSION',
				title : '职业',
				sortable : true,
				width : 215,
				hidden : true,
				formatter : function(value, row, index) {  
				}
			},{
				field : 'AREA',
				title : '所在地',
				sortable : true,
				width : 115
			},{
				field : 'PS',
				title : '个性签名',
				sortable : true,
				width : 115
			},{
				field : 'CHIRCH_TYPE',
				title : '参加教会类型',
				sortable : true,
				width : 150,
				formatter : function(value, row, index) { 
					if(value == 'family')
						value = '家庭教会';
					else
						value = '三自教会';
					return value;
				}
			
			},{
				field : 'AUTH_STATE',
				title : '认证状态',
				sortable : true,
				width : 60,
				formatter : function(value, row, index) {  
					if (value == 'Y') {
						return	'已认证';
					} else if(value == 'P'){
						return	'未认证';
					}else if(value == 'F'){
						return	'认证失败';
					}/*else if(value == 'PROCESSING'){
						return	'认证中';
					}*/
				}
			},{
				field : 'APPLY_TIME',
				title : '申请时间',
				sortable : true,
				width : 210,
				formatter : function(value, row, index) { 
				    var date = new Date(value);
				    	date = date.toLocaleString();
					return date;
				}
			}],
			options = {
				url : contextPath + '/mUserAction/getAllUserAuth.action',
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
//		$("#auth-detail-btn").click(function() {
//			var rows=$('#datagridAuth').datagrid("getSelections");
//			if(rows.length!=1&&rows.length!=0){
//				var txt = "只能查看一个用户的认证相关信息！";
//				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
//			}else if(rows.length==1){
//				var ID=rows[0].ID;
//				$auth.authInfoDetail(ID);
//			
//			}else{
//				var txt = "您还未选择选择用户！！";
//				window.wxc.xcConfirm(txt,window.wxc.xcConfirm.typeEnum.info);
//			}
//		});
		$("#auth-saveDetailModal-btn").click(function() {
			var state="Y";
			console.info($auth.id);
			$auth.setAuth($auth.id,state);
		});
		$("#auth-noSaveDetailModal-btn").click(function() {
			var state="F";
			$auth.setAuth($auth.id,state);
		});
/*		$('#az-auth-sName').combobox({    
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
		});  */
		$('#az-auth-sName').combobox({    
		    url : '/mUserAction/getAllUsersCom.action',    
		    valueField :'US_NAME',    
		    textField : 'US_NAME',
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
			authInfoDetail : function(US_ID) {// 用户信息详情
			$.post('/mUserAction/userAuthDetail.action', $.param({'US_ID':US_ID}), function(res) {
				if (res.success) {
					var result = res.result;
					if (result) {
						//用户详情模态框
						$("#AuthDetailModal").modal();
						$("#az-auth-mDetail td:even").css("width",90);
						$("#az-auth-mDetail td:odd").css("width",370);
						//不可编辑
					//	var landId=result.LandID;
						var NickName=result.US_NAME;
						var UserID=result.US_ID;
						$auth.id=result.ID;
						console.info($auth.id);
						var Tel=result.TEl;
						var Email=result.EMAIL;
						var PS=result.PS;
						var Area=result.AREA;
						var RegDate=result.REG_DATE;
						var Auth=result.AUTH_STATE;
						if(Auth=="Y"){
							$("#authDetail_Authen").text("已认证");
							$("#auth-saveDetailModal-btn").hide();
							$("#auth-noSaveDetailModal-btn").hide();
						}else if(Auth=="N"){
							$("#authDetail_Authen").text("未认证");
							$("#auth-saveDetailModal-btn").show();
							$("#auth-noSaveDetailModal-btn").show();
						}else if(Auth=="F"){
							$("#authDetail_Authen").text("认证失败");
							$("#auth-saveDetailModal-btn").hide();
							$("#auth-noSaveDetailModal-btn").hide();
						}else if(Auth=="P"){
							$("#authDetail_Authen").text("认证中");
							$("#auth-saveDetailModal-btn").show();
							$("#auth-noSaveDetailModal-btn").show();
						}
						var Sex=result.SEX;
						if(Sex=="1"){
							$("#authDetail_Sex").text("男");
						}else{
							$("#authDetail_Sex").text("女");
						}
						//不可编辑赋值
				//		$("#authDetail_landId").text(landId);
						$("#authDetail_name").text(NickName);
						$("#authDetail_userId").text(UserID);
						
						$("#authDetail_Tel").text(Tel);
						$("#authDetail_Email").text(Email);
						$("#authDetail_PS").text(PS);
						$("#authDetail_Area").text(Area);
						$("#authDetail_RegDate").text(RegDate);
						
					//	var AbilityScope=result.AbilityScope;
						var Profession=result.PROFESSION;
						var State=result.STATE;
						if(State=="LIMIT"){
							$("#authDetail_Limit").text("受限");
						}else{
							$("#authDetail_Limit").text("正常");
						}
						var IS_BAPTISM=result.IS_BAPTISM;
						$("#is_baptism").text(IS_BAPTISM);
						var CHIRCH_TYPE=result.CHIRCH_TYPE;
						if(CHIRCH_TYPE=="family"){
							$("#church_type").text("家庭教会");
						}else{
							$("#church_type").text("三自教会");
						}
						$("#church_type").text(CHIRCH_TYPE);
						var cardId=result.CARD_ID;
						var date=result.APPLY_TIME;
						var picture=result.PICTURE;
						var t = '';
						if(picture != null){
							t = '<h5>认证所用身份证照片:</h5><a class="img" href="imageshow.html?img=' + picture + '" target="_blank" title="点击查看大图"><img src="' + contextPath + '/storage/upload/authentication/' + picture +'" /></a>';
						}else{
						    t = '<span>该用户还未上传相关认证照片</span>'
						}
						$('#authPreviewArea').html(t);
						$("#authDetail_cardId").text(cardId);
						$("#authDetail_Date").text(date);
						$("#authDetail_Profession").text(Profession);
					//	$auth.Profession = Profession;
						
						$(".img img").load(function(){
							DrawImage(this, 416, 312);
							$(".img img").show();
						});
						
//						var b_class_cd = "PROFESSION";
						//var exp = "AUTHENTICATION";
//						$auth.authGetCommonCodes(b_class_cd);
					}
				}
				
			}, "JSON");
		},
		setAuth : function(AUTH_ID,AUTH_STATE) {
			$.post('/mUserAction/setAuth.action', $.param({'AUTH_ID':AUTH_ID,'AUTH_STATE':AUTH_STATE}), function(result) {
				if (result.success) {
					var txt = "审核操作成功！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
					reloadClear();
					$("#AuthDetailModal").modal('hide');
				} else {
					var txt = "审核操作失败！";
					window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
				    return false;
				}
			}, "JSON");
		},
	}
	
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

