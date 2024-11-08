// Sample data for profiles (this could be dynamically fetched from a database)
const profiles = [
    { name: 'Mrigakhi', skill: 'Web Development', description: 'Experienced in HTML, CSS, and JavaScript.' },
    { name: 'Bhumi', skill: 'Data Analysis', description: 'Skilled in Python and Excel for data analysis.' },
    { name: 'Shruti', skill: 'Graphic Design', description: 'Proficient in Adobe Photoshop and Illustrator.' },
    { name: 'Parishmita', skill: 'Photography', description: 'Experienced in portrait and landscape photography.' },
];

// Display profiles dynamically
function displayProfiles(profileList) {
    const profilesContainer = document.getElementById('profiles');
    profilesContainer.innerHTML = ''; // Clear existing profiles

    profileList.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');
        profileCard.innerHTML = `
            <h3>${profile.name}</h3>
            <p>Skill: ${profile.skill}</p>
            <p>${profile.description}</p>
        `;
        profilesContainer.appendChild(profileCard);
    });
}

// Search profiles by skill
function searchSkills() {
    const skillSearch = document.getElementById('skillSearch').value.toLowerCase();
    const filteredProfiles = profiles.filter(profile => 
        profile.skill.toLowerCase().includes(skillSearch)
    );
    displayProfiles(filteredProfiles);
}

// Handle the skill sharing form submission
document.getElementById('shareSkillsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const skill = document.getElementById('skill').value;
    const description = document.getElementById('description').value;

    // Add new profile to the profiles array
    profiles.push({ name, skill, description });

    // Reset the form
    this.reset();

    // Refresh the displayed profiles
    displayProfiles(profiles);
});

// Initialize page with all profiles
document.addEventListener('DOMContentLoaded', () => {
    displayProfiles(profiles);
});

