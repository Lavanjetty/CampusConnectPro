/**
 * CampusConnect Pro - Gallery & Keyboard Interaction Module
 * Campus Gallery & Travel Gallery with scoped keyboard events
 */

class InteractiveGallery {
  constructor(options = {}) {
    this.mode = options.mode || 'campus'; // 'campus' or 'travel'
    this.items = options.items || [];
    this.currentIndex = 0;
    this.imgElement = document.getElementById(options.imgId || 'gallery-current-img');
    this.titleElement = document.getElementById(options.titleId || 'gallery-current-title');
    this.descElement = document.getElementById(options.descId || 'gallery-current-desc');
    this.statusElement = document.getElementById(options.statusId || 'gallery-status-msg');
    this.counterElement = document.getElementById(options.counterId || 'gallery-counter');

    this.init();
  }

  init() {
    this.updateDisplay();
    this.bindKeyboard();
    this.bindControls();
  }

  updateDisplay() {
    if (!this.items || this.items.length === 0) return;
    const current = this.items[this.currentIndex];

    if (this.imgElement) {
      this.imgElement.src = current.src;
      this.imgElement.alt = current.title;
    }
    if (this.titleElement) {
      this.titleElement.textContent = current.title;
    }
    if (this.descElement) {
      this.descElement.textContent = current.desc;
    }
    if (this.counterElement) {
      this.counterElement.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateDisplay();
    this.clearStatus();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateDisplay();
    this.clearStatus();
  }

  showStatus(msg) {
    if (this.statusElement) {
      this.statusElement.textContent = msg;
      this.statusElement.classList.add('show');
    }
  }

  clearStatus() {
    if (this.statusElement) {
      this.statusElement.textContent = '';
      this.statusElement.classList.remove('show');
    }
  }

  bindControls() {
    const nextBtn = document.getElementById('gallery-btn-next');
    const prevBtn = document.getElementById('gallery-btn-prev');

    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
  }

  bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      // Rule: Do not trigger gallery shortcuts while the user is typing in an input, textarea, or editable control
      const target = e.target;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable;
      if (isInput) return;

      if (this.mode === 'campus') {
        // Right Arrow for next image
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.next();
          this.showStatus('Navigated: Next Campus Photo (Arrow Right)');
        }
        // Left Arrow for previous image
        else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prev();
          this.showStatus('Navigated: Previous Campus Photo (Arrow Left)');
        }
        // Enter to display "Image Selected"
        else if (e.key === 'Enter') {
          e.preventDefault();
          const current = this.items[this.currentIndex];
          this.showStatus(`Image Selected: ${current.title}`);
        }
      } else if (this.mode === 'travel') {
        // N for next destination
        if (e.key === 'n' || e.key === 'N') {
          e.preventDefault();
          this.next();
          this.showStatus('Navigated: Next Destination (Key N)');
        }
        // P for previous destination
        else if (e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          this.prev();
          this.showStatus('Navigated: Previous Destination (Key P)');
        }
        // Spacebar to display the current destination name
        else if (e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          const current = this.items[this.currentIndex];
          this.showStatus(`Current Destination: ${current.title}`);
        }
      }
    });
  }
}

window.InteractiveGallery = InteractiveGallery;
