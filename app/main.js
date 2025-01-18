document.querySelectorAll("[data-dropdown]").forEach((evento) => {
  evento.addEventListener("click", () => {
    const dropdown = evento.nextElementSibling;

    const isHidden = dropdown.hasAttribute("hidden");

    if (isHidden) {
      dropdown.removeAttribute("hidden");
      dropdown.classList.add("active");
      evento.classList.add("active");
    } else {
      dropdown.setAttribute("hidden", true);
      dropdown.classList.remove("active");
      evento.classList.remove("active");
    }
  });
});
