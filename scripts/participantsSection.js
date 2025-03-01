// Participants Section Component
function createParticipantsSection() {
    const section = document.createElement('section');
    section.id = 'participants-section';
    section.className = 'py-20 bg-gray-900 text-white';

    const container = document.createElement('div');
    container.className = 'container mx-auto px-4';

    // Section header
    const header = document.createElement('div');
    header.className = 'text-center mb-16 animate-on-scroll';
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.className = 'text-4xl md:text-5xl font-bold mb-4';
    sectionTitle.textContent = 'Celebrity Participants';
    
    const sectionDescription = document.createElement('p');
    sectionDescription.className = 'text-xl text-gray-300 max-w-3xl mx-auto';
    sectionDescription.textContent = 'Meet the stars who will be competing in the Global Celebrity Cricket League';
    
    header.appendChild(sectionTitle);
    header.appendChild(sectionDescription);
    
    // Teams container
    const teamsContainer = document.createElement('div');
    teamsContainer.className = 'space-y-20';
    
    // Team data with real player images
    const teams = [
        {
            name: 'Team India',
            flag: 'assets/logos/usa-team.png',
            players: [
                {
                    name: 'Virat Singh',
                    role: 'Captain / Batsman',
                    image: 'assets/images/players/indian_player.jpg'
                },
                {
                    name: 'Rohit Kumar',
                    role: 'Vice Captain / Bowler',
                    image: 'assets/images/players/indian_player_2.jpg'
                },
                {
                    name: 'Ajay Sharma',
                    role: 'All-Rounder',
                    image: 'assets/images/players/player_posing.jpg'
                },
                {
                    name: 'Rahul Patel',
                    role: 'Wicket Keeper',
                    image: 'assets/images/players/player_interview.jpg'
                },
                {
                    name: 'Sanjay Mishra',
                    role: 'Fast Bowler',
                    image: 'assets/images/players/player_smiling.jpg'
                },
                {
                    name: 'Karan Khanna',
                    role: 'Spin Bowler',
                    image: 'assets/images/players/player_handshaking.jpg'
                }
            ]
        },
        {
            name: 'Team Pakistan',
            flag: 'assets/logos/world-xi-team.png',
            players: [
                {
                    name: 'Asif Khan',
                    role: 'Captain / All-Rounder',
                    image: 'assets/images/players/player_standing_for_interview.jpg'
                },
                {
                    name: 'Shahid Ahmed',
                    role: 'Vice Captain / Batsman',
                    image: 'assets/images/players/player_posing_2.jpg'
                },
                {
                    name: 'Babar Ali',
                    role: 'Fast Bowler',
                    image: 'assets/images/players/player_interview_3.jpg'
                },
                {
                    name: 'Younas Shah',
                    role: 'Wicket Keeper',
                    image: 'assets/images/players/player_interview_4.jpg'
                },
                {
                    name: 'Kamran Akmal',
                    role: 'Spin Bowler',
                    image: 'assets/images/players/players_posing.jpg'
                },
                {
                    name: 'Faisal Mahmood',
                    role: 'Batsman',
                    image: 'assets/images/players/IMG_8607.jpeg'
                }
            ]
        }
    ];
    
    // Create team sections
    teams.forEach((team, teamIndex) => {
        const teamSection = createTeamSection(team, teamIndex);
        teamsContainer.appendChild(teamSection);
    });
    
    // Append all elements
    container.appendChild(header);
    container.appendChild(teamsContainer);
    section.appendChild(container);
    
    return section;
}

function createTeamSection(team, teamIndex) {
    const teamSection = document.createElement('div');
    teamSection.className = 'team-section animate-on-scroll';
    teamSection.style.animationDelay = `${teamIndex * 200}ms`;
    
    // Team header
    const teamHeader = document.createElement('div');
    teamHeader.className = 'flex flex-col md:flex-row items-center justify-between mb-8 pb-4 border-b border-gray-700';
    
    // Team name and flag container
    const teamInfo = document.createElement('div');
    teamInfo.className = 'flex items-center mb-4 md:mb-0';
    
    // Team flag
    const teamFlag = document.createElement('img');
    teamFlag.src = team.flag;
    teamFlag.alt = `${team.name} Flag`;
    teamFlag.className = 'w-12 h-12 md:w-16 md:h-16 object-contain mr-4';
    
    // Team name
    const teamName = document.createElement('h3');
    teamName.className = 'text-2xl md:text-3xl font-bold';
    teamName.textContent = team.name;
    
    teamInfo.appendChild(teamFlag);
    teamInfo.appendChild(teamName);
    
    // Team stats
    const teamStats = document.createElement('div');
    teamStats.className = 'flex gap-6 text-gray-300 text-sm md:text-base';
    
    // Matches stat
    const matchesStat = document.createElement('div');
    matchesStat.className = 'flex flex-col items-center';
    matchesStat.innerHTML = `
        <span class="text-xl md:text-2xl font-bold text-white">${Math.floor(Math.random() * 5) + 3}</span>
        <span>Matches</span>
    `;
    
    // Wins stat
    const winsStat = document.createElement('div');
    winsStat.className = 'flex flex-col items-center';
    winsStat.innerHTML = `
        <span class="text-xl md:text-2xl font-bold text-white">${Math.floor(Math.random() * 3) + 1}</span>
        <span>Wins</span>
    `;
    
    // Rating stat
    const ratingStat = document.createElement('div');
    ratingStat.className = 'flex flex-col items-center';
    ratingStat.innerHTML = `
        <span class="text-xl md:text-2xl font-bold text-white">${(Math.random() * 2 + 3).toFixed(1)}</span>
        <span>Rating</span>
    `;
    
    teamStats.appendChild(matchesStat);
    teamStats.appendChild(winsStat);
    teamStats.appendChild(ratingStat);
    
    teamHeader.appendChild(teamInfo);
    teamHeader.appendChild(teamStats);
    
    // Players grid
    const playersGrid = document.createElement('div');
    playersGrid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8';
    
    // Create player cards
    team.players.forEach((player, playerIndex) => {
        const playerCard = createPlayerCard(player, playerIndex);
        playersGrid.appendChild(playerCard);
    });
    
    // Append all elements
    teamSection.appendChild(teamHeader);
    teamSection.appendChild(playersGrid);
    
    return teamSection;
}

function createPlayerCard(player, playerIndex) {
    const playerCard = document.createElement('div');
    playerCard.className = 'bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl';
    playerCard.style.animationDelay = `${playerIndex * 100}ms`;
    
    // Player image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'h-64 overflow-hidden';
    
    // Player image
    const playerImage = document.createElement('img');
    playerImage.src = player.image;
    playerImage.alt = player.name;
    playerImage.className = 'w-full h-full object-cover object-top hover:scale-105 transition duration-500';
    
    imageContainer.appendChild(playerImage);
    
    // Player info
    const playerInfo = document.createElement('div');
    playerInfo.className = 'p-6';
    
    // Player name
    const playerName = document.createElement('h4');
    playerName.className = 'text-xl font-bold mb-1';
    playerName.textContent = player.name;
    
    // Player role
    const playerRole = document.createElement('p');
    playerRole.className = 'text-gray-400 mb-3';
    playerRole.textContent = player.role;
    
    // Social media links
    const socialLinks = document.createElement('div');
    socialLinks.className = 'flex gap-3';
    
    const socialPlatforms = [
        { icon: 'fab fa-instagram', color: 'text-pink-500' },
        { icon: 'fab fa-twitter', color: 'text-blue-400' },
        { icon: 'fab fa-facebook-f', color: 'text-blue-600' }
    ];
    
    socialPlatforms.forEach(platform => {
        const link = document.createElement('a');
        link.href = '#';
        link.className = `${platform.color} hover:text-white transition duration-300`;
        link.innerHTML = `<i class="${platform.icon}"></i>`;
        socialLinks.appendChild(link);
    });
    
    // Append elements to player info
    playerInfo.appendChild(playerName);
    playerInfo.appendChild(playerRole);
    playerInfo.appendChild(socialLinks);
    
    // Append all to player card
    playerCard.appendChild(imageContainer);
    playerCard.appendChild(playerInfo);
    
    return playerCard;
}

function renderParticipantsSection() {
    const container = document.getElementById('participants-section-container');
    if (container) {
        container.appendChild(createParticipantsSection());
        
        // Initialize scroll animations
        initParticipantsSectionAnimations();
    }
}

function initParticipantsSectionAnimations() {
    const animateElements = document.querySelectorAll('#participants-section .animate-on-scroll');
    
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
window.renderParticipantsSection = renderParticipantsSection; 