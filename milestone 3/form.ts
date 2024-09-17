document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
    const addExperienceButton = document.getElementById('add-experience') as HTMLButtonElement;
    const addSkillButton = document.getElementById('add-skill') as HTMLButtonElement;

    let eduCount = 1;
    let expCount = 1;
    let skillCount = 1;

    function addEducationField() {
        eduCount++;
        const educationFields = document.getElementById('education-fields') as HTMLDivElement;
        const newEducationEntry = document.createElement('div');
        newEducationEntry.classList.add('education-entry');
        newEducationEntry.innerHTML = `
            <label for="edu-school-${eduCount}">School:</label>
            <input type="text" id="edu-school-${eduCount}" name="edu-school[]" required>
            
            <label for="edu-degree-${eduCount}">Degree:</label>
            <input type="text" id="edu-degree-${eduCount}" name="edu-degree[]" required>
            
            <label for="edu-year-${eduCount}">Year:</label>
            <input type="text" id="edu-year-${eduCount}" name="edu-year[]" required>
        `;
        educationFields.appendChild(newEducationEntry);
    }

    function addExperienceField() {
        expCount++;
        const experienceFields = document.getElementById('experience-fields') as HTMLDivElement;
        const newExperienceEntry = document.createElement('div');
        newExperienceEntry.classList.add('experience-entry');
        newExperienceEntry.innerHTML = `
            <label for="job-title-${expCount}">Job Title:</label>
            <input type="text" id="job-title-${expCount}" name="job-title[]" required>
            
            <label for="job-company-${expCount}">Company:</label>
            <input type="text" id="job-company-${expCount}" name="job-company[]" required>
            
            <label for="job-year-${expCount}">Year:</label>
            <input type="text" id="job-year-${expCount}" name="job-year[]" required>
            
            <label for="job-description-${expCount}">Description:</label>
            <textarea id="job-description-${expCount}" name="job-description[]" rows="4" required></textarea>
        `;
        experienceFields.appendChild(newExperienceEntry);
    }

    function addSkillField() {
        skillCount++;
        const skillsFields = document.getElementById('skills-fields') as HTMLDivElement;
        const newSkillEntry = document.createElement('div');
        newSkillEntry.classList.add('skills-entry');
        newSkillEntry.innerHTML = `
            <label for="skill-${skillCount}">Skill:</label>
            <input type="text" id="skill-${skillCount}" name="skills[]" required>
        `;
        skillsFields.appendChild(newSkillEntry);
    }

    addEducationButton.addEventListener('click', addEducationField);
    addExperienceButton.addEventListener('click', addExperienceField);
    addSkillButton.addEventListener('click', addSkillField);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        const resumeData = {
            name: formData.get('name') as string,
            title: formData.get('title') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            objective: formData.get('objective') as string,
            image: (formData.get('profile-image') as File).name, // Storing image file name
            education: formData.getAll('edu-school[]').map((_, index) => ({
                school: formData.getAll('edu-school[]')[index],
                degree: formData.getAll('edu-degree[]')[index],
                year: formData.getAll('edu-year[]')[index]
            })),
            experience: formData.getAll('job-title[]').map((_, index) => ({
                title: formData.getAll('job-title[]')[index],
                company: formData.getAll('job-company[]')[index],
                year: formData.getAll('job-year[]')[index],
                description: formData.getAll('job-description[]')[index]
            })),
            skills: formData.getAll('skills[]')
        };

        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        window.location.href = 'resume.html';
    });
});
