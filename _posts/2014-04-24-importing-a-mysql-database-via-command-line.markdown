---
author: admin
comments: true
date: 2014-04-24 13:13:14+00:00
layout: post
slug: importing-a-mysql-database-via-command-line
title: Importing a MySQL Database Via Command Line
wordpress_id: 1603
categories:
- Code Review on Life
- Tutorials
- Web Development
tags:
- database
- export
- import
- mysql
- web development
featured_image: 'assets/images/mysql-logo.jpg'
---

Exporting and importing databases is usually an annoying task but it can't be avoided. There would be instances where you would need to replicate a site you are working on locally with the exact same data as it is live. the most commonly used method would be to use [Phpmyadmin](http://phpmyadmin.net) locally, create a db and import the db dump using the (you guessed it.) import command.

[![Screen Shot 2014-04-24 at 5.42.01 PM](http://rgb.reengo.com/wp-content/uploads/2014/04/Screen-Shot-2014-04-24-at-5.42.01-PM.png)](http://rgb.reengo.com/wp-content/uploads/2014/04/Screen-Shot-2014-04-24-at-5.42.01-PM.png)It would however take longer depending on the size of the db. since phpmyadmin would have to extract and read the db dump first using PHP and then import them using the  SQL on a MySQL database.

You may want to try a faster approach by importing the db on the command line via terminal.

**Importing DB via Command Line**

*Importing via command line is much faster than using Phpmyadmin since you don't need to use PHP at all.*

1. Open your terminal (for mac users) and head over to the path where you saved your db export. (for windows users, you may need to use Putty)

2. unzip your db export using the following command. (if you choose tar/gzip etc. you may need to use a different command).


		$ unzip db-filename.sql.zip


3. assuming that you have mysql already installed. start by logging in.

		$ mysql -u root -p 

4. enter your root password or in case you used a different user, use those credentials and create a new db. remember to add a semicolon at the end of the line.

		mysql> create database database-name;

5. once your db is created root users usually have all permissions granted by default but in case you are having errors like _ERROR 1044 (42000): Access denied for user 'username'@'localhost'_ may need to add permissions to it. if you are using root, skip this step.

		mysql> grant all on database-name.* to 'username'@'localhost';

6. exit mysql and run the following command on the same path where the sql file is.

		$ mysql -u root -p database-name < db-filename.sql

This will import the file to the db you just created. it would be a whole lot faster than using Phpmyadmin, SQLYog MySQL Workbench or any UI based database management application AFAIK. So go ahead and try it.

Have a better way of doing the stuff above? let me know on the comments below
