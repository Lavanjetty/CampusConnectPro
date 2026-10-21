# CampusConnect Pro — Smart Campus & Web Technology Learning Portal

[![NAAC Grade](https://img.shields.io/badge/NAAC-A%2B%2B%20Accredited-0d9488.svg)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple.svg)](vendor/bootstrap/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20Standards-orange.svg)](#)
[![CSS3](https://img.shields.io/badge/CSS3-Custom%20Tokens-blue.svg)](#)
[![JavaScript](https://img.shields.io/badge/Vanilla%20JS-ES6%2B-yellow.svg)](#)
[![Deploy](https://img.shields.io/badge/Netlify-Ready-00ad9f.svg)](#)

CampusConnect Pro is an enterprise-grade, responsive, multi-page higher education management portal paired with an exhaustive **Web Technology Practical Laboratory (38 independent practical exercises)**. Engineered for academic institutions, this project bridges foundational computer science syllabus topics with modern web design standards.

---

## 📑 Table of Contents
1. [Project Highlights](#-project-highlights)
2. [Technology Stack](#-technology-stack)
3. [Architecture & Folder Structure](#-architecture--folder-structure)
4. [Main Website Pages (15 Connected Portals)](#-main-website-pages-15-connected-portals)
5. [Web Technology Practical Lab (38 Exercises)](#-web-technology-practical-lab-38-exercises)
6. [Design System & Color Palette](#-design-system--color-palette)
7. [Local Setup & Verification](#-local-setup--verification)
8. [Netlify Deployment Guide](#-netlify-deployment-guide)
9. [Third-Party Dependencies & Backend Services](#-third-party-dependencies--backend-services)

---

## 🌟 Project Highlights
- **15 Connected Core Website Pages**: Main Home portal, Student & Faculty Authentication, Student Dashboard, Department & Faculty Directory, College Events, Interactive Campus & Travel Photo Gallery, 2×2 Library Management System with Smart Search Engine, Student/Course/Patient Multi-Section Registration, Dual-Header Hospital Management, Dynamic Shopping Checkout, Centered Inline CSS Company Profile, Cyberpunk Esports Gaming Hub, Employee Management System, Science and Technology text formatting article, and My Travel Bucket List.
- **38 Isolated Practical Lab Exercises**: Organized into 6 distinct categories (`/lab/basic-html/`, `/lab/forms/`, `/lab/validation/`, `/lab/mouse-events/`, `/lab/keyboard-events/`, `/lab/bootstrap/`) with a master searchable, filterable laboratory directory.
- **Strict Syllabus Compliance**: Exact execution of special constraints, including:
  - `layout1.html` using **strictly only `<div>` tags and NO CSS**.
  - `div-no-css.html` with zero stylesheet or inline styling.
  - `vit-footer-internal.html` using **internal `<style>` tags without inline CSS**.
  - `company.html` demonstrating extensive **inline CSS** for fonts, weights, colors, borders, margins, padding, and alignments.
  - Horizontal department navigation using nested `<a>` elements within `<div>` containers.
- **Keyboard & Mouse Interactivity**:
  - Right/Left Arrow navigation + Enter for Campus Gallery.
  - Keys N/P + Spacebar for Travel Mode.
  - Scoped keyboard listeners that strictly bypass text input controls (`<input>`, `<textarea>`).
  - ATM numeric PIN validation with non-numeric rejection warnings.
  - Interactive Traffic Signal (Red = STOP, Yellow = READY, Green = GO).
  - Weather cards (Sunny = Perfect Day!, Cloudy = Cloudy Weather, Rainy = Carry an Umbrella!).
  - Button text swap to "Welcome to VIT!" on hover and restoration on mouse-leave.
- **Full Form Input Coverage**: All 18 specified HTML5 controls implemented on `registration.html` (text, email, password, tel, number, date, time, datetime-local, url, search, color, file, range, radio, checkbox, select, textarea, hidden, image button).

---

## 🛠️ Technology Stack
- **HTML5**: Semantic tags (`<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>`, `<canvas>`, `<audio>`, `<video>`).
- **CSS3**: Custom design tokens, CSS variables, Flexbox, Grid, transitions, hover transformations, accessible contrast ratios.
- **Vanilla JavaScript (ES6+)**: Custom DOM event bus, keyboard listeners, regular expressions, dynamic arithmetic calculators, WebAudio chimes, and LocalStorage session persistence.
- **Bootstrap 5.3.3**: Official stylesheet and JS bundle downloaded locally into `vendor/bootstrap/` to support offline evaluation and local styling.
- **Vector Assets & Audio**: Scalable responsive SVG imagery and pure PCM WAV audio chime files.

---

## 📂 Architecture & Folder Structure

```text
CampusConnectPro/
│
├── index.html                   # Page 1: Home ("One Campus. Endless Possibilities.")
├── auth.html                    # Page 2: Authentication (Login/Register, radio, validation)
├── dashboard.html               # Page 3: Student Dashboard (ID card, sidebar, demo modules)
├── departments.html             # Page 4: Dept of Computer Science (Faculty, table, formatting)
├── events.html                  # Page 5: College Events 2026 (video, audio, symposium form)
├── gallery.html                 # Page 6: Campus & Travel Gallery (scoped keyboard shortcuts)
├── services.html                # Page 7: Library (2x2 grid) & Smart Search Engine
├── registration.html            # Page 8: Student, Course & Patient Registration (18 HTML5 types)
├── hospital.html                # Page 9: Hospital Management (Header A/B, VIT footer, inline/internal CSS)
├── checkout.html                # Page 10: Shopping Checkout (dynamic fields, cart calculation)
├── company.html                 # Page 11: Centered Company Profile (extensive inline CSS)
├── gaming.html                  # Page 12: Gaming Website (70vh banner, fixed nav, hover effects)
├── employees.html               # Page 13: Employee Management (sidebar, ID card, E=mc², CO₂)
├── science.html                 # Page 14: Science and Technology (bold, italic, mark, sub, sup)
├── travel.html                  # Page 15: My Travel Bucket List (4 vertical cards, author footer)
│
├── css/
│   ├── theme.css                # CSS variables, tokens, Navy & Teal color palette
│   ├── main.css                 # Base resets, header, footer, cards, forms, tables
│   ├── dashboard.css            # Sidebar layouts, ID card wrapper, demo banners
│   └── lab.css                  # Practical lab catalog, sandbox cards, search pill styles
│
├── js/
│   ├── main.js                  # Mobile navigation, active route highlighting, LocalStorage auth
│   ├── validation.js            # RegEx rules (/^[A-Za-z\s]{3,50}$/, email, phone, PIN)
│   ├── gallery.js               # Interactive keyboard gallery controller (Arrow keys, N, P, Space)
│   ├── checkout.js              # Cart calculations, dynamic payment field toggles, modal receipt
│   ├── media-helper.js          # WebAudio chime synthesizers & HTML5 canvas video fallback
│   └── lab-runner.js            # Master lab catalog live search & category filter engine
│
├── images/                      # Responsive vector SVG graphics & portraits
│   ├── logo.svg, hospital-logo.svg, gaming-logo.svg, company-logo.svg
│   ├── campus-hero.svg, campus-lib.svg, campus-auditorium.svg, campus-tech-park.svg
│   ├── travel-japan.svg, travel-switzerland.svg, travel-canada.svg, travel-paris.svg
│   ├── avatar-faculty1.svg ... avatar-faculty4.svg, avatar-student.svg
│   ├── product-laptop.svg, product-headphones.svg, product-watch.svg
│   ├── book-webtech.svg, book-dsa.svg, book-ai.svg, book-networks.svg
│   ├── gaming-hero.svg, game-cyber.svg, game-valiant.svg, game-speed.svg
│   └── submit-btn.png           # Image submit button for <input type="image"> demo
│
├── media/
│   ├── welcome-audio.wav        # Standard RIFF/WAV audio chime file
│   └── symposium-welcome.wav    # Symposium dean welcome address audio
│
├── vendor/
│   └── bootstrap/
│       ├── bootstrap.min.css    # Official Bootstrap 5.3.3 minified CSS
│       └── bootstrap.bundle.min.js
│
├── lab/                         # Categorized Web Technology Practical Lab (38 Exercises)
│   ├── index.html               # Searchable, filterable lab catalog with live counter
│   │
│   ├── basic-html/              # Lab A: Basic HTML & Layouts (17 files)
│   │   ├── headings-formatting.html
│   │   ├── nested-lists.html
│   │   ├── employee-profile.html
│   │   ├── travel-cards.html
│   │   ├── employee-id-card.html
│   │   ├── department-nav.html
│   │   ├── table-layout.html
│   │   ├── employee-dashboard-layout.html
│   │   ├── layout1.html         # Strictly div only, ZERO CSS
│   │   ├── div-no-css.html      # Strictly div only, ZERO CSS
│   │   ├── table-conventional.html
│   │   ├── hospital-header-inline.html
│   │   ├── hospital-header-nav.html
│   │   ├── search-header.html
│   │   ├── company-profile-inline.html
│   │   ├── library-grid-inline.html
│   │   └── vit-footer-internal.html # Strictly internal style tag, NO inline CSS
│   │
│   ├── forms/                   # Lab B: HTML5 Forms & Media (7 files)
│   │   ├── student-login-form.html
│   │   ├── symposium-registration.html
│   │   ├── patient-registration.html
│   │   ├── shopping-checkout.html
│   │   ├── auth-bootstrap.html
│   │   ├── bootstrap-external.html
│   │   └── image-button-upload.html
│   │
│   ├── validation/              # Lab C: JavaScript Validation (5 files)
│   │   ├── login-validation.html
│   │   ├── student-regex-validation.html
│   │   ├── course-registration-validation.html
│   │   ├── patient-form-validation.html
│   │   └── checkout-validation.html
│   │
│   ├── mouse-events/            # Lab D: Mouse Events (6 files)
│   │   ├── color-box.html
│   │   ├── product-card-hover.html
│   │   ├── traffic-signal.html
│   │   ├── weather-panels.html
│   │   ├── text-change-button.html
│   │   └── gaming-buttons.html
│   │
│   ├── keyboard-events/         # Lab E: Keyboard Events (6 files)
│   │   ├── student-search.html
│   │   ├── atm-pin.html
│   │   ├── product-search.html
│   │   ├── online-exam.html
│   │   ├── campus-gallery-keys.html
│   │   └── travel-gallery-keys.html
│   │
│   └── bootstrap/               # Lab F: Bootstrap 5 (4 files)
│       ├── college-events-bootstrap.html
│       ├── auth-bootstrap-page.html
│       ├── grid-navigation-demo.html
│       └── local-bootstrap-demo.html
│
└── README.md
```

---

## 🌐 Main Website Pages (15 Connected Portals)

1. **`index.html` (Home Portal)**
   - Logo, top notification strip, horizontal main navigation, and mobile hamburger menu.
   - Hero banner with campus illustration and primary headline: *“One Campus. Endless Possibilities.”*
   - Academic heritage overview, quick-access cards for Students, Faculty, Events, Library, Gallery, and Practical Lab.
   - Program highlights and multi-column semantic footer.

2. **`auth.html` (Identity & Authentication Gateway)**
   - Login and Registration tabbed panels with accessible ARIA tablists.
   - Identity radio buttons (Student / Faculty), username/email, password, Remember Me, Forgot Password link, and Clear button.
   - Registration with Full Name, Email, Password, Confirm Password, Role selection, and Terms acceptance.
   - Speech synthesis / audio instruction helper button.
   - Field-by-field red error validation and dedicated alert status container.

3. **`dashboard.html` (Student Experience Dashboard)**
   - Welcome greeting bound to active session state (`Aarav Patel`).
   - Official Student ID Card with avatar, department, batch, and status chip.
   - Responsive vertical sidebar with Home, Student/Employee Directory, Courses, Events, Library, and Logout.
   - Interactive modal previews for demonstration modules (Payroll Demo, Leave Requests, Academic Reports) clearly tagged with `DEMO` notices.
   - Live announcement feeds and upcoming event cards.

4. **`departments.html` (Department of Computer Science & Faculty Directory)**
   - Secondary section navigation (Overview, Faculty, Programs, Research, Global Exchange, Contact).
   - Faculty cards with avatar photos, academic designations, institutional summaries, and highlighted ratings (e.g. `★ 4.96 / 5.0`).
   - Real-time faculty text search and domain filtering (AI, Cloud, Cyber, Data).
   - Semantic HTML table displaying program codes, degrees, duration, and accreditation.
   - Semantic text formatting tags: `<b>`, `<strong>`, `<i>`, `<em>`, `<mark>`, `<sub>`, `<sup>`.
   - Dedicated nested unordered list: *Countries to Visit* and *Activities*.

5. **`events.html` (College Events 2026)**
   - Top Bootstrap 5 navigation.
   - Welcome audio message player with native HTML5 `<audio>` and chime synthesizers.
   - Promotional video preview using HTML5 canvas broadcast fallback.
   - National Technical Symposium registration form with event date, department dropdown, gender radio, technical track checkboxes, student ID proof upload, and confirmation pass generator.

6. **`gallery.html` (Campus & Travel Photo Gallery)**
   - Responsive thumbnail grid with mouseover zoom effects.
   - Dual keyboard interaction modes:
     - **Campus Mode**: Right Arrow (next), Left Arrow (previous), Enter (*“Image Selected”*).
     - **Travel Mode**: Key `N` (next destination), Key `P` (previous destination), `Spacebar` (display destination name).
   - Scoped event listeners that automatically ignore keyboard events while typing inside `<input>` or `<textarea>` fields.

7. **`services.html` (Library Management & Smart Search Engine)**
   - 2×2 colored block layout for core modules: *Books* (blue), *Members* (emerald), *Issue Books* (amber), and *Digital Library* (purple) with interactive click/keyboard feedback.
   - Smart Search Engine with search keyword input, Category dropdown (Computer Science, Electronics, Mathematics, Literature), and Price range dropdown (Under ₹500, ₹500–₹1,000, Above ₹1,000).
   - Real-time catalog filtering with item counter and friendly empty-result fallback.

8. **`registration.html` (Student, Course & Patient Registration)**
   - **Student Registration**: Name and email regular expressions, gender radios, technical skills checkboxes (HTML, CSS, JavaScript), and *"Registration Successful"* output.
   - **Course Registration**: Name regex, department dropdown (CSE, IT, ECE, EEE), multiple-selection programming languages (Java, Python, JavaScript, C++), and enrollment details display.
   - **Patient Registration**: Demonstrates all 18 HTML5 input types (`text`, `email`, `password`, `tel`, `number`, `date`, `time`, `datetime-local`, `url`, `search`, `color`, `file`, `range`, `radio`, `checkbox`, `select`, `textarea`, `hidden`, and `image` button).

9. **`hospital.html` (Hospital Management & Dual Header Showcase)**
   - **Header A**: Branch location (*Vellore, Tamil Nadu*), department dropdown, search bar, Welcome Patient, My Profile, Book Appointment, and Emergency 108.
   - **Header B**: CityCare Hospital – Healthcare Management System with horizontal navigation and Book Appointment button.
   - Side-by-side comparison of **Inline CSS vs. Internal CSS**.
   - Appointment booking form and official **VIT Health Care Center footer** with desktop right-aligned logo that responsively adapts for mobile screens.

10. **`checkout.html` (Shopping Cart & Checkout System)**
    - Multi-step checkout navigation (Customer & Delivery, Payment, Cart Summary).
    - Conditional payment fields: Credit/Debit (Card Holder, 16-digit Number, Expiry, CVV), UPI (UPI ID), Net Banking (Bank selector), and Cash on Delivery.
    - Live JavaScript cart arithmetic (quantities, item subtotals, GST calculation, grand total).
    - Terms acceptance validation and order receipt modal.

11. **`company.html` (Centered Company Profile Article)**
    - Corporate logo, company name, four-to-five-sentence overview, About, Products & Services, Achievements, and Contact Information.
    - Horizontal rules (`<hr>`) separating major sections.
    - Demonstrates inline CSS for font size, family, color, background, alignment, weight, italic style, underline, margins, padding, image dimensions, borders, and border radius.

12. **`gaming.html` (GameZone Campus Esports Arena)**
    - GameZone logo and fixed top navigation (Home, Games, Tournaments, News, Contact, Play Now).
    - Gaming hero banner occupying ~70% of the viewport height (`70vh`).
    - Primary headline: *“Level Up Your Gaming Experience”* and subheading: *“Join exciting tournaments and explore the latest games.”*
    - Interactive cyber glow buttons, tournament brackets, and hover card animations.

13. **`employees.html` (Employee Management System)**
    - Vertical sidebar with Home, Directory, Payroll, Leave Requests, and Reports.
    - Dashboard welcome message for faculty administrator.
    - Employee ID card with photo, name, ID, designation, and institution.
    - Professional summary with highlighted rating (`4.96 / 5.0`), Einstein's formula $E = mc^2$, and chemical formula $\text{CO}_2$.

14. **`science.html` (Science and Technology Article)**
    - Main heading: Science and Technology.
    - Required inline text formatting: **Science** in bold, *Innovation* in italics, <u>Scientific Research</u> underlined, <mark>Essential</mark> highlighted, $\text{CO}_2$ using subscript, and $a^3 + b^3$ using superscript.
    - Strict heading hierarchy demonstrating H1 through H6.
    - Multi-level nested unordered lists.

15. **`travel.html` (My Travel Bucket List)**
    - Title: *“My Travel Bucket List”* with traveler name placeholder.
    - Nested unordered list: Countries to Visit (*Japan, Switzerland, Canada*) and Activities (*Hiking, Scuba Diving, Photography*).
    - Four vertically arranged destination cards with photograph, heading, and description.
    - Customization tool updating the footer author placeholder (*“Created by Your Name”*).

---

## 🔬 Web Technology Practical Lab (38 Exercises)

The laboratory catalog is accessible at `/lab/index.html` and contains:

| Category | Exercise ID | File Path | Topic & Assignment Requirements |
|---|---|---|---|
| **Lab A: Basic HTML & Layouts** | A.1 | `lab/basic-html/headings-formatting.html` | Headings h1-h6, paragraphs, bold, italic, underline, mark, sub, sup |
| | A.2 | `lab/basic-html/nested-lists.html` | Nested unordered lists (Countries & Activities) |
| | A.3 | `lab/basic-html/employee-profile.html` | Employee profile with text formatting and ratings |
| | A.4 | `lab/basic-html/travel-cards.html` | Four vertically arranged travel destination cards |
| | A.5 | `lab/basic-html/employee-id-card.html` | Employee ID card with border, padding, width, centered content |
| | A.6 | `lab/basic-html/department-nav.html` | Department horizontal div-based navigation with anchor tags |
| | A.7 | `lab/basic-html/table-layout.html` | Table-based website layout (header, nav, content, sidebar, footer) |
| | A.8 | `lab/basic-html/employee-dashboard-layout.html` | Employee dashboard with left sidebar and right content area |
| | A.9 | `lab/basic-html/layout1.html` | **HEADER, LEFT MENU, CONTENT, FOOTER using only div elements and NO CSS** |
| | A.10 | `lab/basic-html/div-no-css.html` | **Separate div-only layout strictly without CSS** |
| | A.11 | `lab/basic-html/table-conventional.html` | Conventional table layout structure matching header/nav/content/sidebar/footer |
| | A.12 | `lab/basic-html/hospital-header-inline.html` | Hospital header with Vellore, dropdown, search, emergency using inline CSS |
| | A.13 | `lab/basic-html/hospital-header-nav.html` | Hospital header with horizontal navigation and appointment button |
| | A.14 | `lab/basic-html/search-header.html` | Dynamic search engine header with search, category, and price controls |
| | A.15 | `lab/basic-html/company-profile-inline.html` | Company profile with extensive inline CSS and horizontal rules |
| | A.16 | `lab/basic-html/library-grid-inline.html` | Library 2×2 colored blocks using divs and inline CSS |
| | A.17 | `lab/basic-html/vit-footer-internal.html` | **VIT Health Care footer using divs and an internal `<style>` tag, NO inline CSS** |
| **Lab B: HTML5 Forms & Media** | B.1 | `lab/forms/student-login-form.html` | Student login form with role radio, Remember Me, and audio guidance |
| | B.2 | `lab/forms/symposium-registration.html` | Technical symposium registration with video, audio, and ID upload |
| | B.3 | `lab/forms/patient-registration.html` | Patient registration with all specified HTML5 input controls |
| | B.4 | `lab/forms/shopping-checkout.html` | Shopping cart checkout (customer, payment, summary sections) |
| | B.5 | `lab/forms/auth-bootstrap.html` | User authentication with login and registration Bootstrap cards |
| | B.6 | `lab/forms/bootstrap-external.html` | External Bootstrap stylesheet demonstration |
| | B.7 | `lab/forms/image-button-upload.html` | Image input button (`<input type="image">`) and file upload |
| **Lab C: JS Validation** | C.1 | `lab/validation/login-validation.html` | Login validation with red error messages near fields and output div |
| | C.2 | `lab/validation/student-regex-validation.html` | Student registration with name & email regex, gender, and skills |
| | C.3 | `lab/validation/course-registration-validation.html` | Course registration with name regex, dept dropdown, multi-select |
| | C.4 | `lab/validation/patient-form-validation.html` | Comprehensive clinical patient form validation |
| | C.5 | `lab/validation/checkout-validation.html` | Checkout validation with dynamic price calculations |
| **Lab D: Mouse Events** | D.1 | `lab/mouse-events/color-box.html` | Colored box changing background on click, "Mouse is over the box" on hover |
| | D.2 | `lab/mouse-events/product-card-hover.html` | Product card scaling on hover, extra info reveal, restore on leave, View Details |
| | D.3 | `lab/mouse-events/traffic-signal.html` | Interactive traffic signal: Red = STOP, Yellow = READY, Green = GO |
| | D.4 | `lab/mouse-events/weather-panels.html` | Weather cards: Sunny = Perfect Day!, Cloudy = Cloudy Weather, Rainy = Umbrella |
| | D.5 | `lab/mouse-events/text-change-button.html` | Button changing page text to "Welcome to VIT!" on hover and restores on leave |
| | D.6 | `lab/mouse-events/gaming-buttons.html` | Gaming banner buttons with neon glow hover effects and audio feedback |
| **Lab E: Keyboard Events** | E.1 | `lab/keyboard-events/student-search.html` | Student search showing key pressed, Enter searches, Escape clears |
| | E.2 | `lab/keyboard-events/atm-pin.html` | ATM PIN numeric entry: "PIN Entry Started", Enter submits, non-numeric warnings |
| | E.3 | `lab/keyboard-events/product-search.html` | Product search: display typed text, background changes on typing, Enter searches |
| | E.4 | `lab/keyboard-events/online-exam.html` | Online exam: click highlights option, Enter submits answer, button glows on hover |
| | E.5 | `lab/keyboard-events/campus-gallery-keys.html` | Campus gallery: Right Arrow next, Left Arrow previous, Enter selects (scoped) |
| | E.6 | `lab/keyboard-events/travel-gallery-keys.html` | Travel gallery: Key N next, Key P previous, Spacebar announces destination |
| **Lab F: Bootstrap 5** | F.1 | `lab/bootstrap/college-events-bootstrap.html` | College Events 2026 webpage with View Events button and "© 2026 College Events" |
| | F.2 | `lab/bootstrap/auth-bootstrap-page.html` | Responsive authentication page with Login and Registration cards |
| | F.3 | `lab/bootstrap/grid-navigation-demo.html` | Bootstrap 12-column grid breakpoints and responsive navbar |
| | F.4 | `lab/bootstrap/local-bootstrap-demo.html` | Local external Bootstrap CSS usage example |

---

## 🎨 Design System & Color Palette

The project is built on centralized CSS custom properties in `css/theme.css`:
- **Primary Navy Blue**: `#0a1e38` (900), `#0f2b48` (800), `#1a3c61` (700)
- **Teal Accent**: `#0f766e` (700), `#0d9488` (600), `#14b8a6` (500)
- **Cyan & Sky**: `#0ea5e9` (500), `#38bdf8` (400)
- **Subtle Slate & Neutrals**: `#0f172a` (900), `#334155` (700), `#64748b` (500), `#e2e8f0` (200), `#f8fafc` (50), `#ffffff` (White)
- **Alert Colors**: `#dc2626` (Red Error / STOP), `#d97706` (Amber Warning / READY), `#16a34a` (Green Success / GO)

---

## 💻 Local Setup & Verification

Since CampusConnect Pro is built entirely with standard web technologies, it can be tested immediately in any browser with zero compilation steps.

### Method 1: Using any HTTP Server (Recommended)
Using Python or Node.js:
```bash
# Navigate to the project root directory
cd CampusConnectPro

# Using Node.js (via npx http-server)
npx http-server -p 8080 -c-1

# Or using Node's serve
npx serve .

# Then open in your browser:
# http://localhost:8080/
```

### Method 2: Direct File Inspection
You can directly open `index.html` in Chrome, Firefox, Safari, or Edge. All asset paths use relative linking (`images/`, `css/`, `js/`, `vendor/`), guaranteeing full functionality offline without requiring an active internet connection.

---

## 🚀 Netlify Deployment Guide

CampusConnect Pro is fully static and 100% Netlify-ready.

1. **Option A: Drag & Drop via Netlify Web UI**
   - Log in to your [Netlify Dashboard](https://app.netlify.com/).
   - Drag the entire `CampusConnectPro` folder into the **"Sites" > "Drag and drop your site output folder here"** area.
   - Your website is instantly deployed with global CDN distribution!

2. **Option B: Git-Based Netlify Deployment**
   - Push the repository to GitHub, GitLab, or Bitbucket.
   - Connect the repository in Netlify.
   - Configure Build Settings:
     - **Build command**: *(leave blank)*
     - **Publish directory**: `.` *(or root)*
   - Click **Deploy Site**.

---

## 🔒 Third-Party Dependencies & Backend Services

| Dependency | Purpose | Source / Location |
|---|---|---|
| **Bootstrap 5.3.3 CSS** | Responsive navigation, cards, form classes, grid | Local file: `vendor/bootstrap/bootstrap.min.css` |
| **Bootstrap 5.3.3 JS** | Collapsible navbar toggle, dropdown menus | Local file: `vendor/bootstrap/bootstrap.bundle.min.js` |
| **Vector Visuals** | High-DPI, lightweight campus illustrations | Generated pure SVG assets in `images/` |
| **Audio Media** | Native browser sound chimes | Generated standard RIFF/WAV files in `media/` |
| **LocalStorage** | User authentication state & demonstration preferences | Built-in browser Web Storage API |

### Backend Integration Guidance
All authentication checks, payroll displays, leave approvals, and credit card payments in this codebase operate in **demonstration simulation mode**. In compliance with academic integrity guidelines:
- Client-side validation prevents empty and malformed submissions, but does not provide cryptographically secure authentication.
- For production multi-user deployments, connect `auth.html` and `dashboard.html` to a managed authentication provider such as **Firebase Auth**, **Supabase**, or **Auth0**.
- For production payments, integrate a PCI-DSS certified gateway such as **Stripe Elements** or **Razorpay Standard Checkout**.

---

## 📜 Academic Integrity & License
Developed for the **Web Technology Laboratory Curriculum 2026**.
All rights reserved &copy; 2026 CampusConnect Pro.
