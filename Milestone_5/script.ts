document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resume = document.getElementById('resume') as HTMLDivElement;
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('resume-skills') as HTMLDivElement;
    const editBtn = document.getElementById('edit-btn') as HTMLButtonElement;
    const saveBtn = document.getElementById('save-btn') as HTMLButtonElement;

  
    editBtn.classList.add('hidden');
    saveBtn.classList.add('hidden');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

       
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
      
        toggleSkillsButton.addEventListener('click', () => {
            skillsSection.classList.toggle('hidden');
            toggleSkillsButton.textContent = skillsSection.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
        });
        
 
        document.getElementById('resume-name')!.textContent = name;
        document.getElementById('resume-contact')!.textContent = `Email: ${email} | Phone: ${phone}`;
        document.getElementById('resume-about-me-text')!.textContent = aboutMe;
        document.getElementById('resume-skills-text') !.textContent = skills;
        document.getElementById('resume-education-text')!.textContent = `${degree} at ${institution}, Graduated in ${gradYear}`;
        document.getElementById('resume-languages-text')!.textContent = languages;
        document.getElementById('resume-work-text')!.textContent = `${jobTitle} at ${company} (${workYears})`;
        
 
        const resumeProfilePic = document.getElementById('resume-profile-pic') as HTMLImageElement;
        if (profilePic) resumeProfilePic.src = profilePic;


        resume.classList.remove('hidden');
        editBtn.classList.remove('hidden');
        saveBtn.classList.remove('hidden');

        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            (input as HTMLInputElement).disabled = true;
        });
    });

    editBtn.addEventListener('click', () => {
 
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            (input as HTMLInputElement).disabled = false;
        });

  
        const resumeSections = document.querySelectorAll('#resume .resume-content p, #resume .resume-sidebar p, #resume .resume-sidebar h1');
        resumeSections.forEach(section => {
            section.setAttribute('contenteditable', 'true');
            section.classList.add('editable');
        });

        editBtn.classList.add('hidden');
        saveBtn.classList.remove('hidden');
    });

    saveBtn.addEventListener('click', () => {
       
        const resumeSections = document.querySelectorAll('#resume .resume-content p, #resume .resume-sidebar p, #resume .resume-sidebar h1');
        resumeSections.forEach(section => {
            section.removeAttribute('contenteditable');
            section.classList.remove('editable');
        });

  
        saveBtn.classList.add('hidden');
        editBtn.classList.remove('hidden');

        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            (input as HTMLInputElement).disabled = true;
        });
    });
});
