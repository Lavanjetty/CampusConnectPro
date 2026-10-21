/**
 * CampusConnect Pro - Practical Lab Runner & Filter Module
 * Search, Category Filtering, and Interactive Sandbox Helpers
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('lab-search-input');
  const categoryPills = document.querySelectorAll('.pill-btn');
  const labCards = document.querySelectorAll('.lab-card');
  const countBadge = document.getElementById('lab-count-badge');
  const emptyState = document.getElementById('lab-empty-state');

  let activeCategory = 'all';

  function filterCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    labCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = (card.querySelector('.lab-card-title')?.textContent || '').toLowerCase();
      const cardDesc = (card.querySelector('.lab-card-desc')?.textContent || '').toLowerCase();
      const cardTags = (card.getAttribute('data-tags') || '').toLowerCase();

      const matchesCat = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesSearch = query === '' || cardTitle.includes(query) || cardDesc.includes(query) || cardTags.includes(query);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) countBadge.textContent = `${visibleCount} Exercises Found`;
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  // Initial count
  filterCards();
});
