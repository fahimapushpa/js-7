let imgContainer = Array.from(document.querySelectorAll('.img_container img'));
let previewBody = document.querySelector('.previewBody');
let previewImage = document.querySelector('.previewImage img');
let cross = document.querySelector('.cross');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

imgContainer.forEach((item, index) => {
  item.addEventListener('click', () => {
    previewBody.classList.add('active');
    previewImage.src = item.src;
    let currentIndex = index;

    // Next button
    next.onclick = () => {
      currentIndex++;
      if (currentIndex > imgContainer.length - 1) {
        currentIndex = 0;
      }
      previewImage.src = imgContainer[currentIndex].src;
    };

    // Previous button
    prev.onclick = () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = imgContainer.length - 1;
      }
      previewImage.src = imgContainer[currentIndex].src;
    };
  });
});

// Close preview
cross.addEventListener('click', () => {
  previewBody.classList.remove('active');
});
