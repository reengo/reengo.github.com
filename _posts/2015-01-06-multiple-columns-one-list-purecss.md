---
author: admin
comments: true
date: 2015-01-06 13:49:49+00:00
layout: post
published: true
slug: multiple-columns-one-list-pure-css
title: Multiple Columns One List Pure CSS
categories:
- Tutorials
tags:
- pure css
- css3
- modulo
- front end
featured_image: 'assets/images/html5_and_css3_logos_1.jpg'
thumbnail: 'assets/images/tmb/tmb-html5_and_css3_logos_1.jpg'
---

Did you know that you can create columns from a single list (UL/OL) with pure CSS? It certainly is great to have this feature on CSS3 since you wont need to bother scripting it out on javascript. And it might lessen the need for you to do tables as well... those damn tables...

Anyways, here's the code:


	ul {
	    -moz-column-count: 4;
	    -moz-column-gap: 20px;
	    -webkit-column-count: 4;
	    -webkit-column-gap: 20px;
	    column-count: 4;
	    column-gap: 20px;
	}

Checking on [Browser Compatibility](http://caniuse.com/#feat=multicolumn) you would notice that IE is no go... as expected. If you are purposely ditching IE on your website, then this is a great idea.

Just always stick at the back of your head that its good practice to leave all styling to CSS, leave all the behavioural and dom manipulations to Javascript. So if you are using Javascript to separate lists in columns dynamically instead of this, then this may be a good approach for you.