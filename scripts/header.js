// Header component
function createHeader() {
    const currentPath = window.location.pathname;
    const headerContainer = document.getElementById('header-container');

    if (!headerContainer) return;

    const navLinks = [
        { name: 'Home', path: '/index.html' },
        { name: 'Players', path: '/players.html' },
        { name: 'Matches', path: '/matches.html' },
        { name: 'Media', path: '/media.html' },
        { name: 'Shop', path: '/shop.html' },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            path: 'https://www.facebook.com/profile.php?id=100087213848585',
            icon: '<i class="fab fa-facebook"></i>'
        },
        {
            name: 'Instagram',
            path: 'https://www.instagram.com/plastic_people_production/',
            icon: '<i class="fab fa-instagram"></i>'
        }
    ];

    // Check if a path is active
    function isActive(path) {
        if (path === '/index.html' && (currentPath === '/' || currentPath === '/index.html')) {
            return true;
        }
        return currentPath === path;
    }

    // Create the HTML for the header
    const headerHTML = `
        <header class="header-fixed header-transparent">
            <div class="social-bar py-1">
                <div class="container mx-auto px-4 flex justify-end space-x-3">
                    ${socialLinks.map(link => `
                        <a
                            href="${link.path}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-white/90 hover:text-white transition-colors duration-200"
                            aria-label="${link.name}"
                        >
                            ${link.icon}
                        </a>
                    `).join('')}
                </div>
            </div>
            <nav class="container mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <a href="index.html" class="flex items-center space-x-2 relative">
                        <div class="flex items-center logo-container">
                            <img src="./assets/logos/logo_gccl.png" alt="GCCL Logo" class="h-14 w-auto" />
                            <div class="ml-2 hidden sm:block">
                                <span class="font-bold text-lg text-primary block leading-tight">GCCL</span>
                                <span class="text-xs text-gray-600 block leading-tight">Est. 2023</span>
                            </div>
                        </div>
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        ${navLinks.map(link => `
                            <div class="nav-item">
                                <a
                                    href="${link.path}"
                                    class="font-medium transition-colors duration-200 ${isActive(link.path)
            ? 'text-primary border-b-2 border-primary'
            : 'text-gray-600 hover:text-primary'
        }"
                                >
                                    ${link.name}
                                </a>
                            </div>
                        `).join('')}
                        
                        <div>
                            <a
                                href="contact.html"
                                class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button
                        class="menu-button md:hidden text-gray-600 hover:text-primary focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            class="h-6 w-6"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <div class="mobile-menu md:hidden mt-4 pb-4 border-t border-gray-200">
                    <div class="flex flex-col space-y-4 pt-4">
                        ${navLinks.map(link => `
                            <a
                                href="${link.path}"
                                class="block font-medium ${isActive(link.path)
                ? 'text-primary'
                : 'text-gray-600 hover:text-primary'
            }"
                            >
                                ${link.name}
                            </a>
                        `).join('')}
                        
                        <a
                            href="contact.html"
                            class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200 inline-block w-fit"
                        >
                            Contact Us
                        </a>
                        
                        <div class="flex space-x-4 pt-2">
                            ${socialLinks.map(link => `
                                <a
                                    href="${link.path}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-gray-600 hover:text-primary transition-colors duration-200"
                                    aria-label="${link.name}"
                                >
                                    ${link.icon}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;

    // Set the HTML
    headerContainer.innerHTML = headerHTML;

    // Setup mobile menu toggle
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        mobileMenu.style.display = 'none';

        menuButton.addEventListener('click', () => {
            const isExpanded = mobileMenu.style.display !== 'none';
            mobileMenu.style.display = isExpanded ? 'none' : 'block';

            // Change icon
            if (isExpanded) {
                menuButton.innerHTML = `
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                `;
            } else {
                menuButton.innerHTML = `
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                `;
            }
        });
    }

    // Add hover effects to nav items
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-2px)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Add parallax effect to logo
    const logoContainer = document.querySelector('.logo-container');

    if (logoContainer) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const scale = 1 - (scrollY * 0.0005 > 0.1 ? 0.1 : scrollY * 0.0005);
            const y = scrollY * -0.03;

            if (scrollY < 200) {
                logoContainer.style.transform = `scale(${scale}) translateY(${y}px)`;
            }
        });
    }
}

// Initialize the header
document.addEventListener('DOMContentLoaded', createHeader); 