let currentImageIndex = 0;
let modalImages = [];

function expandArt(el) {
  modalImages = JSON.parse(el.dataset.images);
  currentImageIndex = 0;

  const title = el.dataset.title;
  const price = el.dataset.price;
  const description = el.dataset.description;
  const link = el.dataset.link;

  document.getElementById("modal-title").textContent = `${title} - ${price}`;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("purchase-link").href = link;

  updateCarousel();
  document.getElementById("art-modal").classList.remove("hidden");
}

function updateCarousel() {
  const carousel = document.getElementById("modal-carousel");
  carousel.innerHTML = `
    <button class="carousel-nav left" onclick="prevImage()">&#10094;</button>
    <img id="modal-image" src="${modalImages[currentImageIndex]}" />
    <div class="image-counter" id="image-counter">${currentImageIndex + 1}/${
    modalImages.length
  }</div>
    <button class="carousel-nav right" onclick="nextImage()">&#10095;</button>
  `;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % modalImages.length;
  updateCarousel();
}

function prevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + modalImages.length) % modalImages.length;
  updateCarousel();
}

function closeModal() {
  document.getElementById("art-modal").classList.add("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
