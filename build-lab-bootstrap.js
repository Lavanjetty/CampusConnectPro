const fs = require('fs');
const path = require('path');
const { writeLabFile, wrapExercise } = require('./lab-builder-helper');

// ==========================================================================
// Lab F: Bootstrap Exercises (4 independent exercises)
// ==========================================================================

// 1. college-events-bootstrap.html
writeLabFile('bootstrap', 'college-events-bootstrap.html', `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>College Events 2026 — Bootstrap Demonstration</title>
  <link rel="stylesheet" href="../../vendor/bootstrap/bootstrap.min.css">
  <link rel="stylesheet" href="../../css/theme.css">
  <link rel="stylesheet" href="../../css/main.css">
</head>
<body>
  <!-- Bootstrap Navigation: Home, Events, Gallery, Contact -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold text-info" href="../../index.html">CampusConnect Events</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#labFNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="labFNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="../../events.html">Events</a></li>
          <li class="nav-item"><a class="nav-link" href="../../gallery.html">Gallery</a></li>
          <li class="nav-item"><a class="nav-link" href="../../departments.html#contact">Contact</a></li>
        </ul>
        <a href="#events-list" class="btn btn-outline-info btn-sm">View Events</a>
      </div>
    </div>
  </nav>

  <main class="container my-5">
    <!-- Heading: “College Events 2026” -->
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold" style="color:var(--color-navy-950);">College Events 2026</h1>
      <p class="text-muted fs-5">Annual Academic and Cultural Festival</p>
      <!-- View Events button -->
      <a href="../../events.html" class="btn btn-primary btn-lg mt-2">View Events</a>
    </div>

    <div class="row g-4" id="events-list">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-primary">Technical Symposium</h5>
            <p class="card-text text-muted small">Keynotes, paper presentations, and algorithmic coding challenges.</p>
            <a href="../../events.html" class="btn btn-sm btn-outline-primary">Details</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-success">Innovation Expo</h5>
            <p class="card-text text-muted small">Exhibition of senior year automated capstone projects and inventions.</p>
            <a href="../../events.html" class="btn btn-sm btn-outline-success">Details</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-warning">Gaming Championship</h5>
            <p class="card-text text-muted small">Inter-departmental esports tournaments with live streaming.</p>
            <a href="../../gaming.html" class="btn btn-sm btn-outline-warning">Details</a>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer: “© 2026 College Events” -->
  <footer class="bg-dark text-white text-center py-4 mt-5">
    <div class="container">
      &copy; 2026 College Events
    </div>
  </footer>

  <script src="../../vendor/bootstrap/bootstrap.bundle.min.js"></script>
</body>
</html>`);

// 2. auth-bootstrap-page.html
writeLabFile('bootstrap', 'auth-bootstrap-page.html', wrapExercise(
  'Responsive Authentication Page (Bootstrap Cards)',
  'Bootstrap',
  'F.2',
  'Responsive authentication page with separate Login and Registration Bootstrap cards.',
  `
  <div class="row g-4">
    <div class="col-md-6">
      <div class="card shadow-sm h-100">
        <div class="card-header bg-primary text-white fw-bold">
          Student &amp; Faculty Login
        </div>
        <div class="card-body">
          <form onsubmit="event.preventDefault(); alert('Bootstrap Card Login Validated');">
            <div class="mb-3">
              <label class="form-label">Username or Email</label>
              <input type="text" class="form-control" required placeholder="name@campus.edu">
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" required placeholder="••••••••">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="bs-rem">
              <label class="form-check-label" for="bs-rem">Remember Me</label>
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card shadow-sm h-100">
        <div class="card-header bg-success text-white fw-bold">
          New User Registration
        </div>
        <div class="card-body">
          <form onsubmit="event.preventDefault(); alert('Bootstrap Card Registration Validated');">
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" required placeholder="Aarav Patel">
            </div>
            <div class="mb-3">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" required placeholder="student@campus.edu">
            </div>
            <div class="mb-3">
              <label class="form-label">User Role</label>
              <select class="form-select">
                <option>Undergraduate Student</option>
                <option>Postgraduate Scholar</option>
                <option>Faculty Member</option>
              </select>
            </div>
            <button type="submit" class="btn btn-success w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
));

// 3. grid-navigation-demo.html
writeLabFile('bootstrap', 'grid-navigation-demo.html', wrapExercise(
  'Bootstrap Navigation & Responsive Grid System',
  'Bootstrap',
  'F.3',
  'Demonstrating Bootstrap 5 grid breakpoints: col-12, col-md-6, col-lg-3 and responsive navbar.',
  `
  <div>
    <h4 class="h6 fw-bold mb-3">Responsive 12-Column Grid Demonstration</h4>
    <div class="row g-3 text-center text-white fw-bold">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="p-3 bg-primary rounded">col-12 col-md-6 col-lg-3</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="p-3 bg-success rounded">col-12 col-md-6 col-lg-3</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="p-3 bg-warning text-dark rounded">col-12 col-md-6 col-lg-3</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="p-3 bg-danger rounded">col-12 col-md-6 col-lg-3</div>
      </div>
    </div>
  </div>
  `
));

// 4. local-bootstrap-demo.html
writeLabFile('bootstrap', 'local-bootstrap-demo.html', wrapExercise(
  'Local External Bootstrap CSS Usage Example',
  'Bootstrap',
  'F.4',
  'Confirms loading and execution of local vendor/bootstrap/bootstrap.min.css without CDN reliance.',
  `
  <div class="card p-4">
    <h4 class="h5 fw-bold text-primary mb-2">Local Bootstrap Resource Verification</h4>
    <p class="text-muted small">
      This page explicitly references <code>../../vendor/bootstrap/bootstrap.min.css</code> and <code>../../vendor/bootstrap/bootstrap.bundle.min.js</code>.
    </p>
    <div class="d-flex gap-2">
      <span class="badge bg-primary">Offline Ready</span>
      <span class="badge bg-success">Netlify Compatible</span>
      <span class="badge bg-dark">v5.3.3 Minified</span>
    </div>
  </div>
  `
));

console.log('Lab F (4 files) successfully built.');
