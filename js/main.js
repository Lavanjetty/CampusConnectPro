/**
 * CampusConnect Pro - Main JavaScript
 * Handles navigation, mobile menu, session storage, and UI helpers
 */

(function () {
  'use strict';

  // Mobile menu toggle
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('open');
      });
    }

    // Set active link in navigation based on current pathname
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    // Check user session
    checkUserSession();
  });

  // Simple LocalStorage Session Demo
  window.CampusAuth = {
    getUser() {
      try {
        const data = localStorage.getItem('campus_user');
        return data ? JSON.parse(data) : null;
      } catch (e) {
        return null;
      }
    },
    login(user) {
      localStorage.setItem('campus_user', JSON.stringify(user));
      window.dispatchEvent(new Event('authChange'));
    },
    logout() {
      localStorage.removeItem('campus_user');
      window.dispatchEvent(new Event('authChange'));
      window.location.href = 'auth.html';
    }
  };

  function checkUserSession() {
    const user = window.CampusAuth.getUser();
    const authLink = document.getElementById('nav-auth-link');
    const userPill = document.getElementById('nav-user-pill');

    if (user && userPill) {
      userPill.textContent = user.name || 'Student';
      userPill.style.display = 'inline-flex';
      if (authLink) authLink.style.display = 'none';
    }
  }
})();
