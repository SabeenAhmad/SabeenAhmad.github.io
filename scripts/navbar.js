document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar").forEach((navbar) => {
    const toggleButton = navbar.querySelector(".navbar-toggle");
    const links = navbar.querySelector(".links");

    if (!toggleButton || !links) {
      return;
    }

    toggleButton.addEventListener("click", () => {
      const isOpen = navbar.classList.toggle("links-open");
      toggleButton.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 700) {
          navbar.classList.remove("links-open");
          toggleButton.setAttribute("aria-expanded", "false");
        }
      });
    });
  });
});
