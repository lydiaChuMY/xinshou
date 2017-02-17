//获取浏览器的可视化的高度
function getScreenHeight(){
	var winHeight = $(window).height();
	return winHeight;
}
//获取浏览器的可视化的宽度
function getScreenWidth(){
	var winWidth = $(window).width();
	return winWidth;
}
//获取指定对象的宽度
function getObjWidth(obj){
	return obj.width();
}
//获取指定对象的高度
function getObjHeight(obj){
	return obj.height();
}
//服务商和需求的图片切换
function index_change(){
	$("#servicer img").mouseover(function(){
		$("#servicer img").eq(0).hide();
		$("#servicer img").eq(1).show();
	})
	$("#servicer img").mouseleave(function(){
		$("#servicer img").eq(0).show();
		$("#servicer img").eq(1).hide();
	})
	$("#demander img").mouseover(function(){
		$("#demander img").eq(0).hide();
		$("#demander img").eq(1).show();
	})
	$("#demander img").mouseleave(function(){
		$("#demander img").eq(0).show();
		$("#demander img").eq(1).hide();
	})
}

