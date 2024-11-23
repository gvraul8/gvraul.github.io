document.addEventListener("DOMContentLoaded", function () {
  let currentLang = localStorage.getItem("language") || "es";
  const languageButton = document.getElementById("language-dropdown");
  const downloadLink = document.getElementById("downloadCV");
  const languages = {
    es: { name: "ES", flag: "spain.png" },
    en: { name: "EN", flag: "United-kingdom.png" },
  };

  function updateLanguageButton(lang) {
    const selectedLang = languages[lang];
    languageButton.innerHTML = `<img src="assets/img/languages/${selectedLang.flag}" alt="${selectedLang.name}" class="flag-icon"> ${selectedLang.name}`;
    languageButton.setAttribute("data-lang", lang);
  }

  function updateDownloadLink(lang) {
    const selectedLang = languages[lang];
    downloadLink.href = `CV_RaulGonzalez_${selectedLang.name}.pdf`;
  }

  updateLanguageButton(currentLang);
  updateDownloadLink(currentLang);

  async function loadTranslations(lang) {
    try {
      const response = await fetch(`../assets/languages/${lang}.json`);
      const translations = await response.json();
      return translations;
    } catch (error) {
      console.error("Error loading translations:", error);
      return null;
    }
  }

  function applyTranslations(translations) {
    if (!translations) return;
    document.querySelector("[data-i18n='about']").textContent = translations.about;
    document.querySelector("[data-i18n='education']").textContent = translations.education;
    document.querySelector("[data-i18n='skills']").textContent = translations.skills;
    document.querySelector("[data-i18n='portfolio']").textContent = translations.portfolio;
    document.querySelector("[data-i18n='contact_ico']").textContent = translations.contact_ico;

    document.querySelector("[data-i18n='hero_title']").textContent = translations.hero_title;
    document.querySelector("[data-i18n='hero_description']").textContent = translations.hero_description;
    document.querySelector("[data-i18n='download_cv']").textContent = translations.download_cv;
    document.querySelector("[data-i18n='linkedin']").setAttribute("title", translations.linkedin);
    document.querySelector("[data-i18n='github']").setAttribute("title", translations.github);
    document.querySelector("[data-i18n='email']").setAttribute("title", translations.email);

    //// ---------- SOBRE MI ---------- 

    document.querySelector("[data-i18n='about_title']").textContent = translations.about_title;
    document.querySelector("[data-i18n='about_paragraph']").innerHTML = translations.about_paragraph;
    document.querySelector("[data-i18n='about_subtitle']").textContent = translations.about_subtitle;
    document.querySelector("[data-i18n='about_description']").textContent = translations.about_description;
    document.querySelector("[data-i18n='birthdate']").textContent = translations.birthdate;
    document.querySelector("[data-i18n='city']").textContent = translations.city;
    document.querySelector("[data-i18n='date']").textContent = translations.date;
    document.querySelector("[data-i18n='cityCR']").textContent = translations.cityCR;
    document.querySelector("[data-i18n='contact']").textContent = translations.contact;
    document.querySelector("[data-i18n='download_cv_2']").textContent = translations.download_cv;

    //// ---------- FORMACION ---------- 

    document.querySelector("[data-i18n='formation_title']").textContent = translations.formation_title;
    document.querySelector("[data-i18n='formation_description']").textContent = translations.formation_description;

    /// ----- ESTUDIOS
    document.querySelector("[data-i18n='formation']").textContent = translations.formation;
    document.querySelector("[data-i18n='degree_title']").textContent = translations.degree_title;
    document.querySelector("[data-i18n='degree_university']").textContent = translations.degree_university;
    document.querySelector("[data-i18n='degree_description']").innerHTML = translations.degree_description;
    document.querySelector("[data-i18n='highschool_title']").textContent = translations.highschool_title;
    document.querySelector("[data-i18n='highschool_modality']").textContent = translations.highschool_modality;

    /// ----- EXPERIENCIA LABORAL
    document.querySelector("[data-i18n='professional_experience']").textContent = translations.professional_experience;

    // GS
    document.querySelector("[data-i18n='software_developer']").textContent = translations.software_developer;
    document.querySelector("[data-i18n='date_gs_1']").textContent = translations.date_gs_1;
    document.querySelector("[data-i18n='task_1']").textContent = translations.task_1;
    document.querySelector("[data-i18n='task_2']").textContent = translations.task_2;
    document.querySelector("[data-i18n='task_3']").textContent = translations.task_3;

    // GS PRACTICAS
    document.querySelector("[data-i18n='full_stack_intern']").textContent = translations.full_stack_intern;
    document.querySelector("[data-i18n='program_description']").innerHTML = translations.program_description;
    document.querySelector("[data-i18n='backend_development']").textContent = translations.backend_development;
    document.querySelector("[data-i18n='frontend_development']").textContent = translations.frontend_development;
    document.querySelector("[data-i18n='tech_stack']").textContent = translations.tech_stack;

    // COLCHONES
    document.querySelector("[data-i18n='full_stack_intern_2']").textContent = translations.full_stack_intern_2;
    document.querySelector("[data-i18n='ecommerce_description']").innerHTML = translations.ecommerce_description;
    document.querySelector("[data-i18n='backend_php_java']").textContent = translations.backend_php_java;
    document.querySelector("[data-i18n='frontend_tech']").textContent = translations.frontend_tech;
    document.querySelector("[data-i18n='database_queries']").textContent = translations.database_queries;

    /// ----- CERTIFICADOS
    document.querySelector("[data-i18n='certificates_title']").textContent = translations.certificates_title;
    document.querySelector("[data-i18n='english_level']").textContent = translations.english_level;

    /// ----- VOLUNTARIADO
    document.querySelector("[data-i18n='volunteering_title']").textContent = translations.volunteering_title;
    document.querySelector("[data-i18n='afal_date']").textContent = translations.afal_date;
    document.querySelector("[data-i18n='afal_volunteering']").textContent = translations.afal_volunteering;
    document.querySelector("[data-i18n='volunteering_description']").innerHTML = translations.volunteering_description;

    //// ---------- HABILIDADES ---------- 
    document.querySelector("[data-i18n='skills_title']").textContent = translations.skills_title;
    document.querySelector("[data-i18n='skills_paragraph']").textContent = translations.skills_paragraph;

    //// ---------- APTITUDES
    document.querySelector("[data-i18n='aptitudes_title']").textContent = translations.aptitudes_title;
    document.querySelector("[data-i18n='teamwork']").textContent = translations.teamwork;
    document.querySelector("[data-i18n='learning']").textContent = translations.learning;
    document.querySelector("[data-i18n='organization']").textContent = translations.organization;
    document.querySelector("[data-i18n='leadership']").textContent = translations.leadership;
    document.querySelector("[data-i18n='initiative']").textContent = translations.initiative;
    document.querySelector("[data-i18n='proactivity']").textContent = translations.proactivity;
    document.querySelector("[data-i18n='adaptability']").textContent = translations.adaptability;
    document.querySelector("[data-i18n='communication']").textContent = translations.communication;

    //// ---------- CONOCIMIENTOS
    document.querySelector("[data-i18n='knowledge_title']").textContent = translations.knowledge_title;
    document.querySelector("[data-i18n='programming_languages']").textContent = translations.programming_languages;
    document.querySelector("[data-i18n='web_technologies']").textContent = translations.web_technologies;
    document.querySelector("[data-i18n='databases']").textContent = translations.databases;
    document.querySelector("[data-i18n='frameworks']").textContent = translations.frameworks;
    document.querySelector("[data-i18n='other_tools']").textContent = translations.other_tools;
    document.querySelector("[data-i18n='languages']").textContent = translations.languages;
    document.querySelector("[data-i18n='native_language']").textContent = translations.native_language;

    //// ---------- PORTFOLIO ---------- 

    document.querySelector("[data-i18n='portfolio_title']").textContent = translations.portfolio_title;
    document.querySelector("[data-i18n='portfolio_subtitle']").textContent = translations.portfolio_subtitle;
    document.querySelector("[data-i18n='all']").textContent = translations.all;
    document.querySelector("[data-i18n='web_development']").textContent = translations.web_development;
    document.querySelector("[data-i18n='mobile_app']").textContent = translations.mobile_app;
    document.querySelector("[data-i18n='mobile_app2']").textContent = translations.mobile_app;
    document.querySelector("[data-i18n='mobile_app3']").textContent = translations.mobile_app;
    document.querySelector("[data-i18n='desktop']").textContent = translations.desktop;
    document.querySelector("[data-i18n='desktop2']").textContent = translations.desktop;
    document.querySelector("[data-i18n='desktop3']").textContent = translations.desktop;

    //// ---------- CONTACT ---------- 

    document.querySelector("[data-i18n='contact_title']").textContent = translations.contact_title;
    document.querySelector("[data-i18n='contact_subtitle']").textContent = translations.contact_subtitle;
    document.querySelector("[data-i18n='location']").textContent = translations.location;
    document.querySelector("[data-i18n='CR_location']").textContent = translations.CR_location;
    document.querySelector("[data-i18n='email_contact']").textContent = translations.email_contact;

    //// ---------- FOOTER ---------- 

    document.querySelector("[data-i18n='footer']").textContent = translations.hero_title;
    document.querySelector("[data-i18n='linkedin2']").setAttribute("title", translations.linkedin);
    document.querySelector("[data-i18n='github2']").setAttribute("title", translations.github);
    document.querySelector("[data-i18n='email2']").setAttribute("title", translations.email);
  }

  function updateTypedContent(lang) {
    const typedSpan = document.querySelector(".typed");
    if (typedSpan) {
      const newText = lang === "es" 
                      ? typedSpan.getAttribute("data-lang-es") 
                      : typedSpan.getAttribute("data-lang-en");
      typedSpan.setAttribute("data-typed-items", newText);

      if (window.typedAnimation) {
        window.typedAnimation.destroy();
      }

      const typed_strings = newText.split(",");
      window.typedAnimation = new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }

  async function changeLanguage(lang) {
    const translations = await loadTranslations(lang);
    if (translations) {
      applyTranslations(translations);
      updateTypedContent(lang);
      updateLanguageButton(lang);
    }
  }

  changeLanguage(currentLang);

  document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", function (e) {
      const lang = e.target.getAttribute("data-lang");
      localStorage.setItem("language", lang);
      changeLanguage(lang);
      updateDownloadLink(lang);
    });
  });
});
