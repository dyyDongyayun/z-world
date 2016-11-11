define(['jquery','app/myfn'],function($,url){
	
	function mainbanner(){
		$.get(url.getBaseURL()+'/mainbanner',function(data){
			data.forEach(function(elem,index){
				var ul=$('.main-banner-ul');
				var li=$('<li></li>');
				ul.append(li);
				var a=$('<a></a>');
				a.attr('href',elem.href)
				li.append(a);
				var img=$('<img>');
				img.attr('src',elem.imgUrl);
				a.append(img);
				/*设置滚动*/
				var mainBannerUl=document.getElementById('main-banner-ul');
				var Ulleft=mainBannerUl.style.left;
					var i=0;
				
				setInterval(function(){
					if(Ulleft>-4260){
						Ulleft-=1420;
						mainBannerUl.style.left=Ulleft+'px';
						$('.lbs').css('background','#C0C0C0');			
						$('.lbs').eq(Math.abs(Ulleft/1420)-1).css('background','red');
					}else{
						mainBannerUl.style.left='-1420px';
						Ulleft=-1420;
						$('.lbs').css('background','#C0C0C0');			
						$('.lbs').eq(0).css('background','red');
					}
			
				},2000);

			})
		});
	}
	return mainbanner;
})