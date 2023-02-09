const navLink = document.querySelectorAll('.nav-link');
const toggleButton = document.querySelector('.toggle-button');
const navbarLink = document.querySelector('.navbar-link');
const head = document.querySelector("#head");
function navSlide() {
  navbarLink.classList.toggle('active');
  head.style.filter = 'blur(4px)';
}
function close() {
  navbarLink.classList.remove('active');
}
toggleButton.addEventListener('click', navSlide);
navLink.forEach((n) => n.addEventListener('click', close));