var typed = new Typed(".text", {
    strings: ["Frontend Developer . . ." , "Programmer . . ." , "Web Developer . . ."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact-number').value;
    const emailSubject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    document.getElementById('success-message').style.display = 'block';
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};





ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });