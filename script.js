// Menu toggle
let menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// Autotype javascript
// https://github.com/mattboldt/typed.js/ source
let typed = new Typed('.auto-input', {
    strings: ['Full Stack Developer!', 'Freelancer!', 'Anime Enthusiast!', 'Avid Gamer!'],
    typedSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})


// Skill bar Animation
// grab the progress bars by using queryselectorall
const skillBars = document.querySelectorAll('.inner-line')

// Have the window listen to the 
window.addEventListener('scroll', function() {

    // iterate through each of the skill bar
    skillBars.forEach(skillBar => {

        // get the rectangle of the skill bar
        const rect = skillBar.getBoundingClientRect()

        // Check if skill bar is visible on the screen
        if(rect.top < this.window.innerHeight && rect.bottom >= 0) {

            // get the width of the skill bar by giving it an attribute of data-width=??
            const width = skillBar.getAttribute('data-width')

            // Now Animate the skill bar
            skillBar.style.width = width + '%'
        }
    })
})