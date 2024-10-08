var _a;
// listing resume
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assersertions
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Resume Output
        var resumeOutput = "\n   <h2>Resume</h2>\n   \n   <p><strong>Name:</strong>".concat(name_1, "</p>\n   <p><strong>Email:</strong>").concat(email, "</p>\n   <p><strong>Phone:</strong>").concat(phone, "</p>\n\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n   <h4>Experience</h4>\n   <p>").concat(experience, "</p>\n\n   <h5>Skills</h5>\n   <p>").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume Output Elements are missing');
        }
    }
    else {
        console.error('one or more output elements(s) are missing ');
    }
});
