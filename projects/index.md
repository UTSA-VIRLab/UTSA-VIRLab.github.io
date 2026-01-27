---
title: Projects
nav:
  order: 1
  tooltip: Projects and funding
---

<h2>Current Projects</h2>

<div id="current-projects"></div>

{% include section.html %}

<h2>Past Projects</h2>

<div id="past-projects"></div>

<!-- Modal Popup Markup for full description -->
<div id="descriptionModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div id="modalDescriptionContent"></div>
    </div>
</div>

<!-- Embed project data -->
<script id="projects-data" type="application/json">
    {{ site.data.projects | jsonify }}
</script>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        const projects = JSON.parse(document.getElementById("projects-data").textContent);
        const base = "{{ '/' | relative_url }}";

        // Parse timeline end date (format: "MM/YYYY - MM/YYYY")
        function getEndDate(timeline) {
            if (!timeline) return null;
            const parts = timeline.split(" - ");
            if (parts.length < 2) return null;
            const endPart = parts[1].trim();
            const [month, year] = endPart.split("/");
            return new Date(parseInt(year), parseInt(month), 0);
        }

        // Check if project is current
        function isCurrent(project) {
            const endDate = getEndDate(project.timeline);
            if (!endDate) return true;
            return endDate >= new Date();
        }

        // Create card HTML (exactly matching card.html structure)
        function createCard(project) {
            let titleHtml;
            if (project.id) {
                titleHtml = '<a href="' + base + 'projects/project.html?id=' + encodeURIComponent(project.id) + '" class="card-title">' + project.title + '</a>';
            } else if (project.link) {
                titleHtml = '<a href="' + project.link + '" class="card-title" target="_blank" rel="noopener">' + project.title + '</a>';
            } else {
                titleHtml = '<span class="card-title">' + project.title + '</span>';
            }

            let html = '<div class="card-wrapper">';
            html += '<div class="card" data-style="">';
            html += '<div class="card-text left">';
            html += titleHtml;
            if (project.agency) {
                html += '<span class="card-agency"><strong>Agency:</strong> ' + project.agency + '</span>';
            }
            if (project.award) {
                html += '<span class="card-award"><strong>Award:</strong> ' + project.award + '</span>';
            }
            if (project.investigator) {
                html += '<span class="card-investigator"><strong>Investigator:</strong> ' + project.investigator + '</span>';
            }
            if (project.role) {
                html += '<span class="card-role"><strong>Role:</strong> ' + project.role + '</span>';
            }
            if (project.timeline) {
                html += '<span class="card-timeline"><strong>Timeline:</strong> ' + project.timeline + '</span>';
            }
            html += '</div>';
            html += '</div>';
            html += '</div>';

            return html;
        }

        // Sort by end date (furthest future / most recent first)
        function sortByEndDate(a, b) {
            const endA = getEndDate(a.timeline);
            const endB = getEndDate(b.timeline);
            if (!endA && !endB) return 0;
            if (!endA) return 1;
            if (!endB) return -1;
            return endB - endA;
        }

        // Filter and sort projects
        const currentProjects = projects.filter(p => isCurrent(p)).sort(sortByEndDate);
        const pastProjects = projects.filter(p => !isCurrent(p)).sort(sortByEndDate);

        // Build HTML for current projects (matching list.html structure)
        let currentHtml = '<div class="list project-grid">';
        currentProjects.forEach(project => {
            currentHtml += createCard(project);
        });
        currentHtml += '</div>';

        // Build HTML for past projects
        let pastHtml = '<div class="list project-grid">';
        pastProjects.forEach(project => {
            pastHtml += createCard(project);
        });
        pastHtml += '</div>';

        // Render
        document.getElementById("current-projects").innerHTML = currentHtml;
        document.getElementById("past-projects").innerHTML = pastHtml;
    });
</script>