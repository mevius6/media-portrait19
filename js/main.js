const preloadImages = () => {
  return new Promise((resolve, reject) => {
    imagesLoaded(document.querySelectorAll('.grid__item-img'), {
      background: true
    }, resolve);
  });
};

preloadImages().then(() => {
  document.body.classList.remove('loading');
});