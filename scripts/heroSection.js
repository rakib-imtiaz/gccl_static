// Hero Section component
function createHeroSection() {
    const heroSection = document.createElement('section');
    heroSection.className = 'hero-section relative w-full h-screen flex items-center justify-center overflow-hidden';
    heroSection.id = 'hero-section';

    // Create video element for background
    const video = document.createElement('video');
    video.className = 'hero-video absolute inset-0 object-cover w-full h-full';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true; // Important for mobile (especially iOS)
    video.preload = 'auto';
    video.poster = 'assets/images/backgrounds/hero-poster.jpg'; // Use a placeholder image while video loads
    
    // Add source for the video
    const source = document.createElement('source');
    source.src = 'assets/video/gccl_intro.mp4';
    source.type = 'video/mp4';
    
    video.appendChild(source);
    
    // Add error handling for video
    video.addEventListener('error', () => {
        console.error('Video error occurred');
        video.style.display = 'none';
    });
    
    // Make sure video is visible once loaded
    video.addEventListener('loadeddata', () => {
        video.style.opacity = '1';
    });
    
    // Create the video overlay
    const overlay = document.createElement('div');
    overlay.className = 'video-overlay absolute inset-0 bg-black/30 z-5';

    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'container relative z-40 mx-auto px-4 text-center';

    // Create hero content
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content flex flex-col items-center justify-center gap-6 md:gap-8';

    // Add logo
    const logoContainer = document.createElement('div');
    logoContainer.className = 'mb-2 md:mb-4';
    
    const logo = document.createElement('img');
    logo.src = 'assets/logos/logo_gccl.png';
    logo.alt = 'GCCL Logo';
    logo.className = 'hero-logo w-24 md:w-32 lg:w-40 mx-auto';
    
    logoContainer.appendChild(logo);

    // Add title
    const title = document.createElement('h1');
    title.className = 'hero-title text-white font-bold mb-4 md:mb-6';
    title.textContent = 'Global Celebrity Cricket League';

    // Add subtitle
    const subtitle = document.createElement('p');
    subtitle.className = 'text-white/90 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-6 md:mb-8';
    subtitle.textContent = 'Where Stars Shine Beyond the Silver Screen';

    // Add CTA buttons container
    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'flex flex-col sm:flex-row justify-center items-center gap-4';

    // Add primary CTA button
    const primaryCta = document.createElement('a');
    primaryCta.href = '#next-match-section';
    primaryCta.className = 'btn btn-primary px-6 py-3 rounded-lg hover:shadow-lg transition duration-300';
    primaryCta.textContent = 'Next Match';

    // Add secondary CTA button
    const secondaryCta = document.createElement('a');
    secondaryCta.href = '#participants-section';
    secondaryCta.className = 'btn btn-outline bg-white/10 border-2 border-white/80 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition duration-300';
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

    // Add a bounce down indicator at the bottom
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 animate-bounce cursor-pointer';
    scrollIndicator.innerHTML = '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>';
    
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
        container.appendChild(createHeroSection());
        
        // Initialize scroll animations for hero section elements
        initScrollAnimations();
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