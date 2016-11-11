define(['jquery','app/myfn'],function($,url){
	function getinput(){
		/*划过图片出现input*/
		$('.head-nav-right-ul').hover(function(){
			$('.show-input').animate({'left':0},500);
			$('.show-pic').attr('src','img/serch.jpg');
			$('.show-input').keyup(function(){
					$('.under-text-div').html(' ')
					if($(this).val().length>0)
						$('.under-text-div').slideDown();
						var data1=$(this).val();
						console.log(data1);
						$.ajax({
						type:"get",
						url:url.getBaseURL()+"/getinput/" + data1,
						async:true,
						success:handle
					});
					function handle(data){
						var arr=JSON.parse(data).data.list;
						var ul=$('<ul></ul>');
						console.log(arr)
						$('.under-text-div').append(ul);
						arr.forEach(function(elem,index){
							var li=$('<li></li>').attr('class','item').css({
								'float':'left',

							});
							ul.append(li);
							var a=$('<a></a>').attr('href',elem.url).css({
								'font-size':'10px',
								
							});
							li.append(a);
							if(elem.type_name=="item"){	
								li.attr('class','item');
								var img=$('<img />').attr('src',elem.src).css({
									'width':'20px',
									'height':'20px',
									'font-size':'0'
								});
								a.append(img);
								var span=$('<span></span>').html(elem.en_name).css({
								'font-size':'10px',
								
							});;
								a.append(span);
								var span=$('<span></span>').html(elem.belong_name).css({
								'font-size':'10px',
								
							});;
								a.append(span);
							}else{
								li.attr('class','word');
								var span=$('<span></span>').html(elem.word);
								a.append(span);
								var span=$('<span></span>').html(elem.belong_name);
								a.append(span);
								
								
							}
							
						})
					}
				})
		},function(){
			if(!$('.show-input').is(':focus')){
				$('.show-input').animate({'left':160},100);
				$('.show-pic').attr('src','img/logo-bg4.gif');
			}
			$('.show-input').blur(function(){
				$('.under-text-div').slideUp();
				$('.show-input').animate({'left':160},100);
				$('.show-pic').attr('src','img/logo-bg4.gif');
				$(this).val('');
			})
			
		});
		
		 
	}
	return getinput;
})
				
				 
