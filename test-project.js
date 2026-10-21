const fs = require('fs');
const path = require('path');

const baseDir = path.join('C:', 'Users', 'jetly', '.gemini', 'antigravity', 'scratch', 'CampusConnectPro');

const mainPages = [
  'index.html',
  'auth.html',
  'dashboard.html',
  'departments.html',
  'events.html',
  'gallery.html',
  'services.html',
  'registration.html',
  'hospital.html',
  'checkout.html',
  'company.html',
  'gaming.html',
  'employees.html',
  'science.html',
  'travel.html'
];

const labFiles = [
  // Basic HTML (17)
  'lab/basic-html/headings-formatting.html',
  'lab/basic-html/nested-lists.html',
  'lab/basic-html/employee-profile.html',
  'lab/basic-html/travel-cards.html',
  'lab/basic-html/employee-id-card.html',
  'lab/basic-html/department-nav.html',
  'lab/basic-html/table-layout.html',
  'lab/basic-html/employee-dashboard-layout.html',
  'lab/basic-html/layout1.html',
  'lab/basic-html/div-no-css.html',
  'lab/basic-html/table-conventional.html',
  'lab/basic-html/hospital-header-inline.html',
  'lab/basic-html/hospital-header-nav.html',
  'lab/basic-html/search-header.html',
  'lab/basic-html/company-profile-inline.html',
  'lab/basic-html/library-grid-inline.html',
  'lab/basic-html/vit-footer-internal.html',

  // Forms (7)
  'lab/forms/student-login-form.html',
  'lab/forms/symposium-registration.html',
  'lab/forms/patient-registration.html',
  'lab/forms/shopping-checkout.html',
  'lab/forms/auth-bootstrap.html',
  'lab/forms/bootstrap-external.html',
  'lab/forms/image-button-upload.html',

  // Validation (5)
  'lab/validation/login-validation.html',
  'lab/validation/student-regex-validation.html',
  'lab/validation/course-registration-validation.html',
  'lab/validation/patient-form-validation.html',
  'lab/validation/checkout-validation.html',

  // Mouse Events (6)
  'lab/mouse-events/color-box.html',
  'lab/mouse-events/product-card-hover.html',
  'lab/mouse-events/traffic-signal.html',
  'lab/mouse-events/weather-panels.html',
  'lab/mouse-events/text-change-button.html',
  'lab/mouse-events/gaming-buttons.html',

  // Keyboard Events (6)
  'lab/keyboard-events/student-search.html',
  'lab/keyboard-events/atm-pin.html',
  'lab/keyboard-events/product-search.html',
  'lab/keyboard-events/online-exam.html',
  'lab/keyboard-events/campus-gallery-keys.html',
  'lab/keyboard-events/travel-gallery-keys.html',

  // Bootstrap (4)
  'lab/bootstrap/college-events-bootstrap.html',
  'lab/bootstrap/auth-bootstrap-page.html',
  'lab/bootstrap/grid-navigation-demo.html',
  'lab/bootstrap/local-bootstrap-demo.html',

  // Master Lab Index
  'lab/index.html'
];

const sharedAssets = [
  'css/theme.css',
  'css/main.css',
  'css/dashboard.css',
  'css/lab.css',
  'js/main.js',
  'js/validation.js',
  'js/gallery.js',
  'js/checkout.js',
  'js/media-helper.js',
  'js/lab-runner.js',
  'vendor/bootstrap/bootstrap.min.css',
  'vendor/bootstrap/bootstrap.bundle.min.js',
  'media/welcome-audio.wav',
  'media/symposium-welcome.wav',
  'README.md'
];

let errors = [];

console.log('--- CHECKING 15 MAIN PAGES ---');
mainPages.forEach(p => {
  const full = path.join(baseDir, p);
  if (!fs.existsSync(full)) {
    errors.push(`Missing Main Page: ${p}`);
  } else {
    const stat = fs.statSync(full);
    console.log(`[PASS] ${p} (${stat.size} bytes)`);
  }
});

console.log('\n--- CHECKING 38 LAB PRACTICAL FILES + LAB INDEX ---');
labFiles.forEach(f => {
  const full = path.join(baseDir, f);
  if (!fs.existsSync(full)) {
    errors.push(`Missing Lab File: ${f}`);
  } else {
    const stat = fs.statSync(full);
    console.log(`[PASS] ${f} (${stat.size} bytes)`);
  }
});

console.log('\n--- CHECKING SHARED CSS, JS, VENDOR & MEDIA ---');
sharedAssets.forEach(a => {
  const full = path.join(baseDir, a);
  if (!fs.existsSync(full)) {
    errors.push(`Missing Shared Asset: ${a}`);
  } else {
    const stat = fs.statSync(full);
    console.log(`[PASS] ${a} (${stat.size} bytes)`);
  }
});

// Verification of special restrictions:
console.log('\n--- VERIFYING SPECIAL ASSIGNMENT RESTRICTIONS ---');
// 1. layout1.html must have NO CSS
const layout1Text = fs.readFileSync(path.join(baseDir, 'lab/basic-html/layout1.html'), 'utf8');
if (layout1Text.includes('<link rel="stylesheet"') || layout1Text.includes('<style') || layout1Text.includes('style=')) {
  errors.push('layout1.html failed restriction: contains CSS styles!');
} else {
  console.log('[PASS] layout1.html strictly adheres to NO CSS rule.');
}

// 2. div-no-css.html must have NO CSS
const divNoCssText = fs.readFileSync(path.join(baseDir, 'lab/basic-html/div-no-css.html'), 'utf8');
if (divNoCssText.includes('<link rel="stylesheet"') || divNoCssText.includes('<style') || divNoCssText.includes('style=')) {
  errors.push('div-no-css.html failed restriction: contains CSS styles!');
} else {
  console.log('[PASS] div-no-css.html strictly adheres to NO CSS rule.');
}

// 3. vit-footer-internal.html must have internal style tag and NO inline CSS
const vitFooterText = fs.readFileSync(path.join(baseDir, 'lab/basic-html/vit-footer-internal.html'), 'utf8');
if (vitFooterText.includes('style=') || !vitFooterText.includes('<style>')) {
  errors.push('vit-footer-internal.html failed restriction: must have internal style tag and NO inline CSS!');
} else {
  console.log('[PASS] vit-footer-internal.html adheres to internal style tag and zero inline CSS rule.');
}

console.log('\n=======================================');
if (errors.length === 0) {
  console.log(`ALL VERIFICATION CHECKS PASSED PERFECTLY! Total 55+ production files verified.`);
} else {
  console.error(`Verification Errors:`, errors);
  process.exit(1);
}
