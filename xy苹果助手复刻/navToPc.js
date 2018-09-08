//如果是pc端浏览器自动跳转到pc/index.html
//如果是移动端浏览器自动跳转到mobile/index.html
var userAgent = navigator.userAgent.toLowerCase();

if(userAgent.indexOf('android') == -1 && userAgent.indexOf('iphone') == -1 && userAgent.indexOf('ipad') == -1 ){
	
	//本地跳转其他网页
	location.href = '../pc/index.html';
}