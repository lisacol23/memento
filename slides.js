const boxes = [
  {
    section: 0,
    left: 0,
    right: 1,
  },
  {
    section: 1,
    left: 1,
    right:3,
  },
  {
    section: 2,
    left: 2,
    right:5,
  },
  {
    section: 3,
    left: 3,
    right:7,
  },
  {
    section: 4,
    left: 4,
    right: 9,
  },
  {
    section: 5,
    left: 5,
    right: 11,
  },
  {
    section: 6,
    left: 6,
    right: 13,
  },
  {
    section: 7,
    left: 7,
    right: 15,
  },
  {
    section: 8,
    left: 8,
    right: 17,
  },
  {
    section: 9,
    left: 9,
    right: 19,
  },
  {
    section: 10,
    left: 10,
    right: 21,
  },
  {
    section: 11,
    left: 11,
    right: 23,
  },
  {
    section: 12,
    left: 12,
    right: 25,
  },
  {
    section: 13,
    left: 13,
    right: 27,
  },
  {
    section: 14,
    left: 14,
    right: 29,
  },
  {
    section: 15,
    left: 15,
    right: 31,
  },
  {
    section: 16,
    left: 16,
    right: 33,
  },
  {
    section: 17,
    left: 17,
    right: 35,
  },
  {
    section: 18,
    left: 18,
    right: 37,
  },
  {
    section: 19,
    left: 19,
    right: 39,
  },
  {
    section: 20,
    left: 20,
    right: 41,
  },
  {
    section: 21,
    left: 21,
    right: 43,
  },
  {
    section: 22,
    left: 22,
    right: 42,
  },
  {
    section: 23,
    left: 23,
    right: 40,
  },
  {
    section: 24,
    left: 24,
    right: 38,
  },
  {
    section: 25,
    left: 25,
    right: 6,
  },
 {
    section: 26,
    left: 26,
    right: 34,
  },
  {
    section: 27,
    left: 27,
    right: 32,
  },
  {
    section: 28,
    left: 28,
    right: 30,
  }, {
    section: 29,
    left: 29,
    right: 28,
  }, {
    section: 30,
    left: 30,
    right: 26,
  }, {
    section: 31,
    left: 31,
    right: 24,
  }, {
    section: 32,
    left: 32,
    right: 22,
  }, {
    section: 33,
    left: 33,
    right: 20,
  }, {
    section: 34,
    left: 34,
    right: 18,
  }, {
    section: 35,
    left: 35,
    right: 16,
  }, {
    section: 36,
    left: 36,
    right: 14,
  }, {
    section: 37,
    left: 37,
    right: 12,
  }, {
    section: 38,
    left: 38,
    right: 10,
  },
  {
    section: 39,
    left: 39,
    right: 8,
  },
  {
    section: 40,
    left: 40,
    right: 6,
  },
  {
    section: 41,
    left: 41,
    right: 4,
  },
  {
    section: 42,
    left: 42,
    right: 2,
  },
  {
    section: 43,
    left: 43,
    right: 0,
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
  if((scrollPosition >= 7700)&&(scrollPosition <=26900) ){
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



  var announcementContainer = document.getElementById('announcement-container');
  var showPosition = 7000; // Scroll position to show the announcement
  var hidePosition = 7700; // Scroll position to hide/remove the announcement

  // Check the scroll position and show/hide the announcement accordingly
  window.onscroll = function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition >= showPosition && scrollPosition < hidePosition) {
      announcementContainer.style.display = 'block'; // Show the announcement if within the specified range
    } else {
      // Hide/remove the announcement if outside the specified range
      announcementContainer.style.display = 'none';
    }
  };

