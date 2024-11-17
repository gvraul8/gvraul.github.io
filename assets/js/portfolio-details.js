function obtenerIdioma() {
  return localStorage.getItem("language") || "es";
}

function obtenerParametroURL(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

function mostrarDetalles(tituloKey, imagenes, githubLink) {
  const idioma = obtenerIdioma();
  const t = traducciones[idioma];

  const titulo = t.proyectos[tituloKey].titulo;
  const descripcion = t.proyectos[tituloKey].descripcion;

  document.getElementById("portfolio-title").innerText = titulo;
  document.getElementById("portfolio-description").innerText = descripcion;

  const slider = document.querySelector(".portfolio-details-slider .swiper-wrapper");
  slider.innerHTML = "";

  imagenes.forEach(function (imagen) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    const img = document.createElement("img");
    img.src = imagen;
    slide.appendChild(img);
    slider.appendChild(slide);
  });

  const githubLinkElement = document.getElementById("github-link");
  githubLinkElement.href = githubLink;
  githubLinkElement.textContent = t.githubLink;

  const githubIcon = document.createElement("i");
  githubIcon.className = "bi bi-github";
  githubLinkElement.appendChild(githubIcon);

  // Inicializa el slider
  new Swiper(".portfolio-details-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const proyectos = {
  signalScan: {
    imagenes: [
      "assets/img/portfolio/signalScan1.png",
      "assets/img/portfolio/signalScan2.png",
      "assets/img/portfolio/signalScan3.png",
    ],
    githubLink: "https://github.com/gvraul8/signalscan",
  },
  IPOkemon: {
    imagenes: [
      "assets/img/portfolio/IPOkemon.png",
      "assets/img/portfolio/IPOkemon1.png",
      "assets/img/portfolio/IPOkemon2.png",
    ],
    githubLink: "https://github.com/gvraul8/IPOkemon_grupal",
  },
  pokemon: {
    imagenes: [
      "assets/img/portfolio/wartortle1.png",
      "assets/img/portfolio/wartortle2.png",
      "assets/img/portfolio/wartortle3.png",
    ],
    githubLink: "https://github.com/gvraul8/PokemonWartortle",
  },
  gsiFinanzas: {
    imagenes: [
      "assets/img/portfolio/gsi_finanzas1.png",
      "assets/img/portfolio/gsi_finanzas2.png",
      "assets/img/portfolio/gsi_finanzas3.png",
    ],
    githubLink: "https://github.com/gvraul8/gsi_finanzas",
  },
  ESItravel: {
    imagenes: [
      "assets/img/portfolio/ESITravel.png",
      "assets/img/portfolio/ESITravel2.png",
      "assets/img/portfolio/ESITravel3.png",
    ],
    githubLink: "https://github.com/pedroocampos/isi-ESI-Travel.git",
  },
};

const traducciones = {
  es: {
    githubLink: "Ver en GitHub",
    proyectos: {
      signalScan: {
        titulo: "SignalScan",
        descripcion: "Aplicación móvil realizada con Flutter para análisis de señales de tráfico.",
      },
      IPOkemon: {
        titulo: "IPOkemon",
        descripcion: "Aplicación de escritorio simulando un juego de Pokémon con pokédex y combates.",
      },
      pokemon: {
        titulo: "Pokemon Wartortle",
        descripcion: "Aplicación de escritorio con animaciones dinámicas para Wartortle.",
      },
      gsiFinanzas: {
        titulo: "GSI Finanzas",
        descripcion: "Aplicación móvil para la gestión financiera personal.",
      },
      ESItravel: {
        titulo: "ESI Travel",
        descripcion: "Aplicación web para reservas de vuelos y hoteles con sistema de login.",
      },
    },
  },
  en: {
    githubLink: "View on GitHub",
    proyectos: {
      signalScan: {
        titulo: "SignalScan",
        descripcion: "Mobile app built with Flutter for traffic signal analysis.",
      },
      IPOkemon: {
        titulo: "IPOkemon",
        descripcion: "Desktop app simulating a Pokémon game with pokédex and battles.",
      },
      pokemon: {
        titulo: "Pokemon Wartortle",
        descripcion: "Desktop app with dynamic animations for Wartortle.",
      },
      gsiFinanzas: {
        titulo: "GSI Finanzas",
        descripcion: "Mobile app for personal financial management.",
      },
      ESItravel: {
        titulo: "ESI Travel",
        descripcion: "Web app for booking flights and hotels with a login system.",
      },
    },
  },
};

const proyectoSeleccionado = obtenerParametroURL("proyecto");

if (proyectoSeleccionado && proyectos[proyectoSeleccionado]) {
  const proyecto = proyectos[proyectoSeleccionado];
  mostrarDetalles(
    proyectoSeleccionado,
    proyecto.imagenes,
    proyecto.githubLink
  );
}
