const wallColorPicker = document.getElementById("wall-color");
const wall1 = document.getElementById("wall1");
const wall2 = document.getElementById("wall2");
const galleryContainer = document.querySelector(".gallery-container");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

wallColorPicker.addEventListener("input", function () {
  const color = wallColorPicker.value;
  wall1.style.backgroundColor = color;
  wall2.style.backgroundColor = color;
});

// Generate gallery items dynamically
for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img");
  img.src = `gallery/gallery${i}.jpg`;
  img.alt = `Gallery Image ${i}`;
  galleryContainer.appendChild(img);
}

// Toggle mobile navigation
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
