// document.addEventListener('DOMContentLoaded', function() {
//     const carouselContainer = document.querySelector('.bt_carousel');
//     const carouselItemsContainer = document.createElement('div');
//     carouselItemsContainer.className = 'bt_carousel-items';
    
//     const itemsData = [
//         { src: 'bilder/Schild_Homepage.png', text: '#05.01 mit üs im Abteil: Beziehige', link: 'allefolgen.html' },
//         { src: 'bilder/Schild_Homepage.png', text: '#Special Thomas Stucki: Abstimmige/Wahle', link: 'alleFolgen.html#boxFolgeSpecial', langeTexte: true },
//         { src: 'bilder/Schild_Homepage.png', text: '#04.02 Franziska Oehmer-Pedrazzi: Studium', link: 'alleFolgen.html#spotifyVier2', langeTexte: true },
//         { src: 'bilder/Schild_Homepage.png', text: '#04.01 mit üs im Abteil: Studium',  link: 'alleFolgen.html#spotifyVier1'},
//         { src: 'bilder/Schild_Homepage.png', text: '#03.02 Jonas Probst: Zwüschejohr', link: 'alleFolgen.html#boxFolgeDrei', langeTexte: true },
//         { src: 'bilder/Schild_Homepage.png', text: '#03.01 mit üs im Abteil: Zwüschejohr', link: 'alleFolgen.html#boxFolgeDrei', langeTexte: true },
//         { src: 'bilder/Schild_Homepage.png', text: '#02.02 Monique Iseli: Gymerzit', link: 'alleFolgen.html#spotifyZwei2'},
//         { src: 'bilder/Schild_Homepage.png', text: '#02.01 mit üs im Abteil: Gymerzit',  link: 'alleFolgen.html#spotifyZwei1' },
//         { src: 'bilder/Schild_Homepage.png', text: '#01 mit üs im Abteil: wär si mir',  link: 'alleFolgen.html#boxFolgeEins' },
//     ];

//     itemsData.forEach(item => {
//         const carouselItem = document.createElement('div');
//         carouselItem.className = 'bt_carousel-item';

//         const link = document.createElement('a');
//         link.href = item.link;
        
//         const itemContent = document.createElement('div');
//         itemContent.className = 'bt_carousel-item-content';
        
//         const img = document.createElement('img');
//         img.src = item.src;
//         img.alt = 'Schild mit Folgenname';
        
//         const h3 = document.createElement('h3');
//         h3.textContent = item.text;
//         if (item.langeTexte) {
//             h3.className = 'langeTexte';
//         }
        
//         itemContent.appendChild(img);
//         itemContent.appendChild(h3);
//         link.appendChild(itemContent);
//         carouselItem.appendChild(link);
//         carouselItemsContainer.appendChild(carouselItem);
//     });

//     carouselContainer.appendChild(carouselItemsContainer);

//     const leftButton = document.createElement('button');
//     leftButton.className = 'carousel-button left';
//     leftButton.innerHTML = '&#9664;';
//     carouselContainer.appendChild(leftButton);

//     const rightButton = document.createElement('button');
//     rightButton.className = 'carousel-button right';
//     rightButton.innerHTML = '&#9654;';
//     carouselContainer.appendChild(rightButton);

//     const items = document.querySelectorAll('.bt_carousel-item');
//     const totalItems = items.length;
//     const itemWidth = items[0].clientWidth;
//     let currentIndex = 0;

//     leftButton.addEventListener('click', function() {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = totalItems - 1;
//         }
//         updateCarousel();
//     });

//     rightButton.addEventListener('click', function() {
//         if (currentIndex < totalItems - 1) {
//             currentIndex++;
//         } else {
//             currentIndex = 0;
//         }
//         updateCarousel();
//     });

//     function updateCarousel() {
//         const newTransform = -currentIndex * itemWidth;
//         carouselItemsContainer.style.transform = `translateX(${newTransform}px)`;
//     }
// });




document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const burgerMenu = document.getElementById('burger-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');
    let lastScrollTop = 0;
    let hasScrolled = false;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0 && !hasScrolled) {
            header.classList.remove('hidden');
            header.classList.add('headerVisible');
            hasScrolled = true;
        }

        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.classList.add('headerVisible');
        } else if (scrollTop < lastScrollTop && scrollTop > 0) {
            // Scroll up
            header.classList.add('headerVisible');
        } else if (scrollTop === 0) {
            // At the top of the page
            header.classList.remove('headerVisible');
            header.classList.add('hidden');
            hasScrolled = false;
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    burgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
});