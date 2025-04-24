// document.addEventListener("DOMContentLoaded", function() {
//     // 1) Load the projects array from the YAML data
//     const projects = window.__SITE_PROJECTS__ || [];
//
//     // 2) Get the `title` query-param
//     const params  = new URLSearchParams(window.location.search);
//     const title   = params.get("title");
//
//     // 3) Find the matching project
//     const project = projects.find(p => p.title === title);
//     const container = document.querySelector(".project-detail");
//
//     if (!project) {
//         container.innerHTML = "<p><em>Project not found.</em></p>";
//         return;
//     }
//
//     // Build the metadata definition list
//     let metaHtml = "<dl class='project-meta'>";
//     metaHtml += `<dt>Agency:</dt><dd>${project.agency || '—'}</dd>`;
//     metaHtml += `<dt>Award:</dt><dd>${project.award || '—'}</dd>`;
//     metaHtml += `<dt>Investigator:</dt><dd>${project.investigator || '—'}</dd>`;
//     metaHtml += `<dt>Role:</dt><dd>${project.role || '—'}</dd>`;
//     metaHtml += `<dt>Timeline:</dt><dd>${project.timeline || '—'}</dd>`;
//     metaHtml += "</dl>";
//
//     // Start injecting HTML
//     let html = `
//     <h1>${project.title}</h1>
//     ${metaHtml}
//   `;
//
//     // Abstract
//     if (project.description) {
//         html += `
//       <section class="project-abstract">
//         <h2>Abstract</h2>
//         ${project.description}
//       </section>
//     `;
//     }
//
//     // Optional image
//     if (project.image) {
//         html += `
//       <section class="project-image">
//         <h2>Image</h2>
//         <img src="${project.image}" alt="${project.title}">
//       </section>
//     `;
//     }
//
//     container.innerHTML = html;
// });