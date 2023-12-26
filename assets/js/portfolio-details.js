function obtenerParametroURL(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

// Función para mostrar detalles del proyecto
function mostrarDetalles(titulo, descripcion, imagenes, githubLink) {
  // Actualiza el contenido de los elementos con los datos del proyecto
  document.getElementById("portfolio-title").innerText = titulo;
  document.getElementById("portfolio-description").innerText = descripcion;

  // Limpia las imágenes existentes en el slider
  var slider = document.querySelector(
    ".portfolio-details-slider .swiper-wrapper"
  );
  slider.innerHTML = "";

  // Agrega las nuevas imágenes al slider
  imagenes.forEach(function (imagen) {
    var slide = document.createElement("div");
    slide.className = "swiper-slide";
    var img = document.createElement("img");
    img.src = imagen;
    slide.appendChild(img);
    slider.appendChild(slide);
  });

  // Actualiza el enlace "Ver en GitHub" con la URL proporcionada
  var githubLinkElement = document.getElementById("github-link");
  githubLinkElement.href = githubLink;
  githubLinkElement.textContent = "Ver en GitHub   "; // Cambiado el texto del enlace

  // Aplica las clases de estilo al enlace "Ver en GitHub"
  githubLinkElement.classList.add("download-button"); // Agregado el estilo

  // Añade el icono de GitHub al final del enlace
  var githubIcon = document.createElement("i");
  githubIcon.className = "bi bi-github"; // Clases de Bootstrap para el icono de GitHub
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

// Estructura de datos para almacenar información de proyectos
const proyectos = {
  signalScan: {
    titulo: "SignalScan",
    descripcion:
      "Aplicación móvil realizada con Flutter que se especializa en la identificación y análisis de señales de tráfico, brindando a los usuarios una herramienta eficaz para comprender y gestionar la información vial de manera práctica y sencilla. Proyecto realizado en colaboración con Laura Fernández.",
    imagenes: [
      "assets/img/portfolio/signalScan1.png",
      "assets/img/portfolio/signalScan2.png",
      "assets/img/portfolio/signalScan3.png",
    ],
    githubLink: "https://github.com/gvraul8/signalscan",
  },
  IPOkemon: {
    titulo: "IPOkemon",
    descripcion: "Aplicación de escritorio con Visual Studio Code utilizando UWP y C# para crear una simulación del juego Pokemón, en el cuál se ha implementado una pokédex y  un sistema de combate. Proyecto realizado en colaboración con Pablo Porrero y Joaquín Sierra.",
    imagenes: [
      "assets/img/portfolio/IPOkemon.png",
      "assets/img/portfolio/IPOkemon1.png",
      "assets/img/portfolio/IPOkemon2.png",
    ],
    githubLink: "https://github.com/tuusuario/proyecto2",
  },
  pokemon: {
    titulo: "Pokemon Wartortle",
    descripcion: "Aplicación de escritorio con Visual Studio Code utilizando UWP para crear un Pokémon, en este caso, Wartortle, en la cuál se han representado algunas animaciones de ataque, defensa o curaciones para una experiencia más dinámica y atractiva.",
    imagenes: [
      "assets/img/portfolio/wartortle1.png",
      "assets/img/portfolio/wartortle2.png",
      "assets/img/portfolio/wartortle3.png",
    ],
    githubLink: "https://github.com/gvraul8/PokemonWartortle",
  },
  gsiFinanzas: {
    titulo: "GSI Finanzas",
    descripcion: "Aplicación de escritorio con Visual Studio Code utilizando UWP para crear un Pokémon, en este caso, Wartortle, en la cuál se han representado algunas animaciones de ataque, defensa o curaciones para una experiencia más dinámica y atractiva.",
    imagenes: [
      "assets/img/portfolio/gsi_finanzas1.png",
      "assets/img/portfolio/gsi_finanzas2.png",
      "assets/img/portfolio/gsi_finanzas3.png",
    ],
    githubLink: "https://github.com/gvraul8/gsi_finanzas",
  },
  ESItravel: {
    titulo: "ESI Travel",
    descripcion: "Aplicación web realizada con HTML y CSS para el front-end y Python para el back-end, en la cuál se ha implementado un sistema de registro y login para los usuarios, así como un sistema de reservas de vuelos y hoteles, obteniendo los datos de dos APIs. Proyecto realizado en colaboración con Pedro Campos y Raúl Calzado.",
    imagenes: [
      "assets/img/portfolio/ESItravel.png",
      "assets/img/portfolio/ESItravel2.png",
      "assets/img/portfolio/ESItravel3.png",
    ],
    githubLink: "https://github.com/pedroocampos/isi-ESI-Travel.git",
  },
};

// Obtén el parámetro "proyecto" de la URL
const proyectoSeleccionado = obtenerParametroURL("proyecto");

// Lógica para seleccionar y mostrar el proyecto correspondiente
if (proyectoSeleccionado && proyectos[proyectoSeleccionado]) {
  const proyecto = proyectos[proyectoSeleccionado];
  mostrarDetalles(
    proyecto.titulo,
    proyecto.descripcion,
    proyecto.imagenes,
    proyecto.githubLink
  );
} else {
  // Manejar el caso cuando no se proporciona un proyecto válido
  console.error("Proyecto no válido.");
}
