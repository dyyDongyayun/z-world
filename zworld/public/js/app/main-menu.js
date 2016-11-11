define(['jquery','app/myfn'],function($,url){
	function mainmenu(){
		$.get(url.getBaseURL()+'/mainmenu',function(data){
			data.forEach(function(elem,index){
				var ul=$('.main-banner-float');
				var li=$('<li></li>');
				ul.append(li);
				var p=$('<p></p>')
				p.html(elem.title);
				li.append(p);
				//console.log(elem.mainCity.length)
				for(var i=0;i<elem.mainCity.length;i++){
					var a=$('<a></a>');
					a.html(elem.mainCity[i]+' ');
					li.append(a);					
				};
				/*划过li div出现事件*/
				var div=$('<div></div>').attr('class','float-ul-cl');
				li.append(div);
				
				li.on('mouseenter',function(){
					div.css('display','block');
					elem.moreCity.forEach(function(elem1,index1){
						var divsmall=$('<div></div>').attr('class','div-small');
						var h=$('<h2></h2>');
						div.append(divsmall);
						divsmall.append(h);	
						h.html(elem1.cityName);
						/*创建a*/
						elem1.items.forEach(function(elem2,index2){
							if(index==5){
								$('.div-small').css({
									'width':'380px',
									'padding-left':'10px'
									});
								var imgsmall=$('<img />').attr('src',elem2).css({
									'width':'80px',
									'height':'80px',
									'margin':'20px 0px 0 20px',
									'cursor':'pointer'
									
								});
								divsmall.append(imgsmall);
							}else{
								var a=$('<a></a>').attr('href','#');
								divsmall.append(a);
								a.html(elem2);
							}
							
							
						})
						
					})
					var divimg=$('<div></div>').attr('class','div-small');
					
					var img=$('<img />').attr('src',elem.moreCityImg).attr('class','float-small-img');
						divimg.append(img);
						div.append(divimg);
				}).on('mouseleave',function(){
					div.css('display','none');
					div.html(' ');
				})
				/*设置第六个图*/
				
				
			})
		})
	}
	return mainmenu;
})