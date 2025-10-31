// resume.js
import { jobs } from "./data.js";

/**
 * Parse YYYY-MM-DD → Date object
 */
function parseDate(dateStr) {
  return dateStr ? new Date(dateStr) : null;
}

/**
 * Sort jobs: most recent first (current job = top)
 */
const sortedJobs = [...jobs].sort((a, b) => {
  const endA = a.endDate ? parseDate(a.endDate) : new Date();
  const endB = b.endDate ? parseDate(b.endDate) : new Date();
  return endB - endA;
});

/**
 * Create single timeline item
 */
function createJobItem(job) {
  const isCurrent = !job.endDate;
  const linkAttr = job.link ? `href="${job.link}" target="_blank"` : "href='#'";
  const logoClass = isCurrent ? "" : "bg-transparent";

  // Format dates: "Oct 2025"
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const start = formatDate(job.startDate);
  const end = isCurrent ? "Present" : formatDate(job.endDate);
  const dateRange = `${start} – ${end}`;
  const durationText = `(${job.duration})`;

  const item = document.createElement("div");
  item.className = "timeline";

  item.innerHTML = `
    <a ${linkAttr} class="timeline-content" target="_blank">
      <div class="timeline-icon ${logoClass}">
        <img src="${job.logo}" alt="${job.company} logo" class="w-100">
      </div>
      <div class="inner-content">
        <h3 class="title">${job.company}</h3>
        ${job.subtitle ? `<p class="text-muted small mb-1">${job.subtitle}</p>` : ""}
        <p class="description">
          ${job.description}
          ${job.location ? `<br><small class="text-muted">${job.location}</small>` : ""}
        </p>
        <!-- DATE RANGE + DURATION -->
        <p class="text-muted small mb-0 mt-2">
          <strong>${dateRange}</strong> · ${durationText}
        </p>
      </div>
      <div class="timeline-year"><span>${durationText}</span></div>
    </a>
  `;

  return item;
}

/**
 * Render all jobs
 */
function renderJobs() {
  const container = document.querySelector("#jobs-container");
  if (!container) {
    console.error("Element with id='jobs-container' not found!");
    return;
  }

  const timelineWrapper = container.querySelector(".main-timeline");
  if (!timelineWrapper) {
    const wrapper = document.createElement("div");
    wrapper.className = "main-timeline";
    container.appendChild(wrapper);
  }

  const mainTimeline = container.querySelector(".main-timeline");
  mainTimeline.innerHTML = ""; // Clear

  const fragment = document.createDocumentFragment();
  sortedJobs.forEach(job => {
    fragment.appendChild(createJobItem(job));
  });

  mainTimeline.appendChild(fragment);
}

/* =============================================
   DOM READY
   ============================================= */
document.addEventListener("DOMContentLoaded", renderJobs);