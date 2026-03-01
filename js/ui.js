// ====== Theme Management ======
// === Restore saved theme or default to dark ===
const savedTheme = localStorage.getItem("theme") || "dark";

document.body.classList.toggle("dark", savedTheme === "dark");
document.body.classList.toggle("light", savedTheme === "light");

// === Theme toggle button ===
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) { 
  themeToggle.addEventListener("click", () => {
    // === Toggle between dark and light themes ===
    const isDark = document.body.classList.toggle("dark");
    document.body.classList.toggle("light", !isDark);

    // Save the selected theme in localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }); 
}

// ====== Language menu ======
const languageBtn = document.querySelector(".lang-btn");
const languageMenu = document.querySelector(".lang-switch");

// === Toggle menu open/close when language button is clicked ===
if (languageBtn && languageMenu) {
  languageBtn.addEventListener("click", () => {
    languageMenu.classList.toggle("open");
  });

  // === Close the language menu when clicking outside of it ===
  document.addEventListener("click", (event) => {
    if (!languageBtn.contains(event.target) && !languageMenu.contains(event.target)) {
      languageMenu.classList.remove("open");
    }
  });
}