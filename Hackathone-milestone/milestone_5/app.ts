

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
});

document.getElementById('generateResume')!.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page refresh

    // Get form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

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
function generateResumeContent(): string {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    return `
        <h1 class="editable">${name}</h1>
        <p class="editable">Email: ${email}</p>
        <p class="editable">Phone: ${phone}</p>
        <h2 class="editable">Skills</h2>
        <p class="editable">${skills}</p>
    `;
}

// Handle resume generation
document.getElementById('generateResume')!.addEventListener('click', (event) => {
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
document.getElementById('editResume')!.addEventListener('click', () => {
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.contentEditable = "true";
    }
});

// Handle saving the resume
document.getElementById('saveResume')!.addEventListener('click', () => {
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.contentEditable = "false";
        // Optionally, you can handle saving the content here
        console.log('Saved Resume Content:', resumeOutput.innerHTML);
    }
});
document.getElementById('editResume')!.addEventListener('click', () => {
    const boxes = document.getElementsByClassName('resume-preview');
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i] as HTMLElement; // Cast to HTMLElement
        box.classList.toggle('highlighted'); // Now classList is accessible
    }
});

// Function to generate and download PDF
function downloadPDF(): void {
    // Get the content from the HTML element
    const contentElement = document.getElementById('resume-content');
    if (!contentElement) {
        console.error('Content element not found');
        return;
    }
    
    const content = contentElement.innerText; // Extract text content from the element

    // Create a Blob with the content
    const blob = new Blob([content], { type: 'application/pdf' });
    
    // Create a link element for the Blob
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    
    // Append the link to the document body (necessary for Firefox)
    document.body.appendChild(link);
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
}

// Add event listener to the button
const downloadButton = document.getElementById('download-pdf');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadPDF);
}

// app.ts
window.onload = () => {
    const printButton = document.getElementById('download-pdf') as HTMLButtonElement;
    const resumeContent = document.getElementById('resumeOutput') as HTMLTextAreaElement;

    printButton.addEventListener('click', () => {
        const content = resumeContent.value;

        // Create a new window or tab
        const printWindow = window.open('', '', 'height=600,width=800');
        if (printWindow) {
            printWindow.document.write('<html><head><title>Print Resume</title></head><body>');
            printWindow.document.write('<pre>' + content + '</pre>'); // Wrap content in <pre> for formatting
            printWindow.document.write('</body></html>');
            printWindow.document.close(); // Close the document for writing
            printWindow.focus(); // Focus the new window/tab
            printWindow.print(); // Open the print dialog
        } else {
            alert('Failed to open print window.');
        }
    });
};
