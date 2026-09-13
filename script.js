const config = window.siteConfig;

document.documentElement.style.setProperty("--accent", config.brand.accent);
document.documentElement.style.setProperty("--ink", config.brand.ink);
document.documentElement.style.setProperty("--paper", config.brand.paper);

document.querySelectorAll("[data-business-name]").forEach((element) => {
  element.textContent = config.business.displayName;
});
document.querySelectorAll("[data-business-description]").forEach((element) => {
  element.textContent = config.business.description;
});
document.querySelectorAll("[data-business-phone]").forEach((element) => {
  element.textContent = config.business.phone;
  if (!config.business.phone.startsWith("TODO")) element.href = `tel:${config.business.phone}`;
});
document.querySelectorAll("[data-business-email]").forEach((element) => {
  element.textContent = config.business.email;
  if (!config.business.email.startsWith("TODO")) element.href = `mailto:${config.business.email}`;
});
document.querySelectorAll("[data-business-address]").forEach((element) => {
  element.textContent = `${config.business.address}, ${config.business.city}, ${config.business.state}`;
});
document.querySelectorAll("[data-office-hours]").forEach((element) => {
  element.textContent = config.business.officeHours;
});

document.querySelector("#services-grid").innerHTML = config.services.map((service) => `
  <article class="service-card">
    <span class="service-number">${service.number}</span>
    <h3>${service.title}</h3>
    <p>${service.text}</p>
    <span class="service-arrow" aria-hidden="true">↗</span>
  </article>
`).join("");

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("is-open")));

const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = "Sending...";
  formStatus.className = "form-status";
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  payload.consent = formData.get("consent") === "on";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error);
    formStatus.textContent = result.message;
    formStatus.classList.add("is-success");
    form.reset();
  } catch (error) {
    formStatus.textContent = error.message || "Please try again later.";
    formStatus.classList.add("is-error");
  }
});
