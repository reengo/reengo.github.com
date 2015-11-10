---
layout: post
title: "Pure CSS Animations"
description: ""
published: true
category: ['front end web', 'web development']
tags: ['front end','front end web', 'web development', 'css animations', 'css', 'css3']
featured_image: 'assets/images/CSS3.jpg'
thumbnail: 'assets/images/tmb/tmb-CSS3.jpg'
---

{% include JB/setup %}

Gone are the days where we use flash to do animations in a web environment. Interactive websites are no longer dependent on flash nowadays all thanks to CSS3.

New CSS3 properties have paved the way for creating animations on browers in realtime without compiling as what we would have done with flash animations. 

Here's an awesome example:


<iframe width="100%" height="700" src="http://www.clicktorelease.com/code/css3dclouds/" frameborder="0" allowfullscreen></iframe>

[CSS3DClouds](http://www.clicktorelease.com/code/css3dclouds/)

Using Preprocessors along with CSS animations
===

CSS3 Is pretty straightforward. Using CSS preprocessors such as LESSCSS increases its potential and usability even more. If you haven't checked out LESSCSS yet, please do so [here](http://lesscss.org/)

We start by creating a mixin which is fairly useful when using vendor specific properties for optimal compatibility.

	.animate( @effect; @duration; @ease; @direction; @fillmode){
		/* Applies to Chrome and Safari */
		-webkit-animation: @effect @duration @ease;
		-webkit-animation-fill-mode: @fillmode;
		-webkit-animation-direction: @direction;

		/* Applies to Mozilla */
		-moz-animation: @effect @duration @ease;
		-moz-animation-fill-mode: @fillmode;
		-moz-animation-direction: @direction;

		/* Applies to Opera */
		-o-animation: @effect @duration @ease;
		-o-animation-fill-mode: @fillmode;
		-o-animation-direction: @direction;

		/* Applies to Others... Including IE if it can :D */
		animation: @effect @duration @ease;
		animation-fill-mode: @fillmode;
		animation-direction: @direction;
	}


	.scale( @width; @height ){
		-webkit-transform: scale( @width, @height ); 
		-moz-transform: scale( @width, @height ); 
		-o-transform: scale( @width, @height ); 
		transform: scale( @width, @height );
	}

So now we have 2 mixins that we can reuse without having to specify vendor specific properties.

Keyframing
===

Next we create custom keyframes

	/* pulsein */
	.pulse-in-kf{
	    0% { .scale( 1, 1 );}
	    100% { .scale( 1.2, 1.2 );}
	}

	@-webkit-keyframes pulseIn{ .pulse-in-kf; }
	@-moz-keyframes pulseIn{ .pulse-in-kf; }
	@-o-keyframes pulseIn{ .pulse-in-kf; }
	@keyframes pulseIn{ .pulse-in-kf; }


	/* pulse-out */
	.pulse-out-kf{
	    0% { .scale( 1.2, 1.2 ); }
	    100% { .scale( 1, 1 ); }
	}

	@-webkit-keyframes pulseOut{ .pulse-out-kf; }
	@-moz-keyframes pulseOut{ .pulse-out-kf; }
	@-o-keyframes pulseOut{ .pulse-out-kf; }
	@keyframes pulseOut{ .pulse-out-kf; }


Again we created mixins not to repeat things. Above, we created 2 set of keyframes **pulseIn** and **pulseOut**. **.pulse-in-kf** and **.pulse-out-kf** basically just repeats the declaration on specific vendors. Keyframes are similar to what you can do on Flash's timeline view where you create keyframes on a tween. These keyframes simply tells css what to do when they reach that point. For instance, at 0% or the start of the animation, pulseIn will set the element with the declared keyframes applying the mixin **.scale()** with set height and width. Through the course of the animation timeline ending at 100% the keyframes will apply a slightly increased dimension to the element.


Reusing Code
===

With this we are all set to do the pulse animation. we only need to have it usable throughout our codebase. all we need to do is add the following classes if we need a certain animation effect done to the element.
	
	.pulsein{
		.animate( pulseIn; 250ms; ease-out; normal; forwards ); 
	}

	.pulseout{          
		.animate( pulseOut; 500ms; ease-in; normal; forwards ); 
	}

Using the animate mixin, we are making elements with the .pulsein/pulseout class to animate using the pulseIn keyframe in 250ms duration with easing (ease-out/ease-in) with a normal direction and a fillmode of forwards. Learn more about these [animation properties](https://developer.mozilla.org/en/docs/Web/CSS/animation)

So there you have it. Try playing around with it its really fun to things now with just CSS3 and your favorite browser.


