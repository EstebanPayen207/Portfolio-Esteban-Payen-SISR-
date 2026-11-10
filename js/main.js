/**
 * ============================================================================
 * LOGIQUE INTERACTIVE — PORTFOLIO ESTEBAN PAYEN (BTS SIO SISR)
 * ============================================================================
 * - Rendu dynamique des cartes Projets et Veille Technologique (depuis data.js)
 * - Filtrage fluide des projets (Tous / Système / Réseau / Missions de Stage)
 * - Modale de détails techniques & prévisualisation Attestation / Mentions légales
 * - Menu mobile responsive & ScrollSpy sur la barre de navigation
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderProjects("all");
  initProjectFilters();
  renderVeilleSection();
  initModalSystem();
  initContactForm();
});

/* ==========================================================================
   1. NAVIGATION FIXE, MENU MOBILE & SCROLLSPY
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navLinksContainer = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let currentSectionId = "accueil";
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentSectionId}`
      );
    });
  });

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinksContainer.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinksContainer.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* ==========================================================================
   2. RENDU & FILTRAGE DES CARTES DE PROJETS
   ========================================================================== */
function renderProjects(activeFilter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid || typeof PROJECTS_DATA === "undefined") return;

  const filtered =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  grid.innerHTML = filtered
    .map((proj) => {
      const badgeClass =
        proj.category === "reseau"
          ? "cat-reseau"
          : proj.category === "stage"
          ? "cat-stage"
          : "";

      const placeholderClass = proj.isPlaceholder ? "placeholder-card" : "";

      const tagsHtml = proj.tags
        .map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`)
        .join("");

      const secondBtnHtml = proj.secondDocUrl
        ? `<a href="${proj.secondDocUrl}" download class="btn btn-outline btn-sm">
             ${escapeHtml(proj.secondDocLabel || "Fichier joint")} ⬇
           </a>`
        : "";

      const docBtnHtml = `
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; width:100%; justify-content:space-between; align-items:center;">
          <button type="button" class="btn btn-outline btn-sm" data-project-id="${proj.id}">
            Voir les détails
          </button>
          <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
            <a href="${proj.docUrl}" download class="btn btn-emerald btn-sm">
              ${escapeHtml(proj.docLabel || "Documentation")} ⬇
            </a>
            ${secondBtnHtml}
          </div>
        </div>
      `;

      return `
        <article class="project-card ${placeholderClass}" data-category="${proj.category}">
          <div>
            <div class="project-top">
              <span class="project-cat-badge ${badgeClass}">${escapeHtml(proj.categoryLabel)}</span>
              <span class="project-context">${escapeHtml(proj.context)}</span>
            </div>
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
            <p class="project-desc">${escapeHtml(proj.description)}</p>
            <div class="project-tags">${tagsHtml}</div>
          </div>
          <div class="project-footer">
            ${docBtnHtml}
          </div>
        </article>
      `;
    })
    .join("");
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filterValue = btn.getAttribute("data-filter") || "all";
      renderProjects(filterValue);
    });
  });
}

/* ==========================================================================
   3. RENDU DE LA SECTION VEILLE TECHNOLOGIQUE
   ========================================================================== */
function renderVeilleSection() {
  const themeTitleEl = document.getElementById("veille-theme-title");
  const probEl = document.getElementById("veille-problematique");
  const themeAltEl = document.getElementById("veille-theme-alt");
  const keywordsContainer = document.getElementById("veille-keywords-cloud");
  const toolsContainer = document.getElementById("veille-tools-list");
  const impactContainer = document.getElementById("veille-impact-grid");
  const veilleGrid = document.getElementById("veille-grid");

  if (typeof VEILLE_CONFIG !== "undefined") {
    if (themeTitleEl && VEILLE_CONFIG.themeTitle) {
      themeTitleEl.textContent = VEILLE_CONFIG.themeTitle;
    }
    if (probEl && VEILLE_CONFIG.problematique) {
      probEl.textContent = `« ${VEILLE_CONFIG.problematique} »`;
    }
    if (themeAltEl && VEILLE_CONFIG.themeAlternative) {
      themeAltEl.textContent = VEILLE_CONFIG.themeAlternative;
    }
    if (keywordsContainer && Array.isArray(VEILLE_CONFIG.keywords)) {
      keywordsContainer.innerHTML = VEILLE_CONFIG.keywords
        .map((kw) => `<span class="veille-keyword-badge">◈ ${escapeHtml(kw)}</span>`)
        .join("");
    }
    if (toolsContainer && Array.isArray(VEILLE_CONFIG.tools)) {
      toolsContainer.innerHTML = VEILLE_CONFIG.tools
        .map(
          (tool) =>
            `<span class="tool-pill" title="${escapeHtml(tool.type)}">⚡ ${escapeHtml(tool.name)}</span>`
        )
        .join("");
    }
    if (impactContainer && Array.isArray(VEILLE_CONFIG.impactsSISR)) {
      impactContainer.innerHTML = VEILLE_CONFIG.impactsSISR
        .map(
          (item, idx) => `
            <div class="veille-impact-card">
              <span class="veille-impact-badge">${escapeHtml(item.badge)}</span>
              <h4 class="veille-impact-title">${escapeHtml(item.icon)} ${idx + 1}. ${escapeHtml(item.title)}</h4>
              <p class="veille-impact-desc">${escapeHtml(item.description)}</p>
            </div>
          `
        )
        .join("");
    }
  }

  if (veilleGrid && typeof VEILLE_DATA !== "undefined") {
    veilleGrid.innerHTML = VEILLE_DATA.map((article) => {
      const tagsHtml = article.tags
        .map((tag) => `<span class="project-tag">#${escapeHtml(tag)}</span>`)
        .join("");

      return `
        <article class="veille-card">
          <div>
            <div class="veille-meta">
              <span class="veille-date">📅 ${escapeHtml(article.date)}</span>
              <span class="veille-source-badge">${escapeHtml(article.sourceName)}</span>
            </div>
            <h3 class="veille-title">${escapeHtml(article.title)}</h3>
            <p class="veille-summary">${escapeHtml(article.summary)}</p>
            <div class="project-tags">${tagsHtml}</div>
          </div>
          <div class="veille-footer">
            <span class="mono" style="font-size:0.75rem; color:var(--text-muted);">Veille Wi-Fi 7 / Switching</span>
            <a href="${article.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link">
              Consulter la source ↗
            </a>
          </div>
        </article>
      `;
    }).join("");
  }
}

/* ==========================================================================
   4. SYSTÈME DE MODALE (DÉTAILS PROJETS / ATTESTATION / MENTIONS LÉGALES)
   ========================================================================== */
function initModalSystem() {
  const backdrop = document.getElementById("app-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("modal-close");

  if (!backdrop || !modalBody || !closeBtn) return;

  const closeModal = () => {
    backdrop.classList.remove("open");
    backdrop.setAttribute("aria-hidden", "true");
  };

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("open")) {
      closeModal();
    }
  });

  document.addEventListener("click", (e) => {
    const projBtn = e.target.closest("[data-project-id]");
    if (projBtn) {
      const projId = projBtn.getAttribute("data-project-id");
      const proj = PROJECTS_DATA.find((p) => p.id === projId);
      if (proj) {
        openProjectModal(proj, modalBody, backdrop);
      }
    }

    const attestBtn = e.target.closest("[data-open-attestation]");
    if (attestBtn) {
      e.preventDefault();
      openAttestationModal(modalBody, backdrop);
    }

    const legalBtn = e.target.closest("[data-open-legal]");
    if (legalBtn) {
      e.preventDefault();
      openLegalModal(modalBody, backdrop);
    }
  });
}

function openProjectModal(proj, modalBody, backdrop) {
  const objectifsList = proj.details.objectifs
    .map((obj) => `<li>${escapeHtml(obj)}</li>`)
    .join("");
  const compList = proj.details.competencesE4
    .map((c) => `<li>${escapeHtml(c)}</li>`)
    .join("");

  const secondAction = proj.secondDocUrl
    ? `<a href="${proj.secondDocUrl}" download class="btn btn-outline btn-sm">
         Télécharger : ${escapeHtml(proj.secondDocLabel || "Fichier complémentaire")} ⬇
       </a>`
    : "";

  const docActions = `
    <div style="margin-top:1.5rem; display:flex; gap:0.75rem; flex-wrap:wrap;">
      <a href="${proj.docUrl}" download class="btn btn-primary btn-sm">
        Télécharger : ${escapeHtml(proj.docLabel || "Compte-rendu complet")} ⬇
      </a>
      ${secondAction}
    </div>
  `;

  modalBody.innerHTML = `
    <span class="project-cat-badge">${escapeHtml(proj.categoryLabel)}</span>
    <span class="mono" style="margin-left:0.6rem; font-size:0.78rem; color:var(--text-muted);">${escapeHtml(proj.context)}</span>
    <h3 style="margin-top:0.65rem;">${escapeHtml(proj.title)}</h3>
    <p>${escapeHtml(proj.description)}</p>

    <h4>Objectifs &amp; Étapes réalisées</h4>
    <ul>${objectifsList}</ul>

    <h4>Environnement &amp; Contexte technique</h4>
    <p>${escapeHtml(proj.details.architecture)}</p>

    <h4>Extrait Technique / Configuration</h4>
    <pre class="code-snippet"><code>${escapeHtml(proj.details.commandSnippet)}</code></pre>

    <h4>Compétences du référentiel BTS SIO (Bloc 1 / E4-E5)</h4>
    <ul>${compList}</ul>
    ${docActions}
  `;

  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
}

function openAttestationModal(modalBody, backdrop) {
  modalBody.innerHTML = `
    <span class="project-cat-badge cat-stage">Document Officiel BTS SIO</span>
    <h3 style="margin-top:0.65rem;">Attestation de Stage 1re année — FCC Informatique / Buro24</h3>
    <p style="margin-bottom:1rem;">
      Stage effectué du <strong>11/05/2026 au 12/06/2026 (6 semaines)</strong> au sein de <strong>FCC Informatique / Buro24</strong> (Rue du Prayon, 57685 Augny) — Tuteur : <strong>Jérémy DIETRICH</strong>.
    </p>
    <div style="border-radius:10px; overflow:hidden; border:1px solid var(--border-subtle); background:#05070b;">
      <img src="assets/img/attestation-stage-1.jpg" alt="Attestation de stage BTS SIO Esteban Payen chez FCC Informatique Augny" style="width:100%; max-height:520px; object-fit:contain; margin:0 auto;" />
    </div>
    <div style="margin-top:1.25rem; display:flex; gap:0.75rem; flex-wrap:wrap;">
      <a href="assets/img/attestation-stage-1.jpg" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
        Ouvrir l'attestation en plein écran ↗
      </a>
      <a href="assets/docs/stages/E5_PAYEN_ESTEBAN_CR_STAGE1.docx" download class="btn btn-emerald btn-sm">
        Télécharger le rapport de stage complet (.docx) ⬇
      </a>
    </div>
  `;
  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
}

function openLegalModal(modalBody, backdrop) {
  modalBody.innerHTML = `
    <span class="project-cat-badge">Informations légales</span>
    <h3 style="margin-top:0.65rem;">Mentions Légales &amp; Confidentialité</h3>
    <h4>1. Éditeur du Portfolio</h4>
    <p><strong>Esteban PAYEN</strong> — Étudiant en BTS SIO option SISR au Lycée Robert Schuman (Metz).<br />
    Adresse : 18 Grand Rue, 57130 Vernéville • Email : <a href="mailto:esteban.payen57@gmail.com" style="color:var(--accent-cyan);">esteban.payen57@gmail.com</a> • Tél. : 06 65 64 85 28.</p>
    <h4>2. Finalité du site</h4>
    <p>Ce site web est un portfolio pédagogique et professionnel créé dans le cadre des épreuves E4 et E5 du Brevet de Technicien Supérieur Services Informatiques aux Organisations (BTS SIO - Session 2027).</p>
    <h4>3. Données personnelles</h4>
    <p>Aucune donnée personnelle n'est collectée à votre insu ni cédée à des tiers. Le formulaire de contact prépare uniquement un courriel direct vers l'adresse <strong>esteban.payen57@gmail.com</strong>.</p>
    <h4>4. Propriété intellectuelle</h4>
    <p>L'ensemble des comptes-rendus de projets, documentations techniques et rapports de stage présentés sur ce site sont la propriété d'Esteban PAYEN.</p>
  `;
  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
}

/* ==========================================================================
   5. FORMULAIRE DE CONTACT
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`[Portfolio BTS SIO SISR] Contact de ${name}`);
    const body = encodeURIComponent(
      `Nom / Entreprise : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    if (feedback) {
      feedback.style.display = "block";
      feedback.textContent =
        "✓ Message prêt ! Ouverture de votre messagerie vers esteban.payen57@gmail.com.";
    }

    window.location.href = `mailto:esteban.payen57@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
}

/* Utilitaire d'échappement HTML */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
