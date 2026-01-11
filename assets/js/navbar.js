let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  backToTop.style.display = scrollTop > 300 ? "block" : "none";

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
