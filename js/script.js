/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('div nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('div nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '100px',
    duration: 3000,
    delay: 0
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box', { origin: 'bottom' });


ScrollReveal().reveal('.home-content h1, .home-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

ScrollReveal().reveal('.education .heading, .experience .heading ', { origin: 'left' });

ScrollReveal().reveal('.timeline-item , .extimeline-item', { origin: 'bottom' });

ScrollReveal().reveal('.education-title', { origin: 'right' });





/*==================== typed js animation ====================*/


const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Web Developer'],
    typeSpeed: 305,
    backSpeed: 190,
    backDelay: 700,
    loop: true
});
