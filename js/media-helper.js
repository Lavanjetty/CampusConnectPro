/**
 * CampusConnect Pro - Media Helper Module
 * Interactive HTML5 Audio & Video Players with Canvas & WebAudio Fallbacks
 */

const CampusMedia = {
  /**
   * Play or synthesize campus audio chime/speech
   */
  playWelcomeAudio(audioElementId) {
    const audio = document.getElementById(audioElementId);
    if (audio && audio.play) {
      audio.play().catch(() => {
        CampusMedia.synthesizeChime();
      });
    } else {
      CampusMedia.synthesizeChime();
    }
  },

  synthesizeChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const playTone = (freq, start, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + duration);
      };

      // Play 3-tone welcome sequence (C5, E5, G5)
      playTone(523.25, 0, 0.4);
      playTone(659.25, 0.25, 0.4);
      playTone(783.99, 0.5, 0.6);
    } catch (e) {
      console.log('Audio playback info:', e);
    }
  },

  /**
   * Speak text instructions using Web Speech API if supported
   */
  speakInstruction(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      CampusMedia.synthesizeChime();
    }
  },

  /**
   * Setup Canvas Video Simulator if needed
   */
  setupVideoFallback(canvasId, playBtnId) {
    const canvas = document.getElementById(canvasId);
    const playBtn = document.getElementById(playBtnId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let isPlaying = false;
    let frame = 0;
    let animId = null;

    function draw() {
      if (!isPlaying) return;
      frame++;
      const w = canvas.width;
      const h = canvas.height;

      // Dark background
      ctx.fillStyle = '#0a192f';
      ctx.fillRect(0, 0, w, h);

      // Tech Grid
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Animated Pulse Circles
      const t = frame * 0.05;
      for (let i = 0; i < 4; i++) {
        const r = (t * 20 + i * 40) % 180;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(13, 148, 136, ${Math.max(0, 1 - r / 180)})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Title Banner
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px Segoe UI, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('TECH SYMPOSIUM 2026', w / 2, h / 2 - 20);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '600 14px Segoe UI, sans-serif';
      ctx.fillText('• LIVE STREAMING KEYNOTE PREVIEW •', w / 2, h / 2 + 15);

      // Floating particles
      for (let j = 0; j < 8; j++) {
        const px = (Math.sin(frame * 0.02 + j) * 0.4 + 0.5) * w;
        const py = (Math.cos(frame * 0.03 + j * 2) * 0.4 + 0.5) * h;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
          playBtn.textContent = '❚❚ Pause Promo Video';
          playBtn.classList.remove('btn-primary');
          playBtn.classList.add('btn-secondary');
          CampusMedia.synthesizeChime();
          draw();
        } else {
          playBtn.textContent = '▶ Play Promo Video';
          playBtn.classList.add('btn-primary');
          playBtn.classList.remove('btn-secondary');
          if (animId) cancelAnimationFrame(animId);
        }
      });
    }

    // Initial poster frame
    isPlaying = true;
    draw();
    isPlaying = false;
  }
};

window.CampusMedia = CampusMedia;
