class Tabs{
    constructor(tabsContainer) {
        // this.tabs = tabsContainer.querySelectorAll('div.tabs .tabs-links');
        // this.tabsContent = tabsContainer.querySelectorAll('div.tabs-content');
        this.tabs = [].slice.call(tabsContainer.querySelectorAll('div.tabs .tabs-links'));
        this.tabsContent = [].slice.call(tabsContainer.querySelectorAll('div.tabs-content'));
        
        //by default hide all the tabs content
        this.hideAllTabs();

        //by default make first tab active
        this.showTab(0);
        
        this.tabs.forEach((tab,tabIndex) => {
            tab.addEventListener('click', te => {
                this.showTab(tabIndex);
            })
        });
    }

    showTab(index) {
        this.hideAllTabs();
        this.tabsContent[index].classList.remove("displayNone");
        this.tabs[index].classList.add("active");
    }

    hideAllTabs() {
        this.tabs.forEach(tabC => {
            tabC.classList.remove('active');
        });

        this.tabsContent.forEach(tabC => {
            tabC.classList.add('displayNone');
        });
    }
}
class Model {
    constructor(popup) {
        this.trigger = popup;
        this.model = document.querySelector('.model');
        this.modelContent = document.querySelector('.model .model-content');


        this.trigger.addEventListener('click', (e) => {
            e.preventDefault();
            var target = e.target || e.srcElement;
            this.showModel(target);
        });

        this.model.addEventListener('click', (e) => {
            this.closeModel();
        })

    }
    showModel(btn) {
        this.model.classList.toggle('show-model');
        var a = btn.getAttribute('data-modelContent');
        console.log(btn)
    }

    closeModel() {
        this.model.classList.toggle('show-model');
    }

}
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