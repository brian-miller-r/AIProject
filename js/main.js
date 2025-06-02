// Main JavaScript for Brian Miller's Portfolio

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearElements = document.querySelectorAll('#current-year');
    currentYearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            document.body.classList.toggle('nav-open');
        });
    }

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.visibility = 'visible';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.visibility = 'hidden';
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Typing effect for the home page
    const typedTextSpan = document.getElementById('typing');
    if (typedTextSpan) {
        const textArray = ["a product leader", "a GTM strategist", "a data-driven operator", "customer obsessed", "a chief of staff"];
        let textArrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;
        let typeTimeout;

        function type() {
            const currentText = textArray[textArrayIndex];
            
            if (isDeleting) {
                typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typeTimeout = setTimeout(type, newTextDelay);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textArrayIndex = (textArrayIndex + 1) % textArray.length;
                typeTimeout = setTimeout(type, 500);
            } else {
                const delay = isDeleting ? erasingDelay : typingDelay;
                typeTimeout = setTimeout(type, delay);
            }
        }

        // Start the typing effect
        clearTimeout(typeTimeout);
        type();
    }

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for fade-in elements
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Initial check
    fadeInOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', fadeInOnScroll);
    
    // Add loaded class to body to enable transitions after page load
    document.body.classList.add('loaded');

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});
