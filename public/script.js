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

function showProjects() {
    document.querySelectorAll('#work a.hidden').forEach(el => el.classList.remove('hidden'));
    document.getElementById('viewMoreProjectsBtn').classList.add('hidden');
    document.getElementById('viewLessProjectsBtn').classList.remove('hidden');
}

function hideProjects() {
    document.querySelectorAll('#work a[id^="project"]').forEach(el => el.classList.add('hidden'));
    document.getElementById('viewMoreProjectsBtn').classList.remove('hidden');
    document.getElementById('viewLessProjectsBtn').classList.add('hidden');
}

const certData = {
    aws2: {
        category: "Amazon Web Services · 2026",
        title: "AWS Foundations",
        desc: "Completed foundational training covering AWS core services, cloud concepts, and best practices.",
        image: "./images/aws2.png",
        file: "./images/aws2.pdf"
    },
    awscertificate: {
        category: "Amazon Web Services · 2026",
        title: "AWS Cloud Practitioner Essentials",
        desc: "Completed foundational AWS training covering cloud concepts, core AWS services, security, architecture, pricing, and support.",
        image: "./images/aws.png",
        file: "./images/awscertificate.pdf"
    },
    "certificate.fsd": {
        category: "NoviTech · 2026",
        title: "Full Stack Development",
        desc: "Completed a full stack development program covering front-end and back-end web technologies.",
        image: "./images/certificate.fsd.jpeg",
        file: "./images/certificate.fsd.jpeg"
    },
    "google-cloud-cybersecurity-certificate": {
        category: "Google Skills · 2026",
        title: "Google Cloud CyberSecurity",
        desc: "Completed training on cybersecurity fundamentals and best practices using Google Cloud tools.",
        image: "./images/google-cloud-cybersecurity-certificate.png",
        file: "./images/google-cloud-cybersecurity-certificate.png"
    }
};

function openCertModal(id) {
    const cert = certData[id];
    if (!cert) return;

    document.getElementById('modalCertImage').src = cert.image;
    document.getElementById('modalCertCategory').innerText = cert.category;
    document.getElementById('modalCertTitle').innerText = cert.title;
    document.getElementById('modalCertDesc').innerText = cert.desc;
    document.getElementById('modalCertView').href = cert.file;
    document.getElementById('modalCertDownload').href = cert.file;

    document.getElementById('certModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    document.getElementById('certModal').classList.add('hidden');
    document.body.style.overflow = '';
}