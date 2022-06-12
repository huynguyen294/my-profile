const panels = document.querySelectorAll('.navigation li');
const slides = document.querySelectorAll('.slide');
const slideBox = document.querySelector('.slide-box');
const left = document.getElementById('btn-left');
const right = document.getElementById('btn-right');

let activeSlide = 0;

slideBox.style.width = `${slides.length * 100}%`;

panels.forEach((panel, idx) => {
  panel.addEventListener('click', () => {
    activeSlide = idx;

    removeActive();
    setActiveSlide();
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

right.addEventListener('click', () => {
  activeSlide++;

  setActiveSlide();
});

left.addEventListener('click', () => {
  activeSlide--;

  setActiveSlide();
});

setActiveSlide();

function setActiveSlide() {
  checkActiveSlide();
  panels[activeSlide].classList.add('active');
  slideBox.style.transform = `translateX(${
    (-activeSlide * 100) / slides.length
  }%)`;
}

function checkActiveSlide() {
  removeActive();
  if (activeSlide <= 0) {
    activeSlide = 0;
    left.disabled = true;
    left.classList.add('disable');
  } else {
    left.disabled = false;
    left.classList.remove('disable');
  }

  if (activeSlide >= slides.length - 1) {
    activeSlide = slides.length - 1;
    right.disabled = true;
    right.classList.add('disable');
  } else {
    right.disabled = false;
    right.classList.remove('disable');
  }
}
