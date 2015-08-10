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

[ ![]({{BASE_PATH}}/assets/images/fbcover5.png) ]({{BASE_PATH}}/assets/images/fbcover5.png)

So yeah... I'm getting married soon... So what's a front end web developer gotta do on this momentous occassion? create a single page app of course :D 

I had been doing this website for quite some time converting coffee into code on whatever limited time I get on my very busy work schedule. I struggled a bit with design, web design isn't really my cup of tea but I had to do it... had to save as much money as I can on all these wedding preparations. 

Design-wise, I am the worst client when it comes to my own design work. I couldn't really please myself with the designs I was making... "please myself..." such bad choice of words :D. But seriously, It took me 3 months working on the design on at least 2 hours of spare time a day. Regardless, It was a fun thing to do. I did get a finalized design which my future wife likes very much. (not sure if she really likes it. or she really just wanted me to start coding and be done with it.) :D


Creating the Specs
---

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
	- Facebook Javascript SDK
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


Choosing a Framework
---

With all these in mind I started working on a framework. I really liked [KnockoutJS](http://knockoutjs.com) that I wanted to create my own SPA framework. But as you guessed it, I didn't had the time to complete a working version in time for creating this website since I do have a lot of juggling myself on my work.  

So I chose [Durandal](http://durandaljs.com/), its light weight, its KnockoutJS based and its fairly simpler to use. I am purposely moving away from Angular and Ember to try something new so Durandal was an an easy pick.

So for the framework I had the following:

- Durandal 2.1 - SPA Framework
- Bootstrap 3.1 - Front End/UI
- CouchDB - NoSQL Database

I also needed a little PHP to get Access Tokens server-side. I'll to explain more when we get there. 

I started working on [Durandal's Starter Kit](http://durandaljs.com/get-started.html) and did the markup work using LESS. But I didn't use Grunt to automate tasks. I find it simple enough to work on the project without it. Worked my way to a completed markup and have the results as you see here:

[Jennifer and Ringo's Wedding of Perfect Harmony](http://jennifer.ringo.ph)


Hashboard
---

The Hashboard Page had been where the bulk of work came in. I needed to do the following to complete the task:

- Create an Instagram client via [https://instagram.com/developer/](https://instagram.com/developer/)
- Create a Facebook App through [https://developers.facebook.com](https://developers.facebook.com)
- Create Server side API's to get access tokens from these apps.

Aggregating photos from Instagram is a lot more simpler compared to Facebook. Problem is, there will be more users posting on Facebook than Instagram, that is for sure, so we had to prioritize Facebook.

Unfortunately for Facebook, we no longer have an API to search for hashtags. However, I discovered a way of going around it:

1. Get users to authenticate FB and consider themselves photo contributors
2. The app will then search for posts from the current user with the hashtag '#rinjenph'
3. App will search these posts for attached photos and save it over CouchDB 

As simple as it seems, it still needed a new permission approved. I needed to submit an app review to allow the user_posts scope to get users posts.

Submission takes a bit of time. you need to upload all the necessary requirements which will be highlighted to you when you submit. screenshots are important and a detailed description on how to use the app is essential to have your app approved.

The review failed once due to the lack of information regarding the purpose of the app, so I resubmitted and moments later Facebook eventually approved it. Whats really impressive is that these are human reviewers that personally tested my app and it took them less than a week to do so. Eventually, I got the app approved and user_posts usage permitted. 


You can see the site in action here: [Rinjen Hashboard](http://jennifer.ringo.ph/#hashboard);


Saving Data
----

One challenge I had was how to store contributed photos without a server side Database. Our team at work use Elastic Search but I wanted something much more simpler so I tried CouchDB. There's a pretty nasty debate on what to use as a NoSQL Database and there are a huge number them to choose from. I eventually settled with CouchDB.

The app now stores links, not the actual images, from facebook so that facebook would still serve the images and I wouldn't need to worry about accessibility and also saved data will really be small. Facebook already approved this approach so I went on with it. and It works fine so far... hofully, contributors wouldn't have that much trouble using it.


Details
---

The Details Page was also a lot simpler to work on. It is mostly similar to the homepage so it wasn't that much work. But the majority of work on this page was on the contact form where users get to inquire about the details of the wedding.

I wanted to use something that doesn't require serverside scripts to send email like phpMailer etc. I also didn't want to setup an account to send transactional emails. I needed an API to do the mailing for me, with analytics and stuff. So then I used [Mandrill](https://www.mandrill.com/). Its a very easy to use service that lets you send emails through an API call. 


Thank You Page
---

Courtesy is a must. We really wanted to be thankful for all the help we got for the wedding. so Its a straightforward page containing thank you messages for everyone. Feedback form is also there to send mail from mandrill as well so the page wont be boring.


Eventually, We had the site live for the users to see. It was very challenging and fun to do and now, the memories are available for those who want to see it...



