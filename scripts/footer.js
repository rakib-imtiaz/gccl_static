// Footer component
function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer', 'bg-primary', 'text-white');
    
    // Country flags for supported countries
    const countryFlags = [
        { name: "India", code: "IN", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" },
        { name: "Pakistan", code: "PK", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1200px-Flag_of_Pakistan.svg.png" },
        { name: "USA", code: "US", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" },
        { name: "United Arab Emirates", code: "AE", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png" },
        { name: "United Kingdom", code: "GB", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" },
        { name: "Australia", code: "AU", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png" }
    ];
    
    // Payment methods
    const paymentMethods = [
        { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" },
        { name: "MasterCard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" },
        { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" },
        { name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" },
        { name: "Apple Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png" },
        { name: "Google Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/1200px-Google_Pay_Logo_%282020%29.svg.png" }
    ];
    
    // Footer content
    const footerContent = `
        <div class="py-12 sm:py-16 bg-gradient-to-b from-primary to-primary-dark">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div class="flex flex-col">
                        <div class="mb-6">
                            <a href="index.html" class="flex items-center mb-4">
                                <img src="assets/logos/logo_gccl.png" alt="GCCL Logo" class="h-12 mr-3">
                                <span class="text-xl font-bold">Global Celebrity Cricket League</span>
                            </a>
                            <p class="text-gray-300 mb-4">Bringing together celebrities and cricket fans from around the world in an unforgettable sporting experience.</p>
                            <div class="flex space-x-4">
                                <a href="#" class="text-white hover:text-yellow-400 transition-colors">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="text-white hover:text-yellow-400 transition-colors">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="text-white hover:text-yellow-400 transition-colors">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="text-white hover:text-yellow-400 transition-colors">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-bold mb-4 border-b border-indigo-400 pb-2">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><a href="#home" class="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" class="text-gray-300 hover:text-white transition-colors">About GCCL</a></li>
                            <li><a href="#participants" class="text-gray-300 hover:text-white transition-colors">Participants</a></li>
                            <li><a href="#videos" class="text-gray-300 hover:text-white transition-colors">Videos & Media</a></li>
                            <li><a href="#promoters" class="text-gray-300 hover:text-white transition-colors">Promoters</a></li>
                            <li><a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-bold mb-4 border-b border-indigo-400 pb-2">Tournament Info</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Schedule</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Teams</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Venues</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Tickets</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Merchandise</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Results</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-bold mb-4 border-b border-indigo-400 pb-2">Contact Us</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-map-marker-alt mt-1.5 mr-3 text-yellow-400"></i>
                                <span>11, Cricket Avenue, Dallas, TX 75001, USA</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-phone-alt mr-3 text-yellow-400"></i>
                                <span>+1 214-555-0123</span>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-envelope mr-3 text-yellow-400"></i>
                                <span>info@gccl.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Country Flags -->
                <div class="mt-12 pt-8 border-t border-indigo-700">
                    <h4 class="text-center text-lg font-bold mb-6">Participating Countries</h4>
                    <div class="flex flex-wrap justify-center gap-4 mb-8">
                        ${countryFlags.map(country => `
                            <div class="country-flag flex flex-col items-center">
                                <img src="${country.flag}" alt="${country.name} Flag" class="h-8 shadow-md rounded-sm border border-gray-200">
                                <span class="text-xs mt-1">${country.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Payment Methods -->
                <div class="mt-8 pt-8 border-t border-indigo-700">
                    <h4 class="text-center text-lg font-bold mb-6">Secure Payment Methods</h4>
                    <div class="flex flex-wrap justify-center gap-6">
                        ${paymentMethods.map(method => `
                            <div class="flex items-center bg-white/10 backdrop-blur-sm p-2 rounded-md">
                                <img src="${method.logo}" alt="${method.name}" class="h-7">
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Copyright -->
                <div class="mt-12 pt-6 border-t border-indigo-700 text-center">
                    <p class="text-gray-300">© ${new Date().getFullYear()} Global Celebrity Cricket League. All rights reserved.</p>
                    <div class="mt-3 space-x-4 text-sm">
                        <a href="#" class="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" class="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" class="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    footer.innerHTML = footerContent;
    return footer;
}

// Append footer to the DOM
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.appendChild(createFooter());
}); 