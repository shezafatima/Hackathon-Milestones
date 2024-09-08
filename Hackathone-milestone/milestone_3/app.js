"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const profilePictureInput = document.getElementById('profile-picture');
    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact');
    const educationInput = document.getElementById('education');
    const skillsInput = document.getElementById('skills');
    const workExperienceInput = document.getElementById('work-experience');
    const profilePicturePreview = document.getElementById('profile-preview');
    const namePreview = document.getElementById('name-preview');
    const contactPreview = document.getElementById('contact-preview');
    const educationPreview = document.getElementById('education-preview');
    const skillsPreview = document.getElementById('skills-preview');
    const workExperiencePreview = document.getElementById('work-experience-preview');
    const toggleSkillsButton = document.getElementById('toggle-skills');
    const skillsSection = document.querySelector('.skills');
    form.addEventListener('input', () => {
        profilePicturePreview.src = profilePictureInput.value || 'assets/default-profile.jpg';
        namePreview.textContent = nameInput.value || 'John Doe';
        contactPreview.textContent = `Contact: ${contactInput.value || 'johndoe@example.com'}`;
        educationPreview.textContent = educationInput.value || 'Enter your education details here...';
        skillsPreview.textContent = skillsInput.value || 'Enter your skills here...';
        workExperiencePreview.textContent = workExperienceInput.value || 'Enter your work experience here...';
    });
    toggleSkillsButton.addEventListener('click', () => {
        skillsSection.classList.toggle('hidden');
    });
});
