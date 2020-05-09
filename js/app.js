class Tabs{
    constructor(tabsContainer) {
        // this.tabs = tabsContainer.querySelectorAll('div.tabs .tabs-links');
        // this.tabsContent = tabsContainer.querySelectorAll('div.tabs-content');
        this.tabs = [].slice.call(tabsContainer.querySelectorAll('div.tabs .tabs-links'));
        this.tabsContent = [].slice.call(tabsContainer.querySelectorAll('div.tabs-content'));
        this.tabsContainerContainer = tabsContainer.querySelector('div.tabs-content-container')
        
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
        this.tabsContent[index].style = 'transform:scale(1)';
        this.tabs[index].classList.add("active");
    }

    hideAllTabs() {
        this.tabs.forEach(tabC => {
            tabC.classList.remove('active');
        });

        let tabContentHeight = 0;
        
        this.tabsContent.forEach(tabC => {
            if (tabContentHeight < tabC.clientHeight)
                tabContentHeight = tabC.clientHeight;
            
            tabC.classList.add('displayNone');
            tabC.style = 'transform:scale(0)';
        });

        if(tabContentHeight>0)
            this.tabsContainerContainer.style = 'height:'+tabContentHeight + 'px';
    }
}
    const model_open = document.querySelectorAll('.model_open');
    const model = document.querySelector('.model');
    const btn_close = document.querySelector('#btn_close');

if (model) {
        
    //var old_model_param={'title':document.querySelector(".model_content h2").innerHTML,'content':document.querySelector(".model_content p").innerHTML};
    var old_model_param = {
        'content': document.querySelector(".model_content p").innerHTML
    };

    model_open.forEach((m) => {
        m.addEventListener('click', (e) => {
            e.preventDefault();
            var title = m.getAttribute('data-title');
            var content = m.getAttribute('data-content');

            showModel({
                'title': title,
                'content': content
            });
        })
    });

    btn_close.addEventListener('click', () => {
        hideModel();
    });

    model.addEventListener('click', (e) => {
        if (e.target == model)
            hideModel();
    })


    function showModel(model_params) {
        setModelContent(model_params);
        model.style.display = 'block';
    }

    function setModelContent(model_params) {
        //const heading=document.querySelector(".model_content h2");
        const content = document.querySelector(".model_content p");

        //if(model_params.title)
        //    heading.innerHTML=model_params.title;

        if (model_params.content)
            content.innerHTML = model_params.content;
    }

    function hideModel() {
        setModelContent(old_model_param);
        model.style.display = 'none';
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