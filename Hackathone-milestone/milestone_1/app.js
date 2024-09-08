"use strict";
var _a;
function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        }
        else {
            section.style.display = 'none';
        }
    }
}
(_a = document.getElementById('toggle-skills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => toggleSectionVisibility('skills-section'));
