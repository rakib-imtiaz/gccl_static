// Promoters Section component
function createPromotersSection() {
    const promotersSectionContainer = document.getElementById('promoters-section-container');

    if (!promotersSectionContainer) return;

    const promotersSectionHTML = `
        <section class="promoters-section py-16 sm:py-20 lg:py-24 bg-light-gray">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll">Meet Our Promoters</h2>
                    <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                        The visionaries behind the Global Celebrity Cricket League, bringing cricket stars and celebrities together from around the world.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <!-- Zee Maz Card -->
                    <div class="promoter-card overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 animate-on-scroll">
                        <div class="promoter-image-container h-[240px] sm:h-[280px] md:h-[320px] relative overflow-hidden">
                            <!-- Gradient placeholder instead of image -->
                            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700"></div>
                            <div class="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-white text-6xl">
                                <i class="fas fa-user-tie"></i>
                            </div>
                        </div>
                        
                        <div class="p-6 sm:p-8">
                            <h3 class="text-2xl sm:text-3xl font-bold mb-3">Zee Maz</h3>
                            <p class="text-gray-600 mb-4">Co-Founder & Promoter</p>
                            <p class="text-gray-700 mb-6">
                                "We are very glad to combine the soulful southern Asian countries in our friendly cricket match. We have started it with a smaller version of league match and hope to expand with everyone's support."
                            </p>
                            
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon-link" aria-label="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon-link" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-icon-link" aria-label="LinkedIn">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Tina Card -->
                    <div class="promoter-card overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 animate-on-scroll">
                        <div class="promoter-image-container h-[240px] sm:h-[280px] md:h-[320px] relative overflow-hidden">
                            <!-- Gradient placeholder instead of image -->
                            <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700"></div>
                            <div class="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-white text-6xl">
                                <i class="fas fa-user-tie"></i>
                            </div>
                        </div>
                        
                        <div class="p-6 sm:p-8">
                            <h3 class="text-2xl sm:text-3xl font-bold mb-3">Tina</h3>
                            <p class="text-gray-600 mb-4">Co-Founder & Promoter</p>
                            <p class="text-gray-700 mb-6">
                                "We are hoping with everyone's respect, love and support we can grow this league with all the southern Asian countries participating in our GCCL league and make it a success worldwide."
                            </p>
                            
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon-link" aria-label="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon-link" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-icon-link" aria-label="LinkedIn">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-16 text-center">
                    <div class="inline-block bg-white px-8 py-6 rounded-xl shadow-lg animate-on-scroll">
                        <h3 class="text-xl font-bold mb-4">Plastic People Production Ltd</h3>
                        <p class="text-gray-700">The official production company behind GCCL</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    promotersSectionContainer.innerHTML = promotersSectionHTML;
    setupPromotersAnimations();
}

// Setup animations for promoters section
function setupPromotersAnimations() {
    // Add hover effects to promoter cards
    const promoterCards = document.querySelectorAll('.promoter-card');

    promoterCards.forEach(card => {
        const image = card.querySelector('img');

        if (image) {
            card.addEventListener('mouseenter', () => {
                image.style.transform = 'scale(1.05)';
            });

            card.addEventListener('mouseleave', () => {
                image.style.transform = 'scale(1)';
            });
        }
    });
}

// Initialize the promoters section
createPromotersSection(); 