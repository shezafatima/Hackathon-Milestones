
var toggleSkillsButton = document.getElementById('toggleSkillsButton');
var skillsSection = document.getElementById('skillsSection');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        skillsSection.classList.add('visible');
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.classList.remove('visible');
        skillsSection.classList.add('hidden');
        toggleSkillsButton.textContent = 'Show Skills'; 
    }
});
