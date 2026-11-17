// Sticky navbar: do not override unrelated scroll listeners.
var navBar = document.querySelector('header');
var sticky = navBar?.offsetTop ?? 0;

function stickyNavbar() {
    if (!navBar) return;
    navBar.classList.toggle('sticky', window.pageYOffset > sticky);
}

window.addEventListener('scroll', stickyNavbar, { passive: true });
stickyNavbar();

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




// Load a particle configuration only when the responsive mode changes.
// Avoid restarting each canvas (and refetching JSON) on every resize event.
let activeParticleMode = null;

function updateParticlesForViewport() {
    const particles = window.particlesJS;
    if (!particles || typeof particles.load !== 'function') return;

    const mode = window.innerWidth > 1200 ? 'desktop' : 'mobile';
    if (mode === activeParticleMode) return;

    const sources = mode === 'desktop'
        ? [
            ['particles-js', './particles setting/particles-old.json'],
            ['particles-js2', './particles setting/particlesjs-config.json'],
        ]
        : [
            ['particles-js', './particles setting/particles-old-mobile.json'],
            ['particles-js2', './particles setting/particles-config-mobile.json'],
        ];

    for (const [id, source] of sources) {
        if (document.getElementById(id)) particles.load(id, source);
    }
    activeParticleMode = mode;
}

window.addEventListener('resize', updateParticlesForViewport, { passive: true });
updateParticlesForViewport();

// Glide JS
var glideMarkup = document.querySelector('.slideshow .glide');
if (glideMarkup) {
    new Glide('.slideshow .glide', {
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
    new Glide('.testimonial .glide', {
        type: 'carousel',
        perView: '1',
        gap: 10
    }).mount()
}

//Default carousel
var defaultCarousel = document.querySelector('.carousel .glide')
if (defaultCarousel) {
    new Glide('.carousel .glide', {
        type: 'carousel',
        autoplay: 1500,
        perView: 5,
    }).mount()
}