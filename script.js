const images = document.querySelectorAll('.image-wrapper img');

for (let i = 0; i < images.length; i++) {
  images[i].tabIndex = 0; // Add tabindex to each image

  images[i].addEventListener('focus', function() {
    // On focus, show alternate image and description
    this.src = `alternate_image${i+1}.jpg`;
    this.alt = `Alternate image ${i+1} description`;
  });

  images[i].addEventListener('blur', function() {
    // On blur, restore original image and description
    this.src = `image${i+1}.jpg`;
    this.alt = `Image ${i+1} description`;
  });
}
