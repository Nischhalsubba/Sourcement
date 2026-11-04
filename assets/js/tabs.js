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