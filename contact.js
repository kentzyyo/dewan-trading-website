// Function to toggle the visibility of the location details
function toggleImages() {
    const plantsContainer = document.querySelector('.locations-grid');
    const plantDisplays = document.querySelectorAll('.plant-display');
    const arrow = document.querySelector('.location-icon');
    
    // Toggle arrow rotation
    arrow.classList.toggle('rotate');
    
    // Check if the container is visible
    const isVisible = plantsContainer.style.maxHeight !== '0px';
    
    if (isVisible) {
        // First remove show class from all plant displays with a slight delay
        plantDisplays.forEach(display => {
            display.classList.remove('show');
        });
        
        // Then hide the container after animations complete
        setTimeout(() => {
            plantsContainer.style.maxHeight = '0px';
            plantsContainer.style.opacity = '0';
            plantsContainer.style.overflow = 'hidden';
        }, 500);
    } else {
        // Show the container first
        plantsContainer.style.maxHeight = '1500px'; // Increased to accommodate animations
        plantsContainer.style.opacity = '1';
        plantsContainer.style.overflow = 'visible';
        
        // Then show each plant display one by one with a delay
        plantDisplays.forEach((display, index) => {
            setTimeout(() => {
                display.classList.add('show');
            }, 300 + (index * 200)); // Reduced delay between each one
        });
    }
}

// Add smooth transition when hovering on plant images
function setupImageHoverEffects() {
    const plantImages = document.querySelectorAll('.plant-image');
    
    plantImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            if (image.parentElement.classList.contains('show')) {
                image.style.transform = 'scale(1.05)';
                image.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
            }
        });
        
        image.addEventListener('mouseout', function() {
            if (image.parentElement.classList.contains('show')) {
                image.style.transform = 'scale(1)';
                image.style.boxShadow = 'none';
            }
        });
    });
}

// Initialize with hidden content and setup animations
document.addEventListener('DOMContentLoaded', function() {
    const plantsContainer = document.querySelector('.locations-grid');
    
    // Set initial state - hidden
    plantsContainer.style.maxHeight = '0px';
    plantsContainer.style.opacity = '0';
    plantsContainer.style.overflow = 'hidden';
    plantsContainer.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
    
    // Setup hover effects
    setupImageHoverEffects();
    
    // Add scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navbar.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            navbar.classList.remove('menu-open');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navLinks.classList.remove('active');
            navbar.classList.remove('menu-open');
        }
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation and submission
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
}); 