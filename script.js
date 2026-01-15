document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll('.carruseldefotos img');
  let i = 0;

  imgs[i].classList.add('active');

  setInterval(() => {
    imgs[i].classList.remove('active');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('active');
  }, 3000);
});
