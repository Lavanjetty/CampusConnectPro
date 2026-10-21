const fs = require('fs');
const path = require('path');
const { writeLabFile, wrapExercise } = require('./lab-builder-helper');

// ==========================================================================
// Lab B: HTML5 Forms and Multimedia (7 independent exercises)
// ==========================================================================

// 1. student-login-form.html
writeLabFile('forms', 'student-login-form.html', wrapExercise(
  'Student Login Form with Audio Guidance',
  'HTML5 Forms & Media',
  'B.1',
  'Student Login with username/email, password, Remember Me, radio buttons, Forgot Password, Create Account, Login, Clear, and audio guidance.',
  `
  <div style="max-width:500px; margin:0 auto; background:#fff; padding:2rem; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
      <h3 style="margin:0; color:#0f2b48;">Student Portal Login</h3>
      <button type="button" id="btn-audio-guide" class="btn btn-outline btn-sm">🔊 Audio Guidance</button>
    </div>

    <div id="login-out" class="status-alert" role="alert"></div>

    <form id="lab-login-form" novalidate>
      <div class="form-group">
        <label class="form-label required">Role</label>
        <div style="display:flex; gap:1.5rem; margin-top:0.25rem;">
          <label><input type="radio" name="labRole" value="Student" checked> Student</label>
          <label><input type="radio" name="labRole" value="Faculty"> Faculty</label>
        </div>
      </div>

      <div class="form-group">
        <label for="b1-user" class="form-label required">Username or Email</label>
        <input type="text" id="b1-user" name="b1User" class="form-control" placeholder="e.g. aarav@campus.edu" required>
        <div id="err-b1-user" class="error-feedback">Username or email is required.</div>
      </div>

      <div class="form-group">
        <label for="b1-pwd" class="form-label required">Password</label>
        <input type="password" id="b1-pwd" name="b1Pwd" class="form-control" placeholder="••••••••" required>
        <div id="err-b1-pwd" class="error-feedback">Password is required.</div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
        <label style="font-size:0.9rem;"><input type="checkbox" id="b1-remember"> Remember Me</label>
        <a href="#" onclick="alert('Password reset link sent to demo account.'); return false;" style="font-size:0.85rem; color:#0d9488;">Forgot Password?</a>
      </div>

      <div style="display:flex; gap:1rem; margin-bottom:1rem;">
        <button type="submit" class="btn btn-primary" style="flex:2;">Login</button>
        <button type="button" id="btn-b1-clear" class="btn btn-outline" style="flex:1;">Clear</button>
      </div>

      <div style="text-align:center; font-size:0.875rem;">
        New student? <a href="#" onclick="alert('Transferring to Create Account panel.'); return false;">Create New Account</a>
      </div>
    </form>
  </div>
  `,
  `
  document.getElementById('btn-audio-guide')?.addEventListener('click', () => {
    CampusMedia.speakInstruction('Please choose Student or Faculty, then input your campus username or registered email and password to log in.');
  });

  const form = document.getElementById('lab-login-form');
  const out = document.getElementById('login-out');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('b1-user');
    const p = document.getElementById('b1-pwd');
    let valid = true;

    if (!u.value.trim()) {
      u.classList.add('is-invalid');
      document.getElementById('err-b1-user').classList.add('show');
      valid = false;
    } else {
      u.classList.remove('is-invalid');
      document.getElementById('err-b1-user').classList.remove('show');
    }

    if (!p.value) {
      p.classList.add('is-invalid');
      document.getElementById('err-b1-pwd').classList.add('show');
      valid = false;
    } else {
      p.classList.remove('is-invalid');
      document.getElementById('err-b1-pwd').classList.remove('show');
    }

    if (valid) {
      out.className = 'status-alert alert-success show';
      out.innerHTML = '<strong>Login Successful!</strong> Welcome to CampusConnect Pro.';
    } else {
      out.className = 'status-alert alert-danger show';
      out.innerHTML = '<strong>Validation Error:</strong> Please fill in empty fields.';
    }
  });

  document.getElementById('btn-b1-clear').addEventListener('click', () => {
    form.reset();
    out.style.display = 'none';
    form.querySelectorAll('.error-feedback').forEach(e => e.classList.remove('show'));
    form.querySelectorAll('.form-control').forEach(e => e.classList.remove('is-invalid'));
  });
  `
));

// 2. symposium-registration.html
writeLabFile('forms', 'symposium-registration.html', wrapExercise(
  'Symposium Registration with Video & Audio',
  'HTML5 Forms & Media',
  'B.2',
  'National Technical Symposium registration with video, audio, date, skills, ID proof upload, and confirmation.',
  `
  <div>
    <div class="row g-4 mb-4">
      <div class="col-md-6">
        <div style="background:#0f172a; padding:1.25rem; border-radius:8px; color:#fff;">
          <h4 style="color:#38bdf8; font-size:16px;">🎬 Symposium Promotional Video</h4>
          <canvas id="b2-canvas" width="450" height="200" style="width:100%; height:180px; background:#020617; border-radius:6px; display:block; margin:10px 0;"></canvas>
          <button type="button" id="b2-video-btn" class="btn btn-primary btn-sm">▶ Play Video</button>
        </div>
      </div>
      <div class="col-md-6">
        <div style="background:#f8fafc; padding:1.25rem; border-radius:8px; border:1px solid #e2e8f0; height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <h4 style="color:#0f2b48; font-size:16px;">🎙️ Welcome Audio Message</h4>
            <p class="small text-muted">Listen to the symposium welcome address:</p>
            <audio id="b2-audio" controls style="width:100%;">
              <source src="../../media/symposium-welcome.wav" type="audio/wav">
            </audio>
          </div>
          <button type="button" class="btn btn-outline btn-sm align-self-start" onclick="CampusMedia.playWelcomeAudio('b2-audio')">
            🔊 Replay Welcome Chime
          </button>
        </div>
      </div>
    </div>

    <!-- Registration Form -->
    <div style="background:#fff; border:1px solid #e2e8f0; padding:1.5rem; border-radius:8px;">
      <h3 class="h5 mb-3" style="color:#0f2b48;">Technical Symposium Registration Form</h3>
      <div id="b2-status" class="status-alert" role="alert"></div>

      <form id="b2-form" novalidate>
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label required">Student Name</label>
            <input type="text" id="b2-name" class="form-control" placeholder="Aarav Patel" required>
          </div>
          <div class="col-md-6">
            <label class="form-label required">Event Attendance Date</label>
            <input type="date" id="b2-date" class="form-control" value="2026-11-14" required>
          </div>
          <div class="col-md-6">
            <label class="form-label required">Department</label>
            <select id="b2-dept" class="form-control" required>
              <option value="">-- Select Dept --</option>
              <option value="CSE">Computer Science (CSE)</option>
              <option value="IT">Information Technology (IT)</option>
              <option value="ECE">Electronics (ECE)</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label required">Student ID Card (Upload)</label>
            <input type="file" id="b2-file" class="form-control" accept=".pdf,.png,.jpg" required>
          </div>
          <div class="col-12">
            <label class="form-label required">Technical Skills</label>
            <div class="d-flex gap-3">
              <label><input type="checkbox" name="b2Skill" value="HTML5"> HTML5</label>
              <label><input type="checkbox" name="b2Skill" value="JavaScript"> JavaScript</label>
              <label><input type="checkbox" name="b2Skill" value="Python"> Python</label>
            </div>
          </div>
          <div class="col-12 d-flex gap-2 mt-3">
            <button type="submit" class="btn btn-primary">Submit Registration</button>
            <button type="reset" class="btn btn-outline">Reset</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  `,
  `
  CampusMedia.setupVideoFallback('b2-canvas', 'b2-video-btn');

  document.getElementById('b2-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('b2-name').value.trim();
    const dept = document.getElementById('b2-dept').value;
    const file = document.getElementById('b2-file').files.length;
    const status = document.getElementById('b2-status');

    if (!name || !dept || !file) {
      status.className = 'status-alert alert-danger show';
      status.innerHTML = 'Please fill out all required symposium fields.';
    } else {
      status.className = 'status-alert alert-success show';
      status.innerHTML = '<strong>Registration Confirmed!</strong> Ticket pass generated for ' + name + ' (' + dept + ').';
    }
  });
  `
));

// 3. patient-registration.html
writeLabFile('forms', 'patient-registration.html', wrapExercise(
  'Comprehensive Patient Registration (18 HTML5 Input Types)',
  'HTML5 Forms & Media',
  'B.3',
  'Patient registration form featuring text, email, password, tel, number, date, time, datetime-local, url, search, color, file, range, radio, checkbox, select, textarea, hidden, and image button.',
  `
  <div>
    <p class="text-muted small">
      Demonstrates all specified HTML5 input types with interactive client-side responses.
    </p>
    <div class="text-center p-3 border rounded bg-white">
      <a href="../../registration.html#patient-registration" class="btn btn-primary">
        🏥 Open Full 18-Control Patient Registration Suite &rarr;
      </a>
      <div class="mt-2 text-muted small">
        Controls showcased: text, email, password, tel, number, date, time, datetime-local, url, search, color, file, range, radio, checkbox, select, textarea, hidden, image button.
      </div>
    </div>
  </div>
  `
));

// 4. shopping-checkout.html
writeLabFile('forms', 'shopping-checkout.html', wrapExercise(
  'Shopping Cart Checkout (Customer, Payment, Summary)',
  'HTML5 Forms & Media',
  'B.4',
  'Independent checkout form with customer details, payment methods, and live item summary.',
  `
  <div>
    <p class="text-muted small">Shopping cart checkout with dynamic total arithmetic and payment visibility toggle:</p>
    <div class="text-center p-3 border rounded bg-white">
      <a href="../../checkout.html" class="btn btn-primary">
        🛒 Open Complete Shopping Checkout System &rarr;
      </a>
    </div>
  </div>
  `
));

// 5. auth-bootstrap.html
writeLabFile('forms', 'auth-bootstrap.html', wrapExercise(
  'User Authentication with Bootstrap Classes',
  'HTML5 Forms & Media',
  'B.5',
  'Authentication interface leveraging Bootstrap 5 card, grid, form-label, form-control, and button classes.',
  `
  <div class="row g-4 justify-content-center">
    <div class="col-md-6">
      <div class="card shadow-sm border-primary">
        <div class="card-header bg-primary text-white">
          <h4 class="h6 mb-0">Bootstrap 5 Login Panel</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" placeholder="name@campus.edu">
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <button type="button" class="btn btn-primary w-100" onclick="alert('Bootstrap Login Clicked')">Sign In</button>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card shadow-sm border-success">
        <div class="card-header bg-success text-white">
          <h4 class="h6 mb-0">Bootstrap 5 Registration Panel</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control" placeholder="Aarav Patel">
          </div>
          <div class="mb-3">
            <label class="form-label">Campus Role</label>
            <select class="form-select">
              <option>Student</option>
              <option>Faculty</option>
            </select>
          </div>
          <button type="button" class="btn btn-success w-100" onclick="alert('Bootstrap Registration Clicked')">Create Account</button>
        </div>
      </div>
    </div>
  </div>
  `
));

// 6. bootstrap-external.html
writeLabFile('forms', 'bootstrap-external.html', wrapExercise(
  'External Bootstrap Stylesheet Demonstration',
  'HTML5 Forms & Media',
  'B.6',
  'Demonstrating downloaded local Bootstrap 5 stylesheet linked via vendor/bootstrap/bootstrap.min.css.',
  `
  <div class="alert alert-info" role="alert">
    <strong>Bootstrap 5 Loaded:</strong> This exercise utilizes the local stylesheet at <code>vendor/bootstrap/bootstrap.min.css</code> with cards, badges, and flex grids.
  </div>
  <div class="card p-3">
    <div class="d-flex justify-content-between align-items-center">
      <span class="badge bg-primary">Local Bootstrap 5.3.3</span>
      <span class="badge bg-success">CSS &amp; JS Bundle Verified</span>
    </div>
  </div>
  `
));

// 7. image-button-upload.html
writeLabFile('forms', 'image-button-upload.html', wrapExercise(
  'Image Input Button & File Upload Demos',
  'HTML5 Forms & Media',
  'B.7',
  'Demonstrating <input type="image"> graphical submit button and file upload input.',
  `
  <div class="card p-4">
    <h4 class="h6 fw-bold mb-3">1. Image Input Button (&lt;input type="image"&gt;)</h4>
    <p class="text-muted small">Clicking the image button submits coordinate and form data:</p>
    <form onsubmit="event.preventDefault(); alert('Image button submitted form at coordinates (' + event.offsetX + ', ' + event.offsetY + ')');">
      <input type="image" src="../../images/submit-btn.png" alt="Confirm and Pay" style="height:44px; cursor:pointer;">
    </form>

    <hr class="my-4">

    <h4 class="h6 fw-bold mb-3">2. File Upload Demo (&lt;input type="file"&gt;)</h4>
    <form onsubmit="event.preventDefault(); const f=document.getElementById('demo-file-input').files[0]; alert(f ? 'Attached: ' + f.name + ' (' + f.size + ' bytes)' : 'No file chosen');">
      <input type="file" id="demo-file-input" class="form-control mb-2" accept=".pdf,.png,.jpg">
      <button type="submit" class="btn btn-primary btn-sm">Inspect Uploaded File</button>
    </form>
  </div>
  `
));

console.log('Lab B (7 files) successfully built.');
