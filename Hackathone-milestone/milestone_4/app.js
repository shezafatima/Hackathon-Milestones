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
});
document.getElementById('generateResume').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page refresh
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value;
    // Generate resume content
    const resumeContent = `
        <h1 contenteditable="true" class="editable">${name}</h1>
        <p contenteditable="true" class="editable">Email: ${email}</p>
        <p contenteditable="true" class="editable">Phone: ${phone}</p>
        <h2 contenteditable="true" class="editable">Skills</h2>
        <p contenteditable="true" class="editable">${skills}</p>
    `;
    // Display resume
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
});
// Utility function to generate resume content
function generateResumeContent() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value;
    return `
        <h1 class="editable">${name}</h1>
        <p class="editable">Email: ${email}</p>
        <p class="editable">Phone: ${phone}</p>
        <h2 class="editable">Skills</h2>
        <p class="editable">${skills}</p>
    `;
}
// Handle resume generation
document.getElementById('generateResume').addEventListener('click', (event) => {
    event.preventDefault();
    const resumeOutput = document.getElementById('resumeOutput');
    const editButton = document.getElementById('editResume');
    const saveButton = document.getElementById('saveResume');
    if (resumeOutput) {
        resumeOutput.innerHTML = generateResumeContent();
        if (editButton && saveButton) {
            editButton.classList.remove('hidden');
            saveButton.classList.remove('hidden');
        }
    }
});
// Handle editing the resume
document.getElementById('editResume').addEventListener('click', () => {
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.contentEditable = "true";
    }
});
// Handle saving the resume
document.getElementById('saveResume').addEventListener('click', () => {
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.contentEditable = "false";
        // Optionally, you can handle saving the content here
        console.log('Saved Resume Content:', resumeOutput.innerHTML);
    }
});
document.getElementById('editResume').addEventListener('click', () => {
    const boxes = document.getElementsByClassName('resume-preview');
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i]; // Cast to HTMLElement
        box.classList.toggle('highlighted'); // Now classList is accessible
    }
});
