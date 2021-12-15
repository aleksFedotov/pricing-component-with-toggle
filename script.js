const toggleBtn = document.querySelector('.toggle');
const price = document.querySelectorAll('.card__price-box');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('annually');
  price.forEach((item) => {
    item.classList.toggle('annually');
  });
});
