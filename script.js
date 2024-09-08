document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    generateResume();
});

// Function to generate the resume
function generateResume() {
    // Get form input values
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Education fields
    const educationItems = document.querySelectorAll('#educationContainer .education-item');
    const educationArray = Array.from(educationItems).map(item => {
        const degree = item.querySelector('.degree').value;
        const institution = item.querySelector('.institution').value;
        const year = item.querySelector('.year').value;
        return { degree, institution, year };
    });

    // Work experience fields
    const experienceItems = document.querySelectorAll('#experienceContainer .experience-item');
    const experienceArray = Array.from(experienceItems).map(item => {
        const jobTitle = item.querySelector('.jobTitle').value;
        const company = item.querySelector('.company').value;
        const expYear = item.querySelector('.expYear').value;
        return { jobTitle, company, expYear };
    });

    // Skills fields
    const skillItems = document.querySelectorAll('#skillsContainer .skill');
    const skillsArray = Array.from(skillItems).map(skill => skill.value);

    // Generate resume HTML with edit buttons for each section
    let resumeHTML = `<div id="personalInfo">
                        <h2>${name}</h2><h3>${title}</h3>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <button class="editSection" data-section="personalInfo">Edit Personal Info</button>
                      </div>`;

    // Add education section
    resumeHTML += `<div id="educationInfo">
                     <h3>Education</h3><ul>`;
    educationArray.forEach((edu, index) => {
        resumeHTML += `<li><strong>${edu.degree}</strong>, ${edu.institution} (${edu.year})</li>`;
    });
    resumeHTML += `</ul><button class="editSection" data-section="educationInfo">Edit Education</button></div>`;

    // Add experience section
    resumeHTML += `<div id="experienceInfo">
                     <h3>Work Experience</h3><ul>`;
    experienceArray.forEach(exp => {
        resumeHTML += `<li><strong>${exp.jobTitle}</strong> at ${exp.company} (${exp.expYear})</li>`;
    });
    resumeHTML += `</ul><button class="editSection" data-section="experienceInfo">Edit Experience</button></div>`;

    // Add skills section
    resumeHTML += `<div id="skillsInfo">
                     <h3>Skills</h3><ul>`;
    skillsArray.forEach(skill => {
        resumeHTML += `<li>${skill}</li>`;
    });
    resumeHTML += `</ul><button class="editSection" data-section="skillsInfo">Edit Skills</button></div>`;

    // Display the generated resume
    document.getElementById('generatedResume').innerHTML = resumeHTML;
    document.getElementById('resumeContainer').style.display = 'block';

    // Hide form
    document.getElementById('resumeForm').style.display = 'none';

    // Add edit functionality for each section
    document.querySelectorAll('.editSection').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.dataset.section;
            editSection(section);
        });
    });
}

// Function to edit a section
function editSection(section) {
    document.getElementById('resumeForm').style.display = 'block';
    document.getElementById('resumeContainer').style.display = 'none';

    if (section === 'personalInfo') {
        document.getElementById('name').focus();
    } else if (section === 'educationInfo') {
        // Focus on first education field
        document.querySelector('.degree').focus();
    } else if (section === 'experienceInfo') {
        // Focus on first experience field
        document.querySelector('.jobTitle').focus();
    } else if (section === 'skillsInfo') {
        // Focus on first skill field
        document.querySelector('.skill').focus();
    }
}

// Add more education functionality
document.getElementById('addEducation').addEventListener('click', function() {
    const educationContainer = document.getElementById('educationContainer');
    const educationItem = document.createElement('div');
    educationItem.classList.add('education-item');
    educationItem.innerHTML = `
        <label for="degree">Degree:</label>
        <input type="text" class="degree" required><br><br>

        <label for="institution">Institution:</label>
        <input type="text" class="institution" required><br><br>

        <label for="year">Year:</label>
        <input type="text" class="year" required><br><br>
    `;
    educationContainer.appendChild(educationItem);
});

// Add more experience functionality
document.getElementById('addExperience').addEventListener('click', function() {
    const experienceContainer = document.getElementById('experienceContainer');
    const experienceItem = document.createElement('div');
    experienceItem.classList.add('experience-item');
    experienceItem.innerHTML = `
        <label for="jobTitle">Job Title:</label>
        <input type="text" class="jobTitle" required><br><br>

        <label for="company">Company:</label>
        <input type="text" class="company" required><br><br>

        <label for="expYear">Years:</label>
        <input type="text" class="expYear" required><br><br>
    `;
    experienceContainer.appendChild(experienceItem);
});

// Add more skills functionality
document.getElementById
