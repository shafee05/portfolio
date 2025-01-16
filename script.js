// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP animations
    gsap.from('.hero-content', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.5
    });

    // ScrollTrigger animations for sections
    gsap.utils.toArray('.section-title').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Animate the education card when it comes into view
    gsap.from('.edu-card', {
        scrollTrigger: {
            trigger: '.edu-card',
            start: 'top 90%',
            toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out'
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor click behavior

            const targetId = this.getAttribute('href'); // Get the target section's ID from the href attribute
            const targetSection = document.querySelector(targetId); // Select the target section

            // Scroll to the target section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Align the top of the section with the top of the viewport
                });
            }
        });
    });

    // Load particles.js configuration
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('Particles.js loaded successfully.');
    }, function () {
        console.error('Failed to load particles.json.');
    });
});