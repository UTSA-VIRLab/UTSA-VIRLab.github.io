---
title: Sponsors
nav:
  order: 5
  tooltip: Sponsors & Partners
---

<div class="sponsors-grid">
  {% for sponsor in site.data.sponsors %}
  <a
    class="sponsor-card"
    href="{{ sponsor.url }}"
    target="_blank"
    rel="noopener"
  >
    <img
      src="{{ sponsor.image | relative_url }}"
      alt="{{ sponsor.name }}"
      class="sponsor-logo"
    />
    <span class="sponsor-name">{{ sponsor.name }}</span>
  </a>
  {% endfor %}
</div>