const modules = [
  "navbar",
  "background",
  "profile",
  "about",
  "skills",
  "projects",
  "resume",
  "contact",
  "footer",
  "education",
  "certification"
];

modules.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    if (id === "background") {
      // Load background and script after inject
      fetch(`modules/background.html`)
        .then(res => res.text())
        .then(html => {
          el.innerHTML = html;
          loadScript("assets/js/background.js");
        })
        .catch(err => console.error(`Error loading ${id}.html:`, err));
    }

    else if (id === "navbar") {
      fetch(`modules/${id}.html`)
        .then(res => res.text())
        .then(html => {
          el.innerHTML = html;
          loadScript("assets/js/navbar.js");
        })
        .catch(err => console.error(`Error loading ${id}.html:`, err));
    }

    else if (id === "projects") {
      fetch(`modules/${id}.html`)
        .then(res => res.text())
        .then(html => {
          el.innerHTML = html;
          loadScript("assets/js/projects.js");
        })
        .catch(err => console.error(`Error loading ${id}.html:`, err));
    }

    else if (id === "contact") {
      fetch(`modules/${id}.html`)
        .then(res => res.text())
        .then(html => {
          el.innerHTML = html;
          loadScript("assets/js/contact.js");
        })
        .catch(err => console.error(`Error loading ${id}.html:`, err));
    }

    else if (id === "education") {
  fetch(`modules/${id}.html`)
    .then(res => res.text())
    .then(html => {
      el.innerHTML = html;
    })
    .catch(err => console.error(`Error loading ${id}.html:`, err));
}

else if (id === "certification") {
  fetch(`modules/${id}.html`)
    .then(res => res.text())
    .then(html => {
      el.innerHTML = html;
    })
    .catch(err => console.error(`Error loading ${id}.html:`, err));
}

else if (id === "footer") {
  fetch(`modules/${id}.html`)
    .then(res => res.text())
    .then(html => {
      el.innerHTML = html;
      loadScript("assets/js/footer.js"); // <-- Make sure this line exists
    })
    .catch(err => console.error(`Error loading ${id}.html:`, err));
}

    else {
      // Load module with no extra script
      fetch(`modules/${id}.html`)
        .then(res => res.text())
        .then(html => {
          el.innerHTML = html;
        })
        .catch(err => console.error(`Error loading ${id}.html:`, err));
    }
  }
  
});

// Utility function to load external JS files dynamically
function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  document.body.appendChild(script);
}

