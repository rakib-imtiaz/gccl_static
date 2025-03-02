// Hero Section component with 3D intro video
function createHeroSection() {
    const heroSection = document.createElement('section');
    heroSection.className = 'hero-section relative w-full h-screen flex items-center justify-center overflow-hidden';
    heroSection.id = 'hero-section';

    // Create video element for background using the new 3D intro
    const video = document.createElement('video');
    video.className = 'hero-video absolute inset-0 object-cover w-full h-full';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true; // Important for mobile (especially iOS)
    video.preload = 'auto';
    video.poster = 'assets/images/backgrounds/hero-poster.jpg'; // Use a placeholder image while video loads
    
    // Add source for the video - using the new 3D intro with cache buster
    const source = document.createElement('source');
    source.src = 'assets/video/3d_intro_page_2.mp4?v=' + new Date().getTime(); // Add cache busting parameter
    source.type = 'video/quicktime';
    
    // Add fallback format for better browser compatibility
    const mp4Source = document.createElement('source');
    mp4Source.src = 'assets/video/3d_intro_page_2.mp4'; // Keep original as fallback
    mp4Source.type = 'video/mp4';
    
    video.appendChild(source);
    video.appendChild(mp4Source);
    
    // Log video loading information
    console.log('Hero video sources:', {
        primary: source.src,
        fallback: mp4Source.src
    });
    
    // Add error handling for video
    video.addEventListener('error', (e) => {
        console.error('Video error occurred:', e);
        console.log('Video error code:', video.error ? video.error.code : 'unknown');
        // Try to use the fallback if available
        if (video.querySelector('source[type="video/mp4"]')) {
            console.log('Attempting to use fallback video');
        } else {
            video.style.display = 'none';
        }
    });
    
    // Add debugging for video loading
    video.addEventListener('loadstart', () => console.log('Video loadstart event fired'));
    video.addEventListener('loadeddata', () => {
        console.log('Video loadeddata event fired');
        video.style.opacity = '1';
        // Add a class to start animations once video is loaded
        setTimeout(() => {
            heroSection.classList.add('content-loaded');
        }, 300);
    });
    
    // Create a subtle gradient overlay for better text readability
    const overlay = document.createElement('div');
    overlay.className = 'video-overlay absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5';

    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'container relative z-40 mx-auto px-4 text-center';

    // Create hero content with modern, clean aesthetic
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content flex flex-col items-center justify-center gap-8 transform transition-all duration-700 translate-y-8 opacity-0 hero-animate';

    // Add logo with refined styling
    const logoContainer = document.createElement('div');
    logoContainer.className = 'mb-6 transform transition-all duration-500 delay-300';
    
    const logo = document.createElement('img');
    logo.src = 'assets/logos/logo_gccl.png';
    logo.alt = 'GCCL Logo';
    logo.className = 'hero-logo w-28 md:w-36 lg:w-44 mx-auto filter drop-shadow-lg';
    
    logoContainer.appendChild(logo);

    // Add title with more refined typography
    const title = document.createElement('h1');
    title.className = 'hero-title text-white font-bold mb-4 tracking-wide text-shadow-lg transform transition-all duration-500 delay-500';
    title.innerHTML = '<span class="block text-4xl md:text-5xl lg:text-6xl">Global Celebrity</span><span class="block text-3xl md:text-4xl lg:text-5xl mt-2 text-primary-300">Cricket League</span>';

    // Add refined subtitle
    const subtitle = document.createElement('p');
    subtitle.className = 'text-white/90 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8 font-light tracking-wide transform transition-all duration-500 delay-700';
    subtitle.textContent = 'Where Stars Shine Beyond the Silver Screen';

    // Add CTA buttons container with improved styling
    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'flex flex-col sm:flex-row justify-center items-center gap-5 transform transition-all duration-500 delay-900';

    // Add primary CTA button with refined styling
    const primaryCta = document.createElement('a');
    primaryCta.href = '#next-match-section';
    primaryCta.className = 'btn-primary px-8 py-4 rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold tracking-wide';
    primaryCta.textContent = 'Next Match';

    // Add secondary CTA button with refined styling
    const secondaryCta = document.createElement('a');
    secondaryCta.href = '#participants-section';
    secondaryCta.className = 'btn-secondary px-8 py-4 rounded-lg text-white bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg font-semibold tracking-wide';
    secondaryCta.textContent = 'Meet the Stars';

    // Append buttons to container
    ctaContainer.appendChild(primaryCta);
    ctaContainer.appendChild(secondaryCta);

    // Append elements to hero content
    heroContent.appendChild(logoContainer);
    heroContent.appendChild(title);
    heroContent.appendChild(subtitle);
    heroContent.appendChild(ctaContainer);

    // Append hero content to content container
    contentContainer.appendChild(heroContent);

    // Add a more elegant scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 opacity-0 transition-opacity duration-1000 delay-1500 cursor-pointer scroll-indicator-animate';
    
    // Create a more refined scroll indicator
    scrollIndicator.innerHTML = `
        <div class="flex flex-col items-center">
            <span class="text-white/80 text-sm tracking-widest mb-2 uppercase font-light">Scroll</span>
            <div class="w-7 h-12 border border-white/50 rounded-full flex justify-center relative">
                <span class="absolute w-1.5 h-1.5 bg-white rounded-full animate-scrollDot top-2"></span>
            </div>
        </div>
    `;
    
    // Add scroll indicator click event
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#about-section-container').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Append all elements to the hero section
    heroSection.appendChild(video);
    heroSection.appendChild(overlay);
    heroSection.appendChild(contentContainer);
    heroSection.appendChild(scrollIndicator);

    return heroSection;
}

function renderHeroSection() {
    const container = document.getElementById('hero-section-container');
    if (container) {
        // Clear any existing content first to ensure fresh rendering
        container.innerHTML = '';
        console.log('Hero section container cleared for fresh rendering');
        
        // Append the newly created hero section
        container.appendChild(createHeroSection());
        console.log('Hero section content appended to container');
        
        // Add custom styles for hero animations
        const style = document.createElement('style');
        style.textContent = `
            .text-shadow-lg {
                text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            }
            
            .content-loaded .hero-animate {
                transform: translateY(0);
                opacity: 1;
            }
            
            .content-loaded .scroll-indicator-animate {
                opacity: 0.8;
            }
            
            .scroll-indicator-animate:hover {
                opacity: 1;
            }
            
            @keyframes scrollDot {
                0% { transform: translateY(0); opacity: 1; }
                70% { transform: translateY(6px); opacity: 0.3; }
                100% { transform: translateY(0); opacity: 1; }
            }
            
            .animate-scrollDot {
                animation: scrollDot 1.5s ease-in-out infinite;
            }
            
            .hero-video {
                transition: opacity 1s ease-in-out;
            }
        `;
        document.head.appendChild(style);
        
        // Initialize scroll animations for hero section elements
        initScrollAnimations();
        
        // Force video loading if needed
        setTimeout(() => {
            const video = document.querySelector('.hero-video');
            if (video && video.paused) {
                console.log('Attempting to force play video');
                video.play().catch(err => console.error('Error playing video:', err));
            }
        }, 1000);
    } else {
        console.error('Hero section container not found in the DOM');
    }
}

function initScrollAnimations() {
    // Add scroll animations to elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
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

// Export the function for use in main.js
window.renderHeroSection = renderHeroSection; 

// Immediate self-executing function to ensure the hero section is refreshed
// This will run as soon as this script is loaded
(function() {
    console.log('Forcing hero section refresh');
    
    // Check if DOM is already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(function() {
            console.log('DOM already loaded, refreshing hero section immediately');
            renderHeroSection();
        }, 10);
    } else {
        // If DOM is not loaded yet, wait for it
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM just loaded, refreshing hero section');
            renderHeroSection();
        });
    }
    
    // Also refresh on window load to catch any issues
    window.addEventListener('load', function() {
        console.log('Window fully loaded, ensuring hero section is rendered');
        renderHeroSection();
    });
})(); 