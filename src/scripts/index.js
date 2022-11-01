import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import "../styles/responsive.css";

// navbar hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


console.log('Hello Coders! :)');
