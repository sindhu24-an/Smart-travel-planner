// ==========================
// Smart Travel Planner JS
// ==========================

// Logout button and status
const statusText = document.getElementById('statusText');
const logoutBtn = document.getElementById('logoutBtn');

// Check login token from localStorage
function updateUI() {
  const token = localStorage.getItem('token');
  if (token) {
    statusText.textContent = 'You are logged in!';
    if (logoutBtn) logoutBtn.style.display = 'block';
  } else {
    statusText.textContent = 'You are not logged in';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }
}

// Initial UI update
updateUI();

// Logout functionality
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    updateUI();
    alert('Logged out successfully!');
  });
}

// ==========================
// Hero section interactivity
// ==========================
const heroButton = document.querySelector('.btn-primary');
if (heroButton) {
  heroButton.addEventListener('click', () => {
    alert('Get Started clicked! Future login/dashboard feature here.');
  });
}

// ==========================
// Preload images from /images
// ==========================
const imageFiles = [
  'hero.jpg',    // Hero section
  'dest1.jpg',   // Destination example
  'dest2.jpg',
  'dest3.jpg'
];

// Preload images
imageFiles.forEach(img => {
  const image = new Image();
  image.src = `images/${img}`;
});

// ==========================
// Fonts (optional if using custom fonts)
// ==========================

// Example of loading a custom font
const newFont = new FontFace('CustomFont', 'url(fonts/CustomFont.woff2)');
newFont.load().then(function(loadedFont) {
  document.fonts.add(loadedFont);
  document.body.style.fontFamily = '"CustomFont", Arial, sans-serif';
}).catch(function(error) {
  console.error('Font failed to load', error);
});
