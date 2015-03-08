---
layout: post
title: "Pure CSS Animations"
description: ""
published: false
category: ['front end web', 'web development']
tags: ['front end','front end web', 'web development', 'css animations']
---

{% include JB/setup %}

[DRAFT]

.transition( @effect; @duration; @ease ){
    -webkit-transition: @effect @duration @ease;
    -moz-transition: @effect @duration @ease;
    -o-transition: @effect @duration @ease;
    transition: @effect @duration @ease;
}

.fadefilter( @level ){
    -webkit-filter: brightness( @level );
    -moz-filter: brightness( @level );
    -o-filter: brightness( @level );
    filter: brightness( @level );
}

.scale( @width; @height ){
	-webkit-transform: scale( @width, @height ); 
    -moz-transform: scale( @width, @height ); 
    -o-transform: scale( @width, @height ); 
    transform: scale( @width, @height );
}

.move-vert( @perc ){
	-webkit-transform: translateY( @perc );
	-moz-transform: translateY( @perc );
	-o-transform: translateY( @perc );
	transform: translateY( @perc );
}

.move-hor( @perc ){
	-webkit-transform: translateX( @perc );
	-moz-transform: translateX( @perc );
	-o-transform: translateX( @perc );
	transform: translateX( @perc );
}

// Keyframes

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

/* slide down */
.slide-down-kf{
    0% { .move-vert( -100% ); .opacity( 0 );}
    100% { .move-vert( 0% ); .opacity( 1.0 ); }
}

@-webkit-keyframes slideDownShow{ .slide-down-kf; }
@-moz-keyframes slideDownShow{ .slide-down-kf; }
@-o-keyframes slideDownShow{ .slide-down-kf; }
@keyframes slideDownShow{ .slide-down-kf; }

/* slide up */
.slide-up-kf{
    0% { .move-vert( 0% ); .opacity( 1.0 );}
    100% { .move-vert( -100% ); .opacity( 0 ); }
}

@-webkit-keyframes slideUpFade{ .slide-up-kf; }
@-moz-keyframes slideUpFade{ .slide-up-kf; }
@-o-keyframes slideUpFade{ .slide-up-kf; }
@keyframes slideUpFade{ .slide-up-kf; }

/* slide down */
.slide-down-fade-kf{
    0% { .move-vert( 0% ); .opacity( 1.0 );}
    100% { .move-vert( 100% ); .opacity( 0 ); }
}

@-webkit-keyframes slideDownFade{ .slide-down-fade-kf; }
@-moz-keyframes slideDownFade{ .slide-down-fade-kf; }
@-o-keyframes slideDownFade{ .slide-down-fade-kf; }
@keyframes slideDownFade{ .slide-down-fade-kf; }

/* slide up */
.slide-up-show-kf{
    0% { .move-vert( 100% ); .opacity( 0 );}
    100% { .move-vert( 0% ); .opacity( 1.0 ); }
}

@-webkit-keyframes slideUpShow{ .slide-up-show-kf; }
@-moz-keyframes slideUpShow{ .slide-up-show-kf; }
@-o-keyframes slideUpShow{ .slide-up-show-kf; }
@keyframes slideUpShow{ .slide-up-show-kf; }

/* fade to color */
.fade-out-kf{
    0% { .fadefilter( 1 ); }
    100% { .fadefilter( 0.5 ); }
}

@-webkit-keyframes fadeOut{ .fade-out-kf; }
@-moz-keyframes fadeOut{ .fade-out-kf; }
@-o-keyframes fadeOut{ .fade-out-kf; }
@keyframes fadeOut{ .fade-out-kf; }

/* fade from color */
.fade-in-kf{
    0% { .fadefilter( 0.5 );}
    100% { .fadefilter( 1 ); }
}

@-webkit-keyframes fadeIn{ .fade-in-kf; }
@-moz-keyframes fadeIn{ .fade-in-kf; }
@-o-keyframes fadeIn{ .fade-in-kf; }
@keyframes fadeIn{ .fade-in-kf; }