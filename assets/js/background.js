setTimeout(() => {
  const particlesTarget = document.getElementById("particles-js");
  const floatTarget = document.querySelector(".floating-text-container");

  // ✅ Particles config for starfield effect
  if (particlesTarget && typeof particlesJS === "function") {

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: { value: "#ffffff" },
        shape: {
          type: "circle", // Only small white circles
        },
        opacity: {
          value: 0.7,
          random: true
        },
        size: {
          value: 1.8,
          random: true
        },
        line_linked: {
          enable: false // Removes lines between particles
        },
        move: {
          enable: true,
          speed: 0.2,  // Slower = more "space" feel
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true
        }
      },
      retina_detect: true
    });

  } else {
    console.warn("❌ particles.js not found or container missing");
  }

  // ✅ Floating words
  const keywords = ["</>", "{}", "C", "C++", "print()", "AI", "SQL", "HTML", "CSS", "JS", "Python", "DevOps", "function()", "<React>", "console.log()"];

  const colors = ["#64ffda", "#ff4081", "#7c4dff", "#ffc107", "#00bcd4", "#e91e63", "#03a9f4", "#c6ff00", "#ff6f00"];

  const container = document.querySelector(".floating-text-container");
  const fullHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    container.scrollHeight || 0
  );

  for (let i = 0; i < 15; i++) {
    const span = document.createElement("span");
    span.className = "floating-text";
    span.innerText = keywords[Math.floor(Math.random() * keywords.length)];

    span.style.top = `${Math.random() * 100}vh`; // ✅ Viewport height
    span.style.left = `${Math.random() * 100}vw`;
    span.style.fontSize = `${Math.random() * 1.5 + 0.8}rem`;
    span.style.animationDuration = `${Math.random() * 10 + 10}s`;

    span.style.color = colors[Math.floor(Math.random() * colors.length)];
    span.style.opacity = "0.4";

    container.appendChild(span);
  }


}, 100);
