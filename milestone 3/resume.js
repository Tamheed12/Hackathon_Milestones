document.addEventListener('DOMContentLoaded', function () {
    var resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
    if (!resumeData)
        return;
    document.getElementById('resume-name').textContent = resumeData.name;
    document.getElementById('resume-title').textContent = resumeData.title;
    document.getElementById('resume-email').textContent = "Email: ".concat(resumeData.email);
    document.getElementById('resume-phone').textContent = "Phone: ".concat(resumeData.phone);
    document.getElementById('resume-objective').textContent = resumeData.objective;
    // Load image
    var profileImage = document.getElementById('resume-image');
    profileImage.src = "images/".concat(resumeData.image); // Adjust path if necessary
    // Education
    var educationContent = resumeData.education.map(function (entry) { return "\n        <div>\n            <h4>".concat(entry.school, "</h4>\n            <p>Degree: ").concat(entry.degree, "</p>\n            <p>Year: ").concat(entry.year, "</p>\n        </div>\n    "); }).join('');
    document.getElementById('resume-education').innerHTML = educationContent;
    // Experience
    var experienceContent = resumeData.experience.map(function (entry) { return "\n        <div>\n            <h4>".concat(entry.title, "</h4>\n            <p>Company: ").concat(entry.company, "</p>\n            <p>Year: ").concat(entry.year, "</p>\n            <p>Description: ").concat(entry.description, "</p>\n        </div>\n    "); }).join('');
    document.getElementById('resume-experience').innerHTML = experienceContent;
    // Skills
    var skillsContent = resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    document.getElementById('resume-skills').innerHTML = skillsContent;
});
