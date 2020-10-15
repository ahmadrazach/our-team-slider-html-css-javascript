// local reviews data
const reviews = [
  {
    id: 1,
    name: "Ahmad Raza",
    job: "UI/UX DESIGNER | WEB DEVELOPER",
    img: "./images/profile photo.jpg",
    text:
      "I chose programming as a profession but designing choose me. Hi! I am Ahmad, a Computer Science student, and programmer who loves to design and develop."
  },
  {
    id: 2,
    name: "Hassan Zafar",
    job: "Deep Learning Enthusiast | Python Developer",
    img: "./images/hassan.jpeg",
    text:
      "I am a senior Cross-platform Application Developer at FCAP society, where we work voluntarily to create and improve the online services provided by the FAST NUCES"
  },
  {
    id: 3,
    name: "Talha Tanveer",
    job: "PRODUCT MANAGER",
    img: "./images/talha.jpeg",
    text:
      "A little idea came up in my mind while I was doing my 9th class quiz; “How this computer software is made?”. That is how my journey starts as a Computer Scientist.A zsapassionate developer and product expert."
  },
  {
    id: 4,
    name: "Usman Afzal",
    job: "Software Engineer to be | Youtuber",
    img: "./images/usman.jpeg",
    text:
      "Talk about the concepts of the computer Science with me. Running the coding YouTube channel 'Coding is fun' as a hobby "
  }
];

//selecting items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

//setting starting item
let currentItem = 0;

//load inital item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//making next btn
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) currentItem = 0;
  showPerson();
});

//making prev btn
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

//making random move
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
