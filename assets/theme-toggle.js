(function () {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) {
    console.error('No toggle button found!');
    return;
  }

  function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const target = document.getElementById(targetId);

      // Find the closest parent container/tab (e.g., section, .pub-entry, etc.)
      const container = btn.closest('section, .pub-entry, .cv-entry, .teaching-entry, .tab-content');

      if (!container) return;

      // Hide all toggleable content boxes inside the same container
      const allToggles = container.querySelectorAll('.pub-toggle, .cv-toggle, .teaching-toggle, .toggle-target');
      allToggles.forEach(el => {
        if (el !== target) el.classList.add('hidden');
      });

      // Toggle target visibility
      if (target) target.classList.toggle('hidden');
    });
  });
});
