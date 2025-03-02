// Promoters Section component with improved professional design
function createPromotersSection() {
    const promotersSectionContainer = document.getElementById('promoters-section-container');

    if (!promotersSectionContainer) return;

    const promotersSectionHTML = `
        <section class="promoters-section py-20 sm:py-24 lg:py-28 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 sm:mb-20">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll">Words From Our Promoters</h2>
                    <div class="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
                    <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                        The visionaries behind the Global Celebrity Cricket League, bringing cricket stars and celebrities together from around the world.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                    <!-- Zee Maz Card - Using actual image -->
                    <div class="promoter-card group overflow-hidden rounded-xl bg-white hover:shadow-xl transition-all duration-500 animate-on-scroll">
                        <div class="flex flex-col lg:flex-row">
                            <div class="promoter-image-container lg:w-2/5 relative overflow-hidden">
                                <img src="./assets/images/promoters/zee.jpg" alt="Zee Maz" class="w-full h-full object-cover aspect-square lg:aspect-auto transition-transform duration-700 group-hover:scale-105">
                            </div>
                            
                            <div class="p-8 lg:w-3/5 flex flex-col justify-center">
                                <div class="mb-4">
                                    <h3 class="text-2xl sm:text-3xl font-bold mb-2">Zee Maz</h3>
                                    <p class="text-primary-600 font-medium mb-4">Co-Founder & Promoter</p>
                                    <div class="w-12 h-0.5 bg-gray-200 mb-4"></div>
                                </div>
                                
                                <blockquote class="text-gray-700 mb-6 italic">
                                    "We are very glad to combine the soulful southern Asian countries in our friendly cricket match. We have started it with a smaller version of league match and hope to expand with everyone's support."
                                </blockquote>
                                
                                <div class="mt-auto space-y-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                            <i class="fas fa-envelope text-primary-600 text-sm"></i>
                                        </div>
                                        <a href="mailto:zeemaz@gccl.com" class="text-gray-700 hover:text-primary-600 transition-colors">zeemaz@gccl.com</a>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                            <i class="fas fa-phone text-primary-600 text-sm"></i>
                                        </div>
                                        <span class="text-gray-700">+1 (555) 123-4567</span>
                                    </div>
                                    
                                    <div class="flex space-x-3 mt-4">
                                        <a href="https://www.facebook.com/profile.php?id=100087213848585" target="_blank" class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="Facebook">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="https://www.instagram.com/plastic_people_production/" target="_blank" class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300" aria-label="Instagram">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Tina Card - Using actual image -->
                    <div class="promoter-card group overflow-hidden rounded-xl bg-white hover:shadow-xl transition-all duration-500 animate-on-scroll">
                        <div class="flex flex-col lg:flex-row">
                            <div class="promoter-image-container lg:w-2/5 relative overflow-hidden">
                                <img src="./assets/images/promoters/tina.png" alt="Tina" class="w-full h-full object-cover aspect-square lg:aspect-auto transition-transform duration-700 group-hover:scale-105">
                            </div>
                            
                            <div class="p-8 lg:w-3/5 flex flex-col justify-center">
                                <div class="mb-4">
                                    <h3 class="text-2xl sm:text-3xl font-bold mb-2">Tina</h3>
                                    <p class="text-primary-600 font-medium mb-4">Co-Founder & Promoter</p>
                                    <div class="w-12 h-0.5 bg-gray-200 mb-4"></div>
                                </div>
                                
                                <blockquote class="text-gray-700 mb-6 italic">
                                    "We are hoping with everyone's respect, love and support we can grow this league with all the southern Asian countries participating in our GCCL league and make it a success worldwide."
                                </blockquote>
                                
                                <div class="mt-auto space-y-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                            <i class="fas fa-envelope text-primary-600 text-sm"></i>
                                        </div>
                                        <a href="mailto:tina@gccl.com" class="text-gray-700 hover:text-primary-600 transition-colors">tina@gccl.com</a>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                            <i class="fas fa-phone text-primary-600 text-sm"></i>
                                        </div>
                                        <span class="text-gray-700">+1 (555) 987-6543</span>
                                    </div>
                                    
                                    <div class="flex space-x-3 mt-4">
                                        <a href="https://www.facebook.com/profile.php?id=100087213848585" target="_blank" class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="Facebook">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="https://www.instagram.com/plastic_people_production/" target="_blank" class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300" aria-label="Instagram">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-20 text-center">
                    <div class="inline-block rounded-xl overflow-hidden animate-on-scroll">
                        <div class="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                            <h3 class="text-2xl font-bold mb-3">Plastic People Production Ltd</h3>
                            <p class="text-gray-300 mb-6 max-w-2xl mx-auto">The official production company behind GCCL, committed to bringing the excitement of cricket to audiences worldwide</p>
                            <div class="flex flex-wrap justify-center gap-4">
                                <a href="https://www.facebook.com/profile.php?id=100087213848585" target="_blank" class="flex items-center py-2 px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                    <i class="fab fa-facebook mr-2"></i>
                                    <span>Facebook</span>
                                </a>
                                <a href="https://www.instagram.com/plastic_people_production/" target="_blank" class="flex items-center py-2 px-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-200">
                                    <i class="fab fa-instagram mr-2"></i>
                                    <span>Instagram</span>
                                </a>
                                <a href="mailto:contact@gccl.com" class="flex items-center py-2 px-5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200">
                                    <i class="fas fa-envelope mr-2"></i>
                                    <span>contact@gccl.com</span>
                                </a>
                            </div>
                        </div>
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
    // Add animations for cards
    const promoterCards = document.querySelectorAll('.promoter-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    promoterCards.forEach(card => {
        observer.observe(card);
        
        // Add hover effect
        const image = card.querySelector('img');
        if (image) {
            card.addEventListener('mouseenter', () => {
                image.style.transform = 'scale(1.08)';
                card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            });

            card.addEventListener('mouseleave', () => {
                image.style.transform = 'scale(1.05)'; // Slightly larger than original to keep a subtle hover effect
                card.style.boxShadow = '';
            });
        }
    });
    
    // Add custom styles for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .promoter-card {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
        }
        
        .promoter-image-container img {
            transform-origin: center;
        }
        
        blockquote {
            position: relative;
            padding-left: 1.5rem;
        }
        
        blockquote:before {
            content: '"';
            position: absolute;
            left: 0;
            top: -0.5rem;
            font-size: 2rem;
            color: #e2e8f0;
            font-family: serif;
        }
    `;
    document.head.appendChild(style);
}

// Initialize the promoters section
createPromotersSection(); 