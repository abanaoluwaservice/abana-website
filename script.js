const button = document.getElementById("darkModeBtn");
button.oneclick = function(){
document.body.classList.toggle("dark");
}

function toggleMenu() {
const menu = document.getElementById("nav-menu");
menu.classList.toggle("active");
}