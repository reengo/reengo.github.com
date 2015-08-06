$(document).ready(function(){
	$('.main').show();

	$(window).scroll(function(){
		var menuOffset = $('header.main').offset();
		var contentOffset = $('.site').offset();
		if($(window).scrollTop() > contentOffset.top){
			$('header.main').removeClass('fadeInDown fadeOutUp')
				.addClass('fadeInDown');
		}
	});

	//lazyloading
	var postsPerPage = 100;
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
		var color = ['rgba(200,200,200,1)','rgba(195,195,195,1)','rgba(190,190,190,1)','rgba(205,205,205,1)','rgba(210,210,210,1)','rgba(215,215,215,1)','rgba(220,220,220,1)','rgba(225,225,225,1)','rgba(230,230,230,1)','rgba(235,235,235,1)']
		switch(block){
			// case 2:
			// case 4:
			// 	$(this).addClass('col-sm-3')
			// 		.height(400)
			// 		.css('background-color',color[Math.floor(Math.random() * 10)]);
			// 	$(this).find('img').wrap( $('<div class="img-wrapper">').css('height','30%') );
			// 	break;
			// case 1:
			// case 5:
			// case 6:
			// case 7:
			// 	$(this).addClass('col-sm-4')
			// 		.height(400)
			// 		.css('background-color', color[Math.floor(Math.random() * 10)]);
			// 	$(this).find('img').wrap( $('<div class="img-wrapper">').css('height','40%') );
			// 	break;
			// case 0:
			// 	$(this).addClass('col-sm-8')
			// 		.height(400)
			// 		.css('background-color', color[Math.floor(Math.random() * 10)]);
			// 	$(this).find('img').wrap( $('<div class="img-wrapper">').css('height','60%') );
			// 	break;
			// case 3:
			// case 8:
			// case 9:
			// 	$(this).addClass('col-sm-6')
			// 		.height(400)
			// 		.css('background-color', color[Math.floor(Math.random() * 10)]);
			// 	$(this).find('img').wrap( $('<div class="img-wrapper">').css('height','50%') );
			// 	break;
			default:
				$(this).addClass('col-sm-3')
					.height(300)
					.css('background-color',color[Math.floor(Math.random() * 10)]);
				$(this).find('img').wrap( $('<div class="img-wrapper">').css('max-height','50%') );
				break;
		}
	});
	$('.posts li:last-of-type').removeClass().height('inherit').css('background-color','transparent')
})