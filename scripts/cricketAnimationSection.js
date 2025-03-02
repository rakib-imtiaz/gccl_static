// Cricket Animation Section with 3D Parallax Effects
function createCricketAnimationSection() {
    const container = document.getElementById('cricket-animation-section-container');
    if (!container) return;

    // Create the animation section HTML structure
    const sectionHtml = `
        <section class="cricket-animation-section relative overflow-hidden h-screen" style="perspective: 1000px;">
            <!-- Background Field with Parallax -->
            <div class="parallax-bg absolute inset-0 z-0" 
                 style="background-image: url('./assets/animation_assets/cricket_field.jpg'); 
                        background-size: cover; 
                        background-position: center;
                        transform: translateZ(-100px) scale(1.1);">
            </div>
            
            <!-- Particle effect container for depth -->
            <div class="particles-container absolute inset-0 z-5 pointer-events-none"></div>
            
            <!-- Title with 3D Animation -->
            <div class="section-title absolute top-10 left-0 right-0 text-center z-30 transform-gpu">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white shadow-text animate-title">
                    CRICKET <span class="text-primary-500">IN ACTION</span>
                </h2>
                <p class="mt-4 text-xl text-white max-w-2xl mx-auto px-4 shadow-text animate-subtitle">
                    Experience the excitement of cricket with our interactive display
                </p>
            </div>
            
            <!-- Animation Elements Container -->
            <div class="animation-container absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                <!-- 3D Cricket Bat -->
                <div class="cricket-bat-container absolute transform-gpu" 
                     style="right: 15%; top: 30%; transform: translateZ(50px) rotateY(-15deg);">
                    <img src="./assets/animation_assets/cricket_bat.png" 
                         alt="Cricket Bat" 
                         class="w-24 md:w-32 lg:w-40 object-contain bat-shadow" 
                         style="transform-origin: bottom center;">
                    <div class="bat-trail absolute inset-0 opacity-0 pointer-events-none"></div>
                </div>
                
                <!-- Animated Cricket Ball -->
                <div class="cricket-ball-container absolute transform-gpu" 
                     style="left: 25%; top: 40%; transform: translateZ(150px);">
                    <img src="./assets/animation_assets/cricket_ball.gif" 
                         alt="Cricket Ball" 
                         class="w-16 md:w-20 lg:w-24 object-contain ball-shadow">
                    <div class="ball-trail absolute inset-0 opacity-0 pointer-events-none"></div>
                </div>
                
                <!-- Cricket Player with Parallax -->
                <div class="cricket-player-container absolute bottom-0 left-0 right-0 flex justify-center transform-gpu">
                    <img src="./assets/animation_assets/cricket_player.png" 
                         alt="Cricket Player" 
                         class="h-3/4 object-contain player-shadow"
                         style="transform: translateZ(100px);">
                </div>
                
                <!-- Interactive Elements -->
                <div class="interactive-elements absolute inset-0 z-15">
                    <!-- Floating stats that appear on scroll -->
                    <div class="stat-card absolute top-1/4 left-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white opacity-0 transform translate-y-10">
                        <div class="text-lg font-bold">Top Speed</div>
                        <div class="text-3xl font-bold">150 KPH</div>
                    </div>
                    
                    <div class="stat-card absolute top-1/3 right-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white opacity-0 transform translate-y-10">
                        <div class="text-lg font-bold">Matches</div>
                        <div class="text-3xl font-bold">24</div>
                    </div>
                    
                    <div class="stat-card absolute bottom-1/3 left-1/3 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white opacity-0 transform translate-y-10">
                        <div class="text-lg font-bold">Century</div>
                        <div class="text-3xl font-bold">12</div>
                    </div>
                </div>
            </div>
            
            <!-- Dynamic Light Effect -->
            <div class="light-effect absolute top-0 left-0 w-full h-full pointer-events-none z-15 opacity-30"></div>
            
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20 pointer-events-none"></div>
            
            <!-- Call to Action -->
            <div class="cta-container absolute bottom-20 left-0 right-0 text-center z-30 transform-gpu"
                 style="transform: translateZ(80px);">
                <a href="#next-match-section-container" 
                   class="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
                    Watch Them Play
                </a>
            </div>
            
            <!-- Mouse Scroll Indicator -->
            <div class="scroll-indicator absolute bottom-10 left-0 right-0 flex justify-center z-30">
                <div class="w-8 h-12 border-2 border-white rounded-full flex justify-center">
                    <div class="scroll-dot w-2 h-2 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    `;

    // Set the HTML
    container.innerHTML = sectionHtml;

    // Add custom CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .cricket-animation-section {
            perspective: 1000px;
        }
        
        .shadow-text {
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .bat-shadow, .ball-shadow, .player-shadow {
            filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.3));
        }
        
        /* Scroll Dot Animation */
        .scroll-dot {
            animation: scrollAnim 1.5s infinite;
        }
        
        @keyframes scrollAnim {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(6px); opacity: 0.5; }
            100% { transform: translateY(0); opacity: 1; }
        }
        
        /* Ball Floating Animation */
        .cricket-ball-container {
            animation: floatBall 3s ease-in-out infinite;
        }
        
        @keyframes floatBall {
            0% { transform: translateZ(150px) translateY(0); }
            50% { transform: translateZ(150px) translateY(-15px); }
            100% { transform: translateZ(150px) translateY(0); }
        }
        
        /* Bat Swing Animation (triggered on scroll) */
        .cricket-bat-container {
            transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .cricket-bat-container.swing {
            transform: translateZ(50px) rotateY(-15deg) rotateZ(-30deg) !important;
        }
        
        /* Bat trail effect */
        .bat-trail.active {
            opacity: 0.7;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: batTrail 0.5s ease-out forwards;
        }
        
        @keyframes batTrail {
            0% { transform: scaleX(0) translateX(0); opacity: 0.7; }
            100% { transform: scaleX(2) translateX(50px); opacity: 0; }
        }
        
        /* Ball trail effect */
        .ball-trail.active {
            opacity: 0.6;
            background: radial-gradient(circle, rgba(255,0,0,0.2) 0%, transparent 70%);
            animation: ballTrail 0.6s ease-out forwards;
        }
        
        @keyframes ballTrail {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(3); opacity: 0; }
        }
        
        /* Stats cards animation */
        .stat-card {
            transition: opacity 0.8s ease, transform 0.8s ease;
            box-shadow: 0 0 20px rgba(255,255,255,0.1);
        }
        
        .stat-card.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Light effect animation */
        .light-effect {
            background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 70%);
            transition: all 0.3s ease-out;
        }
        
        /* Particle animation */
        .particle {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            animation: particleFade 3s ease-out forwards;
        }
        
        @keyframes particleFade {
            0% { opacity: 0.7; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(-100px) scale(0.1); }
        }
        
        /* Title animations */
        .animate-title {
            animation: fadeInUp 1s ease forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        .animate-subtitle {
            animation: fadeInUp 1s ease 0.3s forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Initialize animations
    setupCricketAnimations();
}

// Handle scroll animations and parallax effects
function setupCricketAnimations() {
    const section = document.querySelector('.cricket-animation-section');
    if (!section) return;
    
    const parallaxBg = document.querySelector('.parallax-bg');
    const cricketBat = document.querySelector('.cricket-bat-container');
    const batTrail = document.querySelector('.bat-trail');
    const cricketBall = document.querySelector('.cricket-ball-container');
    const ballTrail = document.querySelector('.ball-trail');
    const cricketPlayer = document.querySelector('.cricket-player-container');
    const sectionTitle = document.querySelector('.section-title');
    const ctaContainer = document.querySelector('.cta-container');
    const lightEffect = document.querySelector('.light-effect');
    const particlesContainer = document.querySelector('.particles-container');
    const statCards = document.querySelectorAll('.stat-card');

    // Create particles for depth effect
    function createParticles(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                if (!particlesContainer) return;
                
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 2-6px
                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Set z-index for 3D effect
                const zDepth = Math.random() * 200 - 100;
                particle.style.transform = `translateZ(${zDepth}px)`;
                
                particlesContainer.appendChild(particle);
                
                // Remove particle after animation completes
                setTimeout(() => {
                    if (particle && particle.parentNode === particlesContainer) {
                        particlesContainer.removeChild(particle);
                    }
                }, 3000);
            }, i * 200); // Staggered creation
        }
    }

    // Initial particles
    createParticles(15);
    
    // Create particles periodically
    const particleInterval = setInterval(() => createParticles(5), 2000);

    // Mouse move parallax effect with enhanced 3D
    section.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) - 0.5;
        const y = (clientY / window.innerHeight) - 0.5;
        
        // Apply 3D rotation to the section based on mouse position
        section.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;
        
        // Move elements based on mouse position with different intensities for 3D effect
        parallaxBg.style.transform = `translateZ(-100px) scale(1.1) translate(${x * -20}px, ${y * -20}px)`;
        cricketBat.style.transform = `translateZ(50px) rotateY(${-15 + (x * 15)}deg) rotateX(${y * 5}deg) translate(${x * 40}px, ${y * 30}px)`;
        cricketBall.style.transform = `translateZ(150px) translate(${x * 80}px, ${y * 40}px)`;
        cricketPlayer.style.transform = `translateZ(100px) translate(${x * 30}px, ${y * 10}px) rotateY(${x * 5}deg)`;
        sectionTitle.style.transform = `translateZ(70px) translate(${x * 20}px, ${y * 15}px)`;
        ctaContainer.style.transform = `translateZ(80px) translate(${x * 15}px, ${y * 10}px)`;
        
        // Dynamic lighting effect
        lightEffect.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(255,255,255,0.4) 0%, transparent 70%)`;
    });

    // Reset transform when mouse leaves
    section.addEventListener('mouseleave', () => {
        section.style.transform = 'rotateY(0deg) rotateX(0deg)';
        parallaxBg.style.transform = 'translateZ(-100px) scale(1.1)';
        cricketBat.style.transform = 'translateZ(50px) rotateY(-15deg)';
        cricketBall.style.transform = 'translateZ(150px)';
        cricketPlayer.style.transform = 'translateZ(100px)';
        sectionTitle.style.transform = 'translateZ(70px)';
        ctaContainer.style.transform = 'translateZ(80px)';
        lightEffect.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 70%)';
    });

    // Add interactive click effects
    section.addEventListener('click', (e) => {
        // Create expanding circle effect at click position
        const circle = document.createElement('div');
        circle.style.position = 'absolute';
        circle.style.left = `${e.clientX - section.getBoundingClientRect().left}px`;
        circle.style.top = `${e.clientY - section.getBoundingClientRect().top}px`;
        circle.style.width = '20px';
        circle.style.height = '20px';
        circle.style.borderRadius = '50%';
        circle.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)';
        circle.style.transform = 'translate(-50%, -50%)';
        circle.style.zIndex = '25';
        circle.style.pointerEvents = 'none';
        circle.style.animation = 'ripple 1s ease-out forwards';
        
        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            @keyframes ripple {
                0% { opacity: 1; width: 20px; height: 20px; }
                100% { opacity: 0; width: 300px; height: 300px; }
            }
        `;
        document.head.appendChild(rippleStyle);
        
        section.appendChild(circle);
        
        // Remove the effect after animation
        setTimeout(() => {
            if (circle.parentNode === section) {
                section.removeChild(circle);
            }
            document.head.removeChild(rippleStyle);
        }, 1000);
        
        // Trigger bat swing on click
        triggerBatSwing();
    });

    // Function to trigger bat swing animation with enhanced effects
    function triggerBatSwing() {
        if (!cricketBat.classList.contains('swing')) {
            // Add swing class to cricket bat
            cricketBat.classList.add('swing');
            
            // Activate bat trail effect
            batTrail.classList.add('active');
            
            // Add ball movement animation
            cricketBall.style.transition = 'transform 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
            cricketBall.style.transform = 'translateZ(150px) translate(100px, -50px) rotate(720deg)';
            
            // Activate ball trail effect
            setTimeout(() => {
                ballTrail.classList.add('active');
            }, 100);
            
            // Reset after animation
            setTimeout(() => {
                cricketBat.classList.remove('swing');
                batTrail.classList.remove('active');
                cricketBall.style.transition = 'transform 0.3s ease-out';
                cricketBall.style.transform = 'translateZ(150px)';
                ballTrail.classList.remove('active');
                
                // Create "hit" particles
                createHitParticles();
            }, 800);
        }
    }

    // Create particles when bat hits ball
    function createHitParticles() {
        const ballPosition = cricketBall.getBoundingClientRect();
        const sectionPosition = section.getBoundingClientRect();
        
        const centerX = ballPosition.left - sectionPosition.left + ballPosition.width / 2;
        const centerY = ballPosition.top - sectionPosition.top + ballPosition.height / 2;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size
            const size = Math.random() * 5 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Position at ball center
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            
            // Random angle and distance
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            // Animation
            particle.style.animation = `none`;
            particle.style.opacity = '0.7';
            
            // Add to container
            particlesContainer.appendChild(particle);
            
            // Trigger animation
            setTimeout(() => {
                particle.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
                particle.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${Math.random() * 100}px) scale(0.1)`;
                particle.style.opacity = '0';
            }, 0);
            
            // Remove after animation
            setTimeout(() => {
                if (particle.parentNode === particlesContainer) {
                    particlesContainer.removeChild(particle);
                }
            }, 800);
        }
    }

    // Scroll-based animations
    let batSwung = false;
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Calculate how far through the section the user has scrolled
        const scrollProgress = (scrollPosition - (sectionTop - windowHeight)) / (sectionHeight + windowHeight);
        
        if (scrollProgress > 0.3 && scrollProgress < 0.8) {
            // Trigger bat swing animation when scrolled to certain point
            if (!batSwung) {
                triggerBatSwing();
                batSwung = true;
                
                // Reset after delay
                setTimeout(() => {
                    batSwung = false;
                }, 1500);
            }
            
            // Show stat cards with staggered delay
            statCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200);
            });
        } else {
            // Hide stat cards when scrolled away
            statCards.forEach(card => {
                card.classList.remove('visible');
            });
        }
        
        // Parallax scrolling effects
        if (scrollProgress >= 0 && scrollProgress <= 1) {
            // Different elements move at different rates as user scrolls
            parallaxBg.style.transform = `translateZ(-100px) scale(1.1) translateY(${scrollProgress * 50}px)`;
            sectionTitle.style.transform = `translateZ(70px) translateY(${scrollProgress * -30}px)`;
            ctaContainer.style.opacity = 1 - scrollProgress * 2;
            cricketPlayer.style.transform = `translateZ(100px) translateY(${scrollProgress * 20}px)`;
        }
    });

    // Create Intersection Observer for animations when section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reset and prepare animations when section enters viewport
                section.style.transform = 'rotateY(0deg) rotateX(0deg)';
                parallaxBg.style.transform = 'translateZ(-100px) scale(1.1)';
                cricketBat.style.transform = 'translateZ(50px) rotateY(-15deg)';
                cricketBall.style.transform = 'translateZ(150px)';
                cricketPlayer.style.transform = 'translateZ(100px)';
                
                // Create initial particles
                createParticles(30);
                
                // Trigger bat swing after a delay
                setTimeout(() => {
                    triggerBatSwing();
                }, 1000);
            } else {
                // Clear intervals when section is not visible
                clearInterval(particleInterval);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(section);
}

// Export the render function for use in main.js
window.renderCricketAnimationSection = function() {
    createCricketAnimationSection();
};

// Initialize the section when the DOM is loaded
document.addEventListener('DOMContentLoaded', createCricketAnimationSection); 