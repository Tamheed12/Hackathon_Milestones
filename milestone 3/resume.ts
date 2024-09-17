document.addEventListener('DOMContentLoaded', () => {
    const resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');

    if (!resumeData) return;

    document.getElementById('resume-name')!.textContent = resumeData.name;
    document.getElementById('resume-title')!.textContent = resumeData.title;
    document.getElementById('resume-email')!.textContent = `Email: ${resumeData.email}`;
    document.getElementById('resume-phone')!.textContent = `Phone: ${resumeData.phone}`;
    document.getElementById('resume-objective')!.textContent = resumeData.objective;

    // Load image
    const profileImage = document.getElementById('resume-image') as HTMLImageElement;
    profileImage.src = `images/${resumeData.image}`; // Adjust path if necessary

    // Education
    const educationContent = resumeData.education.map((entry: any) => `
        <div>
            <h4>${entry.school}</h4>
            <p>Degree: ${entry.degree}</p>
            <p>Year: ${entry.year}</p>
        </div>
    `).join('');
    document.getElementById('resume-education')!.innerHTML = educationContent;

    // Experience
    const experienceContent = resumeData.experience.map((entry: any) => `
        <div>
            <h4>${entry.title}</h4>
            <p>Company: ${entry.company}</p>
            <p>Year: ${entry.year}</p>
            <p>Description: ${entry.description}</p>
        </div>
    `).join('');
    document.getElementById('resume-experience')!.innerHTML = experienceContent;

    // Skills
    const skillsContent = resumeData.skills.map((skill: string) => `<li>${skill}</li>`).join('');
    document.getElementById('resume-skills')!.innerHTML = skillsContent;
});
