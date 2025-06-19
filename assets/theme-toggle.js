(function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved theme or system preference
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      toggleBtn.textContent = '☀️'; // sun icon for light mode toggle
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      toggleBtn.textContent = '🌙'; // moon icon for dark mode toggle
    }
  }

  // Get theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(userPrefersDark ? 'dark' : 'light');
  }

  // Toggle theme on button click
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
})();

