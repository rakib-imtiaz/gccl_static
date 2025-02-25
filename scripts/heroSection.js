// Hero Section component
function createHeroSection() {
    const heroSection = document.createElement('section');
    heroSection.id = 'home';
    heroSection.classList.add('hero-section', 'relative');
    
    // Updated hero section with video background and modern design
    heroSection.innerHTML = `
        <!-- Fallback Background (in case video doesn't work) -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 opacity-95 z-0"></div>
        
        <!-- Video Overlay will be added above the video -->
        <div class="video-overlay bg-black/30"></div>
        
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-pattern opacity-10 z-20"></div>
        
        <div class="container mx-auto px-4 py-8 relative z-30">
            <div class="hero-content flex flex-col items-center text-center">
                <!-- Logo with animation -->
                <div class="mb-8 hero-logo transform transition-all duration-500 hover:scale-105" data-aos="fade-down" data-aos-delay="200">
                    <img src="assets/logos/logo_gccl.png" alt="GCCL Logo" class="w-40 md:w-60 mx-auto drop-shadow-2xl">
                </div>
                
                <!-- Hero Title and Description -->
                <div class="text-center mb-10" data-aos="fade-up" data-aos-delay="300">
                    <h1 class="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                        Global Cricket <span class="text-yellow-400">Champions League</span>
                    </h1>
                    <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
                        Experience the excitement of celebrity cricket matches featuring stars from around the world competing for glory.
                    </p>
                </div>
                
                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-6 mb-16" data-aos="fade-up" data-aos-delay="400">
                    <a href="#videos" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-white/20">
                        <i class="fas fa-play-circle mr-2"></i> Watch Videos
                    </a>
                    <a href="#participants" class="bg-transparent border-2 border-white text-white hover:bg-white/20 px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                        <i class="fas fa-users mr-2"></i> View Participants
                    </a>
                </div>
                
                <!-- Next Match Card with enhanced styling -->
                <div class="hero-card bg-white/15 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-2xl w-full border border-white/10" data-aos="fade-up" data-aos-delay="500">
                    <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                        <i class="fas fa-calendar-alt text-yellow-400 mr-3"></i> Next Match
                    </h3>
                    <div class="flex flex-col md:flex-row items-center justify-between">
                        <div class="team-info flex items-center mb-4 md:mb-0">
                            <img src="assets/logos/usa-team.png" alt="USA Team" class="w-16 h-16 object-contain">
                            <div class="ml-3">
                                <p class="font-bold text-white text-lg">USA</p>
                                <p class="text-gray-300">Celebrity Team</p>
                            </div>
                        </div>
                        
                        <div class="match-details text-center px-4">
                            <div class="text-yellow-400 font-bold text-2xl">VS</div>
                            <div class="text-gray-300 mt-1">August, 2023</div>
                            <div class="bg-primary/20 text-white rounded-full px-4 py-1 text-xs font-medium mt-2 backdrop-blur-sm">
                                New York Stadium
                            </div>
                        </div>
                        
                        <div class="team-info flex items-center mt-4 md:mt-0">
                            <div class="mr-3 text-right">
                                <p class="font-bold text-white text-lg">World XI</p>
                                <p class="text-gray-300">Celebrity Team</p>
                            </div>
                            <img src="assets/logos/world-xi-team.png" alt="World XI Team" class="w-16 h-16 object-contain">
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <a href="#tickets" class="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                            <i class="fas fa-ticket-alt mr-2"></i> Get Tickets
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scrolling indicator -->
        <div class="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-30">
            <a href="#about" class="text-white opacity-75 hover:opacity-100 transition-opacity bg-white/10 p-3 rounded-full backdrop-blur-sm">
                <i class="fas fa-chevron-down text-2xl"></i>
            </a>
        </div>
    `;
    
    return heroSection;
}

function renderHeroSection() {
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.prepend(createHeroSection());
        
        // Programmatically create and add video element
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            // Create video element with higher z-index
            const videoElement = document.createElement('video');
            videoElement.className = 'hero-video';
            videoElement.autoplay = true;
            videoElement.muted = true;
            videoElement.loop = true;
            videoElement.playsInline = true;
            videoElement.preload = 'auto';
            videoElement.style.zIndex = '1';
            
            // Create source element
            const sourceElement = document.createElement('source');
            sourceElement.src = 'assets/video/gccl_intro.mp4';
            sourceElement.type = 'video/mp4';
            
            // Add source to video
            videoElement.appendChild(sourceElement);
            
            // Add fallback text
            videoElement.innerHTML += 'Your browser does not support the video tag.';
            
            // Insert video as first child of hero section (before the overlay)
            heroSection.insertBefore(videoElement, heroSection.firstChild);
            
            // Add event listeners
            videoElement.addEventListener('loadeddata', () => {
                console.log('Video loaded successfully');
                // Make sure to show it by setting opacity
                videoElement.style.opacity = '1';
            });
            
            videoElement.addEventListener('playing', () => {
                console.log('Video is now playing');
            });
            
            videoElement.addEventListener('error', (e) => {
                console.error('Video error:', e);
                videoElement.style.display = 'none';
            });
            
            // Force video to play
            videoElement.load();
            setTimeout(() => {
                const playPromise = videoElement.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.error('Autoplay prevented:', error);
                    });
                }
            }, 100);
        }
    }
}

renderHeroSection(); 