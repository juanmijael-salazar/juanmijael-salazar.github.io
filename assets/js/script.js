'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}
*/




/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
  
});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");


//Verifica si el tema es light para invertir el logo
if (localStorage.getItem("theme") === "light_theme") {
  document.querySelector(".milogo").style.filter = "none";
} else {
  document.querySelector(".milogo").style.filter = "invert(100%)";
}



themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");

    document.querySelector(".milogo").style.filter = "none"; /** CAMBIA COLOR MI LOGO**/

  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    
    localStorage.setItem("theme", "dark_theme");

    document.querySelector(".milogo").style.filter = "invert(100%)";
  }

});


/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}





const languageSelectop = document.querySelector("select");

languageSelectop.addEventListener("change", (event) => {
  setLanguage(event.target.value)
})

const setLanguage = (language) => {
  if (language == "en"){
    location.href="./index.html";
  } else if(language == "es"){
    location.href="./index1.html";
  }
}




















/**
 * MAS CERTIFICADOS
 */











let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 7000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 7000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};






/**
 * LOADER
 */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");
});


















/**
 * PROYECTOS
 */


// isotope

$(".mel-grid").imagesLoaded(function () {
  var $grid = $(".mel-grid").isotope({
    itemSelector: ".mel-grid-item",
    columnWidth: ".mel-grid-sizer",
    percentPosition: true
  });

  $grid.isotope('layout'); // Recalcular layout después de la carga de las imágenes

  // bind filter button click
  $(".mel-filter-nav").on("click", ".mel-filter", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $(".mel-filter-nav").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", ".mel-filter", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
});




/** POPUPS DE PROYECTOS**/
