$(function(){
	// $("[name='my-checkbox']").bootstrapSwitch();
	$(".nextStep").css("display","none");
	$("#findNext").click(function(){
		$(".find").css("display","none");
		$(".nextStep").css("display","block");
		// alert("aaaaaa");
	});
	/*设置css动画循环时间间隔*/
	            //加载页面时启动定时器  
       var interval1;  
       var timeout1;
        /*    setTimeout(chat,"1000");
             setTimeout(chat,"2000");*/
              // interval1 = setInterval(chat, "5100");  
              
          
       
           function chat() {  

              $(".search-ripple1").css({'background':'#E1E1E1',
               								'position':'absolute',
               								'width':'10px',
               								'height':'10px',
               								'border-radius': '30px',
               								'margin': '450px',
               								'opacity':'1'
               								 });
                $(".search-ripple1").animate({
											'background':'#fff',
											'position':'absolute',
               								'width':'650px',
               								'height':'650px',
               								'border-radius': '500px',
               								'margin': '120px',
               								'opacity':'0'
               								  }, 5000);	 

               /* setTimeout(function(){
				     	    	      $(".search-ripple1").css({'background':'#E1E1E1',
               								'position':'absolute',
               								'width':'10px',
               								'height':'10px',
               								'border-radius': '30px',
               								'margin': '450px',
               								'opacity':'1'
               								 });
            							$(".search-ripple1").animate({
											'background':'#fff',
											'position':'absolute',
               								'width':'+650px',
               								'height':'+650px',
               								'border-radius': '500px',
               								'margin': '120px',
               								'opacity':'0'
               								  }, 5000);	  	
				         		},1200);
*/

           }  

/*
		     	var tempTimer = setInterval(function(){
				//手机图片交替
			     	
			     	setTimeout(function(){
			         $(".search-ripple1").animate({
											'background':'#fff',
											'position':'absolute',
               								'width':'+650px',
               								'height':'+650px',
               								'border-radius': '500px',
               								'margin': '120px',
               								'opacity':'0'
               								  }, 5000);	 
			     		setTimeout(function(){
			     	    	    $(".search-ripple1").css({'background':'#E1E1E1',
               								'position':'absolute',
               								'width':'10px',
               								'height':'10px',
               								'border-radius': '30px',
               								'margin': '450px',
               								'opacity':'1'
               								 });
			     	    		setTimeout(function(){
				     	    	     	
				         		},333);
			         		},5100);
			     	},333);
			},5000);
		     	setTimeout(function(){
		     		$("#mobile").css({"opacity":"0"}).fadeIn('normal');
		     		clearInterval(tempTimer);
		     	},3000);*/

	$('input[name="my-checkbox"]').bootstrapSwitch('onText',"在线");
	$('input[name="my-checkbox"]').bootstrapSwitch('offText',"隐身");	
	$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
			if(state==true){
				$("#warnMessage").css("display","");
			}else{
				$("#warnMessage").css("display","none");
			}
	/*	  console.log(state); // true | false*/

	});

	$('#frienOption').contextMenu('myMenu1', 
 	{
	  bindings: 
	  {
		'talking': function(t) {
			//执行事件
		    alert('打开文件');
		},
		'addFriend': function(t) {
			//执行事件
		    alert('发送电子邮件');
		},
		'save': function(t) {
			//执行事件
		    alert('保存文件');
		},
		'delete': function(t) {
			//执行事件
		    alert('关闭文件');
		}
	  }

	});
});
