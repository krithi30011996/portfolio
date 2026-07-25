const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
     }
     else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
     }
})

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

function showCertificates() {
    document.getElementById("certificate4").classList.remove("hidden");

    document.getElementById("viewMoreBtn").classList.add("hidden");
    document.getElementById("viewLessBtn").classList.remove("hidden");
}

function hideCertificates() {
    document.getElementById("certificate4").classList.add("hidden");

    document.getElementById("viewLessBtn").classList.add("hidden");
    document.getElementById("viewMoreBtn").classList.remove("hidden");

    document.getElementById("achievements").scrollIntoView({
        behavior: "smooth"
    });
}