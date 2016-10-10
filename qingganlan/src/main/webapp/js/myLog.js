$(function(){
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
	})
	$(".header").on("click",".topIcon",function(){
		location.href="index.html";
	})
	$(".header").on("click",".myHomePage",function(){
		location.href="person-center.html?paramUserId="+loginUsId;
	})
	$('#myLogDatagrid').datagrid({
			url : '/logAction/searchMyLogsWitness.action?usId='+paramUserId,
			idField : 'LOG_ID',
			pagination : true,
			fitColumns : true,
			rownumbers : true,
			checkOnSelect:false,
			width : 1150,
			sortOrder : 'desc',
			pageSize : 10,
			columns : [[{
				field : 'ck',
				checkbox : true
			}, {
				field : 'LOG_TITLE',
				title : '见证标题',
				sortable : true,
				width : 220,
			}, {
				field : 'LOG_CONTENT',
				title : '见证内容',
				sortable : true,
				width : 220,
				formatter : function(value, row, index) { 
					var a ='<a href=logDetail.html?logId='+row.LOG_ID+'>';
					if(value.length>30){
						a += value.substring(0,30)+'...';
					}else{
						a += value;
					}
					a += '</a>';
					return a;
				}
			}, {
				field : 'SEND_DATE',
				title : '发表时间',
				sortable : true,
				width : 170,
				formatter : function(value, row, index) { 
				    var birthday = new Date(value);
                    var sendTime = birthday.toLocaleString();
					//value ='<a onclick="">删除日志</a>';
					return sendTime;
				}
			}, {
				field : 'option',
				title : '删除',
				width : 70,
				formatter : function(value, row, index) { 
					value ='<a onclick="delLog(\''+row.LOG_ID+'\');">删除日志</a>';
					return value;
				}
				
			}]],
			loadFilter : function(data) {
				if (data != null) {
					console.info(data);
					if(data.result.rows != null){
						return data.result;
					}else{
						var txt=  "没有相关数据！";
						window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
						$('#myLogDatagrid').datagrid('loadData', { total: 0, rows: [] });
					}
				} else {
					window.location.href='/admin/login.html';
				}
			}
		});


	
	//创建easyUI datagrid
	//$("#myLogDatagrid").datagrid(options); 
  	$('#table_id tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
        // alert($(this).index());
        $(".checkbox:eq("+$(this).index()+")").css("checked",true); 

  	});
 
    $('#button').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected' );
    });
    var flag = 0;
    $("#logTabQT").click(function(){
    	
    	console.info("点击事件。。。");
    	$("#addLog").attr("style","display:none");
		$("#addLogQT").attr("style","display:block");
		 if(flag == 0){
		    	console.info(flag);
				$('#myLogDatagridQT').datagrid({
					url : '/logAction/searchMyLogsQT.action?usId='+paramUserId,
					idField : 'LOG_ID',
					pagination : true,
					fitColumns : false,
					rownumbers : true,
					checkOnSelect:false,
					width : 1307,
					sortOrder : 'desc',
					pageSize : 10,
					columns : [[{
						field : 'ck',
						checkbox : true
					}, {
						field : 'LOG_TITLE',
						title : '灵修日志标题',
						sortable : true,
						width : 220,
						formatter : function(value, row, index) { 
							var a ='<a href=logDetail.html?logId='+row.LOG_ID+'>';
							if(value.length>30){
								a += value.substring(0,30)+'...';
							}else{
								a += value;
							}
							a += '</a>';
							return a;
						}
					}, {
						field : 'LOG_CONTENT',
						title : '灵修日志内容',
						sortable : true,
						width : 220,
						formatter : function(value, row, index) { 
							var a ='';
							if(value.length>30){
								a += value.substring(0,30)+'...';
							}else{
								a += value;
							}
							return a;
						}
					}, {
						field : 'SEND_DATE',
						title : '发表时间',
						sortable : true,
						width : 170,
						formatter : function(value, row, index) { 
						    var birthday = new Date(value);
			                var sendTime = birthday.toLocaleString();
							//value ='<a onclick="">删除日志</a>';
							return sendTime;
						}
					}, {
						field : 'option',
						title : '删除',
						width : 70,
						formatter : function(value, row, index) { 
							value ='<a onclick="delLogQT(\''+row.LOG_ID+'\');">删除灵修日志</a>';
							return value;
						}
						
					}]],
					loadFilter : function(data) {
						if (data != null) {
							console.info(data);
							if(data.result.rows != null){
								return data.result;
							}else{
								var txt=  "没有相关数据！";
								window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
								$('#myLogDatagridQT').datagrid('loadData', { total: 0, rows: [] });
							}
						} else {
							window.location.href='/admin/login.html';
						}
					}
				});
				flag = 1;
		    }
    })
    $("#logTabWitness").click(function(){
    	
    	$("#addLog").attr("style","display:block");
		$("#addLogQT").attr("style","display:none");
		
    })
   
	UE.getEditor('logEditor', {//编辑器
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
    console.info(flag);
	if(flag==1){
		console.info(flag);
		
	}else{
		
		console.info(flag);
	}
	$("#addLog").click(function(){//编辑器保存按钮
		var title = $(".logTitle").val();
		var content = UE.getEditor('logEditor').getContent();
		addLogWitness(loginUsId,title, content);
		
	})
	$("#addLogQT").click(function(){//编辑器保存按钮
		var title = $(".logTitle").val();
		var content = UE.getEditor('logEditor').getContent();
		console.info(content);
		addLogQT(loginUsId,title, content);
	})
	
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
			/*	 $("img").error(function() { 
						$(this).attr("src",  "/lib/img/images/default_blog_img.jpg"); 
				 }); 
				*/
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
function addLogWitness(loginUsId,title, content){
	$.post('/logAction/addLogWitness.action', $.param({'usId':loginUsId,'logTitle':title,'logContent':content}), function(res) {
		if (res.success) {
			
			var txt=  "添加日志成功！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			$("#mymodal-data").modal("hide");
			$("#myLogDatagrid").datagrid('load',{});
			
		} else {
			var txt=  "添加日志失败！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function addLogQT(loginUsId,title, content){
	$.post('/logAction/addLogQT.action', $.param({'usId':loginUsId,'logTitle':title,'logContent':content}), function(res) {
		if (res.success) {
			var txt=  "添加日志成功！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			$("#mymodal-data").modal("hide");
			$("#myLogDatagrid").datagrid('load',{});
			
		} else {
			var txt=  "添加日志失败！";
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function delLog(logId){
	$.post('/logAction/delLogById.action', $.param({'logId':logId}), function(res) {
		if (res.success) {
			var txt=  res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			$("#myLogDatagrid").datagrid('load',{});
			
		} else {
			var txt=  res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}
function delLogQT(logId){
	$.post('/logAction/delLogById.action', $.param({'logId':logId}), function(res) {
		if (res.success) {
			var txt=  res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
			$("#myLogDatagridQT").datagrid('load',{});
		} else {
			var txt=  res.msg;
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		}
	}, "JSON");
}