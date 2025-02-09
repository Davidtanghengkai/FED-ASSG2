const images = [
<<<<<<< HEAD:gameselect.js
    { src: "images/game1.jpg", link: "game1.html" },
    { src: "images/game2.jpg", link: "game2.html" },
=======
    { src: "images/game1.jpg", link: "../html/game1.html" },
    { src: "images/game2.jpg", link: "../html/game2.html" },
    { src: "images/game3.jpg", link: "../html/game3.html" }
>>>>>>> 522ec310ad00e3688ed950b3235311f5bcb89a63:js/gameselect.js
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
  