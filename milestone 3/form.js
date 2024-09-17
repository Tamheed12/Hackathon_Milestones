document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var addEducationButton = document.getElementById('add-education');
    var addExperienceButton = document.getElementById('add-experience');
    var addSkillButton = document.getElementById('add-skill');
    var eduCount = 1;
    var expCount = 1;
    var skillCount = 1;
    function addEducationField() {
        eduCount++;
        var educationFields = document.getElementById('education-fields');
        var newEducationEntry = document.createElement('div');
        newEducationEntry.classList.add('education-entry');
        newEducationEntry.innerHTML = "\n            <label for=\"edu-school-".concat(eduCount, "\">School:</label>\n            <input type=\"text\" id=\"edu-school-").concat(eduCount, "\" name=\"edu-school[]\" required>\n            \n            <label for=\"edu-degree-").concat(eduCount, "\">Degree:</label>\n            <input type=\"text\" id=\"edu-degree-").concat(eduCount, "\" name=\"edu-degree[]\" required>\n            \n            <label for=\"edu-year-").concat(eduCount, "\">Year:</label>\n            <input type=\"text\" id=\"edu-year-").concat(eduCount, "\" name=\"edu-year[]\" required>\n        ");
        educationFields.appendChild(newEducationEntry);
    }
    function addExperienceField() {
        expCount++;
        var experienceFields = document.getElementById('experience-fields');
        var newExperienceEntry = document.createElement('div');
        newExperienceEntry.classList.add('experience-entry');
        newExperienceEntry.innerHTML = "\n            <label for=\"job-title-".concat(expCount, "\">Job Title:</label>\n            <input type=\"text\" id=\"job-title-").concat(expCount, "\" name=\"job-title[]\" required>\n            \n            <label for=\"job-company-").concat(expCount, "\">Company:</label>\n            <input type=\"text\" id=\"job-company-").concat(expCount, "\" name=\"job-company[]\" required>\n            \n            <label for=\"job-year-").concat(expCount, "\">Year:</label>\n            <input type=\"text\" id=\"job-year-").concat(expCount, "\" name=\"job-year[]\" required>\n            \n            <label for=\"job-description-").concat(expCount, "\">Description:</label>\n            <textarea id=\"job-description-").concat(expCount, "\" name=\"job-description[]\" rows=\"4\" required></textarea>\n        ");
        experienceFields.appendChild(newExperienceEntry);
    }
    function addSkillField() {
        skillCount++;
        var skillsFields = document.getElementById('skills-fields');
        var newSkillEntry = document.createElement('div');
        newSkillEntry.classList.add('skills-entry');
        newSkillEntry.innerHTML = "\n            <label for=\"skill-".concat(skillCount, "\">Skill:</label>\n            <input type=\"text\" id=\"skill-").concat(skillCount, "\" name=\"skills[]\" required>\n        ");
        skillsFields.appendChild(newSkillEntry);
    }
    addEducationButton.addEventListener('click', addEducationField);
    addExperienceButton.addEventListener('click', addExperienceField);
    addSkillButton.addEventListener('click', addSkillField);
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var resumeData = {
            name: formData.get('name'),
            title: formData.get('title'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            objective: formData.get('objective'),
            image: formData.get('profile-image').name, // Storing image file name
            education: formData.getAll('edu-school[]').map(function (_, index) { return ({
                school: formData.getAll('edu-school[]')[index],
                degree: formData.getAll('edu-degree[]')[index],
                year: formData.getAll('edu-year[]')[index]
            }); }),
            experience: formData.getAll('job-title[]').map(function (_, index) { return ({
                title: formData.getAll('job-title[]')[index],
                company: formData.getAll('job-company[]')[index],
                year: formData.getAll('job-year[]')[index],
                description: formData.getAll('job-description[]')[index]
            }); }),
            skills: formData.getAll('skills[]')
        };
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        window.location.href = 'resume.html';
    });
});
