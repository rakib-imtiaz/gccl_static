// Hero Section component
function createHeroSection() {
    const heroSectionContainer = document.getElementById('hero-section-container');

    if (!heroSectionContainer) return;

    const heroSectionHTML = `
        <section class="hero-section relative min-h-[100vh] flex items-center justify-center overflow-hidden">
            <!-- Background Gradient instead of video -->
            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-900 to-purple-800">
                <div class="absolute inset-0 bg-black opacity-30"></div>
            </div>

            <!-- Content with Parallax -->
            <div class="hero-content relative z-10 w-full">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div class="max-w-4xl mx-auto">
                        <!-- Logo with Parallax -->
                        <div class="flex justify-center mb-8 animate-on-scroll">
                            <!-- Using the favicon as fallback -->
                            <div class="bg-white p-4 rounded-full shadow-2xl">
                                <img
                                    src="./assets/logos/favicon/favicon-32x32.png"
                                    alt="GCCL Logo"
                                    class="hero-logo w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
                                />
                            </div>
                        </div>

                        <h1
                            class="hero-title text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-white mb-4 sm:mb-6 leading-[1.2] text-center drop-shadow-lg animate-on-scroll"
                        >
                            Global Celebrity
                            <br />
                            Cricket League
                        </h1>

                        <p
                            class="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-gray-200 mb-8 sm:mb-10 max-w-[90%] mx-auto leading-relaxed text-center drop-shadow-md animate-on-scroll"
                        >
                            The premier exhibition cricket league in the USA, bringing together celebrities and cricket stars from around the world.
                        </p>

                        <!-- Next Match Info Card -->
                        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-8 shadow-xl border border-white border-opacity-20 animate-on-scroll">
                            <h3 class="text-white text-2xl font-bold mb-4 text-center">Next Match: Coming May 2025</h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                <div class="text-center">
                                    <div class="font-bold text-xl text-white">Pakistan</div>
                                    <div class="text-gray-300">2023 Champions</div>
                                </div>
                                <div class="text-center text-white text-2xl font-bold">VS</div>
                                <div class="text-center">
                                    <div class="font-bold text-xl text-white">India</div>
                                    <div class="text-gray-300">2023 Runners-up</div>
                                </div>
                            </div>
                        </div>

                        <!-- CTA Buttons -->
                        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-on-scroll">
                            <a href="#" class="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold text-lg shadow-xl transform transition hover:scale-105">
                                View Schedule
                            </a>
                            <a href="#" class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl transform transition hover:scale-105">
                                Team Profiles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    heroSectionContainer.innerHTML = heroSectionHTML;
    setupHeroAnimations();
}

// Setup animations and interactions
function setupHeroAnimations() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element, index) => {
        element.classList.add('opacity-0');
        element.style.transitionDelay = `${index * 0.2}s`;

        setTimeout(() => {
            element.classList.remove('opacity-0');
            element.classList.add('animated');
        }, 100 + (index * 200));
    });
}

// Initialize the hero section when DOM content is loaded
createHeroSection(); 