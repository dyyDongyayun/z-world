define(['jquery','app/myfn'],function($,url){
	function mainli(){
		$.get(url.getBaseURL()+'/mainli',function(data){
				var ul=$('ul');
			data.forEach(function(elem,index){

				var li=$('<li></li>');
				ul.append(li);
				var div=$("<div class='main-ul-img'><a href='#'><img src="+elem.imgurl+" /></a></div>");
				li.append(div);
				var div1=$('<div class="main-li-right"></div>');
				li.append(div1);
				var p=$('<p><span>'+elem.address+'</span><span><span class="sp1">'+elem.browseCount+'</span>次浏览<span class="sp1">'+elem.soldCount+'</span>件已销售</span></p>');
				div1.append(p);
				var h3=$('<h3></h3>');
				h3.html(elem.title);
				div1.append(h3);
				var ul1=$('<ul></ul>');
				div1.append(ul1);
				for(var i=0;i<3;i++){
				 	var li1=$('<li>'+elem.introduce[i]+'</li>');
				 	ul1.append(li1)
				 }
				var div2=$('<div class="float-div"><p><span>'+elem.oldPrice+'元</span><span>'+elem.newPrice+'</span>元起</p><p>立即预定</p></div>')
				div1.append(div2)
			})
		})
	}
	return mainli;
})