const fs = require('fs');
const path = require('path');
const { writeLabFile, wrapExercise } = require('./lab-builder-helper');

// ==========================================================================
// Lab C: JavaScript Validation (5 independent exercises)
// ==========================================================================

// 1. login-validation.html
writeLabFile('validation', 'login-validation.html', wrapExercise(
  'Login Validation with Red Errors & Output Div',
  'JavaScript Validation',
  'C.1',
  'Enforces validation with red error messages appearing adjacent to empty fields and results displayed in a dedicated output div.',
  `
  <div style="max-width:480px; margin:0 auto; background:#fff; padding:2rem; border-radius:8px; border:1px solid #e2e8f0;">
    <h3 class="h5 mb-3" style="color:#0f2b48;">Login Field-by-Field Validation</h3>
    
    <!-- Output Div -->
    <div id="c1-output-div" class="status-alert" role="status"></div>

    <form id="c1-form" novalidate>
      <div class="form-group">
        <label for="c1-user" class="form-label required">Username</label>
        <input type="text" id="c1-user" class="form-control" placeholder="Enter username">
        <div id="c1-user-err" class="error-feedback" style="color:#dc2626; font-size:13px; font-weight:600; margin-top:4px;">
          Username cannot be blank.
        </div>
      </div>

      <div class="form-group">
        <label for="c1-pwd" class="form-label required">Password</label>
        <input type="password" id="c1-pwd" class="form-control" placeholder="Enter password">
        <div id="c1-pwd-err" class="error-feedback" style="color:#dc2626; font-size:13px; font-weight:600; margin-top:4px;">
          Password is required (minimum 6 characters).
        </div>
      </div>

      <div class="d-flex gap-2 mt-3">
        <button type="submit" class="btn btn-primary" style="flex:2;">Validate &amp; Submit</button>
        <button type="button" id="c1-reset-btn" class="btn btn-outline" style="flex:1;">Clear</button>
      </div>
    </form>
  </div>
  `,
  `
  const form = document.getElementById('c1-form');
  const user = document.getElementById('c1-user');
  const pwd = document.getElementById('c1-pwd');
  const uErr = document.getElementById('c1-user-err');
  const pErr = document.getElementById('c1-pwd-err');
  const out = document.getElementById('c1-output-div');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!user.value.trim()) {
      user.classList.add('is-invalid');
      uErr.classList.add('show');
      valid = false;
    } else {
      user.classList.remove('is-invalid');
      uErr.classList.remove('show');
    }

    if (!pwd.value || pwd.value.length < 6) {
      pwd.classList.add('is-invalid');
      pErr.classList.add('show');
      valid = false;
    } else {
      pwd.classList.remove('is-invalid');
      pErr.classList.remove('show');
    }

    if (valid) {
      out.className = 'status-alert alert-success show';
      out.innerHTML = '<strong>Validation Passed:</strong> Welcome, ' + user.value.trim() + '. Logged in successfully!';
    } else {
      out.className = 'status-alert alert-danger show';
      out.innerHTML = '<strong>Validation Failed:</strong> Please fix the red error messages indicated above.';
    }
  });

  document.getElementById('c1-reset-btn').addEventListener('click', () => {
    form.reset();
    user.classList.remove('is-invalid');
    pwd.classList.remove('is-invalid');
    uErr.classList.remove('show');
    pErr.classList.remove('show');
    out.style.display = 'none';
  });
  `
));

// 2. student-regex-validation.html
writeLabFile('validation', 'student-regex-validation.html', wrapExercise(
  'Student Registration Regular Expression Validation',
  'JavaScript Validation',
  'C.2',
  'Name regex (/^[A-Za-z\\s]{3,50}$/), email regex, gender radio selection, and technical skills checkbox verification.',
  `
  <div style="max-width:600px; margin:0 auto; background:#fff; padding:2rem; border-radius:8px; border:1px solid #e2e8f0;">
    <h3 class="h5 mb-3" style="color:#0f2b48;">RegEx Student Registration</h3>
    <div id="c2-status" class="status-alert"></div>

    <form id="c2-form" novalidate>
      <div class="form-group">
        <label for="student-name" class="form-label required">Student Name (Letters and spaces only, 3-50 chars)</label>
        <input type="text" id="student-name" name="studentName" class="form-control" placeholder="Aarav Patel">
        <div id="studentNameError" class="error-feedback"></div>
      </div>

      <div class="form-group">
        <label for="student-email" class="form-label required">Email ID</label>
        <input type="email" id="student-email" name="studentEmail" class="form-control" placeholder="student@campus.edu">
        <div id="studentEmailError" class="error-feedback"></div>
      </div>

      <div class="form-group">
        <label class="form-label required">Gender</label>
        <div class="d-flex gap-3">
          <label><input type="radio" name="studentGender" value="Male"> Male</label>
          <label><input type="radio" name="studentGender" value="Female"> Female</label>
          <label><input type="radio" name="studentGender" value="Other"> Other</label>
        </div>
        <div id="studentGenderError" class="error-feedback"></div>
      </div>

      <div class="form-group">
        <label class="form-label required">Technical Skills (HTML, CSS, JavaScript)</label>
        <div class="d-flex gap-3">
          <label><input type="checkbox" name="studentSkills" value="HTML"> HTML</label>
          <label><input type="checkbox" name="studentSkills" value="CSS"> CSS</label>
          <label><input type="checkbox" name="studentSkills" value="JavaScript"> JavaScript</label>
        </div>
        <div id="studentSkillsError" class="error-feedback"></div>
      </div>

      <button type="submit" class="btn btn-primary mt-2">Validate Student Registration</button>
    </form>
  </div>
  `,
  `
  document.getElementById('c2-form').addEventListener('submit', (e) => {
    e.preventDefault();
    CampusValidation.validateStudentRegistration('c2-form', 'c2-status');
  });
  `
));

// 3. course-registration-validation.html
writeLabFile('validation', 'course-registration-validation.html', wrapExercise(
  'Course Registration Validation (RegEx, Dropdown, Multi-select)',
  'JavaScript Validation',
  'C.3',
  'Validates student name via regex, academic department dropdown (CSE, IT, ECE, EEE), and multi-select programming languages.',
  `
  <div style="max-width:600px; margin:0 auto; background:#fff; padding:2rem; border-radius:8px; border:1px solid #e2e8f0;">
    <h3 class="h5 mb-3" style="color:#0f2b48;">Course Registration Validator</h3>
    <div id="c3-display"></div>

    <form id="c3-form" novalidate>
      <div class="form-group">
        <label class="form-label required">Student Name (RegEx)</label>
        <input type="text" name="courseStudentName" class="form-control" placeholder="Priya Raman">
        <div id="courseNameError" class="error-feedback"></div>
      </div>

      <div class="form-group">
        <label class="form-label required">Department Dropdown</label>
        <select name="department" class="form-control">
          <option value="">-- Choose Department --</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
        </select>
        <div id="courseDeptError" class="error-feedback"></div>
      </div>

      <div class="form-group">
        <label class="form-label required">Multiple-Select Programming Languages</label>
        <select name="programmingLanguages" multiple class="form-control" style="height:110px;">
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="C++">C++</option>
        </select>
        <div id="courseLangError" class="error-feedback"></div>
      </div>

      <button type="submit" class="btn btn-primary mt-2">Validate &amp; Display Details</button>
    </form>
  </div>
  `,
  `
  document.getElementById('c3-form').addEventListener('submit', (e) => {
    e.preventDefault();
    CampusValidation.validateCourseRegistration('c3-form', 'c3-display');
  });
  `
));

// 4. patient-form-validation.html
writeLabFile('validation', 'patient-form-validation.html', wrapExercise(
  'Patient Form Validation Engine',
  'JavaScript Validation',
  'C.4',
  'Strict field validation across patient clinical attributes with targeted error feedback.',
  `
  <div class="text-center p-4 border rounded bg-white">
    <h3 class="h5 mb-2">Patient Clinical Data Validation</h3>
    <p class="text-muted small">Access the complete patient registration form with live validators:</p>
    <a href="../../registration.html#patient-registration" class="btn btn-primary">
      Open Patient Validation Suite &rarr;
    </a>
  </div>
  `
));

// 5. checkout-validation.html
writeLabFile('validation', 'checkout-validation.html', wrapExercise(
  'Checkout Validation & Total Arithmetic',
  'JavaScript Validation',
  'C.5',
  'Shopping cart checkout validation, payment method rules, and dynamic price calculations.',
  `
  <div class="text-center p-4 border rounded bg-white">
    <h3 class="h5 mb-2">Checkout Validation &amp; Real-Time Total Calculations</h3>
    <p class="text-muted small">Verify conditional card/UPI validation and quantity multipliers:</p>
    <a href="../../checkout.html" class="btn btn-primary">
      Open Checkout Arithmetic Sandbox &rarr;
    </a>
  </div>
  `
));

console.log('Lab C (5 files) successfully built.');
