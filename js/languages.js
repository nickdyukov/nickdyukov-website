// ====== Language menu ======
const languageBtn = document.querySelector(".language-btn");
const languageMenu = document.querySelector(".language-menu");

if (languageBtn && languageMenu) {
  languageBtn.addEventListener("click", () => {
    languageMenu.classList.toggle("open");
  });

  // === Close the language menu when clicking outside ===
  document.addEventListener("click", (event) => {
    if (!languageBtn.contains(event.target) && !languageMenu.contains(event.target)) {
      languageMenu.classList.remove("open");
    }
  });
}

// ====== Language switch ======
const enBtn = document.querySelector(".en-btn");
const ruBtn = document.querySelector(".ru-btn");
const esBtn = document.querySelector(".es-btn");

if (enBtn) enBtn.addEventListener("click", () => setLang("en"));
if (ruBtn) ruBtn.addEventListener("click", () => setLang("ru"));
if (esBtn) esBtn.addEventListener("click", () => setLang("es"));

function setLang(lang) {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach(function (el) {
    const text = el.getAttribute("data-" + lang);
    if (text) {
      el.innerHTML = text;
    }
  });
  
  // ====== Update the <html lang> attribute ======
  document.documentElement.lang = lang;

  // === Save selected language ===
  localStorage.setItem("lang", lang);
}

// === Restore saved language when page reloads ===
const savedLang = localStorage.getItem("lang");
if (savedLang) {
  setLang(savedLang);
}