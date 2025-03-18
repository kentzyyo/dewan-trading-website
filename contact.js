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