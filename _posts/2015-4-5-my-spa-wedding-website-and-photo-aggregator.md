---
author: admin
comments: true
date: 2015-4-5 9:49:49+00:00
layout: post
published: true
slug: my-spa-wedding-website-and-photo-aggregator
title: My SPA Wedding Website and Photo Aggregator
categories:
- RinjenPH
tags:
- #rinjenph
- durandal
- wedding
- spa
- single page apps
featured_image: 'assets/images/photo_3868.jpg'
---

So yeah... I'm getting married soon... So what's a front end web developer gotta do on this momentuous occassion? create a single page app of course :D 

I had been doing this website for quite some time converting coffee into code on whatever limited time I get on my very busy work schedule. I struggled a bit with design, web design isn't really my cup of tea but I had to do it... had to save as much money as I can on all these wedding preparations. Design-wise, I am the worst client on my own design work, I couldn't really please myself with the designs I was making... "please myself..." such a bad choice of words :D. But seriously, It took me 3 months working on the design on at least 2 hours of spare time a day. It was a fun thing to do. I did get a finalized design which my Future wife likes very much. ( not sure if she really likes it. or she really just wanted me to start coding and be done with it.) :D

The concept of RinjenPH is fairly simple. Get the most information on the wedding for wedding attendees and curious uninvited passersby? :D The specs I considered were as follows:

1. Single page scrolling to display the "Story" \*\*blushes\*\*. How Jennifer and I met up to the invitation wordings at the very bottom. more or less 5 blocks to footer.
2. A hashtag page for a photo aggregator application. Takes photos uploaded in real time and posted with the hashtag #rinjenph from instagram, facebook and twitter.
3. Information page where attendees can check details, FAQs directions and invitation pdf access.
4. A contact us form for feedback and questions.

RSVP would have to be taken care of by Facebook Events. Something modern and convenient for confirming guests. Apart from this, the specs are really simple. But I had to work on gathering stuff needed to develop the site, so I started listing requirements based on navigation

So Navigation is set as follows:

1. Welcome Page 
	- This will need a parallax script to... you know... look cool... :D
	- large images to cover an entire block. roughly 1600px in width minimum.
	- Image inserts for the blocks
	- smooth scrolling to anchors
2. Hashboard
	- Facebook Javscript SDK
	- Facebook App for OAuth access tokens
	- Instagram SDK 
	- Instagram App for access tokens as well
	- Gallery Script - which I decided to code from scratch.
	- Photo Contribution - upload form for users sharing wedding pictures.
3. Wedding Details Page
	- PDF display for the invitation
	- Google Maps integration for map directions and POI
	- Contact US information 
	- Contact Form to send in enquiries in one go.
4. Thank You page.
	- another scrollable page.

(To be continued...)



