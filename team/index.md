---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## Lab Investigator
{% include list.html data="members" component="portrait" filter="role == 'pi'" %}

## Current Students
{% include list.html data="members" component="portrait" filter="group == 'current'" %}

## Previous Students
{% include list.html data="members" component="portrait" filter="group == 'alum'" %}