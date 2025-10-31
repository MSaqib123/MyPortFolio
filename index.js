// index.js
import { skills, education } from "./data.js";

/* =============================================
   SKILLS SECTION – SAME AS YOUR ORIGINAL
   ============================================= */
function createSkillCard({ img, name, percent, barColor }) {
  const card = document.createElement("div");
  card.className =
    "mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm";

  card.innerHTML = `
    <div class="d-flex align-items-center">
      <div class="thumb-md d-flex flex-wrap justify-content-center align-items-center">
        <img src="${img}" alt="${name} logo" height="34">
      </div>
      <div class="ms-3">
        <h6 class="mb-0 fw-medium text-gray-700">${name}</h6>
      </div>
    </div>
    <div class="progress mt-2" style="height:6px">
      <div class="progress-bar ${barColor}" role="progressbar"
           style="width: ${percent}%; height:6px"
           aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
  `;

  return card;
}

function renderSkills() {
  const container = document.querySelector("#skills-container");
  if (!container) {
    console.error("Element with id='skills-container' not found!");
    return;
  }

  const fragment = document.createDocumentFragment();
  skills.forEach((skill) => {
    fragment.appendChild(createSkillCard(skill));
  });

  container.innerHTML = "";
  container.appendChild(fragment);
}

/* =============================================
   EDUCATION – SMART + CLEAN
   ============================================= */

/**
 * Extract end year from "2018 - 2021" → 2021
 */
function getEndYear(period) {
  const match = period.match(/-\s*(\d{4})$/);
  return match ? parseInt(match[1], 10) : 0;
}

/**
 * Sort education: most recent end year first
 */
const sortedEducation = [...education].sort((a, b) => {
  return getEndYear(b.period) - getEndYear(a.period);
});

/**
 * Create one accordion item
 * @param {Object} item - education object with `id`
 * @param {boolean} isOpen - should this be expanded?
 */
function createEducationItem(item, isOpen = false) {
  const headerId = `education-header-${item.id}`;
  const collapseId = `education-collapse-${item.id}`;

  const buttonClass = isOpen ? "accordion-button" : "accordion-button collapsed";
  const collapseClass = isOpen ? "accordion-collapse collapse show" : "accordion-collapse collapse";
  const ariaExpanded = isOpen ? "true" : "false";

  const el = document.createElement("div");
  el.className = "accordion-item";

  el.innerHTML = `
    <h2 class="accordion-header" id="${headerId}">
      <button class="${buttonClass}" type="button"
              data-bs-toggle="collapse" data-bs-target="#${collapseId}"
              aria-expanded="${ariaExpanded}">
        ${item.title}
        <span class="fw-medium text-primary ms-auto fs-14">${item.period}</span>
      </button>
    </h2>
    <div id="${collapseId}" class="${collapseClass}"
         aria-labelledby="${headerId}" data-bs-parent="#education-accordion">
      <div class="accordion-body">
        <p class="text-muted mb-3">${item.description}</p>
        <p class="fw-medium">${item.institution}</p>
      </div>
    </div>
  `;

  return el;
}

function renderEducation() {
  const container = document.querySelector("#education-container");
  if (!container) return console.error("education-container not found!");

  // Create accordion root
  let accordion = container.querySelector("#education-accordion");
  if (!accordion) {
    accordion = document.createElement("div");
    accordion.className = "accordion accordion-flush";
    accordion.id = "education-accordion";
    container.appendChild(accordion);
  }

  accordion.innerHTML = "";
  const fragment = document.createDocumentFragment();

  sortedEducation.forEach((item, idx) => {
    const isOpen = idx === 0; // First = most recent → open by default
    fragment.appendChild(createEducationItem(item, isOpen));
  });

  accordion.appendChild(fragment);
}


/* =============================================
   DOM READY – RUN BOTH
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderEducation();
});