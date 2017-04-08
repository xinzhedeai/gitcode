<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'reg.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="/lib/js/includeHead.js?v=20151020001"></script>
	<script type="text/javascript" src="../js/register.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
<body class="bg1">
	<div class="container ">
		<div class="row index-row ">
			<form role="form" class="registerForm" action="/userAction/reg.action">
				<div class="registerInfo opacityL1">
					<div class="title">
						<i class="fa fa-lg fa-edit"></i>
						<span>注册信息</span>
					</div>
					<ul>
						<li>
							<div class="form-group form-group-lg">
								<label for="phone" class="col-md-3">注册账号</label>					
								<div class="col-md-4">
									<input  type="text" class="form-control" placeholder="请输入需要注册的邮箱号码"  id="username" name="usId">
								</div>	

							</div>	
						</li>
						<li>	
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>	<div class="col-md-4 ">
								<input type="password" class="form-control" placeholder="请输入用户密码" name="usPs" id="password">
								</div>
							</div>
						</li>
						<li>	
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">确&nbsp;&nbsp;认&nbsp;&nbsp;密&nbsp;&nbsp;码：</label>	<div class="col-md-4 ">
									<input type="password" class="form-control" placeholder="请输入确认密码" id="repassword">
								</div>
							</div>
						</li>
						<li>	
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">用户昵称</label>	<div class="col-md-4 ">
									<input type="text" class="form-control" placeholder="请输入用户昵称" id="usName" name="usName">
								</div>
							</div>
						</li>
					</ul>	
				</div>
				<!-- <div class="registerMyBelief">
					<div class="title">
						<i class="fa fa-lg fa-twitter"></i>
						<span>我的信仰</span>
					</div>
					<ul>
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3">信仰：</label>
							    <div class="col-md-4 ">
								    <select class="form-control" > 
								    	<option value="">请选择...</option>
								        <option>基督信仰</option> 
								        <option>暂时是无神论者</option> 			   
							        </select>
						    	</div>
  							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3">开始信主的日期：</label>
							    <div class="col-md-4 ">
						   			<input size="16" type="text" value="2012-06-15 14:45"class="form-control  input-append date  form_datetime" readonly>
						   			
						   		</div>	
  							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
							    <label class="col-md-3">敬拜地点类型</label>
							        <input type="radio" name="Church" id="homeChurch" value="家庭教会" > 家庭教会 
							        <input type="radio" name="Church" id="ThreeSelfChurch" value="三自教会" > 三自教会  
							</div>
						</li>
						<li>
							
							<div class="form-group form-group-lg">
							    <label class="col-md-3">是否受洗</label>							 
							        <input type="radio" name="receiveBaptism" id="receiveBaptismOk" value="还未受洗" > 还未受洗 
							        <input type="radio" name="receiveBaptism" id="receiveBaptismNo" value="已受洗" > 已受洗							  
							</div>
							
							<label class="radio-inline">
												        <input type="radio"  value="option1" name="sex">男性
												    </label>
						    <label class="radio-inline">
						      <input type="radio"  value="option2" name="sex">女性
						    </label>
						</li>
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3"> 读经祷告：</label>
							    <div class="col-md-4 ">
								    <select class="form-control"> 
								    	<option value="">请选择...</option>
								      	<option value="0">偶尔读经祷告</option>
										<option value="1">每周1－2天</option>
										<option value="2">每周3－5天</option>
										<option value="3">每天读经祷告</option>			   
							        </select>
						    	</div>
  							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3"> 圣经阅读：</label>
							    <div class="col-md-4 ">
								    <select class="form-control"> 
								    	<option value="">请选择...</option>
							      		<option value="0">正在读第1遍</option>
										<option value="1">读过1遍</option>
										<option value="2">读过2－3遍</option>
										<option value="3">读过4－5遍</option>
										<option value="4">读过6－10遍</option>
										<option value="5">读过10遍以上</option>
							        </select>
						    	</div>
  							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3">每日灵修：</label>
							    <div class="col-md-4 ">
								    <select class="form-control"> 
								    	<option value="">请选择...</option>
										<option value="0">少于5分钟</option>
										<option value="1">5－15分钟</option>
										<option value="2">15－30分钟</option>
										<option value="3">30－60分钟</option>
										<option value="4">60分钟以上</option>	   
							        </select>
						    	</div>
  							</div>
						</li>
				
					</ul>
				</div>		
				<div class="personalDetail">
					<div class="title">
						<i class="fa fa-lg fa-user"></i>
						<span>个人资料</span>
					</div>
					<ul>
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3">情感状况：</label>
							    <div class="col-md-4 ">
								    <select class="form-control"> 
								    	<option value="">请选择...</option>
										<option value="0">寻觅中</option>
										<option value="1">正在交往中</option>
										<option value="2">已结婚</option> 
							        </select>
						    	</div>
  							</div>
						</li>
		
						<li>
							<div class="form-group form-group-lg">
							    <label class="col-md-3 labelSex"> 我的性别：</label>		
							    <div class="registerSex">					
							        <input type="radio" name="sex" id="man" value="男" checked> 男	
							        <input type="radio" name="sex" id="woman" value="女" checked> 女 
							    </div>    							 
							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3">出生日期：</label>
							    <div class="col-md-4 ">
						   				<input size="16" type="text" value="2012-06-15 14:45"class="form-control  input-append date  form_datetime" readonly>
						   		</div>	
  							</div>
						</li>
						
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3">学历：</label>
							    <div class="col-md-4 ">
								    <select class="form-control"> 
										<option value="">请选择...</option>
										<option value="0">小学</option>
										<option value="1">初中</option>
										<option value="2">高中</option>
										<option value="3">中专</option>
										<option value="4">大专</option>
										<option value="5">本科</option>
										<option value="6">硕士</option>
										<option value="7">博士</option>
										<option value="8">博士后</option>
							        </select>
						    	</div>
  							</div>
						</li>
		
						<li>
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">  毕业学校：</label>	<div class="col-md-4 ">
									<input type="password" class="form-control" placeholder="请输入毕业学校" id="password">
								</div>
							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">  所学专业：</label>	<div class="col-md-4 ">
									<input type="password" class="form-control" placeholder="请输入毕业学校" id="password">
								</div>
							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
							    <label for="exampleInputEmail1" class="col-md-3">职业：</label>
							    <div class="col-md-4 ">
								    <select class="form-control"> 
										<option value="">请选择...</option>
										<option value="0">牧师/传道人</option>
										<option value="1">软件工程师</option>
										<option value="2">美工设计师</option>
										<option value="3">研发人员</option>
										<option value="4">销售人员</option>
										<option value="5">管理人员</option>
										<option value="6">财务人员</option>
										<option value="7">行政/后勤/客服</option>
										<option value="8">教师</option>
										<option value="9">学生</option>
										<option value="10">公务员</option>
										<option value="11">自主创业</option>
										<option value="12">其它职业</option>
							        </select>
						    	</div>
  							</div>
						</li>

						<li>
							<div class="form-group form-group-lg">
							    <label  class=" workPlaceLabel col-md-4">工作地点：</label>
								    <div class=" workPlace col-md-8">							  				
								    	<select class="form-control" name="province" id="s1"> 

   								        	<option></option> 							   
							        	</select>
							           <select class="form-control" name="city" id="s2"> 
								        	<option></option> 							   
							        	</select>
							           <select class="form-control" name="town" id="s3"> 
								        	<option></option> 							   
							        	</select>
							        	<input id="address" name="address" type="hidden" value="" />	   
						    	</div>
  							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">所聚会的教会名称：</label>	<div class="col-md-5 ">
									<input type="text" class="form-control" placeholder="请输入所在工作地聚会的教会名称" id="nickName">
								</div>
							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">所聚会的团契名称：</label>	<div class="col-md-5 ">
									<input type="text" class="form-control" placeholder="请输入所在工作地聚会的团契名称" id="nickName">
								</div>
							</div>
						</li>
						<li>
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">兴趣爱好：</label>	<div class="col-md-4 ">
									<input type="text" class="form-control" placeholder="请输入兴趣爱好" id="nickName">
								</div>
							</div>
						</li>
						<li class="regTextArea">
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-4 bibleText">圣经中你最喜欢的一节经文：</label>
								<br><br>
								<textarea class="form-control register-textarea" id="index-area-top">
								</textarea>
								<br>
								
							</div> 
						</li>
					</ul>
				</div>
			
				<div class="myContactWay">
					<div class="title">
						<i class="fa fa-lg fa-phone"></i>
						<span>我的联系方式</span>
					</div>
					<ul>
						<li>
							<div class="form-group form-group-lg">
								<label for="password" class="col-md-3">qq号：</label>	<div class="col-md-4 ">
									<input type="text" class="form-control" placeholder="请输入qq号" id="nickName">
								</div>
							</div>
						</li>
					</ul>
				</div> -->
				<button type="button" class="btn btn-primary btn-lg regBtn" id="ok">提交注册</button>
			</form>			
			
		</div>
	</div>
</body>
</html>
