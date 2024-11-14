document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resume = document.getElementById('resume');
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('resume-skills');
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
        // Update resume
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-contact').textContent = "Email: ".concat(email, " | Phone: ").concat(phone);
        document.getElementById('resume-profile-pic').setAttribute('src', profilePic);
        document.getElementById('resume-about-me-text').textContent = aboutMe;
        document.getElementById('resume-education-text').textContent = "".concat(degree, " at ").concat(institution, ", Graduated in ").concat(gradYear);
        document.getElementById('resume-skills-text').textContent = skills.split(',').join(', ');
        document.getElementById('resume-languages-text').textContent = languages.split(',').join(', ');
        document.getElementById('resume-work-text').textContent = "".concat(jobTitle, " at ").concat(company, " (").concat(workYears, ")");
        // Show resume
        resume.classList.remove('hidden');
    });
    toggleSkillsButton.addEventListener('click', function () {
        skillsSection.classList.toggle('hidden');
        toggleSkillsButton.textContent = skillsSection.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
    });
});
