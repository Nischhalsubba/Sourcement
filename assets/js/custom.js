// Sticky Navbar
window.onscroll = function () {
    stickyNavbar()
};

var navBar = document.querySelector('header');
var sticky = navBar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navBar.classList.add('sticky')
    } else {
        navBar.classList.remove('sticky');
    }
}

// Hamburger menu
var Hamburger = document.querySelector('.hamburger');

function cross() {
    Hamburger.classList.toggle("cross-hamburger");

}

function menuShow() {
    var menuFull = document.querySelector('header ul')
    menuFull.classList.toggle('clicked')

}

// Services tabs
var tabsContainer = document.querySelector('.tabs-container');
if (tabsContainer)
    new Tabs(tabsContainer);


// Particles JS
particlesJS.load('particles-js', './particles-old.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js2', './particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

// Popup model
var popups = document.querySelectorAll('.popup');
popups.forEach(popup =>{
    new Model(popup);    
})



// Glide JS
new Glide('.glide', {
    type: 'carousel',
    autoplay: 1500,
    perView: 5,
    peek: {
        before: 100,
        after: 0
    },
    breakpoints: {
        1024: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
}).mount()