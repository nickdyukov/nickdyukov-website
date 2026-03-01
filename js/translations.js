// ====== Translations ======
const translations = {
  en: {
    theme_toggle: "Theme toggle",
    lang_btn: "Languages",

    title: "Nikita Dyukov",
    intro_primary: "Fan of clean eating, sports and ice baths.",
    intro_secondary: "Learning English, HTML, CSS, JavaScript.",

    about_heading: "About me:",
    about_birth: "I was born on May 6, 2011, in <a href='https://en.wikipedia.org/wiki/Yekaterinburg' target='_blank' rel='noopener noreferrer' title='Yekaterinburg city on Wikipedia'>Yekaterinburg</a>, Russia.",
    about_focus: "Main focus in life: Self-development and Freedom.",
    about_diet: "I avoid red meat, alcohol, nicotine, and other drugs, <a href='https://en.wikipedia.org/wiki/Gluten' target='_blank' rel='noopener noreferrer' title='Information about gluten on Wikipedia'>gluten</a>, sugar, sweet fruits, seed oils, and caffeine. I follow a low-carbohydrate diet and prefer eating twice a day within a 6-hour window (18/6).",

    contact_methods_heading: "Contact Methods:",
    social_media_heading: "Social media:",

    footer_copyright: "© 2026 NickDyukov. All rights reserved.",

    error_message: "The page you’re looking for doesn’t exist or has been moved.",
    error_home_link: "Go back home"
  },
  ru: {
    theme_toggle: "Тема",
    lang_btn: "Языки",

    title: "Никита Дюков",
    intro_primary: "Поклонник чистого питания, спорта и ледяных ванн.",
    intro_secondary: "Учу английский, HTML, CSS, JavaScript.",

    about_heading: "Обо мне:",
    about_birth: "Я родился 6 мая 2011 года в <a href='https://ru.wikipedia.org/wiki/Екатеринбург' target='_blank' rel='noopener noreferrer' title='Город Екатеринбург на Википедии'>Екатеринбурге</a>, Россия.",
    about_focus: "Главное в жизни: Саморазвитие и Свобода.",
    about_diet: "Я избегаю красного мяса, алкоголя, никотина и других наркотиков, <a href='https://ru.wikipedia.org/wiki/Клейковина' target='_blank' rel='noopener noreferrer' title='Информация о глютене на Википедии'>глютена</a>, сахара, сладких фруктов, растительных масел и кофеина. Я придерживаюсь низкоуглеводной диеты и предпочитаю есть два раза в день в течение 6 часов (18/6).",

    contact_methods_heading: "Контакты:",
    social_media_heading: "Социальные сети:",

    footer_copyright: "© 2026 NickDyukov. Все права защищены.",

    error_message: "Страница не найдена или была перемещена.",
    error_home_link: "Вернуться на главную"
  },
  es: {
    theme_toggle: "Tema",
    lang_btn: "Idiomas",

    title: "Nikita Dyukov",
    intro_primary: "Apasionado de la alimentación saludable, el deporte y los baños de hielo.",
    intro_secondary: "Aprendiendo inglés, HTML, CSS, JavaScript.",

    about_heading: "Sobre mí:",
    about_birth: "Nací el 6 de mayo de 2011 en <a href='https://es.wikipedia.org/wiki/Ekaterimburgo' target='_blank' rel='noopener noreferrer' title='Ciudad de Ekaterimburgo en Wikipedia'>Ekaterimburgo</a>, Rusia.",
    about_focus: "Enfoque principal en la vida: Desarrollo personal y Libertad",
    about_diet: "Evito la carne roja, alcohol, nicotina y otras drogas, <a href='https://es.wikipedia.org/wiki/Gluten' target='_blank' rel='noopener noreferrer' title='Información sobre el gluten en Wikipedia'>gluten</a>, azúcar, frutas dulces, aceites vegetales y cafeína. Sigo una dieta baja en carbohidratos y prefiero comer dos veces al día dentro de una ventana de 6 horas (18/6).",

    contact_methods_heading: "Métodos de contacto:",
    social_media_heading: "Redes sociales:",

    footer_copyright: "© 2026 NickDyukov. Todos los derechos reservados.",

    error_message: "La página que buscas no existe o ha sido movida.",
    error_home_link: "Volver al inicio"
  }
};

// === Detect user language ===
let lang = localStorage.lang || navigator.language.slice(0, 2);

// If the detected language is not supported, default to English
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