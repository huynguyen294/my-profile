const panels = document.querySelectorAll(".navigation li");
const pageViewers = document.querySelectorAll(".page-viewer li");
const slides = document.querySelectorAll(".slide");
const slideBox = document.querySelector(".slide-box");
const left = document.getElementById("btn-left");
const right = document.getElementById("btn-right");
const mobileSkillBtn = document.getElementById("skill-btn");
const mobileProjectBtn = document.getElementById("project-btn");
const skillHideBtn = document.getElementById("skill-hide-btn");
const projectHideBtn = document.getElementById("project-hide-btn");
const skillWindow = document.getElementById("mobile-skills");
const projectWindow = document.getElementById("mobile-projects");

let activeSlide = 0;

mobileSkillBtn.addEventListener("click", () => {
  skillWindow.classList.add("active");
});

mobileProjectBtn.addEventListener("click", () => {
  projectWindow.classList.add("active");
});

skillHideBtn.addEventListener("click", () => {
  skillWindow.classList.remove("active");
});

projectHideBtn.addEventListener("click", () => {
  projectWindow.classList.remove("active");
});

slideBox.style.width = `${slides.length * 100}%`;

panels.forEach((panel, idx) => {
  panel.addEventListener("click", () => {
    activeSlide = idx;

    removeActive();
    setActiveSlide();
  });
});

pageViewers.forEach((pageViewer, idx) => {
  pageViewer.addEventListener("click", () => {
    activeSlide = idx;

    removeActive();
    setActiveSlide();
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
  pageViewers.forEach((pageViewer) => {
    pageViewer.classList.remove("active");
  });
}

right.addEventListener("click", () => {
  activeSlide++;

  setActiveSlide();
});

left.addEventListener("click", () => {
  activeSlide--;

  setActiveSlide();
});

setActiveSlide();

function setActiveSlide() {
  checkActiveSlide();
  panels[activeSlide].classList.add("active");
  pageViewers[activeSlide].classList.add("active");
  slideBox.style.transform = `translateX(${(-activeSlide * 100) / slides.length}%)`;
}

function checkActiveSlide() {
  removeActive();

  if (activeSlide <= 0) {
    activeSlide = 0;
    left.disabled = true;
    left.classList.add("disable");
  } else {
    left.disabled = false;
    left.classList.remove("disable");
  }

  if (activeSlide >= slides.length - 1) {
    activeSlide = slides.length - 1;
    right.disabled = true;
    right.classList.add("disable");
  } else {
    right.disabled = false;
    right.classList.remove("disable");
  }
}

function renderCardProject() {
  const boxProjects = document.querySelectorAll(".box-project");

  const projects = [
    {
      images: ["./images/project-covers/easybio/1.png", "./images/project-covers/easybio/2.png"],
      name: "EASYBIO (2024)",
      technologies: "NextJS, NextUI, TailwindCss, MongoDB",
      description: [
        "A server side rendering website.",
        "This application support media social persons easily create a bio link or portfolio",
        "Techniques:",
        "- Implementing server side rendering web app.",
        "- Save images handling, allow user edit template realtime.",
        "- API protect with credentials.",
        'Live Demo: <a href="https://easybio.vercel.app" target="_blank" rel="noopener noreferrer">https://easybio.vercel.app</a>',
      ],
    },
    {
      images: ["./images/project-covers/vocanote/1.png", "./images/project-covers/vocanote/2.png"],
      name: "VOCANOTE (2022-2023)",
      technologies: "ReactJS, Zustand, NodeJS, ExpressJS, MongoDB",
      description: [
        "A MERN stack website.",
        "An application like a notebook to note vocabulary while you are learning English. This app strongly support you manage your vocabulary then having many tools for your review such as: flashcard, multiple choice, reader, spelling,... and so many interesting features.",
        "Techniques:",
        "- Handling logic for many complex features",
        "- PWA: installable for android and windows, can using offline (support some base features)",
        "- API protect and authorization: using access token and refresh token with JWT.",
        'Live Demo: <a href="https://vocanote.vercel.app" target="_blank" rel="noopener noreferrer">https://vocanote.vercel.app</a>',
      ],
    },
    {
      images: ["./images/project-covers/16skin/1.jpg", "./images/project-covers/16skin/2.jpg"],
      name: "16SKIN - COSMETICS WEBSITE (2020)",
      technologies: "ReactJS, Redux, Scss",
      description: [
        "A website only Front-end.",
        "Make for practice purposes and involving with front-end problems when implementing a large sales website.",
        "Features: view by collections, product details, user profile, notification, order management, address management, card, payment, blogs...",
        'Live Demo: <a href="https://huynguyen294.github.io/16skin-fe" target="_blank" rel="noopener noreferrer">https://huynguyen294.github.io/16skin-fe</a>',
      ],
    },
  ];

  boxProjects.forEach((boxProject) => {
    let cardProjects = "";
    projects.forEach((project) => {
      cardProjects += `<div class="card-project">
      <div class="project-cover-img">
        ${project.images.map((img) => `<img src="${img}" alt="cover image"></img>`).join("")}
      </div>
      <h3 class="card-title">${project.name}</h3>
      <p class="technologies">${project.technologies}</p>
      <ul class="description">
          ${project.description.map((descriptionLine) => `<li>${descriptionLine}</li>`).join("")}
      </ul>
    </div>`;
    });
    boxProject.innerHTML = cardProjects;
  });
}

renderCardProject();
