const fs = require('fs');
const path = require('path');
const { writeLabFile, wrapExercise } = require('./lab-builder-helper');

// ==========================================================================
// Lab D: Mouse Events (6 independent exercises)
// ==========================================================================

// 1. color-box.html
writeLabFile('mouse-events', 'color-box.html', wrapExercise(
  'Interactive Color Box (Click & Mouse-Over)',
  'Mouse Events',
  'D.1',
  'A colored box that changes background color on click and displays “Mouse is over the box” on mouse-over.',
  `
  <div style="text-align:center; padding:1.5rem 0;">
    <div id="interactive-box" style="width:240px; height:240px; margin:0 auto; background-color:#0d9488; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#ffffff; font-weight:bold; font-size:18px; cursor:pointer; box-shadow:0 10px 15px rgba(0,0,0,0.1); transition:background-color 0.3s ease, transform 0.2s ease;">
      Click Me!
    </div>

    <!-- Mouse over message display -->
    <div id="box-status" style="margin-top:1.5rem; font-size:18px; font-weight:bold; color:#0f2b48; min-height:28px;">
      Hover over the box to test mouse events.
    </div>

    <div class="mt-3">
      <button type="button" id="btn-reset-box" class="btn btn-outline btn-sm">Reset Box</button>
    </div>
  </div>
  `,
  `
  const box = document.getElementById('interactive-box');
  const status = document.getElementById('box-status');
  const colors = ['#0d9488', '#0284c7', '#7c3aed', '#ec4899', '#f59e0b', '#10b981', '#dc2626'];
  let colorIndex = 0;

  // Mouse Over: display "Mouse is over the box"
  box.addEventListener('mouseover', () => {
    status.textContent = 'Mouse is over the box';
    status.style.color = '#0d9488';
    box.style.transform = 'scale(1.05)';
  });

  // Mouse Out: restore original hint
  box.addEventListener('mouseout', () => {
    status.textContent = 'Mouse left the box.';
    status.style.color = '#64748b';
    box.style.transform = 'scale(1)';
  });

  // Click: changes background color
  box.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    box.style.backgroundColor = colors[colorIndex];
    status.textContent = 'Box color changed to ' + colors[colorIndex] + ' on click!';
    status.style.color = colors[colorIndex];
  });

  document.getElementById('btn-reset-box').addEventListener('click', () => {
    colorIndex = 0;
    box.style.backgroundColor = colors[0];
    status.textContent = 'Hover over the box to test mouse events.';
    status.style.color = '#0f2b48';
  });
  `
));

// 2. product-card-hover.html
writeLabFile('mouse-events', 'product-card-hover.html', wrapExercise(
  'Interactive Product Card (Hover Reveal & View Details)',
  'Mouse Events',
  'D.2',
  'Changes image appearance on mouse-over, reveals extra information, restores on mouse-leave, and displays price/availability on View Details.',
  `
  <div style="display:flex; justify-content:center; padding:1.5rem 0;">
    <div id="product-card" style="width:340px; background:#fff; border:1px solid #cbd5e1; border-radius:12px; padding:1.5rem; box-shadow:0 4px 6px rgba(0,0,0,0.05); transition:all 0.3s ease;">
      <!-- Product Image -->
      <div style="overflow:hidden; border-radius:8px; height:180px; background:#f8fafc; display:flex; align-items:center; justify-content:center;">
        <img id="product-img" src="../../images/product-laptop.svg" alt="Laptop" style="max-height:160px; transition:transform 0.3s ease, filter 0.3s ease;">
      </div>

      <h3 style="font-size:1.15rem; margin:1rem 0 0.5rem 0; color:#0f2b48;">Campus Developer Pro Ultrabook</h3>
      
      <!-- Extra info revealed on mouseover -->
      <div id="product-extra-info" style="display:none; background:#ecfdf5; border:1px solid #a7f3d0; padding:0.6rem; border-radius:6px; font-size:0.85rem; color:#065f46; margin-bottom:0.75rem;">
        ⚡ <strong>Special Specs:</strong> 32GB RAM, 1TB NVMe SSD, M3 Pro Chip, 18hr Battery.
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem;">
        <span style="font-size:1.25rem; font-weight:800; color:#0f2b48;">₹95,000</span>
        <button type="button" id="btn-view-details" class="btn btn-primary btn-sm">View Details</button>
      </div>

      <!-- Details output container -->
      <div id="details-output" style="display:none; margin-top:1rem; padding-top:0.75rem; border-top:1px dashed #cbd5e1; font-size:0.875rem;">
        <strong>Price:</strong> ₹95,000 (Incl. of all taxes)<br>
        <strong>Availability:</strong> <span style="color:#16a34a; font-weight:bold;">In Stock (12 Units at Campus Store)</span>
      </div>
    </div>
  </div>
  `,
  `
  const card = document.getElementById('product-card');
  const img = document.getElementById('product-img');
  const extraInfo = document.getElementById('product-extra-info');
  const viewBtn = document.getElementById('btn-view-details');
  const detailsOut = document.getElementById('details-output');

  // Mouse-over: changes image appearance, reveals extra information
  card.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)';
    img.style.filter = 'drop-shadow(0 8px 12px rgba(13,148,136,0.3))';
    extraInfo.style.display = 'block';
    card.style.borderColor = '#0d9488';
    card.style.boxShadow = '0 12px 20px rgba(0,0,0,0.1)';
  });

  // Mouse-leave: restores original appearance
  card.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.filter = 'none';
    extraInfo.style.display = 'none';
    card.style.borderColor = '#cbd5e1';
    card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
  });

  // View Details: displays price and availability
  viewBtn.addEventListener('click', () => {
    const isVisible = detailsOut.style.display === 'block';
    detailsOut.style.display = isVisible ? 'none' : 'block';
    viewBtn.textContent = isVisible ? 'View Details' : 'Hide Details';
  });
  `
));

// 3. traffic-signal.html
writeLabFile('mouse-events', 'traffic-signal.html', wrapExercise(
  'Interactive Traffic Signal (Red, Yellow, Green)',
  'Mouse Events',
  'D.3',
  'Interactive traffic light signal where clicking or hovering lights indicates Red = STOP, Yellow = READY, Green = GO.',
  `
  <div style="display:flex; flex-direction:column; align-items:center; padding:1.5rem 0;">
    <!-- Signal Pole & Box -->
    <div style="width:130px; background:#1e293b; border-radius:35px; padding:20px 0; display:flex; flex-direction:column; align-items:center; gap:16px; border:4px solid #0f172a; box-shadow:0 12px 24px rgba(0,0,0,0.25);">
      <!-- Red Light -->
      <div id="light-red" class="traffic-bulb" data-action="STOP" data-color="#ef4444" style="width:72px; height:72px; border-radius:50%; background:#7f1d1d; cursor:pointer; transition:all 0.3s ease; border:3px solid #450a0a;"></div>

      <!-- Yellow Light -->
      <div id="light-yellow" class="traffic-bulb" data-action="READY" data-color="#eab308" style="width:72px; height:72px; border-radius:50%; background:#713f12; cursor:pointer; transition:all 0.3s ease; border:3px solid #422006;"></div>

      <!-- Green Light -->
      <div id="light-green" class="traffic-bulb" data-action="GO" data-color="#22c55e" style="width:72px; height:72px; border-radius:50%; background:#14532d; cursor:pointer; transition:all 0.3s ease; border:3px solid #052e16;"></div>
    </div>

    <!-- Signal State Output -->
    <div id="signal-message" style="margin-top:2rem; font-size:24px; font-weight:800; text-align:center; min-height:40px; color:#64748b;">
      Click on any signal light to activate.
    </div>

    <div class="d-flex gap-2 mt-3">
      <button type="button" class="btn btn-outline btn-sm" id="btn-seq-signal">▶ Automatic Cycle</button>
      <button type="button" class="btn btn-outline btn-sm" id="btn-reset-signal">Reset Signal</button>
    </div>
  </div>
  `,
  `
  const bulbs = document.querySelectorAll('.traffic-bulb');
  const msg = document.getElementById('signal-message');
  let autoTimer = null;

  function activateBulb(bulb) {
    bulbs.forEach(b => {
      b.style.boxShadow = 'none';
      if (b.id === 'light-red') b.style.backgroundColor = '#7f1d1d';
      if (b.id === 'light-yellow') b.style.backgroundColor = '#713f12';
      if (b.id === 'light-green') b.style.backgroundColor = '#14532d';
    });

    const activeColor = bulb.getAttribute('data-color');
    const action = bulb.getAttribute('data-action');
    bulb.style.backgroundColor = activeColor;
    bulb.style.boxShadow = '0 0 35px ' + activeColor;

    if (action === 'STOP') {
      msg.textContent = '🔴 RED = STOP';
      msg.style.color = '#dc2626';
    } else if (action === 'READY') {
      msg.textContent = '🟡 YELLOW = READY';
      msg.style.color = '#d97706';
    } else if (action === 'GO') {
      msg.textContent = '🟢 GREEN = GO';
      msg.style.color = '#16a34a';
    }
  }

  bulbs.forEach(bulb => {
    bulb.addEventListener('click', () => {
      if (autoTimer) clearInterval(autoTimer);
      activateBulb(bulb);
    });
    bulb.addEventListener('mouseover', () => {
      activateBulb(bulb);
    });
  });

  document.getElementById('btn-seq-signal').addEventListener('click', () => {
    let step = 0;
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      const targets = [document.getElementById('light-red'), document.getElementById('light-yellow'), document.getElementById('light-green')];
      activateBulb(targets[step % 3]);
      step++;
    }, 1200);
  });

  document.getElementById('btn-reset-signal').addEventListener('click', () => {
    if (autoTimer) clearInterval(autoTimer);
    bulbs.forEach(b => {
      b.style.boxShadow = 'none';
      if (b.id === 'light-red') b.style.backgroundColor = '#7f1d1d';
      if (b.id === 'light-yellow') b.style.backgroundColor = '#713f12';
      if (b.id === 'light-green') b.style.backgroundColor = '#14532d';
    });
    msg.textContent = 'Click on any signal light to activate.';
    msg.style.color = '#64748b';
  });
  `
));

// 4. weather-panels.html
writeLabFile('mouse-events', 'weather-panels.html', wrapExercise(
  'Interactive Weather Panels (Sunny, Cloudy, Rainy)',
  'Mouse Events',
  'D.4',
  'Hovering or clicking displays: Sunny = "Perfect Day!", Cloudy = "Cloudy Weather", Rainy = "Carry an Umbrella!".',
  `
  <div>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1.25rem;">
      <!-- Sunny Panel -->
      <div id="panel-sunny" class="weather-box" data-msg="Sunny = Perfect Day!" style="background:linear-gradient(135deg, #fef08a, #f59e0b); color:#78350f; border-radius:12px; padding:2rem; text-align:center; cursor:pointer; transition:transform 0.25s ease;">
        <div style="font-size:3rem; margin-bottom:0.5rem;">☀️</div>
        <h4 style="margin:0; font-weight:800;">SUNNY</h4>
      </div>

      <!-- Cloudy Panel -->
      <div id="panel-cloudy" class="weather-box" data-msg="Cloudy = Cloudy Weather" style="background:linear-gradient(135deg, #cbd5e1, #64748b); color:#0f172a; border-radius:12px; padding:2rem; text-align:center; cursor:pointer; transition:transform 0.25s ease;">
        <div style="font-size:3rem; margin-bottom:0.5rem;">☁️</div>
        <h4 style="margin:0; font-weight:800;">CLOUDY</h4>
      </div>

      <!-- Rainy Panel -->
      <div id="panel-rainy" class="weather-box" data-msg="Rainy = Carry an Umbrella!" style="background:linear-gradient(135deg, #38bdf8, #0369a1); color:#ffffff; border-radius:12px; padding:2rem; text-align:center; cursor:pointer; transition:transform 0.25s ease;">
        <div style="font-size:3rem; margin-bottom:0.5rem;">🌧️</div>
        <h4 style="margin:0; font-weight:800;">RAINY</h4>
      </div>
    </div>

    <!-- Output Banner -->
    <div id="weather-banner" style="margin-top:2rem; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:1.25rem; text-align:center; font-size:1.3rem; font-weight:bold; color:#0f2b48;">
      Hover or click any weather card above.
    </div>
  </div>
  `,
  `
  const boxes = document.querySelectorAll('.weather-box');
  const banner = document.getElementById('weather-banner');

  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'translateY(-6px)';
      banner.textContent = box.getAttribute('data-msg');
      if (box.id === 'panel-sunny') banner.style.color = '#b45309';
      if (box.id === 'panel-cloudy') banner.style.color = '#334155';
      if (box.id === 'panel-rainy') banner.style.color = '#0284c7';
    });

    box.addEventListener('mouseleave', () => {
      box.style.transform = 'translateY(0)';
    });

    box.addEventListener('click', () => {
      banner.textContent = 'Selected: ' + box.getAttribute('data-msg');
    });
  });
  `
));

// 5. text-change-button.html
writeLabFile('mouse-events', 'text-change-button.html', wrapExercise(
  'Text Change Button (Mouse-Over & Mouse-Leave)',
  'Mouse Events',
  'D.5',
  'Changes page text to “Welcome to VIT!” on mouse-over and restores the original text on mouse-leave.',
  `
  <div style="text-align:center; padding:2.5rem 1rem;">
    <!-- Target Page Text -->
    <h2 id="dynamic-page-text" style="color:#0f2b48; font-size:2.2rem; font-weight:800; min-height:60px; transition:color 0.25s ease;">
      CampusConnect Pro Learning Portal
    </h2>

    <p class="text-muted mb-4">Hover your cursor over the button below to trigger the dynamic text swap:</p>

    <!-- Trigger Button -->
    <button type="button" id="btn-hover-swap" class="btn btn-primary btn-lg" style="padding:1rem 2rem; font-size:1.15rem;">
      Hover Over This Button
    </button>
  </div>
  `,
  `
  const targetText = document.getElementById('dynamic-page-text');
  const btn = document.getElementById('btn-hover-swap');
  const originalText = 'CampusConnect Pro Learning Portal';

  btn.addEventListener('mouseover', () => {
    targetText.textContent = 'Welcome to VIT!';
    targetText.style.color = '#0d9488';
  });

  btn.addEventListener('mouseleave', () => {
    targetText.textContent = originalText;
    targetText.style.color = '#0f2b48';
  });
  `
));

// 6. gaming-buttons.html
writeLabFile('mouse-events', 'gaming-buttons.html', wrapExercise(
  'Gaming Banner Buttons with Interactive Hover Effects',
  'Mouse Events',
  'D.6',
  'Esports gaming buttons demonstrating hover glow, scaling, and audio synthesis feedback.',
  `
  <div style="background:#090514; border-radius:12px; padding:3rem; text-align:center; border:2px solid #7c3aed;">
    <h3 style="font-family:'Impact', sans-serif; font-size:2rem; color:#fff; letter-spacing:2px; margin-bottom:1.5rem;">
      LEVEL UP YOUR GAMING EXPERIENCE
    </h3>
    <div style="display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap;">
      <button type="button" id="game-btn-play" class="btn" style="background:#ec4899; color:#fff; font-weight:800; letter-spacing:1px; padding:0.85rem 1.75rem; border-radius:4px; box-shadow:0 0 15px rgba(236,72,153,0.5); transition:all 0.25s ease;">
        ⚡ PLAY NOW
      </button>

      <button type="button" id="game-btn-explore" class="btn" style="background:transparent; color:#38bdf8; border:2px solid #38bdf8; font-weight:800; letter-spacing:1px; padding:0.85rem 1.75rem; border-radius:4px; box-shadow:0 0 10px rgba(56,189,248,0.4); transition:all 0.25s ease;">
        🎮 EXPLORE GAMES
      </button>
    </div>

    <div id="game-btn-feedback" style="margin-top:1.5rem; font-size:14px; color:#a78bfa; min-height:24px;">
      Hover over the gaming action buttons.
    </div>
  </div>
  `,
  `
  const b1 = document.getElementById('game-btn-play');
  const b2 = document.getElementById('game-btn-explore');
  const feed = document.getElementById('game-btn-feedback');

  b1.addEventListener('mouseover', () => {
    b1.style.transform = 'scale(1.08)';
    b1.style.boxShadow = '0 0 30px #ec4899';
    feed.textContent = 'Mouse is hovering on PLAY NOW! Ready to join match?';
    CampusMedia.synthesizeChime();
  });
  b1.addEventListener('mouseleave', () => {
    b1.style.transform = 'scale(1)';
    b1.style.boxShadow = '0 0 15px rgba(236,72,153,0.5)';
    feed.textContent = 'Hover over the gaming action buttons.';
  });

  b2.addEventListener('mouseover', () => {
    b2.style.transform = 'scale(1.08)';
    b2.style.boxShadow = '0 0 30px #38bdf8';
    b2.style.background = '#38bdf8';
    b2.style.color = '#090514';
    feed.textContent = 'Mouse is hovering on EXPLORE GAMES! Browsing collegiate titles.';
  });
  b2.addEventListener('mouseleave', () => {
    b2.style.transform = 'scale(1)';
    b2.style.boxShadow = '0 0 10px rgba(56,189,248,0.4)';
    b2.style.background = 'transparent';
    b2.style.color = '#38bdf8';
    feed.textContent = 'Hover over the gaming action buttons.';
  });
  `
));

console.log('Lab D (6 files) successfully built.');
