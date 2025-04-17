---
title: Projects
nav:
  order: 1
  tooltip: Software, datasets, and more
---

## Current Projects

{% include list.html component="card" data="projects" filter="group == 'current'" class="project-grid"%}

{% include section.html %}

## Past Projects

{% include list.html component="card" data="projects" filter="group == 'past'" class="project-grid"%}

<!-- Modal Popup Markup for full description -->
<div id="descriptionModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div id="modalDescriptionContent"></div>
  </div>
</div>

<!-- JavaScript to handle the modal popup -->