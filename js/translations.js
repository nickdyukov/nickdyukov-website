// ====== Translations ======
const translations = {
  en: {
    theme_toggle: "Theme toggle",
    lang_menu_btn: "Languages",

    title: "Nick Dyukov",
    intro_primary: "Fan of clean eating, gym, activity, and ice baths.",
    intro_secondary: "Now I’m learning English, Spanish, Linux, Python, C, and ethical hacking.",

    about_heading: "About me:",
    about_birth: "I was born on May 6, 2011, in <a href='https://en.wikipedia.org/wiki/Yekaterinburg' target='_blank' rel='noopener noreferrer' title='Yekaterinburg city on Wikipedia'>Yekaterinburg</a>, Russia.",
    about_focus: "Main focus in life: Self-development and Freedom.",
    about_diet: "I avoid red meat, alcohol, nicotine, and other drugs, artificial sugar, and seed oils. I prefer eating twice a day within a 6-hour window (18/6).",

    contact_methods_heading: "Contact Methods:",
    social_media_heading: "Social Media:",

    footer_copyright: "© 2026 NickDyukov. All rights reserved.",

    error_message: "The page you’re looking for doesn’t exist or has been moved.",
    error_home_link: "Go back home"
  },
  ru: {
    theme_toggle: "Переключение Темы",
    lang_menu_btn: "Языки",

    title: "Ник Дюков",
    intro_primary: "Фанат чистого питания, спортзала, активности и ледяных ванн.",
    intro_secondary: "Сейчас я изучаю английский, испанский, Linux, Python, C и этичный хакинг.",

    about_heading: "Обо мне:",
    about_birth: "Я родился 6 мая 2011 года в <a href='https://ru.wikipedia.org/wiki/Екатеринбург' target='_blank' rel='noopener noreferrer' title='Город Екатеринбург на Википедии'>Екатеринбурге</a>, Россия.",
    about_focus: "Главное в жизни: Саморазвитие и Свобода.",
    about_diet: "Я избегаю красного мяса, алкоголя, никотина и других наркотиков, искусственного сахара и растительных масел. Я предпочитаю есть два раза в день в течение 6 часов (18/6).",

    contact_methods_heading: "Контакты:",
    social_media_heading: "Социальные Сети:",

    footer_copyright: "© 2026 NickDyukov. Все права защищены.",

    error_message: "Страница не найдена или была перемещена.",
    error_home_link: "Вернуться на главную"
  },
  es: {
    theme_toggle: "Cambiar Tema",
    lang_menu_btn: "Idiomas",

    title: "Nick Dyukov",
    intro_primary: "Fan de la alimentación limpia, el gimnasio, la actividad y los baños de hielo.",
    intro_secondary: "Ahora estoy aprendiendo English, Spanish, Linux, Python, C y hacking ético.",

    about_heading: "Sobre mí:",
    about_birth: "Nací el 6 de mayo de 2011 en <a href='https://es.wikipedia.org/wiki/Ekaterimburgo' target='_blank' rel='noopener noreferrer' title='Ciudad de Ekaterimburgo en Wikipedia'>Ekaterimburgo</a>, Rusia.",
    about_focus: "Enfoque principal en la vida: Desarrollo personal y Libertad.",
    about_diet: "Evito la carne roja, el alcohol, la nicotina y otras drogas, el azúcar artificial y los aceites vegetales. Prefiero comer dos veces al día dentro de una ventana de 6 horas (18/6).",

    contact_methods_heading: "Métodos de Contacto:",
    social_media_heading: "Redes Sociales:",

    footer_copyright: "© 2026 NickDyukov. Todos los derechos reservados.",

    error_message: "La página que buscas no existe o ha sido movida.",
    error_home_link: "Volver al inicio"
  }
};

// === Detect user language ===
let lang = localStorage.lang || navigator.language.slice(0, 2);

// === If the detected language is not supported, default to English ===
if (!translations[lang]) {
  lang = 'en';
}

// === Function to set language dynamically ===
function setLang(l) {
  // === Save selected language in localStorage ===
  localStorage.lang = l;

  // === Update <html lang=""> for accessibility and SEO ===
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[l] && translations[l][key]) {
      el.innerHTML = translations[l][key];
    }
  });
}

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.onclick = () => setLang(btn.dataset.lang);
});

setLang(lang);