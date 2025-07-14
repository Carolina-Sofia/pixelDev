const header = document.querySelector("header");
const btn = document.querySelector(".menu-toggle");
btn.addEventListener("click", () => {
  header.classList.toggle("open");
  btn.innerHTML = header.classList.contains("open")
    ? '<i class="bi bi-x-lg fs-2"></i>'
    : '<i class="bi bi-list fs-2"></i>';
});

// Substitute contact form with thank you message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const wrapper = form.closest(".contact-section");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json();

      if (res.ok) {
        wrapper.innerHTML = `
        <div style="height:440px;">
          <p class="lead mt-3" style="font-size:1.25rem; text-align:center;">
            Obrigada por nos enviar uma mensagem!<br>
            Responderemos o mais brevemente possível.
          </p></div>
        `;
      } else {
        alert(
          json.message ||
            "Algo correu mal ao enviar a mensagem — tente novamente."
        );
      }
    } catch (err) {
      alert("Erro de rede. Verifique sua conexão e tente novamente.");
      console.error(err);
    }
  });
});
