const header = document.querySelector("header");
const btn = document.querySelector(".menu-toggle");
btn.addEventListener("click", () => {
  header.classList.toggle("open");
  btn.innerHTML = header.classList.contains("open")
    ? '<i class="bi bi-x-lg fs-2"></i>'
    : '<i class="bi bi-list fs-2"></i>';
});
