---
author: admin
comments: true
date: 2015-8-24 10:49:49+00:00
layout: post
published: true
slug: bootstrap-4-is-here-almost
title: Bootstrap 4 is Here! ...Almost
categories:
- Front End Web
- Web Development
tags:
- front end
- bootstrap
- less
- sass
- grunt
- css3
- html5
featured_image: 'assets/images/bs4-alpha.png'
thumbnail: 'assets/images/tmb/tmb-bs4-alpha.png'
---


This is exciting, [**Bootstrap 4 is coming**](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/) In a few more months atleast. The alpha version is out and you can play around the new features and massive changes to get ready for the release. 

In a quick glance, you can have a few good reasons to try it now.

No more LESS
---

This one is quite disappointing since I've gotten used to LESS and preferred it over SASS a long time ago. The reason was a completely isolated case as I was having issues with compass and ruby at the time but experience-wise, I find LESS to be very easy to use. LESS works well with grunt and I can compile manually via CLI with lessc.

I guess its time to give SASS another go. Using Bootstrap 4 when it comes out would be innevitable for a Front End Developer anyways :D


rem Over px
---

There is a big difference in both on size units. **rem**, similar to **em** measures by percentage in relation to its parent element's size. If the parent is 1em (which can translate to 16px), declaring the size of the current element as 0.5em would be like declaring the size to be 50% of its parent (translate to 8px). This relational bond between font-sizes can scale through media queries and would give you shorter lines of code edit just a single element and let it scale through the elements children. **rem** makes it a lot easier since you only declare a base size on to which elements that uses it can scale from. the *root* element (thus rem) to scale from is the **\<html\>** tag, instead of scaling from the element's parent, rem will scale base the size from the the **html** tag giving sizes more consistent measures accross the page.

**px** on the other hand are precise. it does not inherit or scale and does not relate to its parent's sizes. This is precisely declared on elements in Bootstrap prior to Boostrap 4. Measurements are declared with px units and it works well. However, with **rem** measurements could get a lot easier to code.


Reboot.css
---

Bootstrap uses normalize.css for resets. reboot.css is more like a bootstrap4 specific normalize.css reset that improves the latter with bootstrap 4 elements in. I don't really know about why renaming it is necessary though.


Cards
---
no more panels, wells and thumbnails. cards is new king of box containers with optional headers and footers. Cards also somehow imporoved its nesting abilities and are more customizable than the previous three. a lot of things can be done with this, and its quite good to know that we now have a unified component to use instead of three similar components with few unique features.


A lot more features are coming its way, and we can have a glimpse of them as early as now. check out the documentation and samples here: [http://v4-alpha.getbootstrap.com/](http://v4-alpha.getbootstrap.com/)