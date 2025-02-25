// Footer component
function createFooter() {
    const footerContainer = document.getElementById('footer-container');

    if (!footerContainer) return;

    const currentYear = new Date().getFullYear();

    const footerHTML = `
        <footer class="site-footer bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <!-- Logo and About -->
                    <div class="col-span-1 md:col-span-1 lg:col-span-1">
                        <div class="flex items-center mb-4">
                            <img 
                                src="./assets/logos/logo_gccl.png" 
                                alt="GCCL Logo" 
                                class="h-12 w-auto mr-3"
                            />
                            <span class="text-xl font-bold">GCCL</span>
                        </div>
                        
                        <p class="text-gray-400 text-sm mb-4">
                            The premier exhibition cricket league bringing together celebrities and cricket stars from around the world.
                        </p>
                        
                        <!-- Social Links -->
                        <div class="flex space-x-4 mt-4">
                            <a 
                                href="https://www.facebook.com/profile.php?id=100087213848585" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="social-link"
                                aria-label="Facebook"
                            >
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a 
                                href="https://www.instagram.com/plastic_people_production/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="social-link"
                                aria-label="Instagram"
                            >
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a 
                                href="https://twitter.com/gccl" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="social-link"
                                aria-label="Twitter"
                            >
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a 
                                href="https://www.youtube.com/gccl" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="social-link"
                                aria-label="YouTube"
                            >
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Quick Links -->
                    <div class="col-span-1">
                        <h3 class="text-lg font-semibold mb-4 footer-heading">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><a href="index.html" class="footer-link">Home</a></li>
                            <li><a href="players.html" class="footer-link">Players</a></li>
                            <li><a href="matches.html" class="footer-link">Matches</a></li>
                            <li><a href="media.html" class="footer-link">Media</a></li>
                            <li><a href="shop.html" class="footer-link">Shop</a></li>
                        </ul>
                    </div>
                    
                    <!-- Legal -->
                    <div class="col-span-1">
                        <h3 class="text-lg font-semibold mb-4 footer-heading">Legal</h3>
                        <ul class="space-y-2">
                            <li><a href="privacy.html" class="footer-link">Privacy Policy</a></li>
                            <li><a href="terms.html" class="footer-link">Terms of Service</a></li>
                            <li><a href="cookies.html" class="footer-link">Cookie Policy</a></li>
                        </ul>
                    </div>
                    
                    <!-- Contact Us -->
                    <div class="col-span-1">
                        <h3 class="text-lg font-semibold mb-4 footer-heading">Contact Us</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li class="flex items-start">
                                <i class="fas fa-map-marker-alt mt-1 mr-3 text-primary-500"></i>
                                <span>Dallas, TX, United States</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-envelope mt-1 mr-3 text-primary-500"></i>
                                <span>info@gcclcricket.com</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-phone-alt mt-1 mr-3 text-primary-500"></i>
                                <span>+1 (555) 123-4567</span>
                            </li>
                        </ul>
                        
                        <!-- Newsletter -->
                        <div class="mt-6">
                            <h4 class="text-sm font-semibold mb-2">Subscribe to our Newsletter</h4>
                            <div class="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    class="bg-gray-800 text-white px-3 py-2 text-sm rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                <button 
                                    class="bg-primary-500 hover:bg-primary-600 px-3 py-2 rounded-r-md transition duration-300"
                                >
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Divider -->
                <div class="border-t border-gray-800 my-8"></div>
                
                <!-- Bottom Footer -->
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-sm text-gray-500 mb-4 md:mb-0">
                        &copy; ${currentYear} Global Celebrity Cricket League. All Rights Reserved.
                    </div>
                    
                    <div class="flex space-x-4">
                        <img 
                            src="./assets/images/payment-visa.png" 
                            alt="Visa" 
                            class="h-8"
                        >
                        <img 
                            src="./assets/images/payment-mastercard.png" 
                            alt="Mastercard" 
                            class="h-8"
                        >
                        <img 
                            src="./assets/images/payment-paypal.png" 
                            alt="PayPal" 
                            class="h-8"
                        >
                    </div>
                </div>
            </div>
        </footer>
    `;

    // Set the HTML
    footerContainer.innerHTML = footerHTML;

    // Setup animations and interactivity
    setupFooterAnimations();
}

// Animation and Interactivity for the Footer
function setupFooterAnimations() {
    // Social link hover effects
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)';
            link.style.color = 'var(--color-primary)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            link.style.color = 'white';
        });
    });

    // Footer link hover effects
    const footerLinks = document.querySelectorAll('.footer-link');

    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.paddingLeft = '8px';
            link.style.color = 'var(--color-primary)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.paddingLeft = '0';
            link.style.color = 'rgb(156, 163, 175)';
        });
    });

    // Heading animation
    const footerHeadings = document.querySelectorAll('.footer-heading');

    footerHeadings.forEach(heading => {
        heading.addEventListener('mouseenter', () => {
            heading.style.color = 'var(--color-primary)';
        });

        heading.addEventListener('mouseleave', () => {
            heading.style.color = 'white';
        });
    });

    // Newsletter submit animation
    const newsletterButton = document.querySelector('.footer-newsletter-button');

    if (newsletterButton) {
        newsletterButton.addEventListener('click', (e) => {
            e.preventDefault();
            const input = document.querySelector('input[type="email"]');
            if (input.value.trim() !== '') {
                // Show success message
                alert('Thank you for subscribing to our newsletter!');
                input.value = '';
            } else {
                // Show error message
                alert('Please enter your email address.');
            }
        });
    }
}

// Initialize the footer
document.addEventListener('DOMContentLoaded', createFooter); 