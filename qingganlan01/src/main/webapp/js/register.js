$(function(){

	/*$.backstretch([
      "../img/qqzone.jpg"
    , "../img/qqzone1.jpg"
    , "../img/yimanieli.jpg"
    ], {duration: 3000, fade: 750});*/
		
	$('#ok').click(function(){
		/*window.location.href="index.html";*/
		regFun();
	})
	$("#city_2").citySelect({
			prov:"山东",
			nodata:"none"
	});
	$('.startDate').datetimepicker({ //日期选择器
		controlType: 'select',
		oneLine: true
	});
})
function regFun() {
	/*var form = $('form');//选中的tab里面的form
	var formvalue = $('.registerForm').serialize();*/
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
	$.post('/userAction/reg.action', $.param({'AREA':area}) + '&' + $('.registerForm').serialize(), function(result) {
		if (result.success) {
			alert(result.msg);
			location.href="/login.html"
		} else {
			alert(result.msg);
		}
	}, "JSON");
}
