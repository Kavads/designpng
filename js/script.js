document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById('imageGrid');

  // Replace placeholder URLs with your own images
  const imageUrls = [
    // Add your image URLs here
    "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551825687-f9de1603ed8b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679168116829-619fa264da8c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618568949779-895d81686151?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677706696855-bc060e344c11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1674338460136-3f64183f17b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682431656663-ea8c986a67df?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg",
    "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
    "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
    "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
    "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
    "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
    "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  ];

  // code to get each image url in the array
  imageUrls.forEach((imageUrls, index) => {
    const checkboxId = `image${index + 1}`;
    const label = document.createElement('label');
    label.setAttribute('for', checkboxId);
    label.style.backgroundImage = `url(${imageUrls})`;
            
    // creating new checkbox element as we want checkboxs for the images
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.classList.add('visually-hidden');

    // To append the checkbox and label elemrent to image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-checkbox');
    imageContainer.appendChild(checkbox);
    imageContainer.appendChild(label);
    // To append image container to the grid container
    gridContainer.appendChild(imageContainer);
  });
});
