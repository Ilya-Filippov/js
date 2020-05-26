'use strict';
let ads = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    backbraund = document.getElementById('bg'),
    list = document.getElementById('list'),
    change = document.getElementById('change');


function changePage () {
  backbraund.style.backgroundImage = "url(img/bg.jpg)";
  genre.textContent = "Драма";
  ads.forEach(item => {
    item.remove();
  });
  list.innerHTML = '';
  movieDB.movies.sort();
  movieDB.movies.forEach((item, i) => {
    list.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${item}
        <div class="delete"></div>
    </li>
    `;
  });


}

const movieDB = {
    movies: [
        "Олдбой",
        "Джентльмены",
        "Богемская рапсодия",
        "Завтрак у Тиффани",
        "Джокер"
    ]
};
