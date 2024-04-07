document.addEventListener('DOMContentLoaded', function() {
    const modeSwitch = document.getElementById('modeSwitch');
  
    modeSwitch.addEventListener('change', function() {
      if (modeSwitch.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      modeSwitch.checked = true;
      document.body.classList.add('dark-mode');
    }
    
    modeSwitch.addEventListener('change', function() {
      if (modeSwitch.checked) {
        localStorage.setItem('mode', 'dark');
      } else {
        localStorage.setItem('mode', 'light');
      }
    });
  });
  