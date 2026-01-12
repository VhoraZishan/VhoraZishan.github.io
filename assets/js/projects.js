setTimeout(() => {
  // 1. Generate truncated text for all project descriptions automatically
  const MAX_CHARS = 90;

  document.querySelectorAll(".project-desc").forEach((desc) => {
    // Check if we already have the structure (in case script runs twice)
    if (desc.querySelector(".short-text")) return;

    const originalText = desc.textContent.trim();

    // Create the "short" version
    const truncated = originalText.length > MAX_CHARS
      ? originalText.substring(0, MAX_CHARS) + "..."
      : originalText;

    // Clear and rebuild structure
    desc.innerHTML = `
      <span class="short-text">${truncated}</span>
      <span class="full-text slide-down">${originalText}</span>
    `;
  });

  // 2. Re-query buttons now that DOM might have settled (though buttons didn't change)
  const buttons = document.querySelectorAll(".read-more-btn");
  const toggleBtn = document.getElementById("toggle-projects-btn");

  // Read More buttons logic
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const desc = btn.closest(".project-content").querySelector(".project-desc");
      const shortText = desc.querySelector(".short-text");
      const fullText = desc.querySelector(".full-text");

      if (!shortText || !fullText) return; // safety check

      const isExpanded = fullText.classList.contains("expanded");

      if (isExpanded) {
        fullText.classList.remove("expanded");
        shortText.style.display = "inline";
        btn.textContent = "Read More";
      } else {
        fullText.classList.add("expanded");
        shortText.style.display = "none";
        btn.textContent = "Show Less";
      }
    });
  });

  // See More toggle
  // See More toggle for flattened grid
  const extraProjects = document.querySelectorAll(".extra-project");

  if (toggleBtn && extraProjects.length > 0) {
    toggleBtn.addEventListener("click", () => {
      // Check state based on the first item
      const isVisible = !extraProjects[0].classList.contains("d-none");

      if (isVisible) {
        // Hide all
        extraProjects.forEach(el => {
          el.classList.add("d-none");
          el.classList.remove("fade-in");
        });
        toggleBtn.textContent = "See More";
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      } else {
        // Show all
        extraProjects.forEach(el => {
          el.classList.remove("d-none");
          // Add a small timeout or just class for CSS animation
          // requestAnimationFrame helps trigger transition if we were using it, 
          // but for keyframes 'fade-in' works immediately.
          el.classList.add("fade-in");
        });
        toggleBtn.textContent = "See Less";
      }
    });
  }

}, 50);
