const fs = require('fs');
const path = require('path');
const { writeLabFile, wrapExercise } = require('./lab-builder-helper');

// ==========================================================================
// Lab E: Keyboard Events (6 independent exercises)
// ==========================================================================

// 1. student-search.html
writeLabFile('keyboard-events', 'student-search.html', wrapExercise(
  'Student Search Keyboard Tracker (Key Pressed, Enter, Escape)',
  'Keyboard Events',
  'E.1',
  'Shows the key pressed, Enter displays “Searching for student…”, Escape clears the input and message.',
  `
  <div style="max-width:550px; margin:0 auto; background:#fff; padding:2rem; border-radius:8px; border:1px solid #cbd5e1;">
    <h3 class="h5 mb-3" style="color:#0f2b48;">Student Directory Search</h3>

    <div class="form-group">
      <label for="search-student-input" class="form-label fw-bold">Student Name or ID</label>
      <input type="text" id="search-student-input" class="form-control" placeholder="Type letters (Press Enter to search, Esc to clear)...">
    </div>

    <!-- Live telemetry boxes -->
    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:1rem; margin-top:1.25rem;">
      <div style="font-size:0.85rem; color:#64748b; margin-bottom:0.4rem;">
        Key Pressed: <span id="key-pressed-badge" class="badge badge-teal" style="font-size:0.9rem;">None</span>
      </div>
      <div id="search-status-display" style="font-size:1.05rem; font-weight:bold; color:#0f2b48; min-height:26px;">
        Type in the field above...
      </div>
    </div>
  </div>
  `,
  `
  const input = document.getElementById('search-student-input');
  const keyBadge = document.getElementById('key-pressed-badge');
  const status = document.getElementById('search-status-display');

  input.addEventListener('keydown', (e) => {
    keyBadge.textContent = e.key === ' ' ? 'Space' : e.key;

    // Enter displays "Searching for student…"
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = input.value.trim();
      status.textContent = 'Searching for student… ' + (val ? '(' + val + ')' : '');
      status.style.color = '#0d9488';
    }
    // Escape clears the input and message
    else if (e.key === 'Escape') {
      e.preventDefault();
      input.value = '';
      status.textContent = 'Search input cleared (Escape pressed).';
      status.style.color = '#dc2626';
      keyBadge.textContent = 'Escape';
    } else {
      status.textContent = 'Typing: ' + input.value + e.key;
      status.style.color = '#0f2b48';
    }
  });
  `
));

// 2. atm-pin.html
writeLabFile('keyboard-events', 'atm-pin.html', wrapExercise(
  'ATM PIN Entry (Numeric Only, Warnings, Enter)',
  'Keyboard Events',
  'E.2',
  'Accepts numeric keys, shows “PIN Entry Started”, Enter displays “PIN Submitted Successfully”, and shows warnings for non-numeric input.',
  `
  <div style="max-width:500px; margin:0 auto; background:#fff; padding:2rem; border-radius:12px; border:1px solid #cbd5e1; box-shadow:0 10px 15px rgba(0,0,0,0.05);">
    <div style="text-align:center; margin-bottom:1.5rem;">
      <div style="width:48px; height:48px; border-radius:50%; background:#e0f2fe; color:#0284c7; display:inline-flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:0.5rem;">🏧</div>
      <h3 style="color:#0f2b48; font-size:1.25rem; margin:0;">Secure ATM PIN Verification</h3>
    </div>

    <div class="form-group text-center">
      <label for="atm-pin-input" class="form-label fw-bold">Enter 4-Digit Numeric PIN</label>
      <input type="password" id="atm-pin-input" class="form-control text-center fs-3" maxlength="4" placeholder="••••" style="letter-spacing:10px; max-width:240px; margin:0 auto;">
    </div>

    <!-- Non-numeric warning banner -->
    <div id="pin-warning" class="status-alert alert-danger" style="margin-top:1rem; font-size:0.9rem;" role="alert"></div>

    <!-- PIN Status feedback -->
    <div id="pin-status" class="status-alert alert-success" style="margin-top:1rem; font-size:0.9rem;" role="status"></div>

    <div class="text-center mt-3">
      <button type="button" id="btn-atm-submit" class="btn btn-primary btn-sm">Submit PIN (or press Enter)</button>
      <button type="button" id="btn-atm-clear" class="btn btn-outline btn-sm">Clear</button>
    </div>
  </div>
  `,
  `
  const pinInput = document.getElementById('atm-pin-input');
  const warn = document.getElementById('pin-warning');
  const status = document.getElementById('pin-status');
  let entryStarted = false;

  pinInput.addEventListener('keydown', (e) => {
    // Allowed control keys
    if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      return;
    }

    // Enter displays "PIN Submitted Successfully"
    if (e.key === 'Enter') {
      e.preventDefault();
      submitPin();
      return;
    }

    // Check if numeric (0-9)
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      warn.className = 'status-alert alert-danger show';
      warn.textContent = 'Warning: Non-numeric key "' + e.key + '" rejected. Only digits 0-9 are allowed.';
      CampusMedia.synthesizeChime();
    } else {
      warn.style.display = 'none';
      if (!entryStarted) {
        entryStarted = true;
        status.className = 'status-alert alert-success show';
        status.textContent = 'PIN Entry Started';
      }
    }
  });

  function submitPin() {
    if (pinInput.value.length === 4) {
      warn.style.display = 'none';
      status.className = 'status-alert alert-success show';
      status.textContent = 'PIN Submitted Successfully';
    } else {
      warn.className = 'status-alert alert-danger show';
      warn.textContent = 'Please enter a complete 4-digit PIN before submitting.';
    }
  }

  document.getElementById('btn-atm-submit').addEventListener('click', submitPin);
  document.getElementById('btn-atm-clear').addEventListener('click', () => {
    pinInput.value = '';
    entryStarted = false;
    warn.style.display = 'none';
    status.style.display = 'none';
    pinInput.focus();
  });
  `
));

// 3. product-search.html
writeLabFile('keyboard-events', 'product-search.html', wrapExercise(
  'Product Search (Typed Text Display, Background Change, Enter)',
  'Keyboard Events',
  'E.3',
  'Displays typed text, changes input background while typing, and Enter displays “Searching for: [entered text]”.',
  `
  <div style="max-width:550px; margin:0 auto; background:#fff; padding:2rem; border-radius:8px; border:1px solid #cbd5e1;">
    <h3 class="h5 mb-3" style="color:#0f2b48;">Product Search Engine</h3>

    <div class="form-group">
      <label for="prod-search-input" class="form-label fw-bold">Search Products</label>
      <input type="text" id="prod-search-input" class="form-control" placeholder="Type product name (e.g., Laptop, Headset)..." style="transition:background-color 0.25s ease;">
    </div>

    <!-- Display Typed Text Live -->
    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:1rem; margin-top:1.25rem;">
      <div style="font-size:0.85rem; color:#64748b;">Live Typed Text:</div>
      <div id="live-typed-text" style="font-size:1.1rem; font-weight:bold; color:#0d9488; min-height:26px; word-break:break-all;">
        (None)
      </div>
    </div>

    <!-- Enter Search Message Display -->
    <div id="enter-search-result" style="margin-top:1rem; font-size:1rem; font-weight:700; color:#0f2b48; min-height:24px;"></div>
  </div>
  `,
  `
  const input = document.getElementById('prod-search-input');
  const liveDisplay = document.getElementById('live-typed-text');
  const resultMsg = document.getElementById('enter-search-result');

  input.addEventListener('input', () => {
    liveDisplay.textContent = input.value || '(None)';
    // Change input background when typing
    if (input.value.length > 0) {
      input.style.backgroundColor = '#ecfdf5';
      input.style.borderColor = '#10b981';
    } else {
      input.style.backgroundColor = '#ffffff';
      input.style.borderColor = '#cbd5e1';
    }
  });

  input.addEventListener('keydown', (e) => {
    // Enter displays "Searching for: [entered text]"
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = input.value.trim();
      resultMsg.textContent = 'Searching for: ' + (query || '[empty query]');
      resultMsg.style.color = '#0284c7';
    }
  });
  `
));

// 4. online-exam.html
writeLabFile('keyboard-events', 'online-exam.html', wrapExercise(
  'Online Exam Interface (Click, Enter Submit, Hover Highlight)',
  'Keyboard Events',
  'E.4',
  'Select and highlight an answer on click, Enter submits the selected answer, shows “Answer Submitted Successfully”, and highlights Submit button on mouse-over.',
  `
  <div style="max-width:600px; margin:0 auto; background:#fff; padding:2rem; border-radius:8px; border:1px solid #cbd5e1;">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <span class="badge badge-teal">Web Technology Exam 2026</span>
      <span class="text-muted small">Question 1 of 1</span>
    </div>

    <h4 style="font-size:1.15rem; color:#0f2b48; margin-bottom:1.25rem;">
      Q: Which semantic HTML5 element represents self-contained compositional content?
    </h4>

    <!-- Answer Options (Click to select & highlight) -->
    <div class="d-flex flex-column gap-2 mb-4" id="exam-options">
      <div class="exam-option" data-ans="A" style="padding:0.75rem 1rem; border:2px solid #e2e8f0; border-radius:6px; cursor:pointer; transition:all 0.2s ease;">
        <strong>A)</strong> &lt;div&gt; container block
      </div>
      <div class="exam-option" data-ans="B" style="padding:0.75rem 1rem; border:2px solid #e2e8f0; border-radius:6px; cursor:pointer; transition:all 0.2s ease;">
        <strong>B)</strong> &lt;article&gt; standalone syndicated entity
      </div>
      <div class="exam-option" data-ans="C" style="padding:0.75rem 1rem; border:2px solid #e2e8f0; border-radius:6px; cursor:pointer; transition:all 0.2s ease;">
        <strong>C)</strong> &lt;span&gt; inline tag
      </div>
      <div class="exam-option" data-ans="D" style="padding:0.75rem 1rem; border:2px solid #e2e8f0; border-radius:6px; cursor:pointer; transition:all 0.2s ease;">
        <strong>D)</strong> &lt;table&gt; data grid
      </div>
    </div>

    <!-- Submit Button (Highlighted on mouse-over) -->
    <div class="d-flex justify-content-between align-items-center">
      <button type="button" id="btn-exam-submit" class="btn btn-primary" style="transition:all 0.25s ease;">
        Submit Answer (Press Enter)
      </button>
      <span class="text-muted small">Tip: Click an option, then press Enter</span>
    </div>

    <!-- Output message: "Answer Submitted Successfully" -->
    <div id="exam-result" class="status-alert" style="margin-top:1.5rem;" role="status"></div>
  </div>
  `,
  `
  const options = document.querySelectorAll('.exam-option');
  const submitBtn = document.getElementById('btn-exam-submit');
  const result = document.getElementById('exam-result');
  let selectedOption = null;

  // Click to select and highlight answer
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => {
        o.style.borderColor = '#e2e8f0';
        o.style.backgroundColor = '#ffffff';
        o.style.color = '#0f172a';
      });
      opt.style.borderColor = '#0d9488';
      opt.style.backgroundColor = '#f0fdfa';
      opt.style.color = '#0f766e';
      selectedOption = opt.getAttribute('data-ans');
    });
  });

  // Highlight Submit button on mouse-over
  submitBtn.addEventListener('mouseover', () => {
    submitBtn.style.transform = 'scale(1.05)';
    submitBtn.style.boxShadow = '0 0 15px rgba(13,148,136,0.6)';
    submitBtn.style.backgroundColor = '#0f766e';
  });
  submitBtn.addEventListener('mouseleave', () => {
    submitBtn.style.transform = 'scale(1)';
    submitBtn.style.boxShadow = 'none';
    submitBtn.style.backgroundColor = '';
  });

  function submitAnswer() {
    if (!selectedOption) {
      result.className = 'status-alert alert-danger show';
      result.textContent = 'Please select an answer option first.';
    } else {
      result.className = 'status-alert alert-success show';
      result.innerHTML = '<strong>Answer Submitted Successfully!</strong> Selected Choice: Option ' + selectedOption + (selectedOption === 'B' ? ' (Correct: &lt;article&gt;)' : '');
    }
  }

  submitBtn.addEventListener('click', submitAnswer);

  // Scoped Enter key submits answer
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      submitAnswer();
    }
  });
  `
));

// 5. campus-gallery-keys.html
writeLabFile('keyboard-events', 'campus-gallery-keys.html', wrapExercise(
  'Campus Image Gallery Keys (Right, Left, Enter)',
  'Keyboard Events',
  'E.5',
  'Right Arrow for next, Left Arrow for previous, Enter displays “Image Selected”. Scoped to ignore typing fields.',
  `
  <div style="max-width:650px; margin:0 auto; background:#0f172a; padding:1.5rem; border-radius:12px; color:#fff;">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h3 id="lab-camp-title" class="h5 text-white mb-0">Main Campus Research Complex</h3>
      <span id="lab-camp-counter" class="badge badge-teal">1 / 4</span>
    </div>

    <div style="height:320px; display:flex; align-items:center; justify-content:center; background:#020617; border-radius:8px; overflow:hidden; margin:1rem 0;">
      <img id="lab-camp-img" src="../../images/campus-hero.svg" alt="Campus Photo" style="max-height:100%; max-width:100%; object-fit:contain;">
    </div>

    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
      <div id="lab-camp-status" class="badge badge-amber" style="display:none; font-size:0.9rem; padding:0.4rem 0.8rem;"></div>
      <div class="d-flex gap-2">
        <button type="button" id="lab-camp-prev" class="btn btn-sm btn-outline-white">&larr; Prev (Left Arrow)</button>
        <button type="button" id="lab-camp-next" class="btn btn-sm btn-outline-white">Next (Right Arrow) &rarr;</button>
      </div>
    </div>
  </div>
  `,
  `
  const photos = [
    { src: '../../images/campus-hero.svg', title: 'Main Campus Research Complex' },
    { src: '../../images/campus-lib.svg', title: 'Central Digital Library Repository' },
    { src: '../../images/campus-auditorium.svg', title: 'Grand Academic Auditorium' },
    { src: '../../images/campus-tech-park.svg', title: 'Campus Incubation & AI Tech Park' }
  ];
  let cur = 0;
  const img = document.getElementById('lab-camp-img');
  const title = document.getElementById('lab-camp-title');
  const count = document.getElementById('lab-camp-counter');
  const stat = document.getElementById('lab-camp-status');

  function render() {
    img.src = photos[cur].src;
    title.textContent = photos[cur].title;
    count.textContent = (cur + 1) + ' / ' + photos.length;
  }

  function showStatus(text) {
    stat.textContent = text;
    stat.style.display = 'inline-block';
  }

  function next() { cur = (cur + 1) % photos.length; render(); }
  function prev() { cur = (cur - 1 + photos.length) % photos.length; render(); }

  document.getElementById('lab-camp-next').addEventListener('click', () => { next(); showStatus('Next Photo'); });
  document.getElementById('lab-camp-prev').addEventListener('click', () => { prev(); showStatus('Previous Photo'); });

  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (e.key === 'ArrowRight') { next(); showStatus('Navigated: Next (ArrowRight)'); }
    if (e.key === 'ArrowLeft') { prev(); showStatus('Navigated: Previous (ArrowLeft)'); }
    if (e.key === 'Enter') { showStatus('Image Selected: ' + photos[cur].title); }
  });
  `
));

// 6. travel-gallery-keys.html
writeLabFile('keyboard-events', 'travel-gallery-keys.html', wrapExercise(
  'Travel Gallery Keys (N, P, Spacebar)',
  'Keyboard Events',
  'E.6',
  'N for next destination, P for previous destination, Spacebar displays current destination name. Scoped to avoid typing conflict.',
  `
  <div style="max-width:650px; margin:0 auto; background:#0f172a; padding:1.5rem; border-radius:12px; color:#fff;">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h3 id="lab-trav-title" class="h5 text-white mb-0">Tokyo &amp; Mount Fuji, Japan</h3>
      <span id="lab-trav-counter" class="badge badge-amber">1 / 4</span>
    </div>

    <div style="height:320px; display:flex; align-items:center; justify-content:center; background:#020617; border-radius:8px; overflow:hidden; margin:1rem 0;">
      <img id="lab-trav-img" src="../../images/travel-japan.svg" alt="Destination" style="max-height:100%; max-width:100%; object-fit:contain;">
    </div>

    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
      <div id="lab-trav-status" class="badge badge-teal" style="display:none; font-size:0.9rem; padding:0.4rem 0.8rem;"></div>
      <div class="d-flex gap-2">
        <button type="button" id="lab-trav-prev" class="btn btn-sm btn-outline-white">P (Previous)</button>
        <button type="button" id="lab-trav-space" class="btn btn-sm btn-outline-white">Space (Show Name)</button>
        <button type="button" id="lab-trav-next" class="btn btn-sm btn-outline-white">N (Next)</button>
      </div>
    </div>
  </div>
  `,
  `
  const spots = [
    { src: '../../images/travel-japan.svg', title: 'Tokyo & Mount Fuji, Japan' },
    { src: '../../images/travel-switzerland.svg', title: 'The Alps & Geneva, Switzerland' },
    { src: '../../images/travel-canada.svg', title: 'Banff National Park, Canada' },
    { src: '../../images/travel-paris.svg', title: 'Paris & the Seine Boulevard, France' }
  ];
  let curT = 0;
  const imgT = document.getElementById('lab-trav-img');
  const titleT = document.getElementById('lab-trav-title');
  const countT = document.getElementById('lab-trav-counter');
  const statT = document.getElementById('lab-trav-status');

  function renderT() {
    imgT.src = spots[curT].src;
    titleT.textContent = spots[curT].title;
    countT.textContent = (curT + 1) + ' / ' + spots.length;
  }

  function showStatusT(text) {
    statT.textContent = text;
    statT.style.display = 'inline-block';
  }

  function nextT() { curT = (curT + 1) % spots.length; renderT(); }
  function prevT() { curT = (curT - 1 + spots.length) % spots.length; renderT(); }

  document.getElementById('lab-trav-next').addEventListener('click', () => { nextT(); showStatusT('Next: Key N'); });
  document.getElementById('lab-trav-prev').addEventListener('click', () => { prevT(); showStatusT('Prev: Key P'); });
  document.getElementById('lab-trav-space').addEventListener('click', () => { showStatusT('Current Destination: ' + spots[curT].title); });

  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (e.key === 'n' || e.key === 'N') { nextT(); showStatusT('Navigated: Next Destination (Key N)'); }
    if (e.key === 'p' || e.key === 'P') { prevT(); showStatusT('Navigated: Previous Destination (Key P)'); }
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      showStatusT('Current Destination: ' + spots[curT].title);
    }
  });
  `
));

console.log('Lab E (6 files) successfully built.');
