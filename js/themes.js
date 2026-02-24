// ====== Theme switch ======
const themeToggle = document.querySelector(".theme-toggle");

// ====== Toggle theme ======
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
}

// ====== Restore saved theme or default to dark ======
const SavedTheme = localStorage.getItem("theme");

if (SavedTheme) {
  if (SavedTheme === "dark") {
    document.body.classList.add("dark");
  }
} else {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
}