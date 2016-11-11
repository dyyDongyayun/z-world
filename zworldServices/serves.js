var express=require('express');
var app=express();
var fs=require('fs');
/*存储从文件读取的文件*/
var navdata=null;
var bannerdata=null;
var menudata=null;
var freewalkdata=null;
var mainlidata=null;
/*导航*/
fs.readFile("data/mainnav.json",function(err,data){
	if(err)
		console.log('有错误');
		navdata=data;
		/*轮播图*/
	fs.readFile("data/index/banner.json",function(err1,data1){
		if(err1)
			console.log('有错误');
		bannerdata=data1;
			/*菜单*/
		fs.readFile("data/index/menu.json",function(err2,data2){
			if(err2)
				console.log('有错误');
			menudata=data2;				
			fs.readFile("data/index/freeWalk.json",function(err3,data3){
				if(err3)
					console.log('有错误');
				freewalkdata=data3;	
				
				fs.readFile("data/citywalk/cityWalkList.json",function(err4,data4){
					if(err4)
						console.log('有错误');
					mainlidata=data4;	
					
					app.listen(9000);
					console.log('ok')
				})
			})
		})
	})
	
})


app.all('/*',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');	
	res.header('Access-Control-Allow-Headers','X-Requested-With');
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
	next();
})
app.get('/mainnav',function(req,res,next){	
		res.header('Content-Type','application/json');
		res.send(navdata);
});
app.get('/mainbanner',function(req,res,next){	
		res.header('Content-Type','application/json');
		res.send(bannerdata);
});
app.get('/mainmenu',function(req,res,next){
		res.header('Content-Type','application/json');
		res.send(menudata);
})
app.get('/freewalk',function(req,res,next){
		res.header('Content-Type','application/json');
		res.send(freewalkdata);
})
app.get('/mainli',function(req,res,next){
		res.header('Content-Type','application/json');
		res.send(mainlidata);
})
/*实现从别的后台获取数据*/
var http = require('http');
//suggest组件
app.get('/getinput/:keyword' , function (req , res) {
	var url = req.params.keyword;
    // 查询本机ip
    // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
    var sreq = http.request({
        host:     'z.qyer.com', // 目标主机
        path:     '/qcross/home/ajax?action=sitesearch&keyword='+url, // 目标路径
        method:   'get' // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
});
