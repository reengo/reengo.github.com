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
- front end
featured_image: 'assets/images/html5_and_css3_logos_1.png'
---

Did you know that you can create columns from a single list (UL/OL) with pure CSS? It certainly is a great to have this on CSS3. ang it might lessen the need for you to do tables... damn tables...

Here's the code:


	ul {
	    -moz-column-count: 4;
	    -moz-column-gap: 20px;
	    -webkit-column-count: 4;
	    -webkit-column-gap: 20px;
	    column-count: 4;
	    column-gap: 20px;
	}

Checking on [Browser Compatibility](http://caniuse.com/#feat=multicolumn) you would notice that IE is no go... so there. If you are purposely ditching IE on your website, then this is a great idea.

Just take note though, its good practice to leave all styling to CSS and all other fancy stuff to Javascript. So if you are using Javascript to separate lists in columns dynamically, This may be a better option.