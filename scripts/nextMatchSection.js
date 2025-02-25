// Next Match Section component
function createNextMatchSection() {
    const nextMatchSectionContainer = document.getElementById('next-match-section-container');

    if (!nextMatchSectionContainer) return;

    const nextMatchSectionHTML = `
        <section class="next-match-section py-16 sm:py-20 lg:py-24 bg-light-gray relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 z-0 opacity-5">
                <img 
                    src="./assets/images/cricket-pattern.png" 
                    alt="" 
                    class="w-full h-full object-cover"
                />
            </div>
            
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll">Next Match</h2>
                    <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                        Don't miss our upcoming celebrity cricket showdown. Mark your calendar and get ready for an exciting match!
                    </p>
                </div>
                
                <div class="max-w-5xl mx-auto">
                    <div class="next-match-card bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <!-- Match Details -->
                            <div class="p-6 sm:p-8 lg:p-10">
                                <div class="flex items-center justify-between mb-6">
                                    <span class="inline-block px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-full">
                                        Coming Soon
                                    </span>
                                    <span class="text-gray-500 text-sm">
                                        <i class="far fa-calendar-alt mr-2"></i>May 2025
                                    </span>
                                </div>
                                
                                <h3 class="text-2xl sm:text-3xl font-bold mb-4">USA vs World XI</h3>
                                <p class="text-gray-600 mb-6">
                                    Exhibition Match - Global Celebrity Cricket League 2025
                                </p>
                                
                                <div class="space-y-4 mb-8">
                                    <div class="flex items-start">
                                        <div class="text-primary-500 mt-1 mr-3">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold">Venue</h4>
                                            <p class="text-gray-600">Grand Cricket Stadium, Dallas, TX</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start">
                                        <div class="text-primary-500 mt-1 mr-3">
                                            <i class="fas fa-clock"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold">Match Time</h4>
                                            <p class="text-gray-600">7:00 PM CST</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start">
                                        <div class="text-primary-500 mt-1 mr-3">
                                            <i class="fas fa-ticket-alt"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold">Ticket Price</h4>
                                            <p class="text-gray-600">Starting from $25</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#"
                                        class="btn btn-primary px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300"
                                    >
                                        <i class="fas fa-ticket-alt mr-2"></i>
                                        Get Tickets
                                    </a>
                                    
                                    <a
                                        href="#"
                                        class="btn btn-outline px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300"
                                    >
                                        <i class="far fa-calendar-plus mr-2"></i>
                                        Add to Calendar
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Teams -->
                            <div class="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                                <div class="teams-container">
                                    <div class="flex items-center justify-between mb-8">
                                        <div class="team text-center">
                                            <div class="team-logo-container mb-4 mx-auto">
                                                <img
                                                    src="./assets/logos/usa-team.png"
                                                    alt="USA Team"
                                                    class="team-logo h-20 w-20 object-contain mx-auto"
                                                />
                                            </div>
                                            <h4 class="text-xl font-bold">USA</h4>
                                            <p class="text-gray-200">Celebrity XI</p>
                                        </div>
                                        
                                        <div class="versus-container text-center px-4">
                                            <div class="text-4xl font-bold mb-2">VS</div>
                                            <div class="countdown-timer text-sm">
                                                <div class="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="team text-center">
                                            <div class="team-logo-container mb-4 mx-auto">
                                                <img
                                                    src="./assets/logos/world-xi-team.png"
                                                    alt="World XI Team"
                                                    class="team-logo h-20 w-20 object-contain mx-auto"
                                                />
                                            </div>
                                            <h4 class="text-xl font-bold">World XI</h4>
                                            <p class="text-gray-200">Celebrity XI</p>
                                        </div>
                                    </div>
                                    
                                    <div class="featured-players">
                                        <h4 class="text-lg font-semibold mb-4 text-center">Featured Players</h4>
                                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                            <div class="player text-center">
                                                <div class="player-avatar mx-auto mb-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                                    <img
                                                        src="./assets/images/player-1.jpg"
                                                        alt="Player 1"
                                                        class="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p class="text-sm font-medium">John D.</p>
                                            </div>
                                            
                                            <div class="player text-center">
                                                <div class="player-avatar mx-auto mb-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                                    <img
                                                        src="./assets/images/player-2.jpg"
                                                        alt="Player 2"
                                                        class="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p class="text-sm font-medium">Mike S.</p>
                                            </div>
                                            
                                            <div class="player text-center">
                                                <div class="player-avatar mx-auto mb-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                                    <img
                                                        src="./assets/images/player-3.jpg"
                                                        alt="Player 3"
                                                        class="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p class="text-sm font-medium">Raj P.</p>
                                            </div>
                                            
                                            <div class="player text-center">
                                                <div class="player-avatar mx-auto mb-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                                    <img
                                                        src="./assets/images/player-4.jpg"
                                                        alt="Player 4"
                                                        class="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p class="text-sm font-medium">Ali K.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12 sm:mt-16 animate-on-scroll">
                    <a
                        href="matches.html"
                        class="btn btn-secondary px-8 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300"
                    >
                        View All Matches
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    `;

    // Set the HTML
    nextMatchSectionContainer.innerHTML = nextMatchSectionHTML;

    // Setup animations and interactivity
    setupNextMatchAnimations();
}

// Animation and Interactivity for the Next Match Section
function setupNextMatchAnimations() {
    // Card hover effects
    const nextMatchCard = document.querySelector('.next-match-card');

    if (nextMatchCard) {
        nextMatchCard.addEventListener('mouseenter', () => {
            nextMatchCard.style.transform = 'translateY(-5px)';
            nextMatchCard.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });

        nextMatchCard.addEventListener('mouseleave', () => {
            nextMatchCard.style.transform = 'translateY(0)';
            nextMatchCard.style.boxShadow = '';
        });
    }

    // Team logo hover effects
    const teamLogos = document.querySelectorAll('.team-logo');

    teamLogos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.1) rotate(5deg)';
        });

        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Player avatar hover effects
    const playerAvatars = document.querySelectorAll('.player-avatar');

    playerAvatars.forEach(avatar => {
        avatar.addEventListener('mouseenter', () => {
            avatar.style.transform = 'scale(1.1)';
            avatar.style.borderColor = 'var(--color-primary-light)';
        });

        avatar.addEventListener('mouseleave', () => {
            avatar.style.transform = 'scale(1)';
            avatar.style.borderColor = 'white';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.next-match-section .btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
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

// Initialize the next match section
document.addEventListener('DOMContentLoaded', createNextMatchSection); 