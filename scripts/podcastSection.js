// Podcast Section component
function createPodcastSection() {
    const podcastSectionContainer = document.getElementById('podcast-section-container');

    if (!podcastSectionContainer) return;

    const podcastSectionHTML = `
        <section class="podcast-section py-16 sm:py-20 lg:py-24 bg-gray-800 text-white relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="sound-wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 Q 25 10, 50 50 T 100 50" stroke="white" fill="none" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#sound-wave)" />
                </svg>
            </div>
            
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll">GCCL Podcast</h2>
                    <p class="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-on-scroll">
                        Listen to our podcast featuring interviews with cricket legends, celebrities, and behind-the-scenes stories from GCCL.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    <!-- Featured Episode -->
                    <div class="podcast-featured-card bg-gray-700 rounded-xl overflow-hidden shadow-lg animate-on-scroll">
                        <div class="aspect-video relative overflow-hidden">
                            <img 
                                src="./assets/images/podcast-featured.jpg" 
                                alt="GCCL Podcast Featured Episode" 
                                class="w-full h-full object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div class="absolute bottom-4 left-4 right-4">
                                <span class="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-2">
                                    Latest Episode
                                </span>
                                <h3 class="text-xl sm:text-2xl font-bold text-white">The Future of Cricket in the USA</h3>
                            </div>
                        </div>
                        
                        <div class="p-4 sm:p-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center">
                                    <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
                                        <img 
                                            src="./assets/images/host-avatar.jpg" 
                                            alt="Podcast Host" 
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p class="font-medium">John Smith</p>
                                        <p class="text-xs text-gray-400">Host</p>
                                    </div>
                                </div>
                                <span class="text-sm text-gray-400">45 min</span>
                            </div>
                            
                            <p class="text-gray-300 mb-6">
                                In this episode, we discuss the growing popularity of cricket in the United States and how GCCL is contributing to its expansion.
                            </p>
                            
                            <div class="podcast-player bg-gray-800 rounded-lg p-3 flex items-center">
                                <button class="play-pause-btn w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center mr-3">
                                    <i class="fas fa-play text-white"></i>
                                </button>
                                
                                <div class="progress-container flex-grow mx-2">
                                    <div class="progress-bar bg-gray-600 h-2 rounded-full overflow-hidden">
                                        <div class="progress bg-primary-500 h-full rounded-full" style="width: 30%;"></div>
                                    </div>
                                    <div class="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>14:35</span>
                                        <span>45:00</span>
                                    </div>
                                </div>
                                
                                <div class="volume-container flex items-center ml-3">
                                    <i class="fas fa-volume-up text-gray-400 mr-2"></i>
                                    <div class="volume-bar bg-gray-600 h-1 rounded-full w-12 overflow-hidden">
                                        <div class="volume-level bg-gray-400 h-full rounded-full" style="width: 70%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Recent Episodes -->
                    <div class="podcast-episodes animate-on-scroll">
                        <h3 class="text-xl font-bold mb-6">Recent Episodes</h3>
                        
                        <div class="space-y-4">
                            <!-- Episode 1 -->
                            <div class="podcast-episode-card bg-gray-700 rounded-lg overflow-hidden">
                                <div class="flex flex-col sm:flex-row">
                                    <div class="sm:w-1/3">
                                        <div class="aspect-square sm:aspect-auto sm:h-full relative">
                                            <img 
                                                src="./assets/images/podcast-episode-1.jpg" 
                                                alt="Cricket Legends" 
                                                class="w-full h-full object-cover"
                                            />
                                            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                                <button class="episode-play-btn w-10 h-10 rounded-full bg-primary-500 bg-opacity-90 flex items-center justify-center">
                                                    <i class="fas fa-play text-white"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="p-4 sm:w-2/3">
                                        <h4 class="font-bold mb-1">Cricket Legends: Stories from the Field</h4>
                                        <p class="text-sm text-gray-400 mb-2">Episode 5 • 38 min</p>
                                        <p class="text-sm text-gray-300 line-clamp-2">
                                            Interviews with cricket legends sharing their most memorable moments and experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Episode 2 -->
                            <div class="podcast-episode-card bg-gray-700 rounded-lg overflow-hidden">
                                <div class="flex flex-col sm:flex-row">
                                    <div class="sm:w-1/3">
                                        <div class="aspect-square sm:aspect-auto sm:h-full relative">
                                            <img 
                                                src="./assets/images/podcast-episode-2.jpg" 
                                                alt="Celebrity Cricket" 
                                                class="w-full h-full object-cover"
                                            />
                                            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                                <button class="episode-play-btn w-10 h-10 rounded-full bg-primary-500 bg-opacity-90 flex items-center justify-center">
                                                    <i class="fas fa-play text-white"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="p-4 sm:w-2/3">
                                        <h4 class="font-bold mb-1">When Celebrities Meet Cricket</h4>
                                        <p class="text-sm text-gray-400 mb-2">Episode 4 • 42 min</p>
                                        <p class="text-sm text-gray-300 line-clamp-2">
                                            Exploring the intersection of entertainment and sports with celebrity cricket enthusiasts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Episode 3 -->
                            <div class="podcast-episode-card bg-gray-700 rounded-lg overflow-hidden">
                                <div class="flex flex-col sm:flex-row">
                                    <div class="sm:w-1/3">
                                        <div class="aspect-square sm:aspect-auto sm:h-full relative">
                                            <img 
                                                src="./assets/images/podcast-episode-3.jpg" 
                                                alt="Cricket Strategy" 
                                                class="w-full h-full object-cover"
                                            />
                                            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                                <button class="episode-play-btn w-10 h-10 rounded-full bg-primary-500 bg-opacity-90 flex items-center justify-center">
                                                    <i class="fas fa-play text-white"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="p-4 sm:w-2/3">
                                        <h4 class="font-bold mb-1">T20 Cricket: Strategy and Excitement</h4>
                                        <p class="text-sm text-gray-400 mb-2">Episode 3 • 35 min</p>
                                        <p class="text-sm text-gray-300 line-clamp-2">
                                            Breaking down the strategies and excitement of T20 cricket with expert analysts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-6">
                            <a
                                href="#"
                                class="text-primary-400 hover:text-primary-300 inline-flex items-center font-medium transition-colors duration-300"
                            >
                                View all episodes
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12 sm:mt-16 animate-on-scroll">
                    <div class="flex flex-wrap justify-center gap-4">
                        <a
                            href="#"
                            class="podcast-platform-link flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                        >
                            <i class="fab fa-spotify text-xl mr-2"></i>
                            Spotify
                        </a>
                        
                        <a
                            href="#"
                            class="podcast-platform-link flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                        >
                            <i class="fab fa-apple text-xl mr-2"></i>
                            Apple Podcasts
                        </a>
                        
                        <a
                            href="#"
                            class="podcast-platform-link flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                        >
                            <i class="fab fa-google text-xl mr-2"></i>
                            Google Podcasts
                        </a>
                        
                        <a
                            href="#"
                            class="podcast-platform-link flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                        >
                            <i class="fas fa-podcast text-xl mr-2"></i>
                            RSS Feed
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Set the HTML
    podcastSectionContainer.innerHTML = podcastSectionHTML;

    // Setup animations and interactivity
    setupPodcastAnimations();
}

// Animation and Interactivity for the Podcast Section
function setupPodcastAnimations() {
    // Play/Pause button functionality
    const playPauseBtn = document.querySelector('.play-pause-btn');

    if (playPauseBtn) {
        let isPlaying = false;

        playPauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;

            if (isPlaying) {
                playPauseBtn.innerHTML = '<i class="fas fa-pause text-white"></i>';
                // In a real implementation, you would start playing the audio here
            } else {
                playPauseBtn.innerHTML = '<i class="fas fa-play text-white"></i>';
                // In a real implementation, you would pause the audio here
            }
        });

        // Hover effects
        playPauseBtn.addEventListener('mouseenter', () => {
            playPauseBtn.style.transform = 'scale(1.1)';
        });

        playPauseBtn.addEventListener('mouseleave', () => {
            playPauseBtn.style.transform = 'scale(1)';
        });
    }

    // Episode play buttons
    const episodePlayBtns = document.querySelectorAll('.episode-play-btn');

    episodePlayBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const episodeCard = this.closest('.podcast-episode-card');
            const episodeTitle = episodeCard.querySelector('h4').textContent;

            // In a real implementation, this would play the episode
            // For this static version, we'll just show an alert
            alert(`Playing episode: ${episodeTitle}`);
        });

        // Hover effects
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    // Episode card hover effects
    const episodeCards = document.querySelectorAll('.podcast-episode-card');

    episodeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.backgroundColor = 'rgba(75, 85, 99, 1)'; // Slightly lighter gray
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.backgroundColor = '';
        });
    });

    // Platform link hover effects
    const platformLinks = document.querySelectorAll('.podcast-platform-link');

    platformLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Set up animation for elements with animate-on-scroll class if not already handled by main.js
    if (!window.animationObserverInitialized) {
        const animateElements = document.querySelectorAll('.animate-on-scroll:not(.animated)');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Set initial state for animated elements
        animateElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// Initialize the podcast section
document.addEventListener('DOMContentLoaded', createPodcastSection); 