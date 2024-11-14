document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resume = document.getElementById('resume') as HTMLDivElement;
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('resume-skills') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const profilePicInput = (document.getElementById('profile-pic') as HTMLInputElement);
        const profilePic = profilePicInput.files ? URL.createObjectURL(profilePicInput.files[0]) : '';
        const aboutMe = (document.getElementById('about-me') as HTMLTextAreaElement).value;
        const degree = (document.getElementById('degree') as HTMLInputElement).value;
        const institution = (document.getElementById('institution') as HTMLInputElement).value;
        const gradYear = (document.getElementById('grad-year') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const languages = (document.getElementById('languages') as HTMLInputElement).value;
        const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
        const company = (document.getElementById('company') as HTMLInputElement).value;
        const workYears = (document.getElementById('work-years') as HTMLInputElement).value;

        // Update resume
        document.getElementById('resume-name')!.textContent = name;
        document.getElementById('resume-contact')!.textContent = `Email: ${email} | Phone: ${phone}`;
        document.getElementById('resume-profile-pic')!.setAttribute('src', profilePic);
        document.getElementById('resume-about-me-text')!.textContent = aboutMe;
        document.getElementById('resume-education-text')!.textContent = `${degree} at ${institution}, Graduated in ${gradYear}`;
        document.getElementById('resume-skills-text')!.textContent = skills.split(',').join(', ');
        document.getElementById('resume-languages-text')!.textContent = languages.split(',').join(', ');
        document.getElementById('resume-work-text')!.textContent = `${jobTitle} at ${company} (${workYears})`;

        // Show resume
        resume.classList.remove('hidden');
    });

    toggleSkillsButton.addEventListener('click', () => {
        skillsSection.classList.toggle('hidden');
        toggleSkillsButton.textContent = skillsSection.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
    });
});


