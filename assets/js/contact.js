// Load EmailJS library + init (must be here since it's dynamically injected)
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
script.onload = () => {
  emailjs.init("FrpmUixCJ68D46AdI");

  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("contact-status");
  const button = form?.querySelector('button[type="submit"]');
  const spinner = document.getElementById("contact-spinner");

  if (form && statusMsg && button && spinner) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      button.disabled = true;
      button.innerText = "Sending...";
      spinner.style.display = "block";

      emailjs.sendForm("service_usvskol", "template_wdq8tqs", form)
        .then(() => {
          button.disabled = false;
          button.innerText = "Send Message";
          spinner.style.display = "none";
          statusMsg.innerText = "✅ Message sent successfully!";
          statusMsg.style.color = "#0f0";
          form.reset();

          setTimeout(() => statusMsg.innerText = "", 5000);
        })
        .catch((error) => {
          button.disabled = false;
          button.innerText = "Send Message";
          spinner.style.display = "none";
          statusMsg.innerText = "❌ Failed to send. Try again.";
          statusMsg.style.color = "#f00";
          console.error("EmailJS Error:", error);
        });
    });
  }
};
document.body.appendChild(script);
