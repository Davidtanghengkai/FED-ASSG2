const images = [
    { src: "images/game1.jpg", link: "../html/game1.html" },
    { src: "images/game2.jpg", link: "../html/game2.html" },
    { src: "images/game3.jpg", link: "../html/game3.html" }
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
  