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
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuToggle.querySelector("i").classList.add("fa-bars");
      menuToggle.querySelector("i").classList.remove("fa-times");
    });
  });

  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Add sticky navigation on scroll
  const nav = document.querySelector("nav");
  let scrollPos = window.scrollY;

  window.addEventListener("scroll", function () {
    scrollPos = window.scrollY;

    if (scrollPos > 100) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });

  // Add animation to timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");

  function checkScroll() {
    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 100) {
        item.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check on page load

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
        // Simulate form submission (replace with actual form submission logic)
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        setTimeout(() => {
          contactForm.reset();
          submitButton.textContent = "Message Sent!";

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
  animateSkills(); // Check on page load

  // Add CSS class to style for visible elements
  // Add this CSS in your styles.css
  document.head.insertAdjacentHTML(
    "beforeend",
    `
        <style>
            .timeline-item {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .timeline-item.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .timeline-item:nth-child(even) {
                transition-delay: 0.2s;
            }
            
            .skill-category {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.4s ease, transform 0.4s ease;
            }
            
            .skill-category.animate {
                opacity: 1;
                transform: translateY(0);
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
});
