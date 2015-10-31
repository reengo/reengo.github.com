---
author: admin
comments: true
date: 2015-11-1 5:17:49+00:00
layout: post
published: true
slug: visualizing-commits-with-gource
title: Visualizing Commits With Gource 
categories:
- Web Development
tags:
- git
- front end
- web development
- commit
featured_image: 'assets/images/gource.jpg'
---


[Gource](http://gource.io/) is a visualization tool for historical commits on your repositories. It creates a dynamic tree-like animation that is simply gorgeous! 

Here's a quick look on how it works.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/NjUuAuBcoqs" frameborder="0" allowfullscreen></iframe> 


You can install gource via homebrew

	brew install gource


You can then run gource on the root directory of your project and watch in awe.


with some tweeking, I came up with the command below to output the animation to an mp4 video. 

	gource -s 0.1 --hide filenames,dirnames,mouse,progress --camera-mode overview --user-scale 2 --bloom-intensity 0.1 --bloom-multiplier 0.1 --highlight-users -1280x720 --title "Video Title” --output-ppm-stream - --output-framerate 30 | avconv -y -r 30 -f image2pipe -vcodec ppm -i - -b 65536K moviefilename.mp4

Enjoy