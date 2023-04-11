// Menu toggle
let menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// Autotype javascript
// https://github.com/mattboldt/typed.js/ source
let typed = new Typed('.auto-input', {
    strings: ['Full Stack Developer!', 'Freelancer!', 'Anime Enthusiast!', 'Gamer!'],
    typedSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})