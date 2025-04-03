// Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles.js
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#9333ea", "#06b6d4"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#a0aec0",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  window.toggleMenu = function() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  };

  // Tabs functionality
  // Tabs functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      
      // Add active class to clicked button and corresponding pane
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      
      // Find the tab pane with the matching id
      const tabPane = document.querySelector(`.tab-pane#${tabId}`);
      if (tabPane) {
        tabPane.classList.add('active');
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // In a real implementation, you would send this data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert('Thanks for your message! I will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Add scroll reveal animations
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
  });

  // Add CSS for the animations
  const style = document.createElement('style');
  style.textContent = `
    .section-hidden {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .reveal {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Add hover effects to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.project-overlay').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.project-overlay').style.opacity = '0';
    });
  });

  // Add typing effect to hero section
  const title = document.querySelector('.title');
  const originalText = title.textContent;
  title.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length) {
      title.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  setTimeout(typeWriter, 500);
});
