console.log("JavaScript is working!");

const patricioContainer = document.querySelector('.patricio-container');
const obituaryModal = document.getElementById('obituary-modal');
const obituaryImage = document.getElementById('obituary-image');
const closeButton = document.querySelector('.close-button');
const homeMusic = document.getElementById('home-music');
const obituaryMusic = document.getElementById('obituary-music');

let currentObituaryIndex = 0;
const obituaryImages = ["image/obituary1.png", "image/obituary2.png"];

patricioContainer.addEventListener('click', () => {
    obituaryModal.style.display = 'block';
    obituaryImage.src = obituaryImages[currentObituaryIndex];
    homeMusic.pause();
    obituaryMusic.play();
});

closeButton.addEventListener('click', () => {
    obituaryModal.style.display = 'none';
    obituaryMusic.pause();
    homeMusic.play();
});

window.addEventListener('click', (event) => {
    if (event.target === obituaryModal) {
        obituaryModal.style.display = 'none';
        obituaryMusic.pause();
        homeMusic.play();
    }
});

// Optional: Cycle through obituary images on each click
patricioContainer.addEventListener('click', () => {
    obituaryModal.style.display = 'block';
    obituaryImage.src = obituaryImages[currentObituaryIndex];
    homeMusic.pause();
    obituaryMusic.play();
    currentObituaryIndex = (currentObituaryIndex + 1) % obituaryImages.length; // Cycle through images
});
