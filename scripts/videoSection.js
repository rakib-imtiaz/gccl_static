// Video Section Component
function createVideoSection() {
    const videoSection = document.createElement('section');
    videoSection.className = 'py-20 bg-gray-50';
    videoSection.id = 'video-section';

    const container = document.createElement('div');
    container.className = 'container mx-auto px-4';

    // Section header
    const header = document.createElement('div');
    header.className = 'text-center mb-16 animate-on-scroll';
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.className = 'text-4xl md:text-5xl font-bold text-gray-900 mb-4';
    sectionTitle.textContent = 'Match Highlights & Interviews';
    
    const sectionDescription = document.createElement('p');
    sectionDescription.className = 'text-xl text-gray-600 max-w-3xl mx-auto';
    sectionDescription.textContent = 'Watch exclusive footage from our matches and behind-the-scenes interviews with celebrity players';
    
    header.appendChild(sectionTitle);
    header.appendChild(sectionDescription);
    
    // Video grid
    const videoGrid = document.createElement('div');
    videoGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
    
    // Video data from assets
    const videos = [
        {
            title: 'Coin Tossing Ceremony',
            src: 'assets/video/coin_tossing.mp4',
            thumbnail: 'assets/images/players/player_standing_for_interview.jpg',
            date: 'July 15, 2023',
            views: '24K'
        },
        {
            title: 'Post-Match Interview',
            src: 'assets/video/player_interview.mp4',
            thumbnail: 'assets/images/players/player_interview.jpg',
            date: 'July 18, 2023',
            views: '42K'
        },
        {
            title: 'Player Interview',
            src: 'assets/video/player_interview_2.mp4',
            thumbnail: 'assets/images/players/player_interview_3.jpg',
            date: 'August 2, 2023',
            views: '31K'
        },
        {
            title: 'Player Meeting Fans',
            src: 'assets/video/taking_selfie_with_fans.mp4',
            thumbnail: 'assets/images/players/player_posing.jpg',
            date: 'August 5, 2023',
            views: '19K'
        },
        {
            title: 'Player Fist Bump',
            src: 'assets/video/player_fishBump.mp4',
            thumbnail: 'assets/images/players/player_handshaking.jpg',
            date: 'July 22, 2023',
            views: '27K'
        },
        {
            title: 'Sponsors Conference',
            src: 'assets/video/sponsors_conference.mp4',
            thumbnail: 'assets/images/players/players_at_table_meeting.jpg',
            date: 'June 30, 2023',
            views: '15K'
        }
    ];
    
    // Create video cards
    videos.forEach((video, index) => {
        const card = createVideoCard(video, index);
        videoGrid.appendChild(card);
    });
    
    // Video modal
    const videoModal = createVideoModal();
    
    // Append all elements
    container.appendChild(header);
    container.appendChild(videoGrid);
    
    videoSection.appendChild(container);
    videoSection.appendChild(videoModal);
    
    return videoSection;
}

function createVideoCard(videoData, index) {
    const card = document.createElement('div');
    card.className = 'video-card bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-on-scroll';
    card.style.animationDelay = `${index * 100}ms`;
    
    // Thumbnail container
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'relative aspect-video overflow-hidden';
    
    // Thumbnail image
    const thumbnail = document.createElement('img');
    thumbnail.src = videoData.thumbnail;
    thumbnail.alt = videoData.title;
    thumbnail.className = 'w-full h-full object-cover';
    
    // Play button overlay
    const playButton = document.createElement('button');
    playButton.className = 'video-play-button absolute inset-0 flex items-center justify-center bg-black/40 group hover:bg-black/60 transition-all duration-300';
    playButton.dataset.videoSrc = videoData.src;
    playButton.dataset.videoTitle = videoData.title;
    playButton.addEventListener('click', () => openVideoModal(videoData.src, videoData.title));
    
    // Play icon
    const playIcon = document.createElement('div');
    playIcon.className = 'w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-primary text-white group-hover:scale-110 transition-transform duration-300';
    playIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>';
    
    playButton.appendChild(playIcon);
    thumbnailContainer.appendChild(thumbnail);
    thumbnailContainer.appendChild(playButton);
    
    // Video info
    const infoContainer = document.createElement('div');
    infoContainer.className = 'p-5';
    
    // Video title
    const title = document.createElement('h3');
    title.className = 'text-xl font-bold text-gray-900 mb-2';
    title.textContent = videoData.title;
    
    // Video metadata
    const metadata = document.createElement('div');
    metadata.className = 'flex items-center text-gray-500 text-sm';
    
    const date = document.createElement('span');
    date.className = 'mr-4';
    date.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>' + videoData.date;
    
    const views = document.createElement('span');
    views.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" /></svg>' + videoData.views + ' views';
    
    metadata.appendChild(date);
    metadata.appendChild(views);
    
    // Append elements to info container
    infoContainer.appendChild(title);
    infoContainer.appendChild(metadata);
    
    // Append all to card
    card.appendChild(thumbnailContainer);
    card.appendChild(infoContainer);
    
    return card;
}

function createVideoModal() {
    const modal = document.createElement('div');
    modal.id = 'video-modal';
    modal.className = 'fixed inset-0 bg-black/80 z-50 hidden flex items-center justify-center backdrop-blur-md';
    
    // Modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'w-full max-w-4xl mx-auto p-4';
    
    // Modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'flex justify-between items-center mb-4';
    
    const modalTitle = document.createElement('h3');
    modalTitle.id = 'modal-title';
    modalTitle.className = 'text-white text-xl md:text-2xl font-bold';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'text-white hover:text-gray-300 focus:outline-none';
    closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
    closeButton.addEventListener('click', closeVideoModal);
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    
    // Video container
    const videoContainer = document.createElement('div');
    videoContainer.className = 'relative aspect-video bg-black rounded-lg overflow-hidden';
    
    const videoPlayer = document.createElement('video');
    videoPlayer.id = 'modal-video';
    videoPlayer.className = 'w-full h-full';
    videoPlayer.controls = true;
    
    videoContainer.appendChild(videoPlayer);
    
    // Append all to modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(videoContainer);
    modal.appendChild(modalContent);
    
    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    
    return modal;
}

function openVideoModal(videoSrc, videoTitle) {
    const modal = document.getElementById('video-modal');
    const modalTitle = document.getElementById('modal-title');
    const videoPlayer = document.getElementById('modal-video');
    
    // Set video source and title
    videoPlayer.innerHTML = '';
    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = 'video/mp4';
    videoPlayer.appendChild(source);
    
    modalTitle.textContent = videoTitle;
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Play video
    videoPlayer.load();
    videoPlayer.play().catch(error => console.error('Error playing video:', error));
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('modal-video');
    
    // Hide modal
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Pause video
    videoPlayer.pause();
    
    // Allow body scrolling
    document.body.style.overflow = '';
}

function renderVideoSection() {
    const container = document.getElementById('video-section-container');
    if (container) {
        container.appendChild(createVideoSection());
        
        // Initialize scroll animations
        initVideoSectionScrollAnimations();
    }
}

function initVideoSectionScrollAnimations() {
    // Add scroll animations to elements
    const animateElements = document.querySelectorAll('#video-section .animate-on-scroll');
    
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

// Handle escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});

// Export the function for use in main.js
window.renderVideoSection = renderVideoSection; 