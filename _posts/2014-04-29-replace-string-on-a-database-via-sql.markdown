---
author: admin
comments: true
date: 2014-04-29 19:01:25+00:00
layout: post
slug: replace-string-on-a-database-via-sql
title: Replace String on a Database via SQL
wordpress_id: 1661
categories:
- Code Review on Life
- Tutorials
- Web Development
tags:
- mysql
- sql
- wordpress
featured_image: 'assets/images/mysqllogo.png'
---

There will come a time when you will need to import a Wordpress database on your local and wonder why some links still point to the live site. Some data from posts may still contain links pointing to the live site which could make it impossible for you to test your work locally. This could not be avoided since an absolute URL is saved on the database regardless if the link is relative or not.

To resolve this, you need to replace the URL saved as text (ex: http://mysite.com) with a local URL (ex: http://localhost) to point the page to the right path locally. You would need PHPMyAdmin, SQLYog, Mysql Workbench or any similar app to do so.

On PHPMyAdmin, select your database and look for SQL tab. This is where you can run SQL queries to manage your db.

[![Screen Shot 2014-04-30 at 2.14.16 AM](http://rgb.reengo.com/wp-content/uploads/2014/04/Screen-Shot-2014-04-30-at-2.14.16-AM.png)](http://rgb.reengo.com/wp-content/uploads/2014/04/Screen-Shot-2014-04-30-at-2.14.16-AM.png)

After so, run the following Query format.

    UPDATE table SET table = 
    REPLACE( field,'OldString','NewString') 
    WHERE field like '%OldString%';

Assuming you're live site is at http://www.mylivesite.com and you're local installation of Wordpress is at http://localhost/wordpress you need to run this query:

    UPDATE wp_posts SET wp_posts = 
    REPLACE( post_content,'http://www.mylivesite.com','http://localhost/wordpress') 
    WHERE post_content like '%http://www.mylivesite.com%';

This basically means, "look for the string http://www.mylivesite.com on all rows within the post_content field and replace it with http://localhost/wordpress just as long as the entire content of the field has a string of http://www.mylivesite.com."

**Replacing Text on a db via Terminal**

You can also run this command via command line. simply open the Terminal and run the following:

    $ mysql -u root -p

This logs you in as root. You can login in as a different db user as long as the user has permissions to access the database. Running this command prompts you to enter the user's password. Once authenticated, you can now run SQL statements.

    mysql > UPDATE wp_posts SET wp_posts = 
    REPLACE( post_content,'http://www.mylivesite.com','http://localhost/wordpress') 
    WHERE post_content like '%http://www.mylivesite.com%';

On a MySQL prompt, enter the same SQL statement used above. Don't forget the semicolon.

And thats it! Run your site again using http://localhost/wordpress and see your links point correctly to their respective destinations.


Was this article helpful? have you learned something or do you know a better approach? hit me up at the comments.
