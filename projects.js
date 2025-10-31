// projects.js
import { projects, categories } from "./data.js";

// Initialize Shuffle.js
let shuffleInstance;

function initShuffle() {
  const grid = document.getElementById("grid");
  if (!grid) return;

  shuffleInstance = new Shuffle(grid, {
    itemSelector: ".picture-item",
    sizer: ".picture-item"
  });
}

// Create filter tabs
function renderFilters() {
  const filterContainer = document.querySelector(".filter-tab");
  if (!filterContainer) return;

  filterContainer.innerHTML = categories.map(cat => {
    const display = cat === "all" ? "All" : cat;
    const active = cat === "all" ? "active" : "";
    return `<li class="list-inline-item position-relative text-dark ${active}" data-group="${cat}">${display}</li>`;
  }).join("");

  // Add click handlers
  filterContainer.querySelectorAll("li").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab li").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const group = tab.getAttribute("data-group");
      if (group === "all") {
        shuffleInstance.filter();
      } else {
        shuffleInstance.filter(group);
      }
    });
  });
}

// Create project card
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "col-lg-4 col-md-6 picture-item";
  card.setAttribute("data-groups", JSON.stringify(project.categories));

  const linkHTML = project.link
    ? `<a href="${project.link}" target="_blank" rel="noopener">
         <i class="ti ti-external-link fs-18 text-primary"></i>
       </a>`
    : "";

  const demoText = project.demo
    ? `http://${new URL(project.demo).host}`
    : "View on GitHub";

  card.innerHTML = `
    <div class="card rounded shadow border-0 m-2">
      <div class="position-relative overflow-hidden rounded-top" style="height: 250px;">
        <img 
          src="${project.image}" 
          alt="${project.title.replace(/<[^>]*>/g, '')}" 
          class="w-100 h-100 object-fit-cover rounded-top"
          loading="lazy"
        >
      </div>
      <div class="card-body p-4 m-2">
        <h5 class="text-dark fs-18 fw-medium m-0">${project.title}</h5>
        <p class="text-muted mb-0 fs-13">
          ${demoText} ${linkHTML}
        </p>
      </div>
    </div>
  `;

  return card;
}

// Render all projects
function renderProjects() {
  const grid = document.getElementById("grid");
  if (!grid) return console.error("#grid not found!");

  grid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  projects.forEach(proj => {
    fragment.appendChild(createProjectCard(proj));
  });

  grid.appendChild(fragment);
  initShuffle();
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProjects();
});