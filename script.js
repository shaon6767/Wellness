// ===== ANUSHKA'S WELLNESS APP =====
// Navigation between screens

const screens = ['home', 'good', 'okay', 'period', 'pain'];

/**
 * Navigate to a given screen by name.
 * @param {string} name - One of: 'good', 'okay', 'period', 'pain'
 */
function navigate(name) {
  // Hide all screens
  screens.forEach(id => {
    const el = document.getElementById('screen-' + id);
    if (el) {
      el.classList.remove('active');
    }
  });

  // Show target screen
  const target = document.getElementById('screen-' + name);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Go back to the home screen.
 */
function goBack() {
  navigate('home');
}

// ===== WATER FLOAT: re-trigger animation on each loop =====
// The CSS animation handles the looping — nothing extra needed here.

// ===== PAGE LOAD: ensure home screen is shown =====
document.addEventListener('DOMContentLoaded', () => {
  navigate('home');
  console.log('💐 Welcome to Anushka\'s Wellness App!');
});