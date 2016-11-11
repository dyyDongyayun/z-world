requirejs(['./common'], function () {
    requirejs(['app/getinput','app/main-nav','app/main-li'],function(getinput,mainnav,mainli){
	/*头部导航*/
	getinput();
	/*main nav*/
	mainnav();
	mainli();
	});  
});