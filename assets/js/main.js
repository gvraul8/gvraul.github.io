/**
* Template Name: MyResume
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  const navbarlinks = document.querySelectorAll('#navbar .scrollto');

  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  
    let isContactSectionVisible = false;
  
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      const targetSection = document.querySelector(navbarlink.hash);
  
      if (!targetSection) return;
  
      const sectionTop = targetSection.offsetTop;
      const sectionBottom = sectionTop + targetSection.offsetHeight;
  
      if (position >= sectionTop && position <= sectionBottom) {
        navbarlinks.forEach(link => link.classList.remove('active'));
        navbarlink.classList.add('active');
  
        // Verificar si es la sección de contacto
        if (navbarlink.hash === '#contact') {
          isContactSectionVisible = true;
        }
      }
    });
  
    // Marcar la sección de contacto si estamos al final de la página y no se ha marcado otra sección
    if (!isContactSectionVisible && position + windowHeight >= documentHeight) {
      navbarlinks.forEach(link => link.classList.remove('active'));
      const contactLink = document.querySelector('#contact-link');
      if (contactLink) {
        contactLink.classList.add('active');
      }
    }
  };
  
  window.addEventListener('load', navbarlinksActive);
  window.addEventListener('scroll', navbarlinksActive);
  
  
  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Obtén la flecha ".arrow" y el botón "Back to Top"
    const arrow = document.querySelector('.arrow');
    const backToTopButton = document.querySelector('.back-to-top');
  
    // Oculta la flecha ".arrow" por defecto
    arrow.style.display = "none";
  
    // Evento para mostrar la flecha cuando se desplaza hacia abajo
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
        arrow.style.display = 'none';
      } else {
        backToTopButton.style.display = 'none';
        arrow.style.display = 'block';
      }
    });
  
    // Evento para ocultar la flecha al hacer clic en el botón "Back to Top"
    backToTopButton.addEventListener('click', function() {
      arrow.style.display = 'block';
    });
  });
  

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()