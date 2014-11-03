---
author: admin
comments: false
date: 2014-04-08 20:03:17+00:00
layout: post
slug: no-conflict-jquery
title: No Conflict Jquery
wordpress_id: 1520
categories:
- Front End Web
- Tutorials
tags:
- code conlicts
- jquery
---

Working with Magento, you may encounter issues with Javascript libraries. Especially when dealing with an older version (CE 1.7), you may have conflicts with jQuery versions particularly the one you used for Bootstrap (most likely the latest). Unfortunately, Magento CE 1.7 uses prototype.js for most of its front end which also uses the ($) symbol used by jQuery, and prototype.js is only compatible to jQuery 1.5 and below. Therefore, its a no go for Bootstrap which uses jQuery 1.7 at the very least.

One known solution for this is to use jQuery.noConflict to let you use the symbol, instead of renaming it to jQuery.

```javascript
jQuery.noConflict();
(function($) {
   $(function() {
      // your js code goes here.
   });
})(jQuery);
```

Read more about jQuery noConflict [here](https://api.jquery.com/jQuery.noConflict/). If you happen to have the same problem, hope this one helps.
