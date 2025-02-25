// Participants Section Component
function createParticipantsSection() {
    const participantsSectionContainer = document.getElementById('participants-section-container');

    if (!participantsSectionContainer) return;

    const participantsSectionHTML = `
        <section class="participants-section py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-indigo-100 to-purple-100">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12 sm:mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll">2023 Participants</h2>
                    <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                        The inaugural GCCL event featured celebrity cricket stars from India and Pakistan in Dallas, Texas.
                    </p>
                    <div class="mt-4 inline-block px-6 py-2 bg-indigo-700 text-white rounded-full font-semibold animate-on-scroll">
                        <span class="mr-2">GCCL SLOGAN:</span>
                        <span class="italic">"Give Battle, Compete, Conduct & Land"</span>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    <!-- Team India Section -->
                    <div class="team-section animate-on-scroll">
                        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div class="p-6 text-center border-b border-gray-200 flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="India Flag" class="h-8 mr-3">
                                <div>
                                    <h3 class="text-2xl sm:text-3xl font-bold text-indigo-800">Team India</h3>
                                    <p class="text-gray-600">2023 Runners-up</p>
                                </div>
                            </div>
                            
                            <!-- Swiper for Team India -->
                            <div class="swiper indiaSwiper">
                                <div class="swiper-wrapper">
                                    <!-- India Player 1 -->
                                    <div class="swiper-slide">
                                        <div class="aspect-[3/4] relative overflow-hidden">
                                            <img src="https://media.gettyimages.com/id/908156394/photo/shah-rukh-khan-during-the-kolkata-knight-riders-team-celebration-at-eden-gardens-in-kolkata.jpg?s=612x612&w=0&k=20&c=lU-6JdJUn5BkF3vFcdXVXM-ZDZh4Ou1nRO9JgE5N13c=" alt="Shah Rukh Khan" class="absolute inset-0 w-full h-full object-cover">
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80 flex items-end justify-center">
                                                <div class="text-center p-4">
                                                    <h4 class="text-xl font-bold text-white">Shah Rukh Khan</h4>
                                                    <p class="text-blue-200">Actor & KKR Owner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- India Player 2 -->
                                    <div class="swiper-slide">
                                        <div class="aspect-[3/4] relative overflow-hidden">
                                            <img src="https://media.gettyimages.com/id/1235866976/photo/kapil-sharma-during-promotions-of-a-web-series-at-jw-marriott-juhu-on-february-28-2021-in.jpg?s=612x612&w=0&k=20&c=EbOxPKlMtGUaYGvYaNnJQJT-aIRvynZF9QiVYN3XGR8=" alt="Kapil Sharma" class="absolute inset-0 w-full h-full object-cover">
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80 flex items-end justify-center">
                                                <div class="text-center p-4">
                                                    <h4 class="text-xl font-bold text-white">Kapil Sharma</h4>
                                                    <p class="text-blue-200">Comedian & Cricket Fan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- India Player 3 -->
                                    <div class="swiper-slide">
                                        <div class="aspect-[3/4] relative overflow-hidden">
                                            <img src="https://media.gettyimages.com/id/1345800709/photo/ms-dhoni-poses-during-chennai-super-kings-official-team-photocall-at-the-taj-west-end-hotel-on.jpg?s=612x612&w=0&k=20&c=HWd8dHJqsH_-Gb4aBRuHzOWPV0iXlBQcahrXi5vKLRY=" alt="MS Dhoni" class="absolute inset-0 w-full h-full object-cover">
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80 flex items-end justify-center">
                                                <div class="text-center p-4">
                                                    <h4 class="text-xl font-bold text-white">MS Dhoni</h4>
                                                    <p class="text-blue-200">Former Indian Captain</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Team Pakistan Section -->
                    <div class="team-section animate-on-scroll">
                        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div class="p-6 text-center border-b border-gray-200 flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1200px-Flag_of_Pakistan.svg.png" alt="Pakistan Flag" class="h-8 mr-3">
                                <div>
                                    <h3 class="text-2xl sm:text-3xl font-bold text-green-800">Team Pakistan</h3>
                                    <p class="text-gray-600">2023 Champions</p>
                                </div>
                            </div>
                            
                            <!-- Swiper for Team Pakistan -->
                            <div class="swiper pakistanSwiper">
                                <div class="swiper-wrapper">
                                    <!-- Pakistan Player 1 -->
                                    <div class="swiper-slide">
                                        <div class="aspect-[3/4] relative overflow-hidden">
                                            <img src="https://media.gettyimages.com/id/1370422665/photo/actor-humayun-saeed-pictured-at-a-press-conference-in-karachi-on-january-19-2022.jpg?s=612x612&w=0&k=20&c=0QSsUMDJ2mAaZtw_dBLRCngRPz2ZxGyujcCdm9fWiUc=" alt="Humayun Saeed" class="absolute inset-0 w-full h-full object-cover">
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/80 flex items-end justify-center">
                                                <div class="text-center p-4">
                                                    <h4 class="text-xl font-bold text-white">Humayun Saeed</h4>
                                                    <p class="text-green-200">Actor & Cricketer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Pakistan Player 2 -->
                                    <div class="swiper-slide">
                                        <div class="aspect-[3/4] relative overflow-hidden">
                                            <img src="https://media.gettyimages.com/id/1237946571/photo/pakistani-singer-atif-aslam-performs-in-a-concert-in-dhaka-on-february-15-2020.jpg?s=612x612&w=0&k=20&c=_BwAp-j-e6ZrMQ6UrOYJIPgF1A9x3r58sSwTmTWqFAU=" alt="Atif Aslam" class="absolute inset-0 w-full h-full object-cover">
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/80 flex items-end justify-center">
                                                <div class="text-center p-4">
                                                    <h4 class="text-xl font-bold text-white">Atif Aslam</h4>
                                                    <p class="text-green-200">Singer & Cricket Enthusiast</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Pakistan Player 3 -->
                                    <div class="swiper-slide">
                                        <div class="aspect-[3/4] relative overflow-hidden">
                                            <img src="https://media.gettyimages.com/id/458121050/photo/shahid-afridi-of-pakistan-walks-through-the-room-during-a-press-conference-at-the-westin.jpg?s=612x612&w=0&k=20&c=h_JyCcCRbZuZxw8OmKsgEWu17vZz-R17jBqbBmwm4tM=" alt="Shahid Afridi" class="absolute inset-0 w-full h-full object-cover">
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/80 flex items-end justify-center">
                                                <div class="text-center p-4">
                                                    <h4 class="text-xl font-bold text-white">Shahid Afridi</h4>
                                                    <p class="text-green-200">Former Pakistan Captain</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center animate-on-scroll">
                    <a href="#" class="inline-block px-8 py-3 bg-indigo-700 text-white rounded-lg font-bold hover:bg-indigo-800 transition-colors duration-300">
                        View All Participants
                    </a>
                </div>
            </div>
        </section>
    `;

    // Set the HTML
    participantsSectionContainer.innerHTML = participantsSectionHTML;
    
    // Initialize Swiper and setup animations
    setupParticipantsSliders();
}

// Setup Swiper sliders and animations
function setupParticipantsSliders() {
    // Initialize India Team Swiper
    const indiaSwiper = new Swiper('.indiaSwiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.indiaSwiper .swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    // Initialize Pakistan Team Swiper
    const pakistanSwiper = new Swiper('.pakistanSwiper', {
        autoplay: {
            delay: 3500, // Slightly different timing for visual interest
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.pakistanSwiper .swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    // Add hover pause functionality
    const swiperContainers = document.querySelectorAll('.swiper');
    swiperContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            const swiperInstance = container.swiper;
            if (swiperInstance && swiperInstance.autoplay) {
                swiperInstance.autoplay.stop();
            }
        });
        
        container.addEventListener('mouseleave', () => {
            const swiperInstance = container.swiper;
            if (swiperInstance && swiperInstance.autoplay) {
                swiperInstance.autoplay.start();
            }
        });
    });
}

// Initialize the participants section when DOM content is loaded
document.addEventListener('DOMContentLoaded', createParticipantsSection); 