function showSection(id) {
  const sections = document.querySelectorAll(".bio-section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

// pas dibuka pertaama tampilke iki ae
document.addEventListener("DOMContentLoaded", function () {
  showSection("tentang");
});
