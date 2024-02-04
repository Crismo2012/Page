const buttonLinkSearch = document.querySelector(".icons_container--search");
const searchContainer = document.querySelector(".search_container");

buttonLinkSearch.addEventListener("click", () => {
    searchContainer.classList.toggle("search_container--visible");
});

const buttonLinkFavorites = document.querySelector(".icons_container--favorites");
const favoritesContainer = document.querySelector(".favorites_container");

buttonLinkFavorites.addEventListener("click", () =>{
    favoritesContainer.classList.toggle("favorites_container--visible");
});

const buttonStar = document.querySelector(".star-inactive")
 
buttonStar.addEventListener("click", () => {
    buttonStar.classList.toggle("star--active")
});
