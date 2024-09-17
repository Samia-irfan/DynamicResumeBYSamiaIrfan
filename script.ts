// listing resume
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    //type assersertions
    
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
    

   // Resume Output
   const resumeOutput = `
   <h2>Resume</h2>
   
   <p><strong>Name:</strong>${name}</p>
   <p><strong>Email:</strong>${email}</p>
   <p><strong>Phone:</strong>${phone}</p>

   <h3>Education</h3>
   <p>${education}</p>

   <h4>Experience</h4>
   <p>${experience}</p>

   <h5>Skills</h5>
   <p>${skills}</p>`;

   const resumeOutputElement =document.getElementById("resumeOutput")
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
   } else {
    console.error('The resume Output Elements are missing');
    
   }
 } else {
    console.error('one or more output elements(s) are missing ');
    
   }
}
   
)