const modules = [
  { id: "navbar", script: "assets/js/navbar.js" },
  { id: "background", script: "assets/js/background.js" },
  { id: "profile" },
  { id: "about" },
  { id: "skills" },
  { id: "projects", script: "assets/js/projects.js" },
  { id: "education" },
  { id: "certification" },
  { id: "contact", script: "assets/js/contact.js" },
  { id: "footer", script: "assets/js/footer.js" }
];

modules.forEach(module => {
  const el = document.getElementById(module.id);
  if (!el) return;

  fetch(`modules/${module.id}.html`)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${module.id}`);
      return res.text();
    })
    .then(html => {
      el.innerHTML = html;
      // If a script is associated, load it after HTML injection
      if (module.script) {
        loadScript(module.script);
      }
    })
    .catch(err => console.error(`Error loading ${module.id}:`, err));
});

// Utility function to load external JS files dynamically
function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  script.defer = true;
  document.body.appendChild(script);
}

