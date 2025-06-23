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
      const isVisible = target && !target.classList.contains('hidden');

      // Hide ALL toggled elements on the entire page, unconditionally
      document.querySelectorAll('.pub-toggle, .cv-toggle, .teaching-toggle, .toggle-target')
        .forEach(el => el.classList.add('hidden'));

      // Show the clicked one ONLY if it was previously hidden
      if (target && !isVisible) {
        target.classList.remove('hidden');
      }
    });
  });
});


