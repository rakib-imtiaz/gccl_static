// About Section Component
function createAboutSection() {
    const aboutSectionContainer = document.getElementById('about-section-container');

    if (!aboutSectionContainer) return;

    const aboutSectionHTML = `
        <section id="about" class="about-section py-16 sm:py-20 lg:py-24 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll">About GCCL</h2>
                    <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                        A premier celebrity cricket league bringing together stars from entertainment and sports
                    </p>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <!-- Left Column: Image -->
                    <div class="animate-on-scroll">
                        <div class="relative">
                            <img 
                                src="https://media.gettyimages.com/id/531153600/photo/cricket-players-taking-selfie-in-dugout-on-field.jpg?s=612x612&w=0&k=20&c=97A6wRNWw-2Q3e85iW_BvJLmgYS9F7-OQCLVm3PIdEY=" 
                                alt="GCCL Event" 
                                class="w-full h-auto rounded-xl shadow-2xl"
                            />
                            <div class="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                                <p class="text-xl font-bold">Est. 2023</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Column: Content -->
                    <div class="animate-on-scroll">
                        <h3 class="text-2xl sm:text-3xl font-bold mb-6 text-primary">Our Story</h3>
                        <p class="text-gray-700 mb-6">
                            The Global Celebrity Cricket League (GCCL) was founded in 2023 with a vision to blend the glamour of entertainment with the excitement of cricket. Bringing together celebrities from various fields – movies, music, sports, and more – GCCL creates a unique sporting spectacle that captivates audiences worldwide.
                        </p>
                        <p class="text-gray-700 mb-6">
                            Our inaugural tournament in Dallas, Texas marked the beginning of a new era in celebrity cricket, featuring teams from India and Pakistan. With sold-out crowds and millions of viewers worldwide, GCCL established itself as a premier entertainment cricket property.
                        </p>
                        
                        <!-- Stats -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                            <div class="text-center">
                                <p class="text-3xl font-bold text-primary">12+</p>
                                <p class="text-gray-600">Celebrities</p>
                            </div>
                            <div class="text-center">
                                <p class="text-3xl font-bold text-primary">2</p>
                                <p class="text-gray-600">Countries</p>
                            </div>
                            <div class="text-center">
                                <p class="text-3xl font-bold text-primary">15K+</p>
                                <p class="text-gray-600">Live Audience</p>
                            </div>
                            <div class="text-center">
                                <p class="text-3xl font-bold text-primary">3.5M+</p>
                                <p class="text-gray-600">Viewers</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Vision and Mission -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    <div class="bg-gray-50 p-8 rounded-xl shadow-lg animate-on-scroll">
                        <div class="flex items-center mb-4">
                            <div class="bg-primary text-white p-3 rounded-full mr-4">
                                <i class="fas fa-eye text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold">Our Vision</h3>
                        </div>
                        <p class="text-gray-700">
                            To create the world's most exciting celebrity cricket property that transcends boundaries, bringing together diverse cultures through the shared love of cricket and entertainment.
                        </p>
                    </div>
                    
                    <div class="bg-gray-50 p-8 rounded-xl shadow-lg animate-on-scroll">
                        <div class="flex items-center mb-4">
                            <div class="bg-primary text-white p-3 rounded-full mr-4">
                                <i class="fas fa-bullseye text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold">Our Mission</h3>
                        </div>
                        <p class="text-gray-700">
                            To deliver unparalleled cricket entertainment featuring global celebrities, while fostering cultural exchange and creating unforgettable experiences for fans around the world.
                        </p>
                    </div>
                </div>
                
                <!-- Cities and Venues -->
                <div class="mt-20 animate-on-scroll">
                    <h3 class="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Venues</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="city-card relative overflow-hidden">
                            <img src="https://media.gettyimages.com/id/148465920/photo/cricket-stadium-in-dallas.jpg?s=612x612&w=0&k=20&c=aNO3E9JMv_1LqcUSvZ5C1CZkFFuWGcByOUiMqpC2knw=" alt="Dallas" class="w-full h-48 object-cover rounded-t-lg">
                            <div class="p-4">
                                <h4 class="text-xl font-bold mb-1">Dallas, TX</h4>
                                <p class="text-gray-600 mb-2">USA</p>
                                <p class="text-sm text-gray-700">Home of the inaugural GCCL tournament in 2023</p>
                            </div>
                        </div>
                        
                        <div class="city-card relative overflow-hidden">
                            <img src="https://media.gettyimages.com/id/1445953716/photo/jpmca-cricket-association-stadium-in-miami-florida-will-host-matches-during-the-2024-t20-world.jpg?s=612x612&w=0&k=20&c=_gFzfvVe0zEcjxF5PwdtQ9vNL8vZjXwpExdEYFrg0xc=" alt="Miami" class="w-full h-48 object-cover rounded-t-lg">
                            <div class="p-4">
                                <h4 class="text-xl font-bold mb-1">Miami, FL</h4>
                                <p class="text-gray-600 mb-2">USA</p>
                                <p class="text-sm text-gray-700">Upcoming venue for GCCL 2024</p>
                            </div>
                        </div>
                        
                        <div class="city-card relative overflow-hidden">
                            <img src="https://media.gettyimages.com/id/957818356/photo/the-brooklyn-bridge-downtown-manhattan-and-the-world-trade-center-in-the-winter-with-many.jpg?s=612x612&w=0&k=20&c=GXKNhh5RIFj07n1FEYIxo2m4c2w1xPzMb2Kk8QXC1zw=" alt="New York" class="w-full h-48 object-cover rounded-t-lg">
                            <div class="p-4">
                                <h4 class="text-xl font-bold mb-1">New York, NY</h4>
                                <p class="text-gray-600 mb-2">USA</p>
                                <p class="text-sm text-gray-700">Future expansion location for 2025</p>
                            </div>
                        </div>
                        
                        <div class="city-card relative overflow-hidden">
                            <img src="https://media.gettyimages.com/id/937024376/photo/aerial-view-of-los-angeles-downtown-skyline-at-sunset.jpg?s=612x612&w=0&k=20&c=4kZfTmIFDJ-wTOz0zwOdscn3M-aGYKkD_HS9NlB7XAg=" alt="Los Angeles" class="w-full h-48 object-cover rounded-t-lg">
                            <div class="p-4">
                                <h4 class="text-xl font-bold mb-1">Los Angeles, CA</h4>
                                <p class="text-gray-600 mb-2">USA</p>
                                <p class="text-sm text-gray-700">Planned venue for 2025 season</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Set the HTML
    aboutSectionContainer.innerHTML = aboutSectionHTML;
    
    // Initialize animations
    setupAboutAnimations();
}

// Setup animations for about section
function setupAboutAnimations() {
    // Observe elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add hover effects for city cards
    const cityCards = document.querySelectorAll('.city-card');
    cityCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow-xl');
            const image = card.querySelector('img');
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow-xl');
            const image = card.querySelector('img');
            image.style.transform = 'scale(1)';
        });
    });
}

// Initialize the about section when DOM content is loaded
document.addEventListener('DOMContentLoaded', createAboutSection); 