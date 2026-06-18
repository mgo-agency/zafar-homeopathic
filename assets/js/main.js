/**
* Template Name: Clinic
* Template URL: https://bootstrapmade.com/clinic-bootstrap-template/
* Updated: Jul 23 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();

// ============================================
// WHATSAPP WIDGET - CLEAN IMPLEMENTATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the WhatsApp button and popup
    const waButton = document.querySelector('.whatsapp-button');
    const popup = document.getElementById('whatsapp-popup');
    const closeBtn = document.getElementById('close-popup');
    const sendBtn = document.getElementById('send-wa-btn');
    
    // Only proceed if elements exist
    if (!waButton || !popup) {
        console.error('WhatsApp elements not found!');
        return;
    }
    
    // Remove any existing click handlers by replacing the element
    const newButton = waButton.cloneNode(true);
    waButton.parentNode.replaceChild(newButton, waButton);
    
    // WhatsApp button click - Toggle popup
    newButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevents #! from being added
        e.stopPropagation(); // Stops event bubbling
        popup.classList.toggle('active');
    });
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            popup.classList.remove('active');
        });
    }
    
    // Click outside to close
    document.addEventListener('click', function(e) {
        const widget = document.querySelector('.whatsapp-widget');
        if (widget && !widget.contains(e.target)) {
            popup.classList.remove('active');
        }
    });
    
    // Send WhatsApp message
    if (sendBtn) {
        sendBtn.addEventListener('click', function() {
            const phoneNumber = '923014724245'; // Replace with your number
            const message = 'Hello! I need assistance with...';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            popup.classList.remove('active');
        });
    }
});