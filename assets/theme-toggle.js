(function () {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      toggleBtn.textContent = '☀️';
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      toggleBtn.textContent = '🌙';
    }
  }

  // Default to dark if nothing is saved
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
})();

