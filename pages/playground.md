---
layout: page
title: "Playground"
description: ""
---
{% include JB/setup %}

#Its Playtime

<ul id="postListing" class="posts">
  {% for post in site.posts %}
  {% if post.categories contains 'applications' or post.categories contains 'tools' %}
  <a href="{{ post.url }}">
    <li class="rounded col-sm-4">
    <!-- <li class="box" style="background-image:url({{ post.featured_image }});background-size:cover"> -->
		{% if post.featured_image %}
			<button class="btn btn-default"><img class="" src="{{ BASE_PATH }}/{{ post.featured_image }}"></button>
		{% endif %}

		<div class="box-body">
			<h5 class="entrytitle"><a href="{{ post.url }}"><strong>{{ post.title }} </strong></a> </h5>
		
			<p>{{ post.content | strip_html | truncatewords: 15 }}</p>
		</div>
    </li>
  </a>
  {% endif %}
  {% endfor %}
  <li></li>
</ul>