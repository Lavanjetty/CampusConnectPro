const fs = require('fs');
const path = require('path');

const baseDir = path.join('C:', 'Users', 'jetly', '.gemini', 'antigravity', 'scratch', 'CampusConnectPro');
const imgDir = path.join(baseDir, 'images');
const mediaDir = path.join(baseDir, 'media');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(mediaDir)) fs.mkdirSync(mediaDir, { recursive: true });

function writeSvg(filename, content) {
  fs.writeFileSync(path.join(imgDir, filename), content.trim());
  console.log('Created ' + filename);
}

// 1. CampusConnect Pro Logo
writeSvg('logo.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 60" width="260" height="60">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e" />
      <stop offset="100%" stop-color="#0f2b48" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14b8a6" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>
  <rect x="2" y="6" width="48" height="48" rx="12" fill="url(#logoGrad)" />
  <!-- Graduation Cap & Atom Node -->
  <path d="M12 24 L26 17 L40 24 L26 31 Z" fill="#ffffff" />
  <path d="M36 27 L36 36 C36 36 32 40 26 40 C20 40 16 36 16 36 L16 27" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" />
  <circle cx="39" cy="34" r="2" fill="#f59e0b" />
  <path d="M39 34 L39 42" stroke="#f59e0b" stroke-width="1.8" />
  <!-- Text -->
  <text x="60" y="29" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="20" fill="#0f2b48">Campus<tspan fill="#0d9488">Connect</tspan></text>
  <text x="60" y="47" font-family="'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="11" letter-spacing="2.5" fill="#64748b">PRO • ACADEMIC LAB</text>
  <rect x="226" y="16" width="30" height="16" rx="4" fill="url(#accentGrad)" />
  <text x="241" y="28" font-family="'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="9" fill="#ffffff" text-anchor="middle">v2026</text>
</svg>
`);

// 2. Hospital Logo
writeSvg('hospital-logo.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" width="240" height="60">
  <defs>
    <linearGradient id="hospGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
  </defs>
  <rect x="4" y="8" width="44" height="44" rx="10" fill="url(#hospGrad)" />
  <rect x="22" y="16" width="8" height="28" rx="2" fill="#ffffff" />
  <rect x="12" y="26" width="28" height="8" rx="2" fill="#ffffff" />
  <circle cx="37" cy="18" r="4" fill="#22c55e" />
  <text x="58" y="28" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="18" fill="#0369a1">CityCare<tspan fill="#0284c7"> Hospital</tspan></text>
  <text x="58" y="44" font-family="'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="10" letter-spacing="1.5" fill="#64748b">VIT HEALTH CARE CENTER</text>
</svg>
`);

// 3. Gaming Logo
writeSvg('gaming-logo.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" width="220" height="60">
  <defs>
    <linearGradient id="gameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c3aed" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
  </defs>
  <polygon points="10,8 44,4 50,48 16,54" fill="url(#gameGrad)" />
  <path d="M22,22 L36,22 M29,15 L29,29" stroke="#ffffff" stroke-width="3" stroke-linecap="round" />
  <circle cx="38" cy="38" r="2.5" fill="#38bdf8" />
  <circle cx="43" cy="33" r="2.5" fill="#f43f5e" />
  <text x="60" y="32" font-family="'Impact', 'Segoe UI Black', sans-serif" font-size="24" fill="#f8fafc" letter-spacing="1">GAME<tspan fill="#ec4899">ZONE</tspan></text>
  <text x="60" y="46" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="#a78bfa">COLLEGE ESPORTS</text>
</svg>
`);

// 4. Company Logo
writeSvg('company-logo.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" width="240" height="60">
  <rect x="6" y="8" width="44" height="44" rx="8" fill="#1e293b" />
  <polygon points="16,42 28,16 40,42 33,42 28,30 23,42" fill="#38bdf8" />
  <text x="60" y="30" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="18" fill="#0f172a">APEX<tspan fill="#0284c7"> GLOBAL</tspan></text>
  <text x="60" y="45" font-family="'Segoe UI', sans-serif" font-weight="500" font-size="11" fill="#64748b">Technologies &amp; Research Corp</text>
</svg>
`);

// 5. Campus Hero Image
writeSvg('campus-hero.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0c2340" />
      <stop offset="60%" stop-color="#1e3a5f" />
      <stop offset="100%" stop-color="#386b99" />
    </linearGradient>
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.85" />
    </linearGradient>
    <linearGradient id="lawnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#15803d" />
      <stop offset="100%" stop-color="#0f5132" />
    </linearGradient>
  </defs>
  <!-- Sky -->
  <rect width="1200" height="600" fill="url(#skyGrad)" />
  <!-- Distant Clouds & Stars -->
  <circle cx="150" cy="90" r="1.5" fill="#ffffff" opacity="0.8" />
  <circle cx="320" cy="140" r="2" fill="#ffffff" opacity="0.6" />
  <circle cx="780" cy="80" r="1.5" fill="#ffffff" opacity="0.7" />
  <circle cx="950" cy="110" r="2" fill="#ffffff" opacity="0.9" />
  <circle cx="1100" cy="70" r="1.5" fill="#ffffff" opacity="0.5" />
  <!-- Distant Tech Towers -->
  <rect x="180" y="240" width="120" height="240" fill="#132a48" opacity="0.8" />
  <rect x="340" y="200" width="160" height="280" fill="#18365c" opacity="0.9" />
  <rect x="740" y="220" width="140" height="260" fill="#132a48" opacity="0.8" />
  <rect x="920" y="250" width="130" height="230" fill="#0f233d" opacity="0.7" />
  <!-- Central Innovation Pavilion -->
  <polygon points="460,480 600,180 740,480" fill="#1e40af" opacity="0.25" />
  <rect x="480" y="240" width="240" height="240" rx="6" fill="#0f2b48" stroke="#38bdf8" stroke-width="2" />
  <!-- Glass Window Panels -->
  <g fill="url(#glassGrad)">
    <rect x="500" y="260" width="45" height="35" rx="3" />
    <rect x="555" y="260" width="45" height="35" rx="3" />
    <rect x="610" y="260" width="45" height="35" rx="3" />
    <rect x="665" y="260" width="45" height="35" rx="3" />
    <rect x="500" y="310" width="45" height="35" rx="3" />
    <rect x="555" y="310" width="45" height="35" rx="3" />
    <rect x="610" y="310" width="45" height="35" rx="3" />
    <rect x="665" y="310" width="45" height="35" rx="3" />
    <rect x="500" y="360" width="45" height="35" rx="3" />
    <rect x="555" y="360" width="45" height="35" rx="3" />
    <rect x="610" y="360" width="45" height="35" rx="3" />
    <rect x="665" y="360" width="45" height="35" rx="3" />
  </g>
  <!-- Grand Entrance Columns -->
  <rect x="530" y="415" width="20" height="65" fill="#f8fafc" />
  <rect x="570" y="415" width="20" height="65" fill="#f8fafc" />
  <rect x="610" y="415" width="20" height="65" fill="#f8fafc" />
  <rect x="650" y="415" width="20" height="65" fill="#f8fafc" />
  <polygon points="460,240 600,160 740,240" fill="#0d9488" />
  <text x="600" y="215" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="15" fill="#ffffff" text-anchor="middle" letter-spacing="2">SMART CAMPUS RESEARCH COMPLEX</text>
  <!-- Modern Lawn & Plaza -->
  <path d="M0,480 L1200,480 L1200,600 L0,600 Z" fill="url(#lawnGrad)" />
  <polygon points="480,480 720,480 840,600 360,600" fill="#e2e8f0" />
  <!-- Trees -->
  <g fill="#166534">
    <circle cx="120" cy="460" r="45" />
    <circle cx="230" cy="470" r="38" />
    <circle cx="340" cy="475" r="32" />
    <circle cx="860" cy="475" r="32" />
    <circle cx="970" cy="470" r="38" />
    <circle cx="1080" cy="460" r="45" />
  </g>
  <text x="600" y="550" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="28" fill="#0f2b48" text-anchor="middle" opacity="0.9">CAMPUSCONNECT PRO • GLOBAL CAMPUS</text>
</svg>
`);

// 6. Campus Library
writeSvg('campus-lib.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="libBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#libBg)" />
  <!-- Bookshelves -->
  <g fill="#854d0e">
    <rect x="40" y="60" width="140" height="280" rx="4" />
    <rect x="230" y="60" width="140" height="280" rx="4" />
    <rect x="420" y="60" width="140" height="280" rx="4" />
  </g>
  <!-- Books colorful pattern -->
  <g>
    <rect x="50" y="70" width="120" height="40" fill="#0284c7" />
    <rect x="50" y="120" width="120" height="40" fill="#16a34a" />
    <rect x="50" y="170" width="120" height="40" fill="#dc2626" />
    <rect x="50" y="220" width="120" height="40" fill="#eab308" />
    <rect x="50" y="270" width="120" height="40" fill="#9333ea" />
    
    <rect x="240" y="70" width="120" height="40" fill="#0d9488" />
    <rect x="240" y="120" width="120" height="40" fill="#f97316" />
    <rect x="240" y="170" width="120" height="40" fill="#2563eb" />
    <rect x="240" y="220" width="120" height="40" fill="#84cc16" />
    <rect x="240" y="270" width="120" height="40" fill="#ec4899" />

    <rect x="430" y="70" width="120" height="40" fill="#6366f1" />
    <rect x="430" y="120" width="120" height="40" fill="#14b8a6" />
    <rect x="430" y="170" width="120" height="40" fill="#e11d48" />
    <rect x="430" y="220" width="120" height="40" fill="#f59e0b" />
    <rect x="430" y="270" width="120" height="40" fill="#3b82f6" />
  </g>
  <!-- Study Desk -->
  <rect x="150" y="320" width="300" height="40" rx="4" fill="#64748b" />
  <!-- Laptop on desk -->
  <polygon points="270,320 330,320 335,328 265,328" fill="#cbd5e1" />
  <rect x="275" y="280" width="50" height="38" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
  <circle cx="300" cy="298" r="4" fill="#38bdf8" />
  <!-- Banner -->
  <rect x="180" y="18" width="240" height="30" rx="6" fill="#0f766e" />
  <text x="300" y="38" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="13" fill="#ffffff" text-anchor="middle">CENTRAL DIGITAL LIBRARY</text>
</svg>
`);

// 7. Auditorium & Events
writeSvg('campus-auditorium.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="audBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#311042" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#audBg)" />
  <!-- Spotlights -->
  <polygon points="100,0 20,380 220,380" fill="#a855f7" opacity="0.15" />
  <polygon points="300,0 180,380 420,380" fill="#38bdf8" opacity="0.2" />
  <polygon points="500,0 380,380 580,380" fill="#ec4899" opacity="0.15" />
  <!-- Stage -->
  <polygon points="80,260 520,260 580,380 20,380" fill="#1e1b4b" stroke="#6366f1" stroke-width="2" />
  <!-- Screen on stage -->
  <rect x="160" y="80" width="280" height="150" rx="8" fill="#020617" stroke="#38bdf8" stroke-width="3" />
  <text x="300" y="145" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="20" fill="#38bdf8" text-anchor="middle">TECH SYMPOSIUM 2026</text>
  <text x="300" y="175" font-family="'Segoe UI', sans-serif" font-weight="600" font-size="13" fill="#cbd5e1" text-anchor="middle">NATIONAL INNOVATION SUMMIT</text>
  <!-- Podium -->
  <polygon points="280,240 320,240 325,290 275,290" fill="#475569" />
  <circle cx="300" cy="225" r="10" fill="#e2e8f0" />
</svg>
`);

// 8. Tech Park
writeSvg('campus-tech-park.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <rect width="600" height="400" fill="#0f172a" />
  <rect x="80" y="60" width="200" height="300" fill="#1e293b" stroke="#0ea5e9" stroke-width="2" />
  <rect x="320" y="100" width="200" height="260" fill="#1e293b" stroke="#10b981" stroke-width="2" />
  <!-- Circuit Nodes -->
  <line x1="280" y1="180" x2="320" y2="180" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4" />
  <line x1="280" y1="240" x2="320" y2="240" stroke="#34d399" stroke-width="3" stroke-dasharray="4" />
  <text x="180" y="210" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="16" fill="#38bdf8" text-anchor="middle">INCUBATION LAB</text>
  <text x="420" y="230" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="16" fill="#34d399" text-anchor="middle">AI &amp; CLOUD TOWER</text>
</svg>
`);

// 9. Travel Images (Japan, Switzerland, Canada, Paris)
writeSvg('travel-japan.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="japSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fed7aa" />
      <stop offset="50%" stop-color="#fecdd3" />
      <stop offset="100%" stop-color="#e0e7ff" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#japSky)" />
  <!-- Red Sun -->
  <circle cx="300" cy="160" r="70" fill="#e11d48" opacity="0.85" />
  <!-- Mount Fuji -->
  <polygon points="120,340 300,120 480,340" fill="#334155" />
  <!-- Snow Cap -->
  <polygon points="255,175 300,120 345,175 325,190 300,180 275,190" fill="#ffffff" />
  <!-- Japanese Pagoda Silhouette -->
  <g fill="#1e293b">
    <rect x="80" y="220" width="70" height="120" />
    <path d="M60,240 L170,240 L150,220 L80,220 Z" />
    <path d="M65,275 L165,275 L145,260 L85,260 Z" />
    <path d="M70,310 L160,310 L140,295 L90,295 Z" />
  </g>
  <!-- Cherry Blossom Branch -->
  <path d="M450,40 Q480,100 560,90" stroke="#78350f" stroke-width="5" fill="none" />
  <circle cx="470" cy="70" r="10" fill="#fb7185" />
  <circle cx="505" cy="85" r="12" fill="#fda4af" />
  <circle cx="540" cy="80" r="11" fill="#f43f5e" />
  <rect x="0" y="340" width="600" height="60" fill="#047857" />
  <text x="300" y="380" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle">JAPAN • TOKYO &amp; MT. FUJI</text>
</svg>
`);

writeSvg('travel-switzerland.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="swissSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd" />
      <stop offset="100%" stop-color="#e0f2fe" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#swissSky)" />
  <!-- Swiss Alps Peaks -->
  <polygon points="40,320 200,80 340,320" fill="#64748b" />
  <polygon points="150,150 200,80 250,150 220,165 200,155 180,165" fill="#ffffff" />
  <polygon points="260,320 420,100 580,320" fill="#475569" />
  <polygon points="370,170 420,100 470,170 445,185 420,175 395,185" fill="#ffffff" />
  <!-- Green Rolling Hills -->
  <path d="M0,280 Q200,240 400,280 T600,280 L600,400 L0,400 Z" fill="#15803d" />
  <!-- Swiss Wooden Chalet -->
  <rect x="250" y="280" width="90" height="60" fill="#854d0e" />
  <polygon points="235,280 295,245 355,280" fill="#451a03" />
  <rect x="285" y="305" width="20" height="35" fill="#ffffff" />
  <rect x="0" y="350" width="600" height="50" fill="#166534" />
  <text x="300" y="382" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle">SWITZERLAND • THE ALPS</text>
</svg>
`);

writeSvg('travel-canada.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="canSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="60%" stop-color="#7dd3fc" />
      <stop offset="100%" stop-color="#bae6fd" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#canSky)" />
  <!-- Rocky Mountains -->
  <polygon points="60,260 250,90 420,260" fill="#334155" />
  <polygon points="200,135 250,90 300,135 270,145 250,140 230,145" fill="#f8fafc" />
  <!-- Emerald Lake Banff -->
  <path d="M0,250 L600,250 L600,400 L0,400 Z" fill="#0d9488" />
  <!-- Pine Trees reflection and bank -->
  <g fill="#064e3b">
    <polygon points="40,250 55,200 70,250" />
    <polygon points="80,255 100,190 120,255" />
    <polygon points="130,252 145,210 160,252" />
    <polygon points="480,255 500,190 520,255" />
    <polygon points="530,250 545,205 560,250" />
  </g>
  <!-- Canoe -->
  <ellipse cx="300" cy="310" rx="45" ry="10" fill="#dc2626" />
  <text x="300" y="380" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle">CANADA • BANFF NATIONAL PARK</text>
</svg>
`);

writeSvg('travel-paris.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="parSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fdba74" />
      <stop offset="50%" stop-color="#fbcfe8" />
      <stop offset="100%" stop-color="#bae6fd" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#parSky)" />
  <!-- Eiffel Tower -->
  <g fill="#334155">
    <polygon points="280,340 320,340 303,110 297,110" />
    <line x1="300" y1="110" x2="300" y2="70" stroke="#334155" stroke-width="3" />
    <rect x="288" y="160" width="24" height="6" />
    <rect x="275" y="240" width="50" height="8" />
    <path d="M285,340 Q300,290 315,340 Z" fill="#parSky" />
  </g>
  <rect x="0" y="340" width="600" height="60" fill="#475569" />
  <text x="300" y="380" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle">FRANCE • PARIS &amp; SEINE</text>
</svg>
`);

// 10. Avatars
function makeAvatar(filename, name, title, bgColor, accentColor) {
  writeSvg(filename, `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <circle cx="100" cy="100" r="95" fill="${bgColor}" stroke="${accentColor}" stroke-width="4" />
    <!-- Head & Shoulders -->
    <circle cx="100" cy="75" r="38" fill="#fed7aa" />
    <!-- Hair -->
    <path d="M62,75 Q100,28 138,75 Q100,50 62,75 Z" fill="${accentColor}" />
    <!-- Body -->
    <path d="M40,175 C45,130 70,120 100,120 C130,120 155,130 160,175 Z" fill="#1e293b" />
    <!-- Tie/Collar -->
    <polygon points="90,120 110,120 100,145" fill="#f8fafc" />
    <polygon points="97,125 103,125 100,165" fill="${accentColor}" />
  </svg>
  `);
}

makeAvatar('avatar-faculty1.svg', 'Dr. Aris Thorne', 'HOD CSE', '#0f2b48', '#0ea5e9');
makeAvatar('avatar-faculty2.svg', 'Prof. Priya Raman', 'Cloud Architect', '#064e3b', '#10b981');
makeAvatar('avatar-faculty3.svg', 'Dr. Marcus Vance', 'Cybersecurity', '#4c1d95', '#a855f7');
makeAvatar('avatar-faculty4.svg', 'Dr. Elena Rostova', 'Data Science', '#831843', '#f43f5e');
makeAvatar('avatar-student.svg', 'Aarav Patel', 'Student B.Tech CSE', '#0f766e', '#14b8a6');

// 11. Products for Shopping Checkout & Mouse Events
writeSvg('product-laptop.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <rect width="300" height="200" rx="10" fill="#f1f5f9" />
  <rect x="60" y="35" width="180" height="110" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="3" />
  <rect x="70" y="45" width="160" height="90" fill="#0f172a" />
  <text x="150" y="95" font-family="'Consolas', monospace" font-size="12" fill="#38bdf8" text-anchor="middle">&gt; Campus Developer Pro</text>
  <!-- Base -->
  <polygon points="40,150 260,150 245,165 55,165" fill="#94a3b8" />
  <rect x="130" y="152" width="40" height="6" rx="2" fill="#64748b" />
</svg>
`);

writeSvg('product-headphones.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <rect width="300" height="200" rx="10" fill="#f8fafc" />
  <path d="M90,120 A60,60 0 0,1 210,120" stroke="#0f172a" stroke-width="12" fill="none" stroke-linecap="round" />
  <rect x="75" y="105" width="30" height="50" rx="10" fill="#0ea5e9" />
  <rect x="195" y="105" width="30" height="50" rx="10" fill="#0ea5e9" />
  <text x="150" y="180" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="13" fill="#334155" text-anchor="middle">Studio ANC Headset</text>
</svg>
`);

writeSvg('product-watch.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <rect width="300" height="200" rx="10" fill="#f8fafc" />
  <rect x="135" y="20" width="30" height="160" rx="6" fill="#475569" />
  <rect x="120" y="65" width="60" height="70" rx="12" fill="#0f172a" stroke="#0ea5e9" stroke-width="3" />
  <text x="150" y="105" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="14" fill="#38bdf8" text-anchor="middle">10:42</text>
  <text x="150" y="122" font-family="'Segoe UI', sans-serif" font-weight="600" font-size="9" fill="#10b981" text-anchor="middle">♥ 76 BPM</text>
</svg>
`);

// 12. Books
function makeBook(filename, title, color) {
  writeSvg(filename, `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" width="200" height="280">
    <rect x="10" y="10" width="180" height="260" rx="8" fill="${color}" stroke="#ffffff" stroke-width="2" />
    <rect x="25" y="10" width="8" height="260" fill="rgba(0,0,0,0.2)" />
    <rect x="40" y="40" width="140" height="80" rx="4" fill="#ffffff" />
    <text x="110" y="75" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="15" fill="#0f172a" text-anchor="middle">${title}</text>
    <text x="110" y="95" font-family="'Segoe UI', sans-serif" font-weight="600" font-size="10" fill="#64748b" text-anchor="middle">Academic Edition 2026</text>
    <text x="110" y="240" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="12" fill="#ffffff" text-anchor="middle">CAMPUSCONNECT PRESS</text>
  </svg>
  `);
}

makeBook('book-webtech.svg', 'WEB TECH PRO', '#0f766e');
makeBook('book-dsa.svg', 'DATA STRUCTURES', '#1e3a8a');
makeBook('book-ai.svg', 'MODERN AI LAB', '#701a75');
makeBook('book-networks.svg', 'CLOUD NETWORKS', '#065f46');

// 13. Gaming Images
writeSvg('gaming-hero.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600">
  <defs>
    <linearGradient id="cyberSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090514" />
      <stop offset="50%" stop-color="#190d36" />
      <stop offset="100%" stop-color="#0a192f" />
    </linearGradient>
    <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ec4899" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="600" fill="url(#cyberSky)" />
  <circle cx="600" cy="300" r="350" fill="url(#neonGlow)" />
  <!-- Cyber Grid -->
  <g stroke="#38bdf8" stroke-width="0.8" opacity="0.3">
    <line x1="0" y1="450" x2="1200" y2="450" />
    <line x1="0" y1="490" x2="1200" y2="490" />
    <line x1="0" y1="540" x2="1200" y2="540" />
    <line x1="100" y1="420" x2="0" y2="600" />
    <line x1="300" y1="420" x2="200" y2="600" />
    <line x1="500" y1="420" x2="450" y2="600" />
    <line x1="700" y1="420" x2="750" y2="600" />
    <line x1="900" y1="420" x2="1000" y2="600" />
    <line x1="1100" y1="420" x2="1200" y2="600" />
  </g>
  <!-- Futuristic Esports Arena Silhouette -->
  <polygon points="400,420 600,200 800,420" fill="#1e1145" stroke="#ec4899" stroke-width="3" />
  <polygon points="470,420 600,280 730,420" fill="#0d1b3e" stroke="#00f0ff" stroke-width="2" />
  <circle cx="600" cy="240" r="15" fill="#f43f5e" />
  <text x="600" y="380" font-family="'Impact', 'Segoe UI Black', sans-serif" font-size="44" fill="#ffffff" text-anchor="middle" letter-spacing="4">CAMPUS ESPORTS CHAMPIONSHIP</text>
  <text x="600" y="415" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="16" fill="#38bdf8" text-anchor="middle" letter-spacing="3">2026 NATIONAL INTER-COLLEGE TOURNAMENT</text>
</svg>
`);

writeSvg('game-cyber.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 200" width="350" height="200">
  <rect width="350" height="200" rx="8" fill="#180b2d" />
  <circle cx="175" cy="90" r="50" fill="#831843" opacity="0.6" />
  <polygon points="120,150 175,50 230,150" fill="#ec4899" opacity="0.8" />
  <text x="175" y="175" font-family="'Impact', sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">CYBER PROTOCOL 2088</text>
</svg>
`);

writeSvg('game-valiant.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 200" width="350" height="200">
  <rect width="350" height="200" rx="8" fill="#082f49" />
  <polygon points="175,30 220,120 130,120" fill="#0284c7" />
  <circle cx="175" cy="80" r="20" fill="#38bdf8" />
  <text x="175" y="175" font-family="'Impact', sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">VALIANT STRIKE TACTICAL</text>
</svg>
`);

writeSvg('game-speed.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 200" width="350" height="200">
  <rect width="350" height="200" rx="8" fill="#1c1917" />
  <polygon points="70,140 280,140 250,70 100,70" fill="#e11d48" />
  <ellipse cx="110" cy="140" rx="20" ry="20" fill="#44403c" />
  <ellipse cx="240" cy="140" rx="20" ry="20" fill="#44403c" />
  <text x="175" y="180" font-family="'Impact', sans-serif" font-size="18" fill="#f59e0b" text-anchor="middle">VELOCITY OVERDRIVE</text>
</svg>
`);

// 14. Submit Image Button
writeSvg('submit-btn.png.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" width="160" height="48">
  <defs>
    <linearGradient id="btnGrad" x1="0" y1="0" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>
  <rect width="160" height="48" rx="8" fill="url(#btnGrad)" />
  <circle cx="28" cy="24" r="10" fill="#ffffff" opacity="0.2" />
  <polyline points="24,24 27,27 33,21" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  <text x="94" y="29" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="14" fill="#ffffff" text-anchor="middle">CONFIRM &amp; PAY</text>
</svg>
`);
// also copy to submit-btn.png (or svg) so type="image" src="images/submit-btn.png" works
fs.copyFileSync(path.join(imgDir, 'submit-btn.png.svg'), path.join(imgDir, 'submit-btn.png'));

// 15. Create a valid standard PCM WAV file for welcome audio!
function generateWavFile(filename, durationSec = 2.5) {
  const sampleRate = 8000;
  const numSamples = Math.floor(sampleRate * durationSec);
  const buffer = Buffer.alloc(44 + numSamples);
  
  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + numSamples, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size
  buffer.writeUInt16LE(1, 20);  // PCM format
  buffer.writeUInt16LE(1, 22);  // Mono
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate, 28); // ByteRate
  buffer.writeUInt16LE(1, 32);  // BlockAlign
  buffer.writeUInt16LE(8, 34);  // BitsPerSample
  buffer.write('data', 36);
  buffer.writeUInt32LE(numSamples, 40);

  // Generate a friendly 2-tone melodic college chime (440Hz -> 554Hz -> 659Hz)
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    let freq = 440; // A4
    if (t > 0.8) freq = 554.37; // C#5
    if (t > 1.6) freq = 659.25; // E5
    const decay = Math.exp(-((t % 0.8) * 3));
    const sampleVal = Math.sin(2 * Math.PI * freq * t) * decay;
    buffer.writeUInt8(Math.floor((sampleVal + 1) * 127.5), 44 + i);
  }

  fs.writeFileSync(path.join(mediaDir, filename), buffer);
  console.log('Generated WAV: ' + filename);
}

generateWavFile('welcome-audio.wav');
generateWavFile('symposium-welcome.wav');

console.log('All image and media assets successfully generated!');
