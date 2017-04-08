$(function(){
	$("#reg").click(function(){// 首页
		window.location.href="html/register.html";
	});
	$("#ok").click(function(){// 首页
		loginFun();
	})
	$("#password").keypress(function(e){ //回车键登录
		if(e.which==13){ 
			loginFun();
		} 
	});
})
	function loginFun() {
	var form = $('form');//选中的tab里面的form
	var formvalue = $('.loginForm').serialize();
	$.post('userAction/loginSubmit.action', form.serialize(), function(result) {
		if (result.success) {
			var loginUsId = result.result.userid;
			setCookie('loginUsId',loginUsId);
			console.info(loginUsId);
			//location.href = 'html/index.html?userId=';
			location.href = 'html/index.html';
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
