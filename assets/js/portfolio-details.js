
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
  var slider = document.querySelector(".portfolio-details-slider .swiper-wrapper");
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
  githubLinkElement.addEventListener("click", function (event) {
    window.open(githubLink, "_blank");
  });

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
    descripcion: "Aplicación móvil realizada con Flutter que se especializa en la identificación y análisis de señales de tráfico, brindando a los usuarios una herramienta eficaz para comprender y gestionar la información vial de manera práctica y sencilla.",
    imagenes: ["assets/img/portfolio/singnalScan3.png", "assets/img/portfolio/singnalScan3.png", "assets/img/portfolio/singnalScan3.png"],
    githubLink: "https://github.com/tuusuario/signal-scan",
  },
  pokemon: {
    titulo: "Proyecto 2",
    descripcion: "Descripción del segundo proyecto.",
    imagenes: ["assets/img/portfolio/signalScan3.jpg", "assets/img/portfolio/project2-image2.jpg", "assets/img/portfolio/project2-image3.jpg"],
    githubLink: "https://github.com/tuusuario/proyecto2",
  },
  // Agregar más proyectos según sea necesario
};

// Obtén el parámetro "proyecto" de la URL
const proyectoSeleccionado = obtenerParametroURL("proyecto");

// Lógica para seleccionar y mostrar el proyecto correspondiente
if (proyectoSeleccionado && proyectos[proyectoSeleccionado]) {
  const proyecto = proyectos[proyectoSeleccionado];
  mostrarDetalles(proyecto.titulo, proyecto.descripcion, proyecto.imagenes, proyecto.githubLink);
} else {
  // Manejar el caso cuando no se proporciona un proyecto válido
  console.error("Proyecto no válido.");
}