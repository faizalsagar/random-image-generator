// Set up Unsplash API credentials
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

// Call getRandomImage() function when the page is loaded
window.onload = getRandomImage;
