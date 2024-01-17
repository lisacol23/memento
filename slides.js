const boxes = [
  {
    section: 0,
    left: 0,
    right: 3,
  },
  {
    section: 1,
    left: 1,
    right: 2,
  },
  {
    section: 2,
    left: 2,
    right: 1,
  },
  {
    section: 3,
    left: 3,
    right: 4,
  },
  {
    section: 4,
    left: 4,
    right: 0,
  },
  {
    section: 5,
    left: 5,
    right: 5,
  },
  {
    section: 7,
    left: 7,
    right: 6,
  },
  {
    section: 8,
    left: 8,
    right: 12,
  },
  {
    section: 9,
    left: 9,
    right: 0,
  },
  {
    section: 10,
    left: 10,
    right: 6,
  },
  {
    section: 11,
    left: 11,
    right: 6,
  },
  {
    section: 12,
    left: 12,
    right: 6,
  },
  {
    section: 13,
    left: 12,
    right: 6,
  },
  {
    section: 14,
    left: 12,
    right: 6,
  },
];
const secciones = document.querySelectorAll('.section');
const leftBoxes = document.querySelectorAll('.left-box');
const rightBoxes = document.querySelectorAll('.right-box');
const boxContainer = document.querySelector(".box-container")
let activeIndex = 0;
function setActiveSection() {
  const scrollPosition = window.scrollY + 500;
  //cambio 11000 in base a dove voglio farlo finire
  if((scrollPosition >= 5400)&&(scrollPosition <=12400) ){
    boxContainer.classList.add("is-active")
  } else{
    boxContainer.classList.remove("is-active")
  }

  

  secciones.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      section.classList.add('active');
      activeIndex = section.id.split('section')[1];
    } else {
      section.classList.remove('active');
    }
  });


  const leftIndex = boxes[activeIndex].left;
  const rightIndex = boxes[activeIndex].right;

  leftBoxes.forEach((box, index) => {
    box.classList.remove('active');
    if (index === leftIndex) {
      box.classList.add('active');
    }
  });

  rightBoxes.forEach((box, index) => {
    box.classList.remove('active');
    if (index === rightIndex) {
      box.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveSection);
