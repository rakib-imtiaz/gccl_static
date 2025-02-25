// Videos Section component
function createVideosSection() {
    const videosSectionContainer = document.getElementById('videos-section-container');

    if (!videosSectionContainer) return;

    const videosSectionHTML = `
        <section class="videos-section py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll">Match Highlights</h2>
                    <p class="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-on-scroll">
                        Relive the most exciting moments from our previous matches featuring celebrities and cricket legends.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    <!-- Video Card 1 -->
                    <div class="video-card rounded-xl overflow-hidden shadow-lg animate-on-scroll">
                        <div class="video-thumbnail relative">
                            <div class="aspect-video bg-gray-800 relative overflow-hidden">
                                <img 
                                    src="./assets/images/video-thumbnail-1.jpg" 
                                    alt="Match Highlights - USA vs India" 
                                    class="w-full h-full object-cover"
                                />
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <button class="play-button w-16 h-16 rounded-full bg-primary-500 bg-opacity-90 flex items-center justify-center transition-transform duration-300">
                                        <i class="fas fa-play text-white text-xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:p-6">
                            <h3 class="text-xl font-bold mb-2">USA vs India</h3>
                            <p class="text-gray-400 text-sm mb-3">Exhibition Match 2023</p>
                            <p class="text-gray-300">
                                Watch the thrilling moments from the exhibition match between USA and India featuring top celebrities.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Video Card 2 -->
                    <div class="video-card rounded-xl overflow-hidden shadow-lg animate-on-scroll">
                        <div class="video-thumbnail relative">
                            <div class="aspect-video bg-gray-800 relative overflow-hidden">
                                <img 
                                    src="./assets/images/video-thumbnail-2.jpg" 
                                    alt="Match Highlights - Pakistan vs Bangladesh" 
                                    class="w-full h-full object-cover"
                                />
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <button class="play-button w-16 h-16 rounded-full bg-primary-500 bg-opacity-90 flex items-center justify-center transition-transform duration-300">
                                        <i class="fas fa-play text-white text-xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:p-6">
                            <h3 class="text-xl font-bold mb-2">Pakistan vs Bangladesh</h3>
                            <p class="text-gray-400 text-sm mb-3">Final Match 2023</p>
                            <p class="text-gray-300">
                                Relive the excitement of the final match between Pakistan and Bangladesh with celebrity players.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Video Card 3 -->
                    <div class="video-card rounded-xl overflow-hidden shadow-lg animate-on-scroll">
                        <div class="video-thumbnail relative">
                            <div class="aspect-video bg-gray-800 relative overflow-hidden">
                                <img 
                                    src="./assets/images/video-thumbnail-3.jpg" 
                                    alt="Behind the Scenes - GCCL 2023" 
                                    class="w-full h-full object-cover"
                                />
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <button class="play-button w-16 h-16 rounded-full bg-primary-500 bg-opacity-90 flex items-center justify-center transition-transform duration-300">
                                        <i class="fas fa-play text-white text-xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 sm:p-6">
                            <h3 class="text-xl font-bold mb-2">Behind the Scenes</h3>
                            <p class="text-gray-400 text-sm mb-3">GCCL 2023 Season</p>
                            <p class="text-gray-300">
                                Get an exclusive look at what happens behind the scenes at the Global Celebrity Cricket League.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12 sm:mt-16 animate-on-scroll">
                    <a
                        href="media.html"
                        class="btn btn-outline-white px-8 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300"
                    >
                        View All Videos
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    `;

    // Set the HTML
    videosSectionContainer.innerHTML = videosSectionHTML;

    // Setup animations and interactivity
    setupVideosAnimations();
}

// Animation and Interactivity for the Videos Section
function setupVideosAnimations() {
    // Play button hover effects
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.backgroundColor = 'var(--color-primary-dark)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.backgroundColor = 'var(--color-primary)';
        });

        // Click event for play buttons
        button.addEventListener('click', function () {
            const videoCard = this.closest('.video-card');
            const videoTitle = videoCard.querySelector('h3').textContent;

            // In a real implementation, this would open a modal with the actual video
            // For this static version, we'll just show an alert
            alert(`Playing video: ${videoTitle}`);

            // In a real implementation, you would do something like:
            // openVideoModal(videoId);
        });
    });

    // Video card hover effects
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            const thumbnail = card.querySelector('.video-thumbnail img');
            if (thumbnail) {
                thumbnail.style.transform = 'scale(1.05)';
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            const thumbnail = card.querySelector('.video-thumbnail img');
            if (thumbnail) {
                thumbnail.style.transform = 'scale(1)';
            }
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

// Initialize the videos section
document.addEventListener('DOMContentLoaded', createVideosSection); 