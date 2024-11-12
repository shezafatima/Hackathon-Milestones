// Get references to the button and skills section
var toggleSkillsButton = document.getElementById('toggleSkillsButton');
var skillsSection = document.getElementById('skillsSection');
// Event listener for toggling visibility of the Skills section
toggleSkillsButton.addEventListener('click', function () {
    // Check if skillsSection is visible
    if (skillsSection.classList.contains('hidden')) {
        // Remove the hidden class and show the section with animation
        skillsSection.classList.remove('hidden');
        skillsSection.classList.add('visible');
        toggleSkillsButton.textContent = 'Hide Skills'; // Change button text
    }
    else {
        // Add the hidden class to hide the section with animation
        skillsSection.classList.remove('visible');
        skillsSection.classList.add('hidden');
        toggleSkillsButton.textContent = 'Show Skills'; // Change button text back
    }
});
