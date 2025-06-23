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
  const pubEntries = document.querySelectorAll('.pub-entry');

  pubEntries.forEach(entry => {
    const buttons = entry.querySelectorAll('.toggle-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const target = entry.querySelector(`#${targetId}`); // ✅ scoped lookup

        // Hide all pub-toggle elements that are associated with this entry
        const relatedToggles = entry.querySelectorAll('.pub-toggle');
        relatedToggles.forEach(el => {
          if (el !== target) el.classList.add('hidden');
        });

        // Toggle the one we clicked
        if (target) target.classList.toggle('hidden');
      });
    });
  });
});




