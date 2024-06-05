$('input').on('change', function() {
    $('body').toggleClass('blue');
  });

//   const folgenStartseite = [
//     "#01 mit üs im Abteil: wär si mir",
//     "#02.01 mit üs im Abteil: Gymerzit",
//     "#02.02 Monique Iseli: Gymerzit",
//     "#03.01 mit üs im Abteil: Zwüschejohr",
//     "#03.02 Jonas Probst: Zwüschejohr", 
//     "#04.01 mit üs im Abteil: Studium",
//     "#04.02 Franziska Oehmer-Pedrazzi: Studium",
//     "Special- Thomas Stucki: Abstimmige ",
//     "#05.01 mit üs im Abteil: Beziehige",
//     "#05.02 Beatrice Wespi: Beziehige",
//     "#06.01 mit üs im Abteil: Comofort Zone",
//     "#06.02 Lea Hugentobler: Comofort Zone",
//     "#07.01 mit üs im Abteil: Time Management",
//     "#07.02 Luca Panico: Time Management",
//     "#08 mit üs im Abteil: vorem Uslandsemester"
// ];

// Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide, 
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -((cardCount / 3) * carouselWidth + 
               (cardMarginRight * (cardCount / 3)) - 
               carouselWidth - cardMarginRight);


// Add the click events
leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})

document.querySelector('[data-action="slideLeft"]').addEventListener('click', function () {
  document.querySelector('.carousel').scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
});

document.querySelector('[data-action="slideRight"]').addEventListener('click', function () {
  document.querySelector('.carousel').scrollBy({ left: window.innerWidth, behavior: 'smooth' });
});


