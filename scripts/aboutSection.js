function createAboutSection() {
    const section = document.createElement('section');
    section.id = 'about-section';
    section.className = 'py-16 md:py-24 bg-white';

    const container = document.createElement('div');
    container.className = 'container mx-auto px-4';

    // Section header
    const header = document.createElement('div');
    header.className = 'text-center mb-16 animate-on-scroll';
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.className = 'text-4xl md:text-5xl font-bold text-gray-900 mb-4';
    sectionTitle.textContent = 'About GCCL';
    
    const sectionDescription = document.createElement('p');
    sectionDescription.className = 'text-xl text-gray-600 max-w-3xl mx-auto';
    sectionDescription.textContent = 'The Global Celebrity Cricket League brings together stars from around the world to compete in exciting cricket matches';
    
    header.appendChild(sectionTitle);
    header.appendChild(sectionDescription);

    // Main content
    const content = document.createElement('div');
    content.className = 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center';
    
    // Left side - main info
    const leftContent = document.createElement('div');
    leftContent.className = 'animate-on-scroll';
    
    const mainInfo = document.createElement('div');
    mainInfo.className = 'prose prose-lg max-w-none text-gray-700';
    mainInfo.innerHTML = `
        <p class="lead text-xl font-medium mb-6">
            Established in 2022, the Global Celebrity Cricket League (GCCL) is the premier cricket tournament that brings together celebrities from the entertainment industry.
        </p>
        <p class="mb-6">
            GCCL was founded with a vision to blend the excitement of cricket with the glamour of entertainment, creating a unique sporting spectacle that captures the imagination of fans worldwide.
        </p>
        <p class="mb-6">
            Our matches feature stars from Bollywood, Hollywood, and other entertainment industries who come together to showcase their cricketing skills while raising funds for various charitable causes.
        </p>
        <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h3>
        <p>
            To create a global platform that unites celebrities from different countries and cultures through the sport of cricket, while promoting charitable causes and providing entertainment to fans around the world.
        </p>
    `;
    
    // Stats
    const stats = document.createElement('div');
    stats.className = 'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10';
    
    const statItems = [
        { value: '8+', label: 'Teams', icon: 'users' },
        { value: '100+', label: 'Celebrities', icon: 'star' },
        { value: '12+', label: 'Venues', icon: 'map-marker-alt' },
        { value: '5M+', label: 'Global Fans', icon: 'heart' }
    ];
    
    statItems.forEach(item => {
        const statBox = document.createElement('div');
        statBox.className = 'bg-gray-50 p-4 md:p-6 rounded-lg text-center';
        
        const statValue = document.createElement('div');
        statValue.className = 'text-3xl md:text-4xl font-bold text-primary mb-1';
        statValue.textContent = item.value;
        
        const statLabel = document.createElement('div');
        statLabel.className = 'text-gray-600';
        statLabel.innerHTML = `<i class="fas fa-${item.icon} mr-1"></i> ${item.label}`;
        
        statBox.appendChild(statValue);
        statBox.appendChild(statLabel);
        stats.appendChild(statBox);
    });
    
    leftContent.appendChild(mainInfo);
    leftContent.appendChild(stats);
    
    // Right side - image collage
    const rightContent = document.createElement('div');
    rightContent.className = 'animate-on-scroll';
    
    const imageCollage = document.createElement('div');
    imageCollage.className = 'grid grid-cols-2 gap-4 md:gap-6';
    
    // Images for collage
    const collageImages = [
        {
            src: 'assets/images/players/players_in_the_field_at_night.jpg',
            alt: 'Players on field',
            class: 'col-span-2 aspect-[16/9]'
        },
        {
            src: 'assets/images/players/players_at_table_meeting.jpg',
            alt: 'Team meeting',
            class: 'aspect-square'
        },
        {
            src: 'assets/images/players/kids_with_flags.jpg',
            alt: 'Fans with flags',
            class: 'aspect-square'
        }
    ];
    
    collageImages.forEach(img => {
        const imgContainer = document.createElement('div');
        imgContainer.className = `overflow-hidden rounded-lg ${img.class}`;
        
        const image = document.createElement('img');
        image.src = img.src;
        image.alt = img.alt;
        image.className = 'w-full h-full object-cover hover:scale-105 transition duration-500';
        
        imgContainer.appendChild(image);
        imageCollage.appendChild(imgContainer);
    });
    
    rightContent.appendChild(imageCollage);
    
    // Append to main content
    content.appendChild(leftContent);
    content.appendChild(rightContent);
    
    // Append all elements
    container.appendChild(header);
    container.appendChild(content);
    section.appendChild(container);
    
    return section;
}

function renderAboutSection() {
    const container = document.getElementById('about-section-container');
    if (container) {
        container.appendChild(createAboutSection());
        
        // Initialize scroll animations
        initAboutSectionAnimations();
    }
}

function initAboutSectionAnimations() {
    const animateElements = document.querySelectorAll('#about-section .animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Export the function for use in main.js
window.renderAboutSection = renderAboutSection;
