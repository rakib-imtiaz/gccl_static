// Global variables
let scrollPosition = 0;

// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const loaderLogo = document.querySelector('.loading-logo');
const loaderText = document.querySelector('.loading-title');
const loaderBar = document.querySelector('.loading-bar');

// Animated loader
function initializeLoader() {
    // Check if elements exist
    if (!loadingScreen) {
        console.error('Loading screen element not found');
        return;
    }

    // Animate logo
    if (loaderLogo) {
        loaderLogo.style.animation = 'fadeIn 0.5s forwards, scaleUp 0.5s forwards';
    }

    // Animate text
    if (loaderText) {
        setTimeout(() => {
            loaderText.style.animation = 'fadeIn 0.5s forwards, slideUp 0.5s forwards';
        }, 300);
    }

    // Animate progress bar
    if (loaderBar) {
        setTimeout(() => {
            loaderBar.style.animation = 'fillBar 1.5s forwards';
        }, 500);
    }

    // Hide loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
}

// Parallax effects
function handleScroll() {
    scrollPosition = window.scrollY;

    // Hero section parallax
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const heroVideo = document.querySelector('.hero-video');
        const heroLogo = document.querySelector('.hero-logo');
        const heroTitle = document.querySelector('.hero-title');

        if (heroVideo) {
            heroVideo.style.transform = `scale(${1 + scrollPosition * 0.0003})`;
        }

        if (heroLogo) {
            heroLogo.style.transform = `translateY(${-scrollPosition * 0.1}px)`;
        }

        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
    }

    // Header transparency
    const header = document.querySelector('header');
    const socialBar = document.querySelector('.social-bar');

    if (header) {
        if (scrollPosition > 20) {
            header.classList.add('header-scrolled');
            if (socialBar) socialBar.classList.add('social-bar-scrolled');
        } else {
            header.classList.remove('header-scrolled');
            if (socialBar) socialBar.classList.remove('social-bar-scrolled');
        }
    }
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
}

// Initialize intersection observers for animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', () => {
    // Recalculate any dimension-dependent values here
});

// Handle video loading error
function handleVideoError() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        // Create a more comprehensive error handler
        const showFallback = () => {
            console.log('Video failed to load or play, showing fallback background');
            // Hide video
            if (heroVideo) heroVideo.style.opacity = '0';
            // Make sure the fallback background is visible
            const fallbackBg = document.querySelector('.bg-gradient-to-br');
            if (fallbackBg && fallbackBg.style) {
                fallbackBg.style.zIndex = '5';
                fallbackBg.style.opacity = '1';
            }
        };

        // Handle various video failure scenarios
        heroVideo.addEventListener('error', showFallback);
        
        // Check if the video is stalled or suspended
        heroVideo.addEventListener('stalled', showFallback);
        heroVideo.addEventListener('suspend', () => {
            // Only show fallback if suspended for too long
            setTimeout(() => {
                if (heroVideo.readyState < 3) {
                    showFallback();
                }
            }, 3000);
        });
        
        // Add a timeout to check if video is playing after a few seconds
        setTimeout(() => {
            if (heroVideo.paused || heroVideo.readyState < 3) {
                showFallback();
            }
        }, 5000);
    }
}

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing app...');
    try {
        initializeLoader();
        setupMobileMenu();
        setupScrollAnimations();
        handleVideoError();

        // Optional: Force a scroll event to initialize parallax effects
        window.dispatchEvent(new Event('scroll'));
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});

// Add a window load event to ensure all resources are loaded
window.addEventListener('load', () => {
    console.log('All resources loaded');
    // Fallback check for loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen && loadingScreen.style.display !== 'none') {
        console.log('Force hiding loading screen after full load');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}); 