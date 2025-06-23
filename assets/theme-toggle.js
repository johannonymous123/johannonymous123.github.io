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
  const allTargets = new Map();

  toggleButtons.forEach(btn => {
    const targetId = btn.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (target) {
      allTargets.set(btn, target);
    }

    btn.addEventListener('click', () => {
      allTargets.forEach((t, b) => {
        if (b === btn) {
          // Toggle the clicked one
          t.classList.toggle('hidden');
        } else {
          // Hide all others
          t.classList.add('hidden');
        }
      });
    });
  });
});


