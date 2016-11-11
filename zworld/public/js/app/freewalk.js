define(['jquery','app/myfn'],function($,url){
	
	function freewalk(){
		$.get(url.getBaseURL()+'/freewalk',function(gdata){
			var ul1=$('.main-top-rightul');
			var ul2=$('.main-main-bottom ul:first');
			gdata.forEach(function(elem,index){
				var li1=$('<li></li>');
				ul1.append(li1);
				var a1=$('<a></a>').attr('href','#').html(elem.title);
				li1.append(a1);
				a1.on('mouseenter',function(){
					ul2.html('');//清除上一次的内容
					$(this).css({
						'color': '#16c1a0',
						'border-bottom':'3px solid #16c1a0'
					});
					
					elem.data.forEach(function(elem1,index1){
						var a=$('<a></a>').attr('href','#');
						var li=$('<li></li>').attr('class','all-li');
						$('.main-main-bottom ul li:first').attr('id','speclil-li1')
						var img=$('<img />').attr('src',elem1.imgUrl);					
						a.append(li);
						li.append(img);
						var p1=$('<p></p>');
						li.append(p1);
						p1.html(elem1.title);
						var p2=$('<p></p>').attr('class','float-p');
						li.append(p2);
						var s1=$('<span></span>').html('机+酒');
						p2.append(s1);
						var s2=$('<span></span>').html(elem1.price);
						p2.append(s2);
						ul2.append(a);	
						
					})
					var alast=$('<a></a>').attr('href','#');
						var lilast=$('<li></li>').attr('class','all-li speclil-li2');
						var p11=$('<p></p>').html('查看更多');
						lilast.append(p11);
						var p22=$('<p></p>').html('机酒自由行产品');
						lilast.append(p22);
						var div=$('<div></div>').html('>');
						lilast.append(div);
						var ul=$('<ul></ul>');
						lilast.append(ul);
						var li=$('<li><a href="#">机票</a></li>');
						ul.append(li);
						var li=$('<li><a href="#">酒店</a></li>');
						ul.append(li);
						var li=$('<li><a href="#">机+酒</a></li>');
						ul.append(li);
						var li=$('<li><a href="#">邮轮</a></li>');
						ul.append(li);
						ul2.append(alast);
						alast.append(lilast);
						lilast.on('mouseenter',function(){
							div.css('background','rgba(255,255,255,0.2)');
						}).on('mouseleave',function(){
							div.css('background','none');
						})
				}).on('mouseleave',function(){
					$(this).css({
						'color': 'black',	
						'border-bottom':'none'
					})
				})
				
			
			})
			
			
			
		});
	}
	return freewalk;
})