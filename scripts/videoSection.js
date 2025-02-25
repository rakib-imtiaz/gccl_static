// Video Section Component
function createVideoSection() {
    const videoSectionContainer = document.getElementById('video-section-container');

    if (!videoSectionContainer) return;

    const videoSectionHTML = `
        <section class="video-section py-16 sm:py-20 lg:py-24 bg-gray-100">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll">Highlight Videos</h2>
                    <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                        Relive the exciting moments from previous GCCL matches and events
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-on-scroll">
                    <!-- Video Card 1 -->
                    <div class="video-card bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div class="aspect-video relative overflow-hidden">
                            <img src="https://i.ytimg.com/vi/DRr7dprSyxQ/maxresdefault.jpg" alt="Match Highlights" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <a href="https://www.youtube.com/watch?v=DRr7dprSyxQ" class="video-play-button" data-video-id="DRr7dprSyxQ">
                                    <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <i class="fas fa-play text-white text-lg"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-xl font-bold mb-2">India vs Pakistan T20 Match Highlights</h3>
                            <p class="text-gray-600 mb-3">Exciting moments from the GCCL 2023 final match</p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500"><i class="far fa-calendar-alt mr-1"></i> Aug 27, 2023</span>
                                <span class="text-sm text-gray-500"><i class="far fa-eye mr-1"></i> 1.2M views</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Video Card 2 -->
                    <div class="video-card bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div class="aspect-video relative overflow-hidden">
                            <img src="https://i.ytimg.com/vi/6rVdLY6V_S8/maxresdefault.jpg" alt="Opening Ceremony" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <a href="https://www.youtube.com/watch?v=6rVdLY6V_S8" class="video-play-button" data-video-id="6rVdLY6V_S8">
                                    <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <i class="fas fa-play text-white text-lg"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-xl font-bold mb-2">GCCL 2023 Opening Ceremony</h3>
                            <p class="text-gray-600 mb-3">Star-studded performances at the GCCL inauguration</p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500"><i class="far fa-calendar-alt mr-1"></i> Aug 15, 2023</span>
                                <span class="text-sm text-gray-500"><i class="far fa-eye mr-1"></i> 879K views</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Video Card 3 -->
                    <div class="video-card bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div class="aspect-video relative overflow-hidden">
                            <img src="https://i.ytimg.com/vi/YT95fYU8M7w/maxresdefault.jpg" alt="Celebrity Cricket" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <a href="https://www.youtube.com/watch?v=YT95fYU8M7w" class="video-play-button" data-video-id="YT95fYU8M7w">
                                    <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <i class="fas fa-play text-white text-lg"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-xl font-bold mb-2">Celebrities at GCCL</h3>
                            <p class="text-gray-600 mb-3">Behind the scenes with the stars of GCCL</p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500"><i class="far fa-calendar-alt mr-1"></i> Aug 20, 2023</span>
                                <span class="text-sm text-gray-500"><i class="far fa-eye mr-1"></i> 645K views</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Show More Button -->
                <div class="text-center mt-12 animate-on-scroll">
                    <a href="https://www.youtube.com/channel/EXAMPLE" target="_blank" class="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors duration-300">
                        <i class="fab fa-youtube mr-2"></i> Visit Our YouTube Channel
                    </a>
                </div>
            </div>
        </section>
    `;

    // Set the HTML
    videoSectionContainer.innerHTML = videoSectionHTML;
    
    // Add video modal functionality
    setupVideoModal();
}

// Setup video modals
function setupVideoModal() {
    const videoButtons = document.querySelectorAll('.video-play-button');
    let modal = document.getElementById('video-modal');
    
    // Create modal if it doesn't exist
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'video-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center hidden';
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div class="relative z-10 w-full max-w-4xl p-2 sm:p-4">
                <button id="close-modal" class="absolute -top-12 right-2 text-white hover:text-red-500 text-3xl">
                    <i class="fas fa-times"></i>
                </button>
                <div class="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    <iframe id="youtube-frame" class="w-full h-full" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Setup event listeners
    const closeModal = document.getElementById('close-modal');
    const youtubeFrame = document.getElementById('youtube-frame');
    
    videoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const videoId = button.getAttribute('data-video-id');
            youtubeFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        });
    });
    
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        youtubeFrame.src = '';
        document.body.classList.remove('overflow-hidden');
    });
    
    // Close modal on backdrop click
    modal.querySelector('.absolute').addEventListener('click', (e) => {
        if (e.target === modal.querySelector('.absolute')) {
            modal.classList.add('hidden');
            youtubeFrame.src = '';
            document.body.classList.remove('overflow-hidden');
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            youtubeFrame.src = '';
            document.body.classList.remove('overflow-hidden');
        }
    });
}

// Initialize the video section when DOM content is loaded
document.addEventListener('DOMContentLoaded', createVideoSection); 