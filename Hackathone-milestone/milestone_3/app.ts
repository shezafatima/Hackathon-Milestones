
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const contactInput = document.getElementById('contact') as HTMLInputElement;
    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;

    const profilePicturePreview = document.getElementById('profile-preview') as HTMLImageElement;
    const namePreview = document.getElementById('name-preview') as HTMLHeadingElement;
    const contactPreview = document.getElementById('contact-preview') as HTMLParagraphElement;
    const educationPreview = document.getElementById('education-preview') as HTMLParagraphElement;
    const skillsPreview = document.getElementById('skills-preview') as HTMLParagraphElement;
    const workExperiencePreview = document.getElementById('work-experience-preview') as HTMLParagraphElement;

    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.querySelector('.skills') as HTMLElement;

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
