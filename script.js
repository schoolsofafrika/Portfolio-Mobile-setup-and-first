const navLink = document.querySelectorAll('.nav-link');
const toggleButton = document.querySelector('.toggle-button');
const navbarLink = document.querySelector('.navbar-link');
function navSlide() {
  navbarLink.classList.toggle('active');
}
function close() {
  navbarLink.classList.remove('active');
}
toggleButton.addEventListener('click', navSlide);
navLink.forEach((n) => n.addEventListener('click', close));