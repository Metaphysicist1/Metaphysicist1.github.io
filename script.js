// Navigation menu behavior for mobile
document.addEventListener("DOMContentLoaded", function () {
  // Add mobile menu toggle functionality
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector("nav").appendChild(menuToggle);

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.querySelector("i").classList.toggle("fa-bars");
    menuToggle.querySelector("i").classList.toggle("fa-times");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuToggle.querySelector("i").classList.add("fa-bars");
      menuToggle.querySelector("i").classList.remove("fa-times");
      document.body.classList.remove("menu-open");
    });
  });

  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Get the height of the fixed navbar
        const navHeight = document.querySelector("nav").offsetHeight;

        window.scrollTo({
          top: targetElement.offsetTop - navHeight,
          behavior: "smooth",
        });
      }
    });
  });

  // Add sticky navigation on scroll
  const nav = document.querySelector("nav");
  let scrollPos = window.scrollY;

  function checkScrollPos() {
    scrollPos = window.scrollY;

    if (scrollPos > 100) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", checkScrollPos);
  checkScrollPos(); // Check on initial load

  // Scroll to top button
  const scrollTopBtn = document.querySelector(".scroll-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Add animation to timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");

  function animateOnScroll(elements, className = "visible", threshold = 100) {
    elements.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - threshold) {
        item.classList.add(className);
      }
    });
  }

  window.addEventListener("scroll", function () {
    animateOnScroll(timelineItems);
  });
  animateOnScroll(timelineItems); // Check on initial load

  // Form validation and submission
  const contactForm = document.querySelector(".contact-form form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      let isValid = true;

      if (nameInput.value.trim() === "") {
        markInvalid(nameInput, "Please enter your name");
        isValid = false;
      } else {
        markValid(nameInput);
      }

      if (emailInput.value.trim() === "") {
        markInvalid(emailInput, "Please enter your email");
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        markInvalid(emailInput, "Please enter a valid email");
        isValid = false;
      } else {
        markValid(emailInput);
      }

      if (messageInput.value.trim() === "") {
        markInvalid(messageInput, "Please enter your message");
        isValid = false;
      } else {
        markValid(messageInput);
      }

      if (isValid) {
        // Submit the form - for Formspree, the form will submit automatically
        // Simulate form submission feedback
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.innerHTML =
          '<i class="fas fa-circle-notch fa-spin"></i> Sending...';

        // This is just for visual feedback in the demo
        // In a real implementation, this would be replaced with actual form submission
        setTimeout(() => {
          submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          contactForm.reset();

          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }, 3000);
        }, 1500);
      }
    });
  }

  function markInvalid(input, message) {
    input.classList.add("invalid");

    const existingError = input.parentNode.querySelector(".error-message");
    if (!existingError) {
      const errorMessage = document.createElement("div");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = message;
      input.parentNode.appendChild(errorMessage);
    } else {
      existingError.textContent = message;
    }
  }

  function markValid(input) {
    input.classList.remove("invalid");

    const existingError = input.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Add skill progress animation
  const skillCategories = document.querySelectorAll(".skill-category");
  const skillLevels = document.querySelectorAll(".skill-level");

  function animateSkills() {
    skillCategories.forEach((category) => {
      const categoryTop = category.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (categoryTop < windowHeight - 100) {
        category.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", animateSkills);

  // Delay the initial animation slightly for better effect
  setTimeout(() => {
    animateSkills();
  }, 300);

  // Project filtering functionality
  const projectFilters = document.querySelectorAll(".project-filter");
  const projectCards = document.querySelectorAll(".project-card");

  projectFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from all filters
      projectFilters.forEach((f) => f.classList.remove("active"));

      // Add active class to clicked filter
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Filter projects
      projectCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95) translateY(8px)";

        setTimeout(() => {
          if (
            filterValue === "all" ||
            card.getAttribute("data-category") === filterValue
          ) {
            card.style.display = "flex";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1) translateY(0)";
            }, 50);
          } else {
            card.style.display = "none";
          }
        }, 300);
      });
    });
  });

  // Add CSS class to style for visible elements
  // Add this CSS in your styles.css
  document.head.insertAdjacentHTML(
    "beforeend",
    `
        <style>
            .timeline-item {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .timeline-item.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .timeline-item:nth-child(2) {
                transition-delay: 0.2s;
            }
            
            .timeline-item:nth-child(3) {
                transition-delay: 0.4s;
            }
            
            .skill-category {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .skill-category.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            .skill-category:nth-child(2) {
                transition-delay: 0.15s;
            }
            
            .skill-category:nth-child(3) {
                transition-delay: 0.3s;
            }
            
            .skill-category:nth-child(4) {
                transition-delay: 0.45s;
            }
            
            .skill-level {
                width: 0 !important;
            }
            
            .skill-category.animate .skill-level {
                width: var(--width) !important;
            }
            
            .project-card {
                transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.3s ease;
            }
            
            body.menu-open {
                overflow: hidden;
            }
            
            .menu-toggle {
                display: none;
                cursor: pointer;
                font-size: 1.5rem;
            }
            
            @media (max-width: 768px) {
                .menu-toggle {
                    display: block;
                }
            }
            
            nav.sticky {
                background-color: rgba(0, 0, 0, 0.95);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            
            .form-group input.invalid,
            .form-group textarea.invalid {
                border-color: var(--danger-color);
            }
            
            .error-message {
                color: var(--danger-color);
                font-size: 0.9rem;
                margin-top: 5px;
            }
        </style>
    `
  );

  // Set initial width values for skill levels for animation
  document.querySelectorAll(".skill-level").forEach((level) => {
    const width = level.style.width;
    level.style.setProperty("--width", width);
    level.style.width = "0";
  });

  // ----- Typewriting effect for hero section -----

  const heroTitle = document.querySelector(".hero h1");
  const heroSubtitle = document.querySelector(".hero h2");

  // Apply a subtle animation to the hero elements
  setTimeout(() => {
    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0)";

    setTimeout(() => {
      heroSubtitle.style.opacity = "1";
      heroSubtitle.style.transform = "translateY(0)";

      setTimeout(() => {
        document.querySelector(".hero-subtitle").style.opacity = "1";
        document.querySelector(".hero-subtitle").style.transform =
          "translateY(0)";

        setTimeout(() => {
          document.querySelector(".cta-buttons").style.opacity = "1";
          document.querySelector(".cta-buttons").style.transform =
            "translateY(0)";
        }, 200);
      }, 200);
    }, 300);
  }, 500);

  // ----- Add parallax effect to the header -----

  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < window.innerHeight) {
      header.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    }
  });
});
