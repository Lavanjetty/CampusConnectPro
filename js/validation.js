/**
 * CampusConnect Pro - Validation Module
 * Regular Expressions and Form Validation Handlers
 */

const CampusValidation = {
  // Regular Expressions
  patterns: {
    name: /^[A-Za-z\s]{3,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    pin: /^\d{4}$/,
    phone: /^\d{10}$/,
    cvv: /^\d{3,4}$/,
    cardNumber: /^\d{16}$/
  },

  showError(inputElement, errorElement, message) {
    if (inputElement) inputElement.classList.add('is-invalid');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
    }
  },

  clearError(inputElement, errorElement) {
    if (inputElement) inputElement.classList.remove('is-invalid');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('show');
    }
  },

  /**
   * Validate Student Registration
   */
  validateStudentRegistration(formId, statusDivId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const nameInput = form.querySelector('[name="studentName"]');
    const emailInput = form.querySelector('[name="studentEmail"]');
    const genderInputs = form.querySelectorAll('[name="studentGender"]');
    const skillInputs = form.querySelectorAll('[name="studentSkills"]');
    const statusDiv = document.getElementById(statusDivId);

    let isValid = true;

    // Validate Name
    const nameErr = form.querySelector('#studentNameError');
    if (!nameInput.value.trim()) {
      this.showError(nameInput, nameErr, 'Student Name is required.');
      isValid = false;
    } else if (!this.patterns.name.test(nameInput.value.trim())) {
      this.showError(nameInput, nameErr, 'Name must contain only alphabets and spaces (3-50 characters).');
      isValid = false;
    } else {
      this.clearError(nameInput, nameErr);
    }

    // Validate Email
    const emailErr = form.querySelector('#studentEmailError');
    if (!emailInput.value.trim()) {
      this.showError(emailInput, emailErr, 'Email address is required.');
      isValid = false;
    } else if (!this.patterns.email.test(emailInput.value.trim())) {
      this.showError(emailInput, emailErr, 'Please enter a valid email format (e.g., student@campus.edu).');
      isValid = false;
    } else {
      this.clearError(emailInput, emailErr);
    }

    // Validate Gender Radio
    const genderErr = form.querySelector('#studentGenderError');
    let genderSelected = false;
    genderInputs.forEach(r => { if (r.checked) genderSelected = true; });
    if (!genderSelected) {
      this.showError(null, genderErr, 'Please select your gender.');
      isValid = false;
    } else {
      this.clearError(null, genderErr);
    }

    // Validate Skills Checkbox (at least one)
    const skillsErr = form.querySelector('#studentSkillsError');
    let skillChecked = false;
    skillInputs.forEach(c => { if (c.checked) skillChecked = true; });
    if (!skillChecked) {
      this.showError(null, skillsErr, 'Please select at least one technical skill.');
      isValid = false;
    } else {
      this.clearError(null, skillsErr);
    }

    if (isValid && statusDiv) {
      statusDiv.className = 'status-alert alert-success show';
      statusDiv.innerHTML = `<strong>Registration Successful!</strong> Welcome, ${nameInput.value.trim()}. Your record has been validated and recorded.`;
    }

    return isValid;
  },

  /**
   * Validate Course Registration
   */
  validateCourseRegistration(formId, displayContainerId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const nameInput = form.querySelector('[name="courseStudentName"]');
    const deptSelect = form.querySelector('[name="department"]');
    const langSelect = form.querySelector('[name="programmingLanguages"]');
    const nameErr = form.querySelector('#courseNameError');
    const deptErr = form.querySelector('#courseDeptError');
    const langErr = form.querySelector('#courseLangError');
    const displayBox = document.getElementById(displayContainerId);

    let isValid = true;

    // Validate Name regex
    if (!nameInput.value.trim()) {
      this.showError(nameInput, nameErr, 'Student Name is required.');
      isValid = false;
    } else if (!this.patterns.name.test(nameInput.value.trim())) {
      this.showError(nameInput, nameErr, 'Please enter a valid alphabet name (3-50 chars).');
      isValid = false;
    } else {
      this.clearError(nameInput, nameErr);
    }

    // Validate Department
    if (!deptSelect.value) {
      this.showError(deptSelect, deptErr, 'Please select an academic department.');
      isValid = false;
    } else {
      this.clearError(deptSelect, deptErr);
    }

    // Validate Multiple Select Languages
    const selectedLangs = Array.from(langSelect.selectedOptions).map(o => o.value);
    if (selectedLangs.length === 0) {
      this.showError(langSelect, langErr, 'Please select at least one programming language.');
      isValid = false;
    } else {
      this.clearError(langSelect, langErr);
    }

    if (isValid && displayBox) {
      displayBox.innerHTML = `
        <div class="status-alert alert-success show">
          <h4 style="margin-bottom:0.5rem;color:#065f46;">Course Registration Details Confirmed</h4>
          <p><strong>Student Name:</strong> ${nameInput.value.trim()}</p>
          <p><strong>Department:</strong> ${deptSelect.value}</p>
          <p><strong>Enrolled Languages:</strong> ${selectedLangs.join(', ')}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `;
    }

    return isValid;
  }
};

window.CampusValidation = CampusValidation;
