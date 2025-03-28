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
            }, 300 + (index * 500)); // 0.5 second delay between each one
        });
    }
}

// Add smooth transition when hovering on plant images
function setupImageHoverEffects() {
    const plantImages = document.querySelectorAll('.plant-image');
    
    plantImages.forEach(image => {
        // Add initial transition class to ensure smooth hover effect
        image.addEventListener('mouseover', function() {
            if (image.parentElement.classList.contains('show')) {
                image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            }
        });
        
        // Reset transform on reverse ordered images
        image.addEventListener('mouseout', function() {
            setTimeout(() => {
                if (image.parentElement.classList.contains('reverse') && 
                    image.parentElement.classList.contains('show')) {
                    image.style.transform = 'translateX(0)';
                } else if (image.parentElement.classList.contains('show')) {
                    image.style.transform = 'translateX(0)';
                }
            }, 50);
        });
    });
}

// Initialize with hidden content
document.addEventListener('DOMContentLoaded', function() {
    const plantsContainer = document.querySelector('.locations-grid');
    
    // Set initial state - hidden
    plantsContainer.style.maxHeight = '0px';
    plantsContainer.style.opacity = '0';
    plantsContainer.style.overflow = 'hidden';
    plantsContainer.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
    
    // Setup hover effects
    setupImageHoverEffects();
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navLinks.classList.remove('active');
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
                behavior: 'smooth'
            });
        }
    });
}); 