function prefillSubject() {
  setTimeout(() => {
    const subjectInput = document.getElementById("subject");
    if (subjectInput) {
      subjectInput.value = "Bug Report - Portfolio Project";
      subjectInput.focus();
    }
  }, 300); // Adjust if scroll is longer
}