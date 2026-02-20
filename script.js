const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    if (name.value.trim() && email.value.trim() && message.value.trim()) {
      alert("Sikeres küldés!");
      form.reset();
    } else {
      alert("Kérjük, adjon meg minden adatot!");
    }
  });
}
