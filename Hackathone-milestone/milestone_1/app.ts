function toggleSectionVisibility(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
}


document.getElementById('toggle-skills')?.addEventListener('click', () => toggleSectionVisibility('skills-section'));
