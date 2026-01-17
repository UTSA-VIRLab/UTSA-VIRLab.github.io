document.addEventListener("DOMContentLoaded", () => {
  // Parse data
  const projects  = JSON.parse(document.getElementById("projects-data").textContent);
  const citations = JSON.parse(document.getElementById("citations-data").textContent);

  // Get elements
  const projId     = new URLSearchParams(window.location.search).get("id");
  const proj       = projects.find(p => p.id === projId);
  const headerEl   = document.getElementById("project-header");
  const newsEl     = document.getElementById("project-news");
  const newsListEl = document.getElementById("news-list");
  const relatedEl  = document.getElementById("related-pubs");
  const listEl     = document.getElementById("pubs-list");
  
  // Base URL for assets
  const base = document.querySelector('meta[name="base-url"]')?.content || "/";

  if (!proj) {
    headerEl.innerHTML = "<p><em>Project not found.</em></p>";
    return;
  }

  renderHeader(proj, headerEl);
  renderNews(proj, newsListEl, newsEl, base);
  renderPublications(projId, citations, listEl, relatedEl, base);
  setupBibtexModal();
});

// ===================
// Render Functions
// ===================

function renderHeader(proj, container) {
  const fields = ["agency", "award", "investigator", "role", "timeline"];
  
  let meta = "<dl class='project-meta'>";
  fields.forEach(key => {
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    meta += `<dt>${label}:</dt><dd>${proj[key] || "&mdash;"}</dd>`;
  });
  
  if (proj.link) {
    meta += `<dt>Link:</dt>
      <dd><a href="${proj.link}" target="_blank" rel="noopener">${proj.link}</a></dd>`;
  }
  meta += "</dl>";

  let html = `<h1>${proj.title}</h1>${meta}`;
  
  if (proj.description) {
    html += `
      <section class="project-abstract">
        <h2>Description</h2>
        ${proj.description}
      </section>`;
  }
  
  container.innerHTML = html;
}

function renderNews(proj, listEl, sectionEl, base) {
  if (!proj.news || proj.news.length === 0) return;
  
  sectionEl.style.display = "block";
  const fallbackImg = `${base}images/news/default.png`;

  proj.news.forEach(item => {
    const div = document.createElement("div");
    div.className = "news-card";
    
    const date = formatDate(item.date);
    const imageUrl = item.image ? `${base}${item.image}` : fallbackImg;
    const linkAttr = item.link ? `href="${item.link}" target="_blank" rel="noopener"` : 'href="#"';

    div.innerHTML = `
      <a ${linkAttr} class="news-card-link">
        <div class="news-card-image">
          <img src="${imageUrl}" alt="${item.title}" loading="lazy">
        </div>
        <div class="news-card-content">
          <span class="news-card-date">${date}</span>
          <h3 class="news-card-title">${item.title}</h3>
          ${item.description ? `<p class="news-card-description">${item.description}</p>` : ""}
        </div>
      </a>
    `;
    listEl.appendChild(div);
  });
}

function renderPublications(projId, citations, listEl, sectionEl, base) {
  const related = citations.filter(c => 
    Array.isArray(c.project) && c.project.includes(projId)
  );
  
  if (related.length === 0) return;
  
  sectionEl.style.display = "block";

  related.forEach(cit => {
    const div = document.createElement("div");
    div.className = "citation-container";
    
    const safeBib = cit.bibtex 
      ? cit.bibtex.replace(/</g, "&lt;").replace(/>/g, "&gt;") 
      : "";
    
    const date = formatDate(cit.date);

    div.innerHTML = `
      <div class="citation">
        <a href="${cit.link}" class="citation-image" aria-label="${cit.title}">
          <img src="${base}${cit.image}" alt="${cit.title}" loading="lazy">
        </a>
        <div class="citation-text">
          <a href="${cit.link}" class="citation-title">${cit.title}</a>
          <div class="citation-authors">${cit.authors.join(", ")}</div>
          <div class="citation-details">
            <span class="citation-publisher">${cit.publisher}</span>
            &nbsp;·&nbsp;
            <span class="citation-date">${date}</span>
            &nbsp;·&nbsp;
            <span class="citation-doi">${cit.doi}</span>
          </div>
          ${cit.description ? `<div class="citation-description">${cit.description}</div>` : ""}
          ${safeBib ? `<button class="show-bibtex" data-bibtex="${safeBib}">BibTeX</button>` : ""}
        </div>
      </div>
    `;
    listEl.appendChild(div);
  });
}

function setupBibtexModal() {
  const modal = document.getElementById("globalBibtexModal");
  const content = document.getElementById("globalBibtexContent");

  document.addEventListener("click", e => {
    if (e.target.matches(".show-bibtex")) {
      content.textContent = e.target.getAttribute("data-bibtex");
      modal.style.display = "block";
    }
    
    if (e.target.matches(".close")) {
      modal.style.display = "none";
    }
    
    if (e.target.matches(".copy-bibtex")) {
      const txt = document.getElementById(e.target.dataset.target).textContent;
      navigator.clipboard.writeText(txt);
    }
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// ===================
// Utility Functions
// ===================

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}