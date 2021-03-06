const panels = document.querySelectorAll('.navigation li');
const pageViewers = document.querySelectorAll('.page-viewer li');
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

pageViewers.forEach((pageViewer, idx) => {
  pageViewer.addEventListener('click', () => {
    activeSlide = idx;

    removeActive();
    setActiveSlide();
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
  pageViewers.forEach((pageViewer) => {
    pageViewer.classList.remove('active');
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
  pageViewers[activeSlide].classList.add('active');
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

function renderCardProject() {
  const boxProjects = document.getElementById('box-projects');
  const projects = [
    {
      images: [
        './images/project-covers/16skin/1.jpg',
        './images/project-covers/16skin/2.jpg',
      ],
      name: '16SKIN - COSMETICS WEBSITE',
      technologies: 'ReactJS, Redux, Scss',
      description: [
        'A website only Front-end.',
        'Make for practice purposes and involving with front-end problems when implementing a large sales website.',
        'Live Demo: <a href="https://huynguyen294.github.io/16skin-fe/">https://huynguyen294.github.io/16skin-fe/</a>',
      ],
    },
    {
      images: [
        './images/project-covers/ibanking-fee/1.jpg',
        './images/project-covers/ibanking-fee/2.jpg',
      ],
      name: 'IBANKING FEE WEBSITE',
      technologies: 'ReactJS, Redux, NodeJS, ExpressJS, MongoDB',
      description: [
        'A small MERN stack website',
        'Make for practice purposes and involving into the problems when doing a completed website like: making web API server, fetching API, handing functions...',
        'Live Demo: <a href="https://huynguyen294.github.io/bankingtuition-fe/">https://huynguyen294.github.io/bankingtuition-fe/</a>',
      ],
    },
    {
      images: [
        './images/project-covers/50-project-web/1.jpg',
        './images/project-covers/50-project-web/2.jpg',
      ],
      name: '21 SMALL WEBSITE PROJECTS',
      technologies: 'Html, Javascript, Css',
      description: [
        'Made for the purpose of practicing html, css and javascript.',
        'Live Demo: <a href="https://huynguyen294.github.io/50-project-web/">https://huynguyen294.github.io/50-project-web/</a>',
      ],
    },
    {
      images: [
        './images/project-covers/todo/1.jpg',
        './images/project-covers/todo/2.jpg',
      ],
      name: 'TODO WEBSITE',
      technologies: 'Html, Javascript, Css',
      description: [
        'Made for the purpose of practicing advanced javascript skills learned on F8 such as: IIFE, scope, closure, hoisting,...',
        'Live Demo: <a href="https://huynguyen294.github.io/todo_app_js/">https://huynguyen294.github.io/todo_app_js/</a>',
        'Source Code: <a href="https://github.com/huynguyen294/todo_app_js">https://github.com/huynguyen294/todo_app_js</a>',
      ],
    },
  ];
  let cardProjects = '';
  projects.forEach((project) => {
    cardProjects += `<div class="card-project">
    <div class="project-cover-img">
      ${project.images
        .map((img) => `<img src="${img}" alt="cover image"></img>`)
        .join('')}
    </div>
    <h3 class="card-title">${project.name}</h3>
    <p class="technologies">${project.technologies}</p>
    <ul class="description">
        ${project.description
          .map((descriptionLine) => `<li>${descriptionLine}</li>`)
          .join('')}
    </ul>
  </div>`;
  });
  boxProjects.innerHTML = cardProjects;
}

renderCardProject();
