/**
 * @file index
 * @author Jianghaipeng 
 * @date: 2015/11/04 15:06
 * @version: V1.0
 */
'use strict';

$(function() {
	
/*	var access_token = getCookie('access_token');
	if (access_token) {
		location.href = 'index.html';
	} */
	$(".head").load("../public/header.html");
	$(".leftslide").load("../public/leftslide.html", function() {
		$(".body").load("../public/body.html");
	});
	$(".footer").load("../public/footer.html");

});


	