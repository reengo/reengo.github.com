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
	console.log($('#postListing').length );
	if($('#postListing').length == 0 ) $('.active-subnav:first-of-type').attr('open','open')
})