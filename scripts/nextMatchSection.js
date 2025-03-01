// Next Match Section component
function createNextMatchSection() {
    const nextMatchSectionContainer = document.getElementById('next-match-section-container');

    if (!nextMatchSectionContainer) return;

    const nextMatchSectionHTML = `
        <section class="next-match-section py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll">Next Match</h2>
                    <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                        Don't miss our upcoming celebrity cricket showdown. Mark your calendar and get ready for an exciting match!
                    </p>
                </div>
                
                <div class="max-w-4xl mx-auto">
                    <div class="next-match-card bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll">
                        <!-- Match Header - USA vs World XI -->
                        <div class="p-6 sm:p-8 text-center text-gray-800">
                            <h3 class="text-2xl sm:text-3xl font-bold mb-12">USA vs World XI</h3>
                            
                            <!-- Teams and VS -->
                            <div class="flex flex-col md:flex-row items-center justify-center mb-16">
                                <!-- Team USA -->
                                <div class="team text-center px-6 md:px-10 mb-8 md:mb-0">
                                    <div class="team-logo-container mb-4 mx-auto bg-gray-100 rounded-full p-5 w-24 h-24 flex items-center justify-center">
                                        <i class="fas fa-flag text-gray-800 text-3xl"></i>
                                    </div>
                                    <h4 class="text-xl font-bold text-gray-800">Team USA</h4>
                                    <p class="text-gray-500">Celebrity XI</p>
                                </div>
                                
                                <!-- VS and coming soon -->
                                <div class="versus-container text-center px-8 mb-8 md:mb-0 flex flex-col items-center">
                                    <div class="text-5xl font-light text-gray-300 mb-5">VS</div>
                                    <div class="coming-soon bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                                        <i class="far fa-clock mr-2"></i> Coming Soon
                                    </div>
                                </div>
                                
                                <!-- World XI -->
                                <div class="team text-center px-6 md:px-10">
                                    <div class="team-logo-container mb-4 mx-auto bg-gray-100 rounded-full p-5 w-24 h-24 flex items-center justify-center">
                                        <i class="fas fa-globe text-gray-800 text-3xl"></i>
                                    </div>
                                    <h4 class="text-xl font-bold text-gray-800">World XI</h4>
                                    <p class="text-gray-500">Celebrity XI</p>
                                </div>
                            </div>
                            
                            <!-- Match Details in a grid -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto">
                                <!-- Venue -->
                                <div class="flex items-start p-4 rounded-lg bg-gray-50">
                                    <div class="mt-1 mr-3 text-gray-500">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="text-left">
                                        <h4 class="font-semibold text-gray-800">Venue</h4>
                                        <p class="text-gray-600">Grand Cricket Stadium, Dallas, TX</p>
                                    </div>
                                </div>
                                
                                <!-- Ticket Price -->
                                <div class="flex items-start p-4 rounded-lg bg-gray-50">
                                    <div class="mt-1 mr-3 text-gray-500">
                                        <i class="fas fa-ticket-alt"></i>
                                    </div>
                                    <div class="text-left">
                                        <h4 class="font-semibold text-gray-800">Ticket Price</h4>
                                        <p class="text-gray-600">Starting from $25</p>
                                    </div>
                                </div>
                                
                                <!-- Match Time -->
                                <div class="flex items-start p-4 rounded-lg bg-gray-50">
                                    <div class="mt-1 mr-3 text-gray-500">
                                        <i class="far fa-clock"></i>
                                    </div>
                                    <div class="text-left">
                                        <h4 class="font-semibold text-gray-800">Match Time</h4>
                                        <p class="text-gray-600">7:00 PM CST</p>
                                    </div>
                                </div>
                                
                                <!-- Live Broadcast -->
                                <div class="flex items-start p-4 rounded-lg bg-gray-50">
                                    <div class="mt-1 mr-3 text-gray-500">
                                        <i class="fas fa-broadcast-tower"></i>
                                    </div>
                                    <div class="text-left">
                                        <h4 class="font-semibold text-gray-800">Live Broadcast</h4>
                                        <p class="text-gray-600">ESPN+ and GCCL Official Website</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- CTA Buttons -->
                            <div class="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                                <a href="#" class="ticket-btn border border-gray-200 hover:border-gray-300 text-gray-800 px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300">
                                    Get Tickets
                                </a>
                                
                                <a href="#" class="calendar-btn border border-gray-200 hover:border-gray-300 text-gray-800 px-6 py-3 rounded-md inline-flex items-center justify-center transition-all duration-300">
                                    <i class="far fa-calendar-plus mr-2"></i>
                                    Add to Calendar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12 sm:mt-16 animate-on-scroll">
                    <a href="#" class="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium">
                        View All Matches
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
            nextMatchCard.style.boxShadow = '0 15px 30px -10px rgba(0, 0, 0, 0.1)';
        });

        nextMatchCard.addEventListener('mouseleave', () => {
            nextMatchCard.style.transform = 'translateY(0)';
            nextMatchCard.style.boxShadow = '';
        });
    }

    // Team logo hover effects
    const teamLogos = document.querySelectorAll('.team-logo-container');
    teamLogos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1)';
        });
    });
    
    // Button hover animation
    const buttons = document.querySelectorAll('.next-match-section a.ticket-btn, .next-match-section a.calendar-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.backgroundColor = '#f9fafb';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.backgroundColor = '';
        });
    });
}

// Export the render function for use in main.js
window.renderNextMatchSection = function() {
    createNextMatchSection();
};

// Initialize the next match section
document.addEventListener('DOMContentLoaded', createNextMatchSection); 