define(['jquery','app/myfn'],function($,url){
	function mainnav(root){
		$.get(url.getBaseURL()+"/mainnav",function(data){
			data.forEach(function(elem,index){
				var ul=$('.main-nav-ul');
				var li=$('<li></li>');
				var a=$('<a></a>');
				ul.append(li);
				li.append(a);
				a.html(elem.title);
				a.attr('href',elem.Url);
			})
			
			var li2=$('.main-nav-ul li:eq(2)').css('position','relative');			
			var img=$('<img>');
			img.attr('src','img/wanletag.gif').css({
				'position':'absolute',
				'width':'28px',
				'height':'11px',
				'left':'53px',
				'top':'3px'
				
			});
			li2.append(img);
		})
	}
	return mainnav;	
})