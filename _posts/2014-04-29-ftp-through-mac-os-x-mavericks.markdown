---
author: admin
comments: true
date: 2014-04-29 19:31:19+00:00
layout: post
slug: ftp-through-mac-os-x-mavericks
title: FTP through Mac OS X Mavericks
description: "On a unix based web server, you need to run and enable FTP to update the wordpress stack, themes or plugins."
tags: ['blogging','wordpress','ftp','mac','osx','mavericks']
wordpress_id: 1659
categories:
- Code Review on Life
- Tutorials
- Web Development
---

On a unix based web server, you need to run and enable FTP to update the wordpress stack, themes or plugins. This is the reason why you get permission errors when you do so on Mac OSX Mavericks. you would need to run the following command:

    sudo -s launchctl load -w /System/Library/LaunchDaemons/ftp.plist

Alternately, you can unload it running this command:

    sudo -s launchctl unload -w /System/Library/LaunchDaemons/ftp.plist
    
Enjoy.
