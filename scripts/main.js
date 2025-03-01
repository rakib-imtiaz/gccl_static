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

// Main JavaScript file for initializing all components

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Display loading screen
    showLoadingScreen();
    
    // Initialize all sections after assets are loaded
    window.addEventListener('load', function() {
        // Hide loading screen after a minimum display time (for better UX)
        setTimeout(function() {
            hideLoadingScreen();
            initializeSections();
            initializeAnimations();
            initializeResponsiveness();
        }, 1500);
    });
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('opacity-0');
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

function initializeSections() {
    // Initialize header
    if (typeof window.renderHeader === 'function') {
        window.renderHeader();
    }
    
    // Initialize hero section
    if (typeof window.renderHeroSection === 'function') {
        window.renderHeroSection();
    }
    
    // Initialize about section
    if (typeof window.renderAboutSection === 'function') {
        window.renderAboutSection();
    }
    
    // Initialize video section
    if (typeof window.renderVideoSection === 'function') {
        window.renderVideoSection();
    }
    
    // Initialize participants section
    if (typeof window.renderParticipantsSection === 'function') {
        window.renderParticipantsSection();
    }
    
    // Initialize promoters section
    if (typeof window.renderPromotersSection === 'function') {
        window.renderPromotersSection();
    }
    
    // Initialize next match section
    if (typeof window.renderNextMatchSection === 'function') {
        window.renderNextMatchSection();
    }
    
    // Initialize contact section
    if (typeof window.renderContactSection === 'function') {
        window.renderContactSection();
    }
    
    // Initialize footer
    if (typeof window.renderFooter === 'function') {
        window.renderFooter();
    }
}

function initializeAnimations() {
    // Initialize AOS (Animate On Scroll) if it exists
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true
        });
    }
    
    // Initialize intersection observer for custom animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
}

function initializeResponsiveness() {
    // Handle mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Handle header scroll effects
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header-fixed');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
                header.classList.remove('header-transparent');
            } else {
                header.classList.remove('header-scrolled');
                header.classList.add('header-transparent');
            }
        }
    });
    
    // Handle responsive behavior for video players
    const videoContainers = document.querySelectorAll('.video-container');
    if (videoContainers.length > 0) {
        window.addEventListener('resize', resizeVideoContainers);
        resizeVideoContainers();
    }
    
    // Add viewport height fix for mobile browsers
    setMobileVH();
    window.addEventListener('resize', setMobileVH);
}

function resizeVideoContainers() {
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        const width = container.offsetWidth;
        // Maintain 16:9 aspect ratio
        container.style.height = (width * 9 / 16) + 'px';
    });
}

function setMobileVH() {
    // Fix for mobile viewport height
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Export functions if needed for other scripts
window.showLoadingScreen = showLoadingScreen;
window.hideLoadingScreen = hideLoadingScreen; 