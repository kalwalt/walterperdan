---
layout: home
title: Welcome
permalink: /
section: home
intro_paragraph: >-

  Welcome to my experimental website, i'm trying to use Netifly services. If you
  arrived here in some way, i really suggest to you visiting my offcial website
  [www.walterperdan.com](https://www.walterperdan.com)


  Sorry!


  Walter Perdan
---
{% assign path = 'assets/img/uploads/artisajoke_interactive_art_augmented_reality_walter_perdan.jpg' %}
{% assign alt = 'Art is a joke - interactive art by Walter Perdan, kalwalt' %}
{% assign title = 'Art is a joke' %}

{% responsive_image_block %}
  path: {{ path }}
  alt: {{ alt }}
  sizes:
   - width: 480
   - width: 600
   - width: 720
  {% if title %}
  title: {{ title }}
  {% endif %}
{% endresponsive_image_block %}
