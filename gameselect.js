const images = [
    { src: "image1.jpg", link: "page1.html" },
    { src: "image2.jpg", link: "page2.html" },
    { src: "image3.jpg", link: "page3.html" }
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
  