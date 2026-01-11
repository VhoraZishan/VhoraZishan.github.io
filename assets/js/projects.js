setTimeout(() => {
  const buttons = document.querySelectorAll(".read-more-btn");
  const toggleBtn = document.getElementById("toggle-projects-btn");
  const moreProjects = document.querySelector(".more-projects");

  // Read More buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const desc = btn.closest(".project-content").querySelector(".project-desc");
      const shortText = desc.querySelector(".short-text");
      const fullText = desc.querySelector(".full-text");

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
if (toggleBtn && moreProjects) {
  toggleBtn.addEventListener("click", () => {
    const isVisible = moreProjects.classList.contains("show");

    if (isVisible) {
      moreProjects.classList.remove("show");
      toggleBtn.textContent = "See More";
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    } else {
      moreProjects.classList.add("show");
      toggleBtn.textContent = "See Less";
    }
  });
}

}, 50);
