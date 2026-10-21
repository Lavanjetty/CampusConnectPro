const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const labDir = path.join(baseDir, 'lab');

function writeLabFile(subfolder, filename, content) {
  const dir = path.join(labDir, subfolder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, filename), content.trim());
  console.log(`Created lab/${subfolder}/${filename}`);
}

// Shell helper for standard lab pages
function wrapExercise(title, category, exerciseNo, description, bodyContent, scriptContent = '') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Practical ${exerciseNo} | CampusConnect Pro</title>
  <link rel="stylesheet" href="../../vendor/bootstrap/bootstrap.min.css">
  <link rel="stylesheet" href="../../css/theme.css">
  <link rel="stylesheet" href="../../css/main.css">
  <link rel="stylesheet" href="../../css/lab.css">
</head>
<body>
  <header class="site-header">
    <div class="header-main">
      <a href="../../index.html" class="brand-logo">
        <img src="../../images/logo.svg" alt="CampusConnect Pro Logo" width="220" height="48">
      </a>
      <div class="d-flex align-items-center gap-2">
        <a href="../index.html" class="btn btn-outline btn-sm">📋 Lab Catalog</a>
        <a href="../../index.html" class="btn btn-primary btn-sm">Portal Home</a>
      </div>
    </div>
  </header>

  <main class="exercise-container">
    <div class="exercise-header">
      <div class="exercise-breadcrumb">
        <a href="../index.html">Practical Lab</a> &gt; <span>${category}</span> &gt; <span>Exercise ${exerciseNo}</span>
      </div>
      <h1 class="h3 fw-bold" style="color:var(--color-navy-950);">${title}</h1>
      <p class="text-muted small mb-0">${description}</p>
    </div>

    <div class="exercise-body">
      ${bodyContent}
    </div>

    <div class="d-flex justify-content-between align-items-center mt-3">
      <a href="../index.html" class="btn btn-outline btn-sm">&larr; Back to Lab Directory</a>
      <span class="text-muted small">&copy; 2026 CampusConnect Pro Web Tech Lab</span>
    </div>
  </main>

  <script src="../../js/main.js"></script>
  ${scriptContent ? `<script>${scriptContent}</script>` : ''}
</body>
</html>`;
}

console.log('lab-builder-helper loaded for baseDir: ' + baseDir);
module.exports = { writeLabFile, wrapExercise, baseDir, labDir };
