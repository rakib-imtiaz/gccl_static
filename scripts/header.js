// Header component
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header-fixed', 'header-transparent', 'w-full');
    
    // Navigation links
    const navLinks = [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Videos', url: '#videos' },
        { name: 'Participants', url: '#participants' },
        { name: 'Promoters', url: '#promoters' }
    ];

    // Social links - only shown on desktop now
    const socialLinks = [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
        { icon: 'fab fa-instagram', url: '#' },
        { icon: 'fab fa-youtube', url: '#' }
    ];

    // Create the header content
    const headerContent = `
        <div class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <div class="logo-container">
                    <a href="index.html" class="flex items-center">
                        <img src="assets/logos/logo_gccl.png" alt="GCCL Logo" class="h-14 mr-3 drop-shadow-lg">
                        <span class="text-xl font-bold text-white drop-shadow-md">GCCL</span>
                    </a>
                </div>
                
                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    ${navLinks.map(link => `
                        <div class="nav-item">
                            <a href="${link.url}" class="text-white hover:text-yellow-400 font-medium">${link.name}</a>
                        </div>
                    `).join('')}
                    
                    <a href="#contact" class="bg-primary/80 hover:bg-primary text-white px-5 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all backdrop-blur-sm">
                        Contact Us
                    </a>
                </nav>
                
                <!-- Social Icons (Desktop Only) -->
                <div class="hidden md:flex items-center space-x-4">
                    ${socialLinks.map(link => `
                        <a href="${link.url}" class="text-white hover:text-yellow-400 transition-colors drop-shadow-md">
                            <i class="${link.icon}"></i>
                        </a>
                    `).join('')}
                </div>
                
                <!-- Mobile Menu Toggle -->
                <div class="md:hidden flex items-center">
                    <button id="menu-toggle" class="text-white focus:outline-none drop-shadow-md">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4 bg-black/80 backdrop-blur-md rounded-lg">
                <nav class="flex flex-col space-y-4 p-4">
                    ${navLinks.map(link => `
                        <a href="${link.url}" class="text-white hover:text-yellow-400 font-medium py-2">${link.name}</a>
                    `).join('')}
                    <a href="#contact" class="bg-primary/80 text-white px-5 py-3 rounded-lg font-medium text-center shadow-md">
                        Contact Us
                    </a>
                    <div class="flex items-center space-x-6 justify-center mt-4 pt-4 border-t border-gray-700">
                        ${socialLinks.map(link => `
                            <a href="${link.url}" class="text-white hover:text-yellow-400 transition-colors">
                                <i class="${link.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                </nav>
            </div>
        </div>
    `;
    
    header.innerHTML = headerContent;
    
    // Add scroll event to change header style on scroll
    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Toggle mobile menu
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (!mobileMenu.classList.contains('hidden')) {
                menuToggle.innerHTML = '<i class="fas fa-times text-2xl"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            }
        });
        
        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('header-scrolled');
                header.classList.remove('shadow-md');
            }
        });
        
        // Add hover effect to nav items
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('a').classList.add('text-yellow-400');
            });
            
            item.addEventListener('mouseleave', () => {
                if (!item.querySelector('a').classList.contains('active')) {
                    item.querySelector('a').classList.remove('text-yellow-400');
                }
            });
        });
    });
    
    return header;
}

function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.appendChild(createHeader());
    }
}

renderHeader(); 