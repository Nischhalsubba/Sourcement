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
var tabsContainer = document.querySelectorAll('.tabs-container');
tabsContainer.forEach(tc => {
    new Tabs(tc);
})




if (window.innerWidth > 1200) {
    console.log('suceess')
    //Particles JS
    var particlesMarkup = document.querySelector('#particles-js');
    if (particlesMarkup) {
        particlesJS.load('particles-js', './particles setting/particles-old.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }

    var particlesMarkup2 = document.querySelector('#particles-js2');
    if (particlesMarkup2) {
        particlesJS.load('particles-js2', './particles setting/particlesjs-config.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }
}

// Responsive Particles JS
window.addEventListener('resize', (e) => {
    checkOnResize();
}, true);

function checkOnResize() {
    if (window.innerWidth > 1200) {
        // console.log('suceess')
        // Particles JS
        particlesJS.load('particles-js', './particles setting/particles-old.json', function () {
            console.log('callback - particles.js config loaded');
        });

        particlesJS.load('particles-js2', './particles setting/particlesjs-config.json', function () {
            console.log('callback - particles.js config loaded');
        });
    } else {
        particlesJS.load('particles-js', './particles setting/particles-old-mobile.json', function () {
            console.log('callback - particles.js config loaded');
        });

        particlesJS.load('particles-js2', './particles setting/particles-config-mobile.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }
}



// Glide JS
var glideMarkup = document.querySelector('.slideshow .glide');
if (glideMarkup) {
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
}

// Testimonial Glide JS
var testimonialglideMarkup = document.querySelector('.testimonial .glide');
if (testimonialglideMarkup) {
    new Glide('.glide', {
        type: 'carousel',
        perView: '1',
        gap: 10
    }).mount()
}

//Default carousel
var defaultCarousel = document.querySelector('.carousel .glide')
if (defaultCarousel) {
    new Glide('.glide', {
        type: 'carousel',
        autoplay: 1500,
        perView: 5,
    }).mount()
}