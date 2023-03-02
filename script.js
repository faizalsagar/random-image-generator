const toggleMode = document.querySelector('#toggle-mode');

toggleMode.addEventListener('change', () => {
  if (toggleMode.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});



const accessKey = "1VEbP-NivOaK7Sg96JzFrj2aeFND2K1LDQl-5bc49r4"; 
const apiUrl = "https://api.unsplash.com/photos/random?client_id=" + accessKey;

// Get a random image from Unsplash API
function getRandomImage() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.urls.regular;
      document.getElementById("random-image").src = imageUrl;
    })
    .catch(error => {
      console.error(error);
    });
}


window.onload = getRandomImage;

const reloadPageButton = document.querySelector('#reload-page-button');

reloadPageButton.addEventListener('click', () => {
  reloadPageButton.classList.add('fade-out');
  setTimeout(() => {
    location.reload();
  }, 500);
});


