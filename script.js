let currentIndex = 0;
  const images = document.querySelector('#carousel-image');
  const totalImages = images.length;

  function showImage(i) {
    if (i >= totalImages) {
      currentIndex = 0;
    } else if (i < 0) {
      currentIndex = totalImages - 1;
    } else {
      currentIndex = i;
    }
    const offset = -currentIndex * 100 + '%';
    document.querySelector('.carousel-images').style.transform = `translateX(${offset})`;
  }

  function prevImage() {
    showImage(currentIndex - 1);
  }

  function nextImage() {
    showImage(currentIndex + 1);
  }

  ; 