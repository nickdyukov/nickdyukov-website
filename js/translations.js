// ====== Translations ======
const translations = {
  en: {
    theme_toggle: "Theme toggle",
    lang_menu_btn: "Languages",

    title: "Nick Dyukov",
    intro_primary: "Fan of eating naturally and natural activity",
    intro_secondary: "I’m learning languages (English, Spanish), Linux, Python, C, and penetration testing.",

    about_heading: "About me:",
    about_birth: "I was born on May 6, 2011, in <a href='https://en.wikipedia.org/wiki/Yekaterinburg' target='_blank' rel='noopener noreferrer' title='Yekaterinburg city on Wikipedia'>Yekaterinburg</a>, Russia.",
    about_focus: "Main focus in life: Live naturally and Freedom.",
    about_diet: "I eat only raw foods (meat, fish, eggs, milk, fruits, and honey) and I believe this is natural and good. Also I'm against workouts and modern \"healthy\" diets because I tried them myself and they only exhausted me.",
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
    intro_primary: "Фанат натуральной еды и натуральной активности",
    intro_secondary: "Я изучаю языки (английский, испанский), Linux, Python, C и пентест.",

    about_heading: "Обо мне:",
    about_birth: "Я родился 6 мая 2011 года в <a href='https://ru.wikipedia.org/wiki/Екатеринбург' target='_blank' rel='noopener noreferrer' title='Город Екатеринбург на Википедии'>Екатеринбурге</a>, Россия.",
    about_focus: "Главное в жизни: Жить натурально и Свобода.",
    about_diet: "Я ем только сырые продукты (мясо, рыбу, яйца, молоко, фрукты, и мёд) и я верю, что это натурально и правильно. Также я против тренировок и современных \"полезных\" диет, потому что я сам их пробовал, и они только истощили меня.",

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
    intro_primary: "Fan de la alimentación natural y la actividad natural.",
    intro_secondary: "Estoy aprendiendo idiomas (inglés, español), Linux, Python, C y penetration testing.",

    about_heading: "Sobre mí:",
    about_birth: "Nací el 6 de mayo de 2011 en <a href='https://es.wikipedia.org/wiki/Ekaterimburgo' target='_blank' rel='noopener noreferrer' title='Ciudad de Ekaterimburgo en Wikipedia'>Ekaterimburgo</a>, Rusia.",
    about_focus: "Enfoque principal en la vida: Vivir de forma natural y Libertad.",
    about_diet: "Ahora como solo alimentos crudos (carne, pescado, huevos, leche, frutas y miel) y creo que esto es natural y bueno. También estoy en contra de los entrenamientos y las dietas \"saludables\" modernas porque las probé yo mismo y solo me agotaron.",

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