document.addEventListener("DOMContentLoaded", function(){

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const logo = this.documentElement.querySelector('.logo img')

let logoState = 'default';

window.addEventListener('scroll', function() {
    if(window.scrollY >30){
        navLinks.forEach(link => link.classList.add('scrolled-lavLinks'));
        navbar.classList.add('scrolled');

        if(logo && logoState !== 'scrolled'){
        logo.style.opacity = 0;
        setTimeout(() => {
            logo.src='./Images/logo-2.svg';
            logo.style.opacity=1;
            logoState= 'scrolled';
        },100);
        }
        
        console.log('scrolled');   
    }
    else{
        navLinks.forEach(link => link.classList.remove('scrolled-lavLinks'));
        navbar.classList.remove('scrolled');


        if(logo && logoState !== 'default'){
        logo.style.opacity = 0;
        setTimeout(() => {
            logo.src='./Images/logo.svg';
            logo.style.opacity=1;
            logoState= 'default';
        },100);
        }
        
    }
});



   
navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });}})});
})