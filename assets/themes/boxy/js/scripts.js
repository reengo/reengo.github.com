$(document).ready(function(){

	//lazyloading
	var postsPerPage = 10;
	var postsCount = postsPerPage;
	var totalPosts = $('.posts li').length;

	$('.posts li').hide();
	$('.posts li:last-of-type').show();
	$('.posts li').each(function(i){
		if(i<postsPerPage) $(this).show();
	});
	$('.next').on('click',function(e){
		e.preventDefault();
		postsCount += postsPerPage;
		$('.posts li').each(function(i){
			if(i<postsCount) $(this).show();
		});

		if(postsCount > totalPosts) $(this).hide();
	})

	//open first category on post page
	if($('#postListing').length == 0 ) $('.active-subnav:first-of-type').attr('open','open')
	$('.posts li').each(function(i){
		var block = i % 10;
		var color = ['rgba(200,200,200,1)','rgba(195,195,195,1)','rgba(190,190,190,1)','rgba(185,185,185,1)','rgba(180,180,180,1)','rgba(175,175,175,1)','rgba(170,170,170,1)','rgba(165,165,165,1)','rgba(160,160,160,1)','rgba(155,155,155,1)']
		switch(block){
			case 2:
			case 4:
				$(this).addClass('col-sm-3').height(400).css('background-color',color[Math.floor(Math.random() * 10)]);
				break;
			case 1:
			case 5:
			case 6:
			case 7:
				$(this).addClass('col-sm-4').height(400).css('background-color',color[Math.floor(Math.random() * 10)]);
				break;
			case 0:
				$(this).addClass('col-sm-8').height(400).css('background-color',color[Math.floor(Math.random() * 10)]);
				break;
			case 3:
			case 8:
			case 9:
				$(this).addClass('col-sm-6').height(400).css('background-color',color[Math.floor(Math.random() * 10)]);
				break;
		}
	});
	$('.posts li:last-of-type').removeClass().height('inherit').css('background-color','transparent')
})