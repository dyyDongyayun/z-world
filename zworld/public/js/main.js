
//多页面开发，我定义的主页面模块，首先将共有部分引入，然后引入自己的私有模块 （利用CMD方式引入）
requirejs(['./common'], function () {
    requirejs(['jquery','app/myfn','app/main-nav','app/main-banner','app/main-menu','app/freewalk','app/getinput'],function($,url,mainNav,mainbanner,mainmenu,freewalk,getinput){
	/*头部导航*/
	mainNav();
	/*轮播图*/
	mainbanner();
	/*轮播菜单*/
	mainmenu();
	/*机酒自由行*/
	freewalk();
	/*表单搜索显示提示*/
	getinput();
	});  
});