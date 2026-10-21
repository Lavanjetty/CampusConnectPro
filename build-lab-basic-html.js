const fs = require('fs');
const path = require('path');
const { writeLabFile, wrapExercise } = require('./lab-builder-helper');

// ==========================================================================
// Lab A: Basic HTML and Layouts (17 independent exercises)
// ==========================================================================

// 1. headings-formatting.html
writeLabFile('basic-html', 'headings-formatting.html', wrapExercise(
  'HTML Headings & Text Formatting',
  'Basic HTML',
  'A.1',
  'Demonstrates headings (h1-h6), paragraphs, bold, italic, underline, mark, subscript, and superscript.',
  `
  <div>
    <h1>Heading Level 1: Quantum Computing Fundamentals</h1>
    <h2>Heading Level 2: Algorithmic Architecture</h2>
    <h3>Heading Level 3: Microarchitectures & Qubits</h3>
    <h4>Heading Level 4: Error Mitigation Protocols</h4>
    <h5>Heading Level 5: Mathematical Formulations</h5>
    <h6>Heading Level 6: Technical Footnote Annotations</h6>

    <hr style="margin:1.5rem 0;">

    <p>
      This paragraph demonstrates text formatting tags: 
      <b>Bold text using &lt;b&gt;</b>, 
      <strong>Strong importance using &lt;strong&gt;</strong>, 
      <i>Italic style using &lt;i&gt;</i>, 
      <em>Emphasis using &lt;em&gt;</em>, 
      <u>Underlined text using &lt;u&gt;</u>, and 
      <mark>Highlighted mark text using &lt;mark&gt;</mark>.
    </p>

    <p>
      Chemical reactions and formulas using subscript: Carbon Dioxide is <strong>CO<sub>2</sub></strong>, Water is <strong>H<sub>2</sub>O</strong>, and Glucose is <strong>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></strong>.
    </p>

    <p>
      Mathematical expressions using superscript: Einstein's mass-energy formula <strong>E = mc<sup>2</sup></strong>, Pythagorean theorem <strong>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></strong>, and cubic polynomial <strong>a<sup>3</sup> + b<sup>3</sup></strong>.
    </p>
  </div>
  `
));

// 2. nested-lists.html
writeLabFile('basic-html', 'nested-lists.html', wrapExercise(
  'Nested Unordered Lists',
  'Basic HTML',
  'A.2',
  'Demonstrates multi-level nested unordered lists representing countries to visit and activities.',
  `
  <div>
    <h3>Global Expedition Plan (Nested Unordered List)</h3>
    <ul style="line-height:2; font-size:1.05rem;">
      <li>
        <strong>Countries to Visit</strong>
        <ul style="list-style-type:circle;">
          <li>Japan — Tokyo, Kyoto, Mount Fuji</li>
          <li>Switzerland — Zurich, Geneva, Interlaken</li>
          <li>Canada — Banff, Vancouver, Toronto</li>
        </ul>
      </li>
      <li style="margin-top:1rem;">
        <strong>Activities</strong>
        <ul style="list-style-type:circle;">
          <li>Hiking — High mountain alpine trails</li>
          <li>Scuba Diving — Coral reef marine exploration</li>
          <li>Photography — Architectural and natural landscape capture</li>
        </ul>
      </li>
    </ul>
  </div>
  `
));

// 3. employee-profile.html
writeLabFile('basic-html', 'employee-profile.html', wrapExercise(
  'Employee Profile with Text Formatting',
  'Basic HTML',
  'A.3',
  'Employee profile demonstrating text formatting, ratings, and scientific notation.',
  `
  <div style="background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:2rem; max-width:600px; margin:0 auto;">
    <div style="display:flex; align-items:center; gap:1.25rem; margin-bottom:1rem;">
      <img src="../../images/avatar-faculty1.svg" alt="Dr. Aris Thorne" style="width:72px; height:72px; border-radius:50%; border:3px solid #0ea5e9;">
      <div>
        <h3 style="margin:0; font-size:1.3rem;">Dr. Aris Thorne</h3>
        <p style="margin:0; color:#0d9488; font-weight:600;">Professor &amp; Head of Department</p>
        <span style="background:#fef3c7; color:#b45309; padding:2px 8px; border-radius:12px; font-weight:bold; font-size:0.8rem;">Rating: 4.96 / 5.0</span>
      </div>
    </div>
    <p>
      Institution: <strong>CampusConnect Pro Institute of Technology</strong><br>
      Specialization: <em>Distributed Cloud Computing &amp; Cybersecurity</em>
    </p>
    <p style="line-height:1.6; color:#475569;">
      Dr. Thorne conducts extensive <mark>scientific research</mark> in quantum distributed systems. His theoretical models leverage energy equations such as <b>E = mc<sup>2</sup></b>, while evaluating green computing emissions through <b>CO<sub>2</sub></b> atmospheric reduction.
    </p>
  </div>
  `
));

// 4. travel-cards.html
writeLabFile('basic-html', 'travel-cards.html', wrapExercise(
  'Four Vertically Arranged Travel Destination Cards',
  'Basic HTML',
  'A.4',
  'Four vertical destination cards each containing an image, heading, and description.',
  `
  <div style="display:flex; flex-direction:column; gap:1.5rem;">
    <!-- Destination 1 -->
    <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem; display:flex; gap:1.5rem; align-items:center;">
      <img src="../../images/travel-japan.svg" alt="Japan" style="width:200px; height:130px; object-fit:cover; border-radius:6px;">
      <div>
        <h4 style="margin:0 0 0.5rem 0; color:#0f2b48;">1. Tokyo &amp; Mount Fuji, Japan</h4>
        <p style="margin:0; color:#64748b; font-size:0.9rem; line-height:1.6;">
          A breathtaking convergence of ancient shrines, cherry blossoms, and futuristic robotics laboratories. Scholars trek the snow trails of Mount Fuji and study AI advancements in Tokyo.
        </p>
      </div>
    </div>

    <!-- Destination 2 -->
    <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem; display:flex; gap:1.5rem; align-items:center;">
      <img src="../../images/travel-switzerland.svg" alt="Switzerland" style="width:200px; height:130px; object-fit:cover; border-radius:6px;">
      <div>
        <h4 style="margin:0 0 0.5rem 0; color:#0f2b48;">2. The Alps &amp; Geneva, Switzerland</h4>
        <p style="margin:0; color:#64748b; font-size:0.9rem; line-height:1.6;">
          Towering snow peaks, pristine glacial valleys, and the home of particle physics at CERN. Ideal for alpine high-altitude hiking, sensory telemetry, and clean energy studies.
        </p>
      </div>
    </div>

    <!-- Destination 3 -->
    <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem; display:flex; gap:1.5rem; align-items:center;">
      <img src="../../images/travel-canada.svg" alt="Canada" style="width:200px; height:130px; object-fit:cover; border-radius:6px;">
      <div>
        <h4 style="margin:0 0 0.5rem 0; color:#0f2b48;">3. Banff National Park, Canada</h4>
        <p style="margin:0; color:#64748b; font-size:0.9rem; line-height:1.6;">
          Emerald glacial lakes surrounded by the majestic Canadian Rockies. A world-class venue for outdoor canoe expeditions, nature photography, and dark-sky astronomy research.
        </p>
      </div>
    </div>

    <!-- Destination 4 -->
    <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem; display:flex; gap:1.5rem; align-items:center;">
      <img src="../../images/travel-paris.svg" alt="Paris France" style="width:200px; height:130px; object-fit:cover; border-radius:6px;">
      <div>
        <h4 style="margin:0 0 0.5rem 0; color:#0f2b48;">4. Paris &amp; the Seine Boulevard, France</h4>
        <p style="margin:0; color:#64748b; font-size:0.9rem; line-height:1.6;">
          Historical architectural monuments, renowned museums, and European cultural summits. Provides inspiring venues for architectural drone videography and digital heritage mapping.
        </p>
      </div>
    </div>
  </div>
  `
));

// 5. employee-id-card.html
writeLabFile('basic-html', 'employee-id-card.html', wrapExercise(
  'Employee ID Card (Border, Padding, Width, Centered)',
  'Basic HTML',
  'A.5',
  'Employee ID card created with explicit border, padding, width, and centered content.',
  `
  <div style="display:flex; justify-content:center; padding:1rem 0;">
    <div style="width:340px; border:2px solid #0f2b48; border-radius:12px; padding:25px; text-align:center; background:#ffffff; box-shadow:0 10px 15px rgba(0,0,0,0.1);">
      <div style="font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#0d9488; font-weight:bold; margin-bottom:12px;">CAMPUSCONNECT PRO HR</div>
      <img src="../../images/avatar-faculty1.svg" alt="Faculty Photo" style="width:90px; height:90px; border-radius:50%; border:3px solid #0ea5e9; margin:0 auto 12px auto; display:block;">
      <h3 style="margin:0 0 4px 0; color:#0f2b48; font-size:18px;">Dr. Aris Thorne</h3>
      <div style="color:#64748b; font-size:13px; font-weight:600; margin-bottom:8px;">ID: EMP-CSE-0104</div>
      <div style="background:#f1f5f9; padding:8px; border-radius:6px; font-size:12px; line-height:1.5; text-align:left; color:#334155;">
        <div><strong>Designation:</strong> Head of Department</div>
        <div><strong>Company:</strong> CampusConnect Pro Institute</div>
        <div><strong>Blood Group:</strong> B+ve</div>
      </div>
      <div style="margin-top:12px; font-size:11px; color:#94a3b8;">Official Academic Identity Card</div>
    </div>
  </div>
  `
));

// 6. department-nav.html
writeLabFile('basic-html', 'department-nav.html', wrapExercise(
  'Department of Computer Science with Horizontal Div Navigation',
  'Basic HTML',
  'A.6',
  'Horizontal div-based navigation menu using actual anchor elements opening linked pages.',
  `
  <div>
    <h2>Department of Computer Science</h2>
    <!-- Horizontal div-based navigation menu with actual nested anchor elements -->
    <div style="display:flex; gap:8px; background:#0f2b48; padding:10px 15px; border-radius:8px; margin:15px 0;">
      <div><a href="../../departments.html#overview" style="color:#ffffff; font-weight:600; text-decoration:none; padding:6px 12px; display:block;">Overview</a></div>
      <div><a href="../../departments.html#faculty" style="color:#ffffff; font-weight:600; text-decoration:none; padding:6px 12px; display:block;">Faculty</a></div>
      <div><a href="../../departments.html#programs" style="color:#ffffff; font-weight:600; text-decoration:none; padding:6px 12px; display:block;">Programs</a></div>
      <div><a href="../../departments.html#research" style="color:#ffffff; font-weight:600; text-decoration:none; padding:6px 12px; display:block;">Research</a></div>
      <div><a href="../../departments.html#contact" style="color:#ffffff; font-weight:600; text-decoration:none; padding:6px 12px; display:block;">Contact</a></div>
    </div>

    <div style="padding:15px; border:1px solid #e2e8f0; border-radius:8px; background:#fff;">
      <h4>Welcome to Computer Science</h4>
      <p style="color:#64748b; font-size:0.95rem;">
        Clicking the navigation links above directly accesses the primary Department and Faculty pages in CampusConnect Pro.
      </p>
    </div>
  </div>
  `
));

// 7. table-layout.html
writeLabFile('basic-html', 'table-layout.html', wrapExercise(
  'Table-Based Website Layout',
  'Basic HTML',
  'A.7',
  'Website layout constructed with a semantic HTML table containing header, navigation, content, sidebar, and footer.',
  `
  <div style="overflow-x:auto;">
    <table border="1" cellpadding="12" cellspacing="0" style="width:100%; border-collapse:collapse; border-color:#cbd5e1; font-family:sans-serif;">
      <!-- HEADER -->
      <tr>
        <td colspan="2" style="background:#0f2b48; color:#ffffff; text-align:center; padding:20px;">
          <h2 style="margin:0; color:#fff;">CAMPUSCONNECT PRO PORTAL HEADER</h2>
          <div style="font-size:13px; color:#38bdf8;">Academic Table Layout Architecture</div>
        </td>
      </tr>

      <!-- NAVIGATION -->
      <tr>
        <td colspan="2" style="background:#0d9488; color:#ffffff; padding:10px 15px;">
          <div style="display:flex; justify-content:center; gap:20px; font-weight:bold;">
            <a href="../../index.html" style="color:#fff; text-decoration:none;">Home</a> |
            <a href="../../departments.html" style="color:#fff; text-decoration:none;">Departments</a> |
            <a href="../../events.html" style="color:#fff; text-decoration:none;">Events</a> |
            <a href="../../services.html" style="color:#fff; text-decoration:none;">Library</a> |
            <a href="../index.html" style="color:#fff; text-decoration:none;">Practical Lab</a>
          </div>
        </td>
      </tr>

      <!-- CONTENT & SIDEBAR -->
      <tr style="height:250px;">
        <!-- CONTENT -->
        <td style="width:70%; vertical-align:top; padding:20px; background:#ffffff;">
          <h3 style="color:#0f2b48; margin-top:0;">Main Page Content Area</h3>
          <p style="color:#475569; line-height:1.7;">
            This cell acts as the primary content container for articles, lecture schedules, and syllabus laboratory guides. Before modern CSS flexbox and grid emerged, HTML tables were universally used to achieve multi-column page arrangements.
          </p>
        </td>

        <!-- SIDEBAR -->
        <td style="width:30%; vertical-align:top; padding:20px; background:#f8fafc; border-left:1px solid #cbd5e1;">
          <h4 style="color:#0f2b48; margin-top:0;">Right Sidebar</h4>
          <ul style="padding-left:18px; line-height:1.8; color:#64748b; font-size:13px;">
            <li>Announcements</li>
            <li>Examination Timetable</li>
            <li>Hostel Notices</li>
            <li>Emergency Helpline (108)</li>
          </ul>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td colspan="2" style="background:#1e293b; color:#cbd5e1; text-align:center; padding:15px; font-size:13px;">
          &copy; 2026 CampusConnect Pro — Table-Based Website Layout Demonstration.
        </td>
      </tr>
    </table>
  </div>
  `
));

// 8. employee-dashboard-layout.html
writeLabFile('basic-html', 'employee-dashboard-layout.html', wrapExercise(
  'Employee Management Dashboard (Left Sidebar & Right Content)',
  'Basic HTML',
  'A.8',
  'Employee Management dashboard with left vertical sidebar and right content area.',
  `
  <div style="display:flex; border:1px solid #cbd5e1; border-radius:8px; overflow:hidden; min-height:350px;">
    <!-- Left Vertical Sidebar -->
    <div style="width:240px; background:#0f2b48; color:#fff; padding:20px; flex-shrink:0;">
      <h4 style="color:#38bdf8; font-size:16px; margin-top:0;">FACULTY HRMS</h4>
      <ul style="list-style:none; padding:0; margin:15px 0; line-height:2.2; font-size:14px;">
        <li><a href="../../employees.html" style="color:#fff; text-decoration:none;">🏠 Home</a></li>
        <li><a href="../../employees.html" style="color:#2dd4bf; text-decoration:none; font-weight:bold;">👥 Directory</a></li>
        <li><a href="../../employees.html" style="color:#cbd5e1; text-decoration:none;">💳 Payroll</a></li>
        <li><a href="../../employees.html" style="color:#cbd5e1; text-decoration:none;">📝 Leave Requests</a></li>
        <li><a href="../../employees.html" style="color:#cbd5e1; text-decoration:none;">📊 Reports</a></li>
      </ul>
    </div>

    <!-- Right Content Area -->
    <div style="flex-grow:1; background:#ffffff; padding:25px;">
      <h3 style="color:#0f2b48; margin-top:0;">Employee Management Dashboard</h3>
      <p style="color:#64748b; font-size:14px;">Welcome back, <strong>Dr. Aris Thorne</strong>.</p>
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:15px; margin-top:15px;">
        <h4 style="font-size:15px; margin-top:0; color:#0d9488;">Current Staff Profile</h4>
        <p style="font-size:13px; color:#475569; margin:0;">
          Department of Computer Science &bull; Head of Department &bull; Performance Rating: <strong>4.96/5.0</strong>
        </p>
      </div>
    </div>
  </div>
  `
));

// 9. layout1.html — STRICT NO CSS, ONLY DIV ELEMENTS!
// "layout1.html containing HEADER, LEFT MENU, CONTENT, FOOTER using only div elements and no CSS."
// "Preserve the exact restrictions of the relevant exercise. Do not add CSS or other elements to the no-CSS demonstrations when prohibited."
const layout1Content = `<!DOCTYPE html>
<html>
<head>
  <title>layout1.html - No CSS Div Layout</title>
</head>
<body>
  <div>HEADER</div>
  <div>LEFT MENU</div>
  <div>CONTENT</div>
  <div>FOOTER</div>
</body>
</html>`;
writeLabFile('basic-html', 'layout1.html', layout1Content);

// 10. div-no-css.html — STRICT NO CSS DIV-ONLY DEMO!
// "A separate div-only layout example without CSS."
const divNoCssContent = `<!DOCTYPE html>
<html>
<head>
  <title>div-no-css.html - Div Layout Without CSS</title>
</head>
<body>
  <div>CAMPUSCONNECT PRO - PORTAL HEADER</div>
  <div>
    <div>HOME</div>
    <div>DEPARTMENTS</div>
    <div>EVENTS</div>
    <div>LIBRARY</div>
    <div>PRACTICAL LAB</div>
  </div>
  <div>
    <div>MAIN CONTENT: Welcome to the div-only layout demonstration created strictly without any CSS styles or stylesheet inclusions.</div>
    <div>SIDEBAR NOTICES: Examination announcements and event reminders.</div>
  </div>
  <div>FOOTER - ALL RIGHTS RESERVED 2026</div>
</body>
</html>`;
writeLabFile('basic-html', 'div-no-css.html', divNoCssContent);

// 11. table-conventional.html
// "A separate table-based layout matching a conventional header/navigation/content/sidebar/footer structure."
writeLabFile('basic-html', 'table-conventional.html', wrapExercise(
  'Conventional Table Structure Layout',
  'Basic HTML',
  'A.11',
  'Classic conventional website layout matching header, navigation, content, sidebar, and footer in pure HTML tables.',
  `
  <table border="1" cellpadding="10" cellspacing="0" style="width:100%; border-collapse:collapse; border-color:#94a3b8; font-family:sans-serif;">
    <!-- HEADER -->
    <tr>
      <td colspan="2" align="center" style="background:#1e3a8a; color:#ffffff; padding:15px;">
        <h2 style="margin:0; color:#fff;">CLASSIC CONVENTIONAL TABLE STRUCTURE</h2>
        <small>Academic Table Architecture Standard</small>
      </td>
    </tr>
    <!-- NAVIGATION -->
    <tr>
      <td colspan="2" align="center" style="background:#0284c7; color:#ffffff; padding:8px;">
        <a href="../../index.html" style="color:#ffffff; font-weight:bold;">Home</a> | 
        <a href="../../departments.html" style="color:#ffffff; font-weight:bold;">Departments</a> | 
        <a href="../../events.html" style="color:#ffffff; font-weight:bold;">Events</a> | 
        <a href="../../services.html" style="color:#ffffff; font-weight:bold;">Services</a> | 
        <a href="../index.html" style="color:#ffffff; font-weight:bold;">Lab</a>
      </td>
    </tr>
    <!-- CONTENT & SIDEBAR -->
    <tr style="height:200px;">
      <td width="70%" valign="top" style="padding:15px; background:#ffffff;">
        <h3 style="color:#1e3a8a; margin-top:0;">Main Content Section</h3>
        <p style="color:#334155; line-height:1.6;">
          Demonstrating conventional multi-cell layout architecture before CSS Grid and Flexbox were adopted.
        </p>
      </td>
      <td width="30%" valign="top" style="padding:15px; background:#f1f5f9;">
        <h4 style="color:#1e3a8a; margin-top:0;">Sidebar</h4>
        <p style="color:#64748b; font-size:13px;">Quick Links, Calendar, Notices</p>
      </td>
    </tr>
    <!-- FOOTER -->
    <tr>
      <td colspan="2" align="center" style="background:#0f172a; color:#ffffff; padding:12px; font-size:12px;">
        Copyright &copy; 2026 Conventional Table Structure &bull; CampusConnect Pro.
      </td>
    </tr>
  </table>
  `
));

// 12. hospital-header-inline.html
// "Hospital header using inline CSS."
writeLabFile('basic-html', 'hospital-header-inline.html', wrapExercise(
  'Hospital Header Using Inline CSS',
  'Basic HTML',
  'A.12',
  'Hospital header styled exclusively with inline CSS attributes.',
  `
  <div style="background-color: #0284c7; color: #ffffff; padding: 15px 25px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; font-family: 'Segoe UI', Tahoma, sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <div style="display: flex; align-items: center; gap: 12px;">
      <div style="background: #ffffff; padding: 6px; border-radius: 6px; display: flex; align-items: center;">
        <img src="../../images/hospital-logo.svg" alt="Hospital Logo" style="height: 38px; width: auto;">
      </div>
      <div>
        <div style="font-size: 18px; font-weight: bold; line-height: 1.2;">CityCare Hospital</div>
        <div style="font-size: 12px; color: #bae6fd;">Branch: Vellore, Tamil Nadu</div>
      </div>
    </div>

    <div style="display: flex; align-items: center; gap: 15px;">
      <span style="font-size: 14px; font-weight: 600;">Welcome, Patient</span>
      <a href="../../hospital.html" style="background: #ffffff; color: #0284c7; padding: 6px 14px; border-radius: 4px; font-weight: bold; text-decoration: none; font-size: 13px;">Book Appointment</a>
      <span style="background: #dc2626; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold;">Emergency: 108</span>
    </div>
  </div>
  `
));

// 13. hospital-header-nav.html
writeLabFile('basic-html', 'hospital-header-nav.html', wrapExercise(
  'Hospital Header with Horizontal Nav & Appointment Button',
  'Basic HTML',
  'A.13',
  'CityCare Hospital header with horizontal navigation and appointment button.',
  `
  <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:12px 20px; box-shadow:0 2px 4px rgba(0,0,0,0.05); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
    <div style="display:flex; align-items:center; gap:10px;">
      <img src="../../images/hospital-logo.svg" alt="CityCare Hospital" style="height:36px;">
      <div>
        <strong style="color:#0369a1; font-size:16px;">CityCare Hospital</strong>
        <div style="font-size:11px; color:#64748b;">Healthcare Management System</div>
      </div>
    </div>

    <div style="display:flex; gap:18px; align-items:center; font-weight:600; font-size:14px;">
      <a href="../../hospital.html" style="color:#0284c7; text-decoration:none;">Home</a>
      <a href="../../hospital.html" style="color:#475569; text-decoration:none;">Departments</a>
      <a href="../../hospital.html" style="color:#475569; text-decoration:none;">Doctors</a>
      <a href="../../hospital.html" style="color:#475569; text-decoration:none;">Appointments</a>
      <a href="../../hospital.html" style="color:#475569; text-decoration:none;">Contact</a>
    </div>

    <div>
      <a href="../../hospital.html#book-appointment-form" class="btn btn-primary btn-sm">📅 Book Appointment</a>
    </div>
  </div>
  `
));

// 14. search-header.html
writeLabFile('basic-html', 'search-header.html', wrapExercise(
  'Dynamic Search Engine Header',
  'Basic HTML',
  'A.14',
  'Search engine header with search, category, and price controls.',
  `
  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:18px; display:flex; gap:12px; align-items:flex-end; flex-wrap:wrap;">
    <div style="flex-grow:1; min-width:200px;">
      <label style="display:block; font-size:12px; font-weight:bold; color:#0f2b48; margin-bottom:4px;">Search Keyword</label>
      <input type="text" id="sample-search" class="form-control" placeholder="Search academic resources...">
    </div>
    <div style="min-width:160px;">
      <label style="display:block; font-size:12px; font-weight:bold; color:#0f2b48; margin-bottom:4px;">Category</label>
      <select id="sample-cat" class="form-control">
        <option value="all">All Categories</option>
        <option value="cs">Computer Science</option>
        <option value="ee">Electronics</option>
        <option value="math">Mathematics</option>
      </select>
    </div>
    <div style="min-width:140px;">
      <label style="display:block; font-size:12px; font-weight:bold; color:#0f2b48; margin-bottom:4px;">Price Range</label>
      <select id="sample-price" class="form-control">
        <option value="all">Any Price</option>
        <option value="low">Under ₹500</option>
        <option value="mid">₹500 - ₹1000</option>
        <option value="high">Above ₹1000</option>
      </select>
    </div>
    <div>
      <button type="button" class="btn btn-primary" onclick="alert('Filtering criteria applied!')">Search Catalog</button>
    </div>
  </div>
  `
));

// 15. company-profile-inline.html
writeLabFile('basic-html', 'company-profile-inline.html', wrapExercise(
  'Company Profile with Inline CSS & HR Separators',
  'Basic HTML',
  'A.15',
  'Company profile article styled with inline CSS and horizontal rules.',
  `
  <article style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border: 2px solid #0f766e; border-radius: 12px; padding: 25px; text-align: center;">
    <img src="../../images/company-logo.svg" alt="Logo" style="width: 200px; height: 50px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 4px;">
    <h2 style="font-family: 'Segoe UI', sans-serif; font-size: 22px; font-weight: 800; color: #0f2b48; margin: 5px 0 15px 0;">Apex Global Technologies</h2>
    <p style="font-size: 14px; line-height: 1.6; color: #334155; text-align: justify; margin-bottom: 15px;">
      Apex Global Technologies is an internationally recognized educational technology conglomerate. We specialize in high-performance virtual learning systems, automated student administration, and client-side web technology laboratories.
    </p>

    <hr style="border: 0; height: 1px; background: #e2e8f0; margin: 20px 0;">

    <h3 style="font-size: 16px; font-weight: bold; color: #0d9488; text-decoration: underline; margin-bottom: 8px;">Products &amp; Solutions</h3>
    <p style="font-size: 13px; color: #64748b; margin-bottom: 15px;">
      CampusConnect Pro Suite &bull; Web Tech Virtual Sandbox &bull; High-Concurrency Examination Engines.
    </p>

    <hr style="border: 0; height: 1px; background: #e2e8f0; margin: 20px 0;">

    <div style="font-size: 12px; color: #64748b;">
      Corporate HQ: Technology Park, Vellore 632014 &bull; <a href="mailto:corporate@apexglobaltech.com" style="color: #0d9488;">corporate@apexglobaltech.com</a>
    </div>
  </article>
  `
));

// 16. library-grid-inline.html
writeLabFile('basic-html', 'library-grid-inline.html', wrapExercise(
  'Library System 2x2 Colored Grid (Divs and Inline CSS)',
  'Basic HTML',
  'A.16',
  'Library Management System with four colored blocks in a 2x2 layout using divs and inline CSS.',
  `
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; max-width: 650px; margin: 0 auto;">
    <!-- Block 1: Books -->
    <div style="background-color: #0284c7; color: #ffffff; padding: 25px; border-radius: 8px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <div style="font-size: 32px; margin-bottom: 8px;">📚</div>
      <h3 style="font-size: 18px; font-weight: bold; margin: 0 0 6px 0; color: #fff;">Books</h3>
      <p style="font-size: 12px; margin: 0; color: #e0f2fe;">124,500 Reference Volumes</p>
    </div>

    <!-- Block 2: Members -->
    <div style="background-color: #059669; color: #ffffff; padding: 25px; border-radius: 8px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <div style="font-size: 32px; margin-bottom: 8px;">👥</div>
      <h3 style="font-size: 18px; font-weight: bold; margin: 0 0 6px 0; color: #fff;">Members</h3>
      <p style="font-size: 12px; margin: 0; color: #d1fae5;">8,920 Active Student Patrons</p>
    </div>

    <!-- Block 3: Issue Books -->
    <div style="background-color: #d97706; color: #ffffff; padding: 25px; border-radius: 8px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <div style="font-size: 32px; margin-bottom: 8px;">🔄</div>
      <h3 style="font-size: 18px; font-weight: bold; margin: 0 0 6px 0; color: #fff;">Issue Books</h3>
      <p style="font-size: 12px; margin: 0; color: #fef3c7;">Daily Circulation &amp; Renewals</p>
    </div>

    <!-- Block 4: Digital Library -->
    <div style="background-color: #7c3aed; color: #ffffff; padding: 25px; border-radius: 8px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <div style="font-size: 32px; margin-bottom: 8px;">💻</div>
      <h3 style="font-size: 18px; font-weight: bold; margin: 0 0 6px 0; color: #fff;">Digital Library</h3>
      <p style="font-size: 12px; margin: 0; color: #f3e8ff;">2.4M Electronic Journals &amp; Papers</p>
    </div>
  </div>
  `
));

// 17. vit-footer-internal.html
// "VIT Health Care Center footer using divs and an internal style tag without inline CSS."
const vitFooterInternalContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VIT Footer with Internal Style Tag - Practical A.17</title>
  <style>
    /* Strictly Internal Style Tag, Zero Inline CSS */
    .vit-footer-container {
      background-color: #0c4a6e;
      color: #e0f2fe;
      padding: 30px 20px;
      font-family: Arial, sans-serif;
      border-radius: 8px;
    }
    .vit-footer-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
    }
    .vit-footer-left {
      flex: 2;
    }
    .vit-footer-right {
      flex: 1;
      text-align: right;
    }
    .vit-title {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 10px;
    }
    .vit-contact {
      font-size: 14px;
      line-height: 1.6;
    }
    .vit-links a {
      color: #7dd3fc;
      text-decoration: none;
      margin-right: 12px;
      font-size: 13px;
    }
    .vit-links a:hover {
      text-decoration: underline;
    }
    .vit-copy {
      border-top: 1px solid #0369a1;
      margin-top: 20px;
      padding-top: 15px;
      text-align: center;
      font-size: 12px;
      color: #bae6fd;
    }
  </style>
</head>
<body>
  <div class="vit-footer-container">
    <div class="vit-footer-content">
      <div class="vit-footer-left">
        <div class="vit-title">VIT Health Care Center</div>
        <div class="vit-contact">
          <div>Technology Avenue, Vellore, Tamil Nadu 632014</div>
          <div>Emergency: 108 | Support: support@vithealthcare.com</div>
        </div>
        <div class="vit-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div class="vit-footer-right">
        <div>Accredited 24/7 Clinical Unit</div>
      </div>
    </div>
    <div class="vit-copy">
      Copyright &copy; 2026 VIT Health Care Center. All Rights Reserved.
    </div>
  </div>
</body>
</html>`;
writeLabFile('basic-html', 'vit-footer-internal.html', vitFooterInternalContent);

console.log('Lab A (17 files) successfully built.');
