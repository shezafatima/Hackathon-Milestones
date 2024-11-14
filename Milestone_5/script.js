document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resume = document.getElementById('resume');
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('resume-skills');
    var editBtn = document.getElementById('edit-btn');
    var saveBtn = document.getElementById('save-btn');
    // Initially hide the edit and save buttons
    editBtn.classList.add('hidden');
    saveBtn.classList.add('hidden');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var profilePicInput = document.getElementById('profile-pic');
        var profilePic = profilePicInput.files ? URL.createObjectURL(profilePicInput.files[0]) : '';
        var aboutMe = document.getElementById('about-me').value;
        var degree = document.getElementById('degree').value;
        var institution = document.getElementById('institution').value;
        var gradYear = document.getElementById('grad-year').value;
        var skills = document.getElementById('skills').value;
        var languages = document.getElementById('languages').value;
        var jobTitle = document.getElementById('job-title').value;
        var company = document.getElementById('company').value;
        var workYears = document.getElementById('work-years').value;
        toggleSkillsButton.addEventListener('click', function () {
            skillsSection.classList.toggle('hidden');
            toggleSkillsButton.textContent = skillsSection.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
        });
        // Update resume preview
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-contact').textContent = "Email: ".concat(email, " | Phone: ").concat(phone);
        document.getElementById('resume-about-me-text').textContent = aboutMe;
        document.getElementById('resume-skills-text').textContent = skills;
        document.getElementById('resume-education-text').textContent = "".concat(degree, " at ").concat(institution, ", Graduated in ").concat(gradYear);
        document.getElementById('resume-languages-text').textContent = languages;
        document.getElementById('resume-work-text').textContent = "".concat(jobTitle, " at ").concat(company, " (").concat(workYears, ")");
        // Set the profile picture
        var resumeProfilePic = document.getElementById('resume-profile-pic');
        if (profilePic)
            resumeProfilePic.src = profilePic;
        // Show resume and buttons
        resume.classList.remove('hidden');
        editBtn.classList.remove('hidden');
        saveBtn.classList.remove('hidden');
        // Disable form inputs
        var inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.disabled = true;
        });
    });
    editBtn.addEventListener('click', function () {
        // Enable input fields for editing
        var inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.disabled = false;
        });
        // Add contenteditable to the resume sections
        var resumeSections = document.querySelectorAll('#resume .resume-content p, #resume .resume-sidebar p, #resume .resume-sidebar h1');
        resumeSections.forEach(function (section) {
            section.setAttribute('contenteditable', 'true');
            section.classList.add('editable');
        });
        // Hide the Edit button and show Save button
        editBtn.classList.add('hidden');
        saveBtn.classList.remove('hidden');
    });
    saveBtn.addEventListener('click', function () {
        // Save all changes (no further logic needed for now as contenteditable saves automatically)
        // Remove contenteditable from the resume sections
        var resumeSections = document.querySelectorAll('#resume .resume-content p, #resume .resume-sidebar p, #resume .resume-sidebar h1');
        resumeSections.forEach(function (section) {
            section.removeAttribute('contenteditable');
            section.classList.remove('editable');
        });
        // Hide Save button and show Edit button again
        saveBtn.classList.add('hidden');
        editBtn.classList.remove('hidden');
        // Disable input fields after saving
        var inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.disabled = true;
        });
    });
});
