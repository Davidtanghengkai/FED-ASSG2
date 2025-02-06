const images = [
    { src: "game1.jpg", link: "game1.html" },
    { src: "game2.jpg", link: "game2.html" },
    { src: "game3.jpg", link: "game3.html" }
  ];
  
  let currentIndex = 0;
  
  function updateImage() {
    document.getElementById("slider-image").src = images[currentIndex].src;
    document.getElementById("image-link").href = images[currentIndex].link;
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }
  